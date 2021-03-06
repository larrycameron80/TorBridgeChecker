# Overrides for Extension Preferences
# Tor Browser Bundle
# Do not edit this file.

# Torbutton Preferences:
pref("extensions.torbutton.fresh_install", false);
pref("extensions.torbutton.tor_enabled", true);
pref("extensions.torbutton.proxies_applied", true);
pref("extensions.torbutton.settings_applied", true);
pref("extensions.torbutton.socks_host", "127.0.0.1");
pref("extensions.torbutton.socks_port", 9150);
pref("extensions.torbutton.tz_string", "UTC+00:00");

# HTTPS Everywhere Preferences:
pref("extensions.https_everywhere._observatory.popup_shown", true);
pref("extensions.https_everywhere.toolbar_hint_shown", true);

# NoScript Preferences:
pref("capability.policy.maonoscript.javascript.enabled", "allAccess");
pref("capability.policy.maonoscript.sites", "about: chrome: resource:");
pref("noscript.ABE.enabled", false);
pref("noscript.ABE.notify", false);
pref("noscript.ABE.wanIpAsLocal", false);
pref("noscript.confirmUnblock", false);
pref("noscript.contentBlocker", true);
pref("noscript.default", "about: chrome: resources:");
pref("noscript.firstRunRedirection", false);
pref("noscript.global", true);
pref("noscript.gtemp", "");
pref("noscript.opacizeObject", 3);
pref("noscript.forbidWebGL", true);
pref("noscript.forbidFonts", false);
pref("noscript.options.tabSelectedIndexes", "5,0,0");
pref("noscript.policynames", "");
pref("noscript.secureCookies", true);
pref("noscript.showAllowPage", false);
pref("noscript.showBaseDomain", false);
pref("noscript.showDistrust", false);
pref("noscript.showRecentlyBlocked", false);
pref("noscript.showTemp", false);
pref("noscript.showTempToPerm", false);
pref("noscript.showUntrusted", false);
pref("noscript.STS.enabled", false);
pref("noscript.subscription.lastCheck", -142148139);
pref("noscript.temp", "");
pref("noscript.untrusted", "");
pref("noscript.forbidMedia", false);
// Now handled by plugins.click_to_play
pref("noscript.forbidFlash", false);
pref("noscript.forbidSilverlight", false);
pref("noscript.forbidJava", false);
pref("noscript.forbidPlugins", false);
// Usability tweaks
pref("noscript.showPermanent", false);
pref("noscript.showTempAllowPage", true);
pref("noscript.showRevokeTemp", true);
pref("noscript.notify", false);
pref("noscript.autoReload", true);
pref("noscript.autoReload.allTabs", false);
pref("noscript.cascadePermissions", true);
pref("noscript.restrictSubdocScripting", true);
# Tor Launcher preferences (default bridges):
pref("extensions.torlauncher.default_bridge_recommended_type", "obfs3");

// Default bridges.
pref("extensions.torlauncher.default_bridge.obfs3.1", "obfs3 83.212.101.3:80 A09D536DD1752D542E1FBB3C9CE4449D51298239");
pref("extensions.torlauncher.default_bridge.obfs3.2", "obfs3 169.229.59.74:31493 AF9F66B7B04F8FF6F32D455F05135250A16543C9");
pref("extensions.torlauncher.default_bridge.obfs3.3", "obfs3 169.229.59.75:46328 AF9F66B7B04F8FF6F32D455F05135250A16543C9");
pref("extensions.torlauncher.default_bridge.obfs3.4", "obfs3 109.105.109.163:38980 1E05F577A0EC0213F971D81BF4D86A9E4E8229ED");
pref("extensions.torlauncher.default_bridge.obfs3.5", "obfs3 109.105.109.163:47779 4C331FA9B3D1D6D8FB0D8FBBF0C259C360D97E6A");
