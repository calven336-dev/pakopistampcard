import crypto from 'node:crypto';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
let pool;
let schemaPromise;
const COOKIE = '__Host-stamp_session';
const SECRET = process.env.STORE_ACCESS_KEY || '';
export const configured = Boolean(process.env.DATABASE_URL && SECRET.length >= 12);

export function json(res, status, payload) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  return res.status(status).json(payload);
}
export function method(req, res, methods) {
  if (methods.includes(req.method)) return true;
  res.setHeader('Allow', methods.join(', '));
  json(res, 405, { error: 'Method not allowed' });
  return false;
}
export function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return origin === `${proto}://${host}`;
}
export function getPool() {
  if (!configured) throw Object.assign(new Error('Cloud database not configured. Set DATABASE_URL and STORE_ACCESS_KEY (at least 12 characters).'), { status: 503 });
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  return pool;
}
function pinHash(pin, salt) {
  return crypto.scryptSync(pin, salt, 32).toString('hex');
}
function safeEquals(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const ah = crypto.createHash('sha256').update(a).digest();
  const bh = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(ah, bh);
}
export async function setupDatabase() {
  if (!configured) throw Object.assign(new Error('Cloud database not configured'), {status:503});
  if (!schemaPromise) schemaPromise = (async () => {
    const db = getPool();
    await db.query(`CREATE TABLE IF NOT EXISTS loyalty_settings (
      id integer PRIMARY KEY DEFAULT 1 CHECK (id=1),
      shop_name text NOT NULL DEFAULT '', shop_addr text NOT NULL DEFAULT '',
      stamps_needed integer NOT NULL DEFAULT 10 CHECK (stamps_needed BETWEEN 1 AND 30),
      pin_salt text NOT NULL, pin_hash text NOT NULL
    )`);
    await db.query(`CREATE TABLE IF NOT EXISTS loyalty_members (
      phone text PRIMARY KEY, stamps integer NOT NULL DEFAULT 0 CHECK (stamps BETWEEN 0 AND 10000000),
      created_at timestamptz NOT NULL DEFAULT now()
    )`);
    await db.query(`CREATE TABLE IF NOT EXISTS loyalty_events (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      phone text NOT NULL REFERENCES loyalty_members(phone) ON DELETE CASCADE,
      action text NOT NULL CHECK (action IN ('add', 'redeem', 'undo')),
      created_at timestamptz NOT NULL DEFAULT now(),
      code text, reason text
    )`);
    await db.query('CREATE INDEX IF NOT EXISTS loyalty_events_phone_idx ON loyalty_events(phone, id DESC)');
    await db.query(`CREATE TABLE IF NOT EXISTS loyalty_login_attempts (
      fingerprint text PRIMARY KEY, attempts integer NOT NULL DEFAULT 0,
      window_start timestamptz NOT NULL DEFAULT now()
    )`);
    const salt = crypto.randomBytes(16).toString('hex');
    await db.query('INSERT INTO loyalty_settings (id,pin_salt,pin_hash) VALUES (1,$1,$2) ON CONFLICT (id) DO NOTHING', [salt, pinHash('8888',salt)]);
  })().catch(err => { schemaPromise = null; throw err; });
  return schemaPromise;
}
function mac(data) { return crypto.createHmac('sha256', SECRET).update(data).digest('base64url'); }
export function createSession(res) {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + 8*60*60*1000, version: 1 })).toString('base64url');
  const token = payload + '.' + mac(payload);
  res.setHeader('Set-Cookie', `${COOKIE}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`);
}
export function clearSession(res) { res.setHeader('Set-Cookie', `${COOKIE}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`); }
export function authenticated(req) {
  if (!configured) return false;
  const raw = String(req.headers.cookie || '').split(';').map(s => s.trim()).find(s => s.startsWith(COOKIE+'='));
  const token = raw?.slice(COOKIE.length+1);
  if (!token) return false;
  const [data,sig,...extra] = token.split('.');
  if (!data || !sig || extra.length || !safeEquals(mac(data), sig)) return false;
  try { const decoded = JSON.parse(Buffer.from(data,'base64url').toString('utf8')); return decoded.version===1 && Number.isSafeInteger(decoded.exp) && decoded.exp > Date.now(); }
  catch { return false; }
}
export function accessMatches(key) { return safeEquals(String(key||''), SECRET); }
export async function requirePin(pin, client) {
  if (!/^\d{4}$/.test(String(pin||''))) throw Object.assign(new Error('Invalid staff PIN'),{status:403});
  const row = (await client.query('SELECT pin_salt,pin_hash FROM loyalty_settings WHERE id=1')).rows[0];
  if (!row || !safeEquals(pinHash(pin,row.pin_salt),row.pin_hash)) throw Object.assign(new Error('Invalid staff PIN'),{status:403});
}
export function hashNewPin(pin) {
  if (!/^\d{4}$/.test(pin)) throw Object.assign(new Error('Staff PIN must be four digits'),{status:400});
  const salt=crypto.randomBytes(16).toString('hex');return {salt, hash:pinHash(pin,salt)};
}
export function validPhone(phone) { return typeof phone === 'string' && /^60(?:1\d{8,9})$/.test(phone); }
export function fingerprint(req) {
  const address=String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  return crypto.createHmac('sha256',SECRET).update(address).digest('hex');
}
export function respondError(res, error) {
  const status=Number.isInteger(error.status)?error.status:500;
  if (status>=500) console.error('Loyalty API error:',error);
  return json(res,status,{error: status >= 500 ? 'Cloud service unavailable. Please try again.' : error.message});
}
