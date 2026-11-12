# Vendor Sites – APK builder

This repo contains NO site code and NO passwords. It only wraps your live site into an Android APK.
GitHub builds the APK for you.

## Steps
1. Create a **Private** repo on GitHub and upload these files (keep the `.github` folder).
2. Repo > Settings > Secrets and variables > Actions > **Variables** > New repository variable:
   - Name `SITE_URL`, value = your live site link (e.g. `https://yoursite.com/index.html`)
   - (optional) Name `APP_NAME`, value = app name
3. Repo > Actions > **Build Android APK** > Run workflow. Wait about 5-10 minutes.
4. Download the APK: repo > **Releases** (or the run page > Artifacts), open `vendor-sites.apk` on the phone and install
   (allow "Install unknown apps" when asked).

To rebuild with a new URL or name, change the variable and run the workflow again.

## Second app for the admin panel (optional)
Make another repo with the same files and set these variables:
- `SITE_URL` = `https://yoursite.com/admin.html`
- `APP_NAME` = `Vendor Admin`
- `APP_ID` = `com.vendor.admin`  (must be different, otherwise it replaces the first app)
