// Writes capacitor.config.json from the SITE_URL environment variable.
const fs = require('fs');
let url = (process.env.SITE_URL || '').trim();
if (!url) { console.error('ERROR: SITE_URL is not set. Add it in GitHub: Settings > Secrets and variables > Actions > Variables.'); process.exit(1); }
if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
const u = new URL(url);
const cfg = {
  appId: process.env.APP_ID || 'com.vendor.sites',
  appName: process.env.APP_NAME || 'Vendor Sites',
  webDir: 'www',
  server: {
    url: url,
    cleartext: u.protocol === 'http:',
    allowNavigation: [u.hostname]
  },
  android: { allowMixedContent: true }
};
fs.writeFileSync('capacitor.config.json', JSON.stringify(cfg, null, 2));
console.log('capacitor.config.json written for', url);
