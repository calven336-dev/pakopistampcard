# Stamp Club — Digital Loyalty Card PWA

A dependency-free, installable Progressive Web App based on the supplied single-file Chinese/English/Malay loyalty stamp-card prototype.

## Features
- Chinese, English and Bahasa Melayu UI
- Member lookup/creation by Malaysian mobile number
- Stamp collection, progress and free-drink redemption (default 10 stamps per drink)
- Unique redemption codes and print-friendly 80 mm receipts
- Staff PIN gate for admin dashboard and stamp reversal
- Undo tracking with mandatory reason; previously redeemed stamps cannot be undone
- Activity log with date, action and phone filters, CSV export
- Store name, address and reward threshold settings
- JSON backup/restore (including migration from the original `stamp_app_v1` localStorage key)
- Offline installable PWA via manifest and service worker

## Run locally
Run `python -m http.server 8080` from this directory, then visit http://localhost:8080. Do not open `index.html` directly from the filesystem if you want PWA install/offline support.

## Deploy
Upload this directory to Vercel as a static website, or drag the folder onto Netlify Drop. The included `vercel.json` supplies basic security headers.

## Important production limitations
**Not a centralized loyalty database.** Customer records and staff PIN are saved in the current browser's `localStorage` only. The PIN is a convenience gate, **not secure authentication**. Another operator on the same device can inspect or manipulate local records using developer tools. There is no trusted server-side stamp issuance, redemption verification, cross-device sync, account recovery, encrypted backups, or centralized audit trail. Do not assume data persists if browser storage is cleared. Do not deploy as a customer-facing public kiosk with real monetary rewards without a backend and real staff authentication. Store customer data only with appropriate notice/consent and retention policy. Export backups regularly.

Default admin PIN: `8888` — change it in the Admin screen for casual misuse prevention. For real merchant use, replace the local-only storage with a transactional backend (e.g. Supabase/Postgres), role-based staff accounts, server-side idempotent stamp/redeem functions and append-only logs.

## Migrating existing records
When opened on the **same hostname and browser** as the old app, the new app will import existing `stamp_app_v1` data automatically once. For a new hostname or device, export the JSON from the old app and import it into this PWA via Admin → Restore JSON backup. No cross-site `localStorage` transfer is possible automatically.
