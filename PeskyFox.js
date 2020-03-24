/******

* name: PeskyFox
* description: Take away annoyances and adds a few options
* date: 24 March 2020
* version 74
* authors: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE

******/

/** DOWNLOADS ***/
/* Download location
 * 0=desktop, 1=downloads (default), 2=last used
 * [SETTING] To set your default "downloads": General>Downloads>Save files to ***/
	// user_pref("browser.download.folderList", 1);

/* Enforce user interaction for security by always asking where to download
 * On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
	// user_pref("browser.download.useDownloadDir", false);

/* Disable adding downloads to the system's "recent documents" list ***/
user_pref("browser.download.manager.addToRecentDocs", false); // for privacy or annoyance

/* Disable hiding mime types (Options>General>Applications) not associated with a plugin ***/
user_pref("browser.download.hide_plugins_without_extensions", false);

/* Autohide download button ***/
user_pref("browser.download.autohideButton", true);


/** WARNINGS ***/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0); // -1=also works
user_pref("full-screen-api.warning.timeout", 0); // -1=also works
user_pref("browser.aboutConfig.showWarning", false);


/** DEFAULT DARK MODE ***/
/* Dark pages in about:preferences, etc. ***/
user_pref("browser.in-content.dark-mode", true);
/* Enforce prefers-color-scheme as Dark [FF67+]
 * 0=light, 1=dark : This overrides your OS value. ***/
user_pref("ui.systemUsesDarkTheme", 1); // [HIDDEN PREF]


/** OTHER CONFIGS ***/

/* Set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session) ***/
user_pref("browser.startup.page", 3);

/* Disable backspace action ***/
user_pref("browser.backspace_action", 2); // 0=previous page, 1=scroll up, 2=do nothing

/* Leave bookmarks menu open
 * Useful if you often for opening multiple sites from the bookmark menu ***/
 user_pref("browser.bookmarks.openInTabClosesMenu", false);

/* Open links targeting new windows in a new tab instead
 * Pop-up windows are treated like regular tabs
 * You can still right-click a link and open in a new window ***/
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

/* Disable website notification by default ***/
user_pref("permissions.default.desktop-notification", 2);

/* Insert tab immediately after the current tab
 * Tap to Tab extension: set to "Put new tab at the end"
 * extension: https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab ***/
	// user_pref("browser.tabs.insertAfterCurrent", true);
	// user_pref("browser.tabs.insertRelatedAfterCurrent", false);
	// user_pref("browser.ctrlTab.recentlyUsedOrder", false); // chronological order


/** MISC. **/
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.tabs.tabMinWidth", 100); // default=76, adjust to preference
user_pref("devtools.debugger.ui.editor-wrapping", true);
user_pref("media.autoplay.default", 1); // 0=Allow all, 1=Block non-muted media (default), 5=Block all
user_pref("toolkit.zoomManager.zoomValues", ".8,.9,.95,1,1.05,1.1,1,15,1.2,1.33,1.5,1.7,2,2.4"); // more controlled zooming experience
user_pref("view_source.wrap_long_lines", true);
user_pref("config.trim_on_minimize", true); // [WINDOWS-ONLY] saves memory when FF is minimized
user_pref("layout.spellcheckDefault", 2);
user_pref("browser.urlbar.decodeURLsOnCopy", true); // see bugzilla 1320061
/* [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1320061 ***/
user_pref("middlemouse.scrollbarPosition", true);
user_pref("ui.key.menuAccessKey", 0);
user_pref("accessibility.force_disabled", 1);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.urlbar.trimURLs", true);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);


/** NEW TAB PAGE CLEANUP ***/
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.pocketCta", " ");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", false);

/** DISABLE POCKET ***/
user_pref("extensions.pocket.api", " ");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");
user_pref("browser.toolbarbuttons.introduced.pocket-button", false);


/* OPTIONAL ***/
	// user_pref("dom.event.contextmenu.enabled", false);
	// user_pref("browser.tabs.closeWindowWithLastTab", false);