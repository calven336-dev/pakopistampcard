# Stamp Club — Cloud Loyalty PWA

Multilingual English / 中文 / Bahasa Melayu coffee-shop loyalty stamp app with a ready-to-use customer number pad, Vercel API routes and Neon PostgreSQL cloud persistence.

## What's included

- Full-width on-screen numeric keypad on STEP 01, instantly ready on opening or returning to member lookup, including backspace and clear
- Malaysian mobile phone lookup and registration stored in PostgreSQL
- Stamp issuance, redemption and PIN-protected undo inside database transactions, so two devices cannot overwrite each other's member balance
- Rewards calculated from server-stored shop settings and redemption codes generated on the server
- Live multi-device sync (refresh after writes, every 12 seconds, and when the tab regains focus)
- Server-side authenticated staff sessions (HttpOnly / Secure / SameSite=Strict cookie, eight-hour expiry)
- Cloud-backed store settings, activity history and audits, CSV export, JSON backup and admin-only restore/reset
- Rate-limited login; four-digit admin PIN stored only as a salted scrypt hash on the server, never returned to browsers
- An installable PWA with offline-cached UI assets. **A connection is required for transactions**; offline changes are not queued

## Configure Vercel and Neon PostgreSQL

1. Create a **Neon Postgres database** in the Vercel Storage/Marketplace section, or use an existing PostgreSQL database reachable by Neon serverless driver. In the Vercel project settings, attach a Neon database and expose `DATABASE_URL` to **Production** and **Preview** where needed. You must configure actual database resources; installing the Neon integration alone is insufficient.
2. Under **Vercel → Project → Settings → Environment Variables**, set `STORE_ACCESS_KEY` to a strong, random passphrase **at least 12 characters**. Treat it as an access credential. Set it for the same environments.
3. Redeploy the project to apply the variables. `GET /api/auth` returns `{configured:true, authenticated:false}` when setup is complete and you are not signed in.
4. Open the app and enter your store access key. Database tables are created on the first successful sign-in. Go to Admin settings with initial PIN `8888` and **change that PIN immediately**.
5. Repeat the same store access key on each authorized device. Members and transactions are always stored in the shared PostgreSQL database.

**Do not add `.env` files or credentials to GitHub.** `.env.example` contains variable names only.

## Migrating customers from the browser-only version

On the OLD live app and device/browser where records were originally stored, open Admin → Download JSON backup. On the NEW cloud-enabled app, log in, open Admin → Restore JSON backup, select that saved backup and confirm. This replaces existing cloud records. Import preserves member balances, activity, store name, address, and reward threshold, but intentionally retains the **current cloud admin PIN**. After import, verify member count and some individual balances.

The cloud app does **not** silently import old `localStorage` data because customers may have different device-local datasets and automatic merging would duplicate transactions or override valid balances.

## Local development

Use Node.js 22+ and run `npm install` then `npx vercel dev` from the project root. Configure `DATABASE_URL` and `STORE_ACCESS_KEY` in a private local `.env.local` file. Static `python -m http.server` does not run the cloud API routes.

## Operational notes

- Cloud transactions require Internet. Client-side stamp balances are never authoritative.
- App data is single-store by design (one database per Vercel project). Do not share the same database credentials between unrelated merchants.
- Initial server-side PIN is `8888`, protected behind the separate strong `STORE_ACCESS_KEY`; change it after setup.
- The member snapshot currently loads all members and events for the admin UI. For large-scale deployment, add server-side event pagination, role-based employee accounts, retention policies and data export jobs.
- Handling customer telephone numbers requires a privacy notice, access-control procedures, retention limits and backups appropriate to Malaysian data-protection obligations.
- Service worker caches only static UI assets, never `/api/` requests or cloud data.
