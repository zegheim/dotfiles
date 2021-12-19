/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2811, 2812), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 3);

/* 0210: set preferred language for displaying pages
 * [SETTING] General>Language and Appearance>Language>Choose your preferred language...
 * [TEST] https://addons.mozilla.org/about ***/
user_pref("intl.accept_languages", "en-GB", "en");

/* 0211: use system locale
 * [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages [1]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=867501,1629630 ***/
user_pref("javascript.use_us_english_locale", false); // [HIDDEN PREF]

/* 0301: enable auto-INSTALLING Firefox updates [NON-WINDOWS]
 * [NOTE] You will still get prompts to update, and should do so in a timely manner
 * [SETTING] General>Firefox Updates>Check for updates but let you choose to install them ***/
user_pref("app.update.auto", true);

/* 0302: enable auto-INSTALLING Firefox updates via a background service [FF90+] [WINDOWS]
 * [SETTING] General>Firefox Updates>Automatically install updates>When Firefox is not running
 * [1] https://support.mozilla.org/kb/enable-background-updates-firefox-windows ***/
user_pref("app.update.background.scheduling.enabled", true);

/* 0360: enable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref("captivedetect.canonicalURL", "detectportal.firefox.com");
user_pref("network.captive-portal-service.enabled", true); // [FF52+]

/* 0605: enforce no "Hyperlink Auditing" (click tracking)
 * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ ***/
user_pref("browser.send_pings", false); // [DEFAULT: false]

/* 0710: disable DNS-over-HTTPS (DoH) rollout [FF60+]
 * 0=off by default, 2=TRR (Trusted Recursive Resolver) first, 3=TRR only, 5=explicitly off
 * see "doh-rollout.home-region": USA Feb 2020, Canada July 2021 [3]
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
 * [3] https://blog.mozilla.org/mozilla/news/firefox-by-default-dns-over-https-rollout-in-canada/
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
user_pref("network.trr.mode", 2);

/* 0801: disable location bar using search
 * Don't leak URL typos to a search engine, give an error message instead
 * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
 * [NOTE] This does not affect explicit user action such as using search buttons in the
 * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo)
 * [SETUP-CHROME] If you don't, or rarely, type URLs, or you use a default search
 * engine that respects privacy, then you probably don't need this ***/
user_pref("keyword.enabled", true);

/* 0808: disable tab-to-search [FF85+]
 * Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines ***/
user_pref("browser.urlbar.suggest.engines", false);

/* 1001: enable disk cache
 * [SETUP-CHROME] If you think disk cache helps perf, then feel free to override this
 * [NOTE] We also clear cache on exit (2811) ***/
user_pref("browser.cache.disk.enable", true);

/* 1006: enable favicons in shortcuts
 * URL shortcuts use a cached randomly named .ico file which is stored in your
 * profile/shortcutCache directory. The .ico remains after the shortcut is deleted
 * If set to false then the shortcuts use a generic Firefox icon ***/
user_pref("browser.shell.shortcutFavicons", true);

/* 2022: enable all DRM content (EME: Encryption Media Extension)
 * [SETUP-WEB] e.g. Netflix, Amazon Prime, Hulu, HBO, Disney+, Showtime, Starz, DirectTV
 * [SETTING] General>DRM Content>Play DRM-controlled content
 * [TEST] https://bitmovin.com/demos/drm
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next ***/
user_pref("media.eme.enabled", true);

/* 2607: enable various developer tools in browser context
 * [SETTING] Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
 * [1] https://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676 ***/
user_pref("devtools.chrome.enabled", true);

/* 2651: enable user interaction for security by always asking where to download
 * [SETUP-CHROME] On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
user_pref("browser.download.useDownloadDir", true);

/* 2801: do not delete cookies and site data on exit
 * 0=keep until they expire (default), 2=keep until you close Firefox
 * [SETTING] Privacy & Security>Cookies and Site Data>Delete cookies and site data when Firefox is closed
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>Cookies>Allow
 *   If using FPI the syntax must be https://example.com/^firstPartyDomain=example.com
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings ***/
user_pref("network.cookie.lifetimePolicy", 0);

/* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * These items do not use exceptions, it is all or nothing (1681701)
 * [NOTE] If "history" is true, downloads will also be cleared
 * [NOTE] "sessions": Active Logins: refers to HTTP Basic Authentication [1], not logins via cookies
 * [NOTE] "offlineApps": Offline Website Data: localStorage, service worker cache, QuotaManager (IndexedDB, asm-cache)
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes>Settings
 * [1] https://en.wikipedia.org/wiki/Basic_access_authentication ***/
user_pref("privacy.clearOnShutdown.downloads", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.sessions", false); // [DEFAULT: true]

/* 4510: enable using system colors
 * [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors ***/
user_pref("browser.display.use_system_colors", true); // [DEFAULT false NON-WINDOWS]

/* 4520: enable WebGL (Web Graphics Library)
 * [SETUP-WEB] If you need it then enable it. RFP still randomizes canvas for naive scripts ***/
user_pref("webgl.disabled", false);

/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);

/* 5010: disable location bar suggestion types
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]

/*** [SECTION 9000]: PERSONAL
   Non-project related but useful. If any interest you, add them to your overrides
***/

/* APPEARANCE ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
user_pref("ui.prefersReducedMotion", 1); // disable chrome animations [FF77+] [RESTART] [HIDDEN PREF]

/* UX BEHAVIOR ***/
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab [FF57+]

/* UX FEATURES ***/
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
