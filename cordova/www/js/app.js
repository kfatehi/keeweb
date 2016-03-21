/*! keeweb v1.0.4, (c) 2015 Antelle, opensource.org/licenses/MIT */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var AppModel = __webpack_require__(71),
	    AppView = __webpack_require__(85),
	    KeyHandler = __webpack_require__(10),
	    IdleTracker = __webpack_require__(27),
	    Alerts = __webpack_require__(11),
	    DropboxLink = __webpack_require__(22),
	    Updater = __webpack_require__(42),
	    ThemeChanger = __webpack_require__(48),
	    Locale = __webpack_require__(5);

	$(function() {
	    if (location.href.indexOf('state=') >= 0) {
	        DropboxLink.receive();
	        return;
	    }
	    __webpack_require__(70);
	    __webpack_require__(67);
	    KeyHandler.init();
	    IdleTracker.init();

	    var appModel = new AppModel();
	    if (appModel.settings.get('theme')) {
	        ThemeChanger.setTheme(appModel.settings.get('theme'));
	    }
	    if (['https:', 'file:', 'app:'].indexOf(location.protocol) < 0 && !localStorage.disableSecurityCheck) {
	        Alerts.error({ header: Locale.appSecWarn, icon: 'user-secret', esc: false, enter: false, click: false,
	            body: Locale.appSecWarnBody1 + '<br/><br/>' + Locale.appSecWarnBody2,
	            buttons: [
	                { result: '', title: Locale.appSecWarnBtn, error: true }
	            ],
	            complete: showApp
	        });
	    } else {
	        showApp();
	    }

	    function showApp() {
	        new AppView({ model: appModel }).render();
	        Updater.init();
	    }
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(145)['default'];


/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var Locale = {
	    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	    monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	    weekdaysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],

	    retToApp: 'return to app',
	    name: 'name',
	    icon: 'icon',
	    title: 'title',
	    password: 'password',
	    user: 'user',
	    website: 'website',
	    tags: 'tags',
	    notes: 'notes',
	    noTitle: 'no title',
	    or: 'or',
	    notImplemented: 'Not Implemented',

	    menuAllItems: 'All Items',
	    menuColors: 'Colors',
	    menuTags: 'Tags',
	    menuTrash: 'Trash',
	    menuSetGeneral: 'General',
	    menuSetShortcuts: 'Shortcuts',
	    menuSetHelp: 'Help',
	    menuSetAbout: 'About',
	    menuAlertNoTags: 'No tags',
	    menuAlertNoTagsBody: 'You can add new tags while editing fields, in tags section.',
	    menuEmptyTrash: 'Empty Trash',
	    menuEmptyTrashAlert: 'Empty Trash?',
	    menuEmptyTrashAlertBody: 'You will not be able to put items back',

	    alertYes: 'Yes',
	    alertNo: 'No',
	    alertOk: 'OK',
	    alertCancel: 'Cancel',
	    alertSignIn: 'Sign In',
	    alertCopy: 'Copy',
	    alertClose: 'Close',

	    footerOpen: 'Open / New',
	    footerSyncError: 'Sync error',
	    footerTitleHelp: 'Help',
	    footerTitleSettings: 'Settings',
	    footerTitleGen: 'Generate',
	    footerTitleLock: 'Lock',

	    genLen: 'Length',
	    grpTitle: 'Group',
	    grpSearch: 'Enable searching entries in this group',

	    keyChangeTitle: 'Master Key Changed',
	    keyChangeMessage: 'Master key was changed for this database. Please enter a new key',

	    iconFavTitle: 'Download and use website favicon',
	    iconSelCustom: 'Select custom icon',

	    listEmptyTitle: 'Empty',
	    listEmptyAdd: 'add with {} button above',
	    listGroup: 'Group',
	    listNoWebsite: 'no website',
	    listNoUser: 'no user',
	    listNoAttachments: 'no attachments',

	    searchAddNew: 'Add New',
	    searchSort: 'Sort',
	    searchTitle: 'Title',
	    searchWebsite: 'Website',
	    searchUser: 'User',
	    searchCreated: 'Created',
	    searchUpdated: 'Updated',
	    searchAttachments: 'Attachments',
	    searchAZ: 'A &rarr; Z',
	    searchZA: 'Z &rarr; A',
	    searchON: 'Old &rarr; New',
	    searchNO: 'New &rarr; Old',
	    searchShiftClickOr: 'shift-click or',
	    searchAdvTitle: 'Toggle advanced search',
	    searchSearchIn: 'Search in',
	    searchOther: 'Other fields',
	    searchProtect: 'Secure fields',
	    searchOptions: 'Options',
	    searchCase: 'Match case',
	    searchRegex: 'RegEx',
	    searchHistory: 'History',

	    openOpen: 'Open',
	    openNew: 'New',
	    openDemo: 'Demo',
	    openCaps: 'Caps Lock is on',
	    openKeyFile: 'key file',
	    openKeyFileDropbox: '(from dropbox)',
	    openDropHere: 'drop files here',
	    openFailedRead: 'Failed to read file',
	    openNothingFound: 'Nothing found',
	    openNothingFoundBody: 'You have no files in your Dropbox which could be opened.',
	    openNothingFoundBodyAppFolder: 'Files are searched inside app folder in your Dropbox.',
	    openSelectFile: 'Select a file',
	    openSelectFileBody: 'Select a file from your Dropbox which you would like to open',
	    openPassFor: 'Password for',
	    openRemoveLastQuestion: 'Delete local file?',
	    openRemoveLastQuestionBody: 'The file you are deleting is stored only inside the app. Delete it permanently?',
	    openLocalFile: 'Local file',
	    openLocalFileBody: 'You are going to open a file which will be stored inside the app. ' +
	        'Changes you make will not be saved back to file system. ' +
	        'To get the file with your data, export it from settings.',
	    openLocalFileDontShow: 'Don\'t show this again',

	    detAttDownload: 'Shift-click attachment button to download or ',
	    detAttDelToRemove: 'Delete to remove',
	    detEmpty: 'Your passwords will be displayed here',
	    detGroupRestore: 'To restore this group, please drag it to any group outside trash',
	    detHistoryClickPoint: 'Click entry history timeline point to view state',
	    detHistoryReturn: 'return to entry',
	    detHistoryRevert: 'Revert to state',
	    detHistoryDel: 'Delete state',
	    detHistoryDiscard: 'Discard changes',
	    detHistoryEmpty: 'empty',
	    detHistoryModified: 'modified',
	    detHistoryRec: 'record',
	    detHistoryRecs: 'records',
	    detHistoryVersion: 'Version',
	    detHistorySaved: 'Saved',
	    detHistoryTitle: 'Title',
	    detHistoryNoTitle: 'no title',
	    detHistoryCurState: 'current state',
	    detHistoryCurUnsavedState: 'current unsaved state',
	    detBackToList: 'back to list',
	    detSetIconColor: 'Change icon color',
	    detSetIcon: 'Change icon',
	    detDropAttachments: 'drop attachments here',
	    detDelEntry: 'Delete',
	    detDelEntryPerm: 'Delete permanently',
	    detUser: 'User',
	    detPassword: 'Password',
	    detWebsite: 'Website',
	    detNotes: 'Notes',
	    detTags: 'Tags',
	    detExpires: 'Expires',
	    detExpired: 'expired',
	    detFile: 'File',
	    detCreated: 'Created',
	    detUpdated: 'Updated',
	    detHistory: 'History',
	    detNetField: 'New Field',
	    detAddField: 'add field',
	    detAttachments: 'Attachments',
	    detDelFromTrash: 'Delete from trash?',
	    detDelFromTrashBody: 'You will not be able to put it back.',
	    detDelFromTrashBodyHint: 'To quickly remove all items from trash, click empty icon in Trash menu.',
	    detPassCopied: 'Password copied',
	    detPassCopiedTime: 'Password copied for {} seconds',
	    detCopyHint: 'You can copy field value with click on its title',

	    appSecWarn: 'Not Secure!',
	    appSecWarnBody1: 'You have loaded this app with insecure connection. ' +
	        'Someone may be watching you and stealing your passwords. ' +
	        'We strongly advise you to stop, unless you clearly understand what you\'re doing.',
	    appSecWarnBody2: 'Yes, your database is encrypted but no one can guarantee that the app has not been modified on the way to you.',
	    appSecWarnBtn: 'I understand the risks, continue',
	    appUnsavedWarn: 'Unsaved changes!',
	    appUnsavedWarnBody: 'You have unsaved files, if you close the app, changes will be lost.',
	    appExitBtn: 'Discard changes',
	    appExitSaveBtn: 'Save changes',
	    appDontExitBtn: 'Don\'t exit',
	    appCannotLockAutoInit: 'The app cannot be locked because auto save is disabled.',
	    appCannotLock: 'You have unsaved changes that will be lost. Continue?',
	    appSaveChangesBtn: 'Save changes',
	    appDiscardChangesBtn: 'Discard changes',
	    appAutoSave: 'Save changes automatically',
	    appSaveError: 'Save Error',
	    appSaveErrorBody: 'Failed to auto-save file',
	    appSaveErrorBodyMul: 'Failed to auto-save files:',

	    setGenTitle: 'General Settings',
	    setGenUpdate: 'Update',
	    setGenNewVersion: 'New app version was released and downloaded',
	    setGenReleaseNotes: 'View release notes',
	    setGenReloadToUpdate: 'Reload to update',
	    setGenUpdateManual: 'New version has been released. It will check for updates and install them automatically ' +
	        'but auto-upgrading from your version is impossible.',
	    setGenDownloadUpdate: 'Download update',
	    setGenUpdateAuto: 'Download and install automatically',
	    setGenUpdateCheck: 'Check but don\'t install',
	    setGenNoUpdate: 'Never check for updates',
	    setGenUpdateChecking: 'Checking for updates',
	    setGenCheckUpdate: 'Check for updates',
	    setGenErrorChecking: 'Error checking for updates',
	    setGenLastCheckSuccess: 'Last successful check was at {}',
	    setGenLastCheckVer: 'the latest version was {}',
	    setGenCheckedAt: 'Checked at',
	    setGenLatestVer: 'you are using the latest version',
	    setGenNewVer: 'new version {} available, released at',
	    setGenDownloadingUpdate: 'Downloading update...',
	    setGenExtractingUpdate: 'Extracting update...',
	    setGenCheckErr: 'There was an error downloading new version',
	    setGenNeverChecked: 'Never checked for updates',
	    setGenRestartToUpdate: 'Restart to update',
	    setGenDownloadAndRestart: 'Download update and restart',
	    setGenAppearance: 'Appearance',
	    setGenTheme: 'Theme',
	    setGenShowSubgroups: 'Show entries from all subgroups',
	    setGenTableView: 'Entries list table view',
	    setGenColorfulIcons: 'Colorful custom icons in list',
	    setGenAutoSync: 'Automatically save and sync',
	    setGenLockInactive: 'Auto-lock if the app is inactive',
	    setGenNoAutoLock: 'Don\'t auto-lock',
	    setGenLockMinutes: 'In {} minutes',
	    setGenLockHour: 'In an hour',
	    setGenClearClip: 'Clear clipboard after copy',
	    setGenNoClear: 'Don\'t clear',
	    setGenClearSeconds: 'In {} seconds',
	    setGenClearMinute: 'In a minute',
	    setGenMinInstead: 'Minimize app instead of close',
	    setGenLockMinimize: 'Auto-lock on minimize',
	    setGenAdvanced: 'Advanced',
	    setGenDevTools: 'Show dev tools',

	    setFilePath: 'File path',
	    setFileStorage: 'This file is opened from {}.',
	    setFileIntl: 'This file is stored in internal app storage',
	    setFileLocalHint: 'Want to work seamlessly with local files?',
	    setFileDownloadApp: 'Download a desktop app',
	    setFileSave: 'Save',
	    setFileSyncWith: 'Sync with {}',
	    setFileSaveFile: 'Save to file',
	    setFileExportXml: 'Export to XML',
	    setFileClose: 'Close',
	    setFileSync: 'Sync',
	    setFileLastSync: 'Last sync',
	    setFileLastSyncUnknown: 'unknown',
	    setFileSyncInProgress: 'sync in progress',
	    setFileSyncError: 'Sync error',
	    setFileSettings: 'Settings',
	    setFilePass: 'Master password',
	    setFilePassChanged: 'password was changed; leave the field blank to use old password',
	    setFileKeyFile: 'Key file',
	    setFileSelKeyFile: 'Select a key file',
	    setFileNames: 'Names',
	    setFileName: 'Name',
	    setFileDefUser: 'Default username',
	    setFileHistory: 'History',
	    setFileEnableTrash: 'Enable trash',
	    setFileHistLen: 'History length, keep last records per entry',
	    resFileHistSize: 'History size, total MB per file',
	    setFileAdvanced: 'Advanced',
	    setFileRounds: 'Key encryption rounds',
	    setFileUseKeyFile: 'Use key file',
	    setFileUseGenKeyFile: 'Use generated key file',
	    setFileUseOldKeyFile: 'Use old key file',
	    setFileGenKeyFile: 'Generate new key file',
	    setFileDontUseKeyFile: 'Don\'t use key file',
	    setFileEmptyPass: 'Empty password',
	    setFileEmptyPassBody: 'Saving database with empty password makes it completely unprotected. Do you really want to do it?',
	    setFileSaveError: 'Save error',
	    setFileSaveErrorBody: 'Error saving to file',
	    setFileAlreadyExists: 'Already exists',
	    setFileAlreadyExistsBody: 'File {} already exists in your Dropbox. Overwrite it?',
	    setFileUnsaved: 'Unsaved changes',
	    setFileUnsavedBody: 'There are unsaved changes in this file',
	    setFileCloseNoSave: 'Close and lose changes',
	    setFileDontClose: 'Don\'t close',

	    setShTitle: 'Shortcuts',
	    setShShowAll: 'show all items',
	    setShColors: 'show items with colors',
	    setShTrash: 'go to trash',
	    setShFind: 'search, or just start typing',
	    setShClearSearch: 'clear search',
	    setShEntry: 'go to entry',
	    setShCopy: 'copy password or selected field',
	    setShPrev: 'go to previous item',
	    setShNext: 'go to next item',
	    setShCreateEntry: 'create entry',
	    setShOpen: 'open / new',
	    setShSave: 'save all files',
	    setShGen: 'generate password',

	    setAboutTitle: 'About',
	    setAboutBuilt: 'This app is built with these awesome tools',
	    setAboutLic: 'License',
	    setAboutLicComment: 'The app itself and all included components which are not in public domain are licensed under MIT license',
	    setAboutFirst: 'This is an open-source app created by {}',
	    setAboutSecond: ' and licensed under {}.',
	    setAboutSource: 'The source code and issues are on {}.',

	    setHelpTitle: 'Help',
	    setHelpFormat: 'File Format',
	    setHelpFormatBody: 'This is a port of {} app built with web technologies. ' +
	        'It understands files in KeePass format (kdbx). You can create such files (password databases) either in KeePass, ' +
	        'or in this app. The file format is 100% compatible and should be understood by both apps.',
	    setHelpProblems: 'Problems?',
	    setHelpProblems1: 'If something goes wrong, please {} ',
	    setHelpProblems2: 'or {}',
	    setHelpOpenIssue: 'open an issue on GitHub',
	    setHelpContactLink: 'contact a developer directly',
	    setHelpAppInfo: 'App information',
	    setHelpOtherPlatforms: 'Other platforms',
	    setHelpDesktopApps: 'Desktop apps',
	    setHelpWebApp: 'Web app',
	    setHelpUpdates: 'Updates',
	    setHelpTwitter: 'App twitter',

	    dropboxNotConfigured: 'Dropbox not configured',
	    dropboxNotConfiguredBody1: 'So, you are using KeeWeb on your own server? Good!',
	    dropboxNotConfiguredBody2: '{} is required to make Dropbox work, it\'s just 3 steps away.',
	    dropboxNotConfiguredLink: 'Some configuration',
	    dropboxLogin: 'Dropbox Login',
	    dropboxLoginBody: 'To continue, you have to sign in to Dropbox.',
	    dropboxSyncError: 'Dropbox Sync Error',
	    dropboxNotFoundBody: 'The file was not found. Has it been removed from another computer?',
	    dropboxFull: 'Dropbox Full',
	    dropboxFullBody: 'Your Dropbox is full, there\'s no space left anymore.',
	    dropboxRateLimitedBody: 'Too many requests to Dropbox have been made by this app. Please, try again later.',
	    dropboxNetError: 'Dropbox Sync Network Error',
	    dropboxNetErrorBody: 'Network error occurred during Dropbox sync. Please, check your connection and try again.',
	    dropboxErrorBody: 'Something went wrong during Dropbox sync. Please, try again later. Error code: ',
	    dropboxErrorRepeatBody: 'Something went wrong during Dropbox sync. Please, try again later. Error: ',

	    launcherSave: 'Save Passwords Database',
	    launcherFileFilter: 'KeePass files'
	};

	module.exports = Locale;


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var Keys = {
	    DOM_VK_CANCEL: 3,
	    DOM_VK_HELP: 6,
	    DOM_VK_BACK_SPACE: 8,
	    DOM_VK_TAB: 9,
	    DOM_VK_CLEAR: 12,
	    DOM_VK_RETURN: 13,
	    DOM_VK_ENTER: 14,
	    DOM_VK_SHIFT: 16,
	    DOM_VK_CONTROL: 17,
	    DOM_VK_ALT: 18,
	    DOM_VK_PAUSE: 19,
	    DOM_VK_CAPS_LOCK: 20,
	    DOM_VK_ESCAPE: 27,
	    DOM_VK_SPACE: 32,
	    DOM_VK_PAGE_UP: 33,
	    DOM_VK_PAGE_DOWN: 34,
	    DOM_VK_END: 35,
	    DOM_VK_HOME: 36,
	    DOM_VK_LEFT: 37,
	    DOM_VK_UP: 38,
	    DOM_VK_RIGHT: 39,
	    DOM_VK_DOWN: 40,
	    DOM_VK_PRINTSCREEN: 44,
	    DOM_VK_INSERT: 45,
	    DOM_VK_DELETE: 46,
	    DOM_VK_0: 48,
	    DOM_VK_1: 49,
	    DOM_VK_2: 50,
	    DOM_VK_3: 51,
	    DOM_VK_4: 52,
	    DOM_VK_5: 53,
	    DOM_VK_6: 54,
	    DOM_VK_7: 55,
	    DOM_VK_8: 56,
	    DOM_VK_9: 57,
	    DOM_VK_SEMICOLON: 59,
	    DOM_VK_EQUALS: 61,
	    DOM_VK_A: 65,
	    DOM_VK_B: 66,
	    DOM_VK_C: 67,
	    DOM_VK_D: 68,
	    DOM_VK_E: 69,
	    DOM_VK_F: 70,
	    DOM_VK_G: 71,
	    DOM_VK_H: 72,
	    DOM_VK_I: 73,
	    DOM_VK_J: 74,
	    DOM_VK_K: 75,
	    DOM_VK_L: 76,
	    DOM_VK_M: 77,
	    DOM_VK_N: 78,
	    DOM_VK_O: 79,
	    DOM_VK_P: 80,
	    DOM_VK_Q: 81,
	    DOM_VK_R: 82,
	    DOM_VK_S: 83,
	    DOM_VK_T: 84,
	    DOM_VK_U: 85,
	    DOM_VK_V: 86,
	    DOM_VK_W: 87,
	    DOM_VK_X: 88,
	    DOM_VK_Y: 89,
	    DOM_VK_Z: 90,
	    DOM_VK_CONTEXT_MENU: 93,
	    DOM_VK_NUMPAD0: 96,
	    DOM_VK_NUMPAD1: 97,
	    DOM_VK_NUMPAD2: 98,
	    DOM_VK_NUMPAD3: 99,
	    DOM_VK_NUMPAD4: 100,
	    DOM_VK_NUMPAD5: 101,
	    DOM_VK_NUMPAD6: 102,
	    DOM_VK_NUMPAD7: 103,
	    DOM_VK_NUMPAD8: 104,
	    DOM_VK_NUMPAD9: 105,
	    DOM_VK_MULTIPLY: 106,
	    DOM_VK_ADD: 107,
	    DOM_VK_SEPARATOR: 108,
	    DOM_VK_SUBTRACT: 109,
	    DOM_VK_DECIMAL: 110,
	    DOM_VK_DIVIDE: 111,
	    DOM_VK_F1: 112,
	    DOM_VK_F2: 113,
	    DOM_VK_F3: 114,
	    DOM_VK_F4: 115,
	    DOM_VK_F5: 116,
	    DOM_VK_F6: 117,
	    DOM_VK_F7: 118,
	    DOM_VK_F8: 119,
	    DOM_VK_F9: 120,
	    DOM_VK_F10: 121,
	    DOM_VK_F11: 122,
	    DOM_VK_F12: 123,
	    DOM_VK_F13: 124,
	    DOM_VK_F14: 125,
	    DOM_VK_F15: 126,
	    DOM_VK_F16: 127,
	    DOM_VK_F17: 128,
	    DOM_VK_F18: 129,
	    DOM_VK_F19: 130,
	    DOM_VK_F20: 131,
	    DOM_VK_F21: 132,
	    DOM_VK_F22: 133,
	    DOM_VK_F23: 134,
	    DOM_VK_F24: 135,
	    DOM_VK_NUM_LOCK: 144,
	    DOM_VK_SCROLL_LOCK: 145,
	    DOM_VK_COMMA: 188,
	    DOM_VK_PERIOD: 190,
	    DOM_VK_SLASH: 191,
	    DOM_VK_BACK_QUOTE: 192,
	    DOM_VK_OPEN_BRACKET: 219,
	    DOM_VK_BACK_SLASH: 220,
	    DOM_VK_CLOSE_BRACKET: 221,
	    DOM_VK_QUOTE: 222,
	    DOM_VK_META: 224
	};

	module.exports = Keys;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    Locale = __webpack_require__(5);
	var Launcher;

	if (window.process && window.process.versions && window.process.versions.electron) {
	    /* jshint node:true */
	    Launcher = {
	        name: 'electron',
	        version: window.process.versions.electron,
	        req: window.require,
	        remReq: function(mod) {
	            return this.req('remote').require(mod);
	        },
	        openLink: function(href) {
	            this.req('shell').openExternal(href);
	        },
	        devTools: true,
	        openDevTools: function() {
	            this.req('remote').getCurrentWindow().openDevTools();
	        },
	        getSaveFileName: function(defaultPath, cb) {
	            if (defaultPath) {
	                var homePath = this.remReq('app').getPath('userDesktop');
	                defaultPath = this.req('path').join(homePath, defaultPath);
	            }
	            this.remReq('dialog').showSaveDialog({
	                title: Locale.launcherSave,
	                defaultPath: defaultPath,
	                filters: [{ name: Locale.launcherFileFilter, extensions: ['kdbx'] }]
	            }, cb);
	        },
	        getUserDataPath: function(fileName) {
	            return this.req('path').join(this.remReq('app').getPath('userData'), fileName || '');
	        },
	        getTempPath: function(fileName) {
	            return this.req('path').join(this.remReq('app').getPath('temp'), fileName || '');
	        },
	        writeFile: function(path, data) {
	            this.req('fs').writeFileSync(path, new window.Buffer(data));
	        },
	        readFile: function(path, encoding) {
	            var contents = this.req('fs').readFileSync(path, encoding);
	            return typeof contents === 'string' ? contents : new Uint8Array(contents);
	        },
	        fileExists: function(path) {
	            return this.req('fs').existsSync(path);
	        },
	        deleteFile: function(path) {
	            this.req('fs').unlinkSync(path);
	        },
	        statFile: function(path) {
	            return this.req('fs').statSync(path);
	        },
	        parsePath: function(fileName) {
	            var path = this.req('path');
	            return { path: fileName, dir: path.dirname(fileName), file: path.basename(fileName) };
	        },
	        createFsWatcher: function(path) {
	            return this.req('fs').watch(path, { persistent: false });
	        },
	        preventExit: function(e) {
	            e.returnValue = false;
	            return false;
	        },
	        exit: function() {
	            this.exitRequested = true;
	            this.requestExit();
	        },
	        requestExit: function() {
	            var app = this.remReq('app');
	            if (this.restartPending) {
	                app.restartApp();
	            } else {
	                app.quit();
	            }
	        },
	        requestRestart: function() {
	            this.restartPending = true;
	            this.requestExit();
	        },
	        cancelRestart: function() {
	            this.restartPending = false;
	        },
	        setClipboardText: function(text) {
	            return this.req('clipboard').writeText(text);
	        },
	        getClipboardText: function() {
	            return this.req('clipboard').readText();
	        },
	        clearClipboardText: function() {
	            return this.req('clipboard').clear();
	        },
	        minimizeApp: function() {
	            this.remReq('app').minimizeApp();
	        },
	        canMinimize: function() {
	            return process.platform === 'win32';
	        },
	        updaterEnabled: function() {
	            return this.req('remote').process.argv.indexOf('--disable-updater') === -1;
	        },
	        resolveProxy: function(url, callback) {
	            var window = this.remReq('app').getMainWindow();
	            var session = window.webContents.session;
	            session.resolveProxy(url, function(proxy) {
	                var match = /^proxy\s+([\w\.]+):(\d+)+\s*/i.exec(proxy);
	                proxy = match && match[1] ? { host: match[1], port: +match[2] } : null;
	                callback(proxy);
	            });
	        }
	    };
	    Backbone.on('launcher-exit-request', function() {
	        setTimeout(function() { Launcher.exit(); }, 0);
	    });
	    Backbone.on('launcher-minimize', function() {
	        setTimeout(function() { Backbone.trigger('app-minimized'); }, 0);
	    });
	    window.launcherOpen = function(path) {
	        Backbone.trigger('launcher-open-file', path);
	    };
	    if (window.launcherOpenedFile) {
	        console.log('Open file request', window.launcherOpenedFile);
	        Backbone.trigger('launcher-open-file', window.launcherOpenedFile);
	        delete window.launcherOpenedFile;
	    }
	}

	module.exports = Launcher;


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/* globals console */
	/* globals performance */

	var Logger = function(name, id) {
	    this.prefix = (name ? name + (id ? ':' + id : '') : 'default');
	};

	Logger.prototype.ts = function(ts) {
	    if (ts) {
	        return Math.round(performance.now() - ts) + 'ms';
	    } else {
	        return performance.now();
	    }
	};

	Logger.prototype.getPrefix = function() {
	    return new Date().toISOString() + ' [' + this.prefix + '] ';
	};

	Logger.prototype.debug = function() {
	    arguments[0] = this.getPrefix() + arguments[0];
	    console.debug.apply(console, arguments);
	};

	Logger.prototype.info = function() {
	    arguments[0] = this.getPrefix() + arguments[0];
	    console.log.apply(console, arguments);
	};

	Logger.prototype.warn = function() {
	    arguments[0] = this.getPrefix() + arguments[0];
	    console.warn.apply(console, arguments);
	};

	Logger.prototype.error = function() {
	    arguments[0] = this.getPrefix() + arguments[0];
	    console.error.apply(console, arguments);
	};

	module.exports = Logger;


/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    Keys = __webpack_require__(6),
	    IdleTracker = __webpack_require__(27);

	var shortcutKeyProp = navigator.platform.indexOf('Mac') >= 0 ? 'metaKey' : 'ctrlKey';

	var KeyHandler = {
	    SHORTCUT_ACTION: 1,
	    SHORTCUT_OPT: 2,

	    shortcuts: {},
	    modal: false,

	    init: function() {
	        $(document).bind('keypress', this.keypress.bind(this));
	        $(document).bind('keydown', this.keydown.bind(this));
	    },
	    onKey: function(key, handler, thisArg, shortcut, modal, noPrevent) {
	        var keyShortcuts = this.shortcuts[key];
	        if (!keyShortcuts) {
	            this.shortcuts[key] = keyShortcuts = [];
	        }
	        keyShortcuts.push({ handler: handler, thisArg: thisArg, shortcut: shortcut, modal: modal, noPrevent: noPrevent });
	    },
	    offKey: function(key, handler, thisArg) {
	        if (this.shortcuts[key]) {
	            this.shortcuts[key] = _.reject(this.shortcuts[key],  function(sh) {
	                return sh.handler === handler && sh.thisArg === thisArg;
	            });
	        }
	    },
	    setModal: function(modal) {
	        this.modal = modal;
	    },
	    isActionKey: function(e) {
	        return e[shortcutKeyProp];
	    },
	    keydown: function(e) {
	        IdleTracker.regUserAction();
	        var code = e.keyCode || e.which;
	        var keyShortcuts = this.shortcuts[code];
	        if (keyShortcuts && keyShortcuts.length) {
	            keyShortcuts.forEach(function(sh) {
	                if (this.modal && !sh.modal) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    return;
	                }
	                var isActionKey = this.isActionKey(e);
	                switch (sh.shortcut) {
	                    case this.SHORTCUT_ACTION:
	                        if (!isActionKey) { return; }
	                        break;
	                    case this.SHORTCUT_OPT:
	                        if (!e.altKey) { return; }
	                        break;
	                    default:
	                        if (e.metaKey || e.ctrlKey || e.altKey) { return; }
	                        break;
	                }
	                sh.handler.call(sh.thisArg, e, code);
	                if (isActionKey && !sh.noPrevent) {
	                    e.preventDefault();
	                }
	            }, this);
	        }
	    },
	    keypress: function(e) {
	        if (!this.modal &&
	            e.charCode !== Keys.DOM_VK_RETURN &&
	            e.charCode !== Keys.DOM_VK_ESCAPE &&
	            e.charCode !== Keys.DOM_VK_TAB &&
	            !e.altKey && !e.ctrlKey && !e.metaKey) {
	            this.trigger('keypress', e);
	        }
	    },
	    reg: function() {
	        IdleTracker.regUserAction();
	    }
	};

	_.extend(KeyHandler, Backbone.Events);

	module.exports = KeyHandler;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var ModalView = __webpack_require__(105),
	    Locale = __webpack_require__(5);

	var Alerts = {
	    alertDisplayed: false,

	    buttons: {
	        ok: {result: 'yes', title: Locale.alertOk},
	        yes: {result: 'yes', title: Locale.alertYes},
	        no: {result: '', title: Locale.alertNo}
	    },

	    alert: function(config) {
	        Alerts.alertDisplayed = true;
	        var view = new ModalView({ model: config });
	        view.render();
	        view.on('result', function(res, check) {
	            Alerts.alertDisplayed = false;
	            if (res && config.success) {
	                config.success(res, check);
	            }
	            if (!res && config.cancel) {
	                config.cancel();
	            }
	            if (config.complete) {
	                config.complete(res, check);
	            }
	        });
	    },

	    notImplemented: function() {
	        this.alert({
	            header: Locale.notImplemented,
	            body: '',
	            icon: 'exclamation-triangle',
	            buttons: [this.buttons.ok],
	            esc: '',
	            click: '',
	            enter: ''
	        });
	    },

	    info: function(config) {
	        this.alert(_.extend({
	            header: '',
	            body: '',
	            icon: 'info',
	            buttons: [this.buttons.ok],
	            esc: '',
	            click: '',
	            enter: ''
	        }, config));
	    },

	    error: function(config) {
	        this.alert(_.extend({
	            header: '',
	            body: '',
	            icon: 'exclamation-circle',
	            buttons: [this.buttons.ok],
	            esc: '',
	            click: '',
	            enter: ''
	        }, config));
	    },

	    yesno: function(config) {
	        this.alert(_.extend({
	            header: '',
	            body: '',
	            icon: 'question',
	            buttons: [this.buttons.yes, this.buttons.no],
	            esc: '',
	            click: '',
	            enter: 'yes'
	        }, config));
	    }
	};

	module.exports = Alerts;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    SettingsStore = __webpack_require__(28);

	var AppSettingsModel = Backbone.Model.extend({
	    defaults: {
	        theme: 'fb',
	        expandGroups: true,
	        listViewWidth: null,
	        menuViewWidth: null,
	        tagsViewHeight: null,
	        autoUpdate: 'install',
	        clipboardSeconds: 0,
	        autoSave: true,
	        idleMinutes: 15,
	        minimizeOnClose: false,
	        tableView: false,
	        colorfulIcons: false,
	        lockOnMinimize: true,
	        helpTipCopyShown: false,
	        skipOpenLocalWarn: false
	    },

	    initialize: function() {
	        this.listenTo(this, 'change', this.save);
	    },

	    load: function() {
	        var data = SettingsStore.load('app-settings');
	        if (data) {
	            this.set(data, {silent: true});
	        }
	    },

	    save: function() {
	        SettingsStore.save('app-settings', this.attributes);
	    }
	});

	AppSettingsModel.instance = new AppSettingsModel();
	AppSettingsModel.instance.load();

	module.exports = AppSettingsModel;


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var FeatureDetector = {
	    isMac: function() {
	        return navigator.platform.indexOf('Mac') >= 0;
	    },
	    isMobile: function() {
	        return typeof window.orientation !== 'undefined';
	    },
	    isDesktop: function() {
	        return !this.isMobile();
	    },
	    actionShortcutSymbol: function(formatting) {
	        return this.isMac() ? '⌘' : formatting ? '<span class="thin">ctrl + </span>' : 'ctrl-';
	    },
	    altShortcutSymbol: function(formatting) {
	        return this.isMac() ? '⌥' : formatting ? '<span class="thin">alt + </span>' : 'alt-';
	    },
	    shouldMoveHiddenInputToCopySource: function() {
	        return /(iPad|iPhone)/i.test(navigator.userAgent);
	    },
	    canCopyReadonlyInput: function() {
	        return !(/CriOS/i.test(navigator.userAgent));
	    }
	};

	module.exports = FeatureDetector;


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}



/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var Links = {
	    Repo: 'https://github.com/antelle/keeweb',
	    Desktop: 'https://github.com/antelle/keeweb/releases/latest',
	    WebApp: 'https://app.keeweb.info/',
	    License: 'https://github.com/antelle/keeweb/blob/master/MIT-LICENSE.txt',
	    UpdateDesktop: 'https://github.com/antelle/keeweb/releases/download/v{ver}/UpdateDesktop.zip',
	    ReleaseNotes: 'https://github.com/antelle/keeweb/blob/master/release-notes.md#release-notes',
	    SelfHostedDropbox: 'https://github.com/antelle/keeweb#self-hosting',
	    Manifest: 'https://antelle.github.io/keeweb/manifest.appcache'
	};

	module.exports = Links;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Locale = __webpack_require__(5);

	var Format = {
	    pad: function(num, digits) {
	        var str = num.toString();
	        while (str.length < digits) {
	            str = '0' + str;
	        }
	        return str;
	    },
	    dtStr: function(dt) {
	        return dt ? this.dStr(dt) + ' ' + this.pad(dt.getHours(), 2) + ':' + this.pad(dt.getMinutes(), 2) +
	            ':' + this.pad(dt.getSeconds(), 2) : '';
	    },
	    dStr: function(dt) {
	        return dt ? dt.getDate() + ' ' + Locale.monthsShort[dt.getMonth()] + ' ' + dt.getFullYear() : '';
	    }
	};

	module.exports = Format;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    FeatureDetector = __webpack_require__(13),
	    baron = __webpack_require__(56);

	var isEnabled = FeatureDetector.isDesktop();

	var Scrollable = {
	    createScroll: function(opts) {
	        opts.$ = Backbone.$;
	        //opts.cssGuru = true;
	        if (isEnabled) {
	            if (this.scroll) {
	                this.removeScroll();
	            }
	            this.scroll = baron(opts);
	        }
	        this.scroller = this.$el.find('.scroller');
	        this.scrollerBar = this.$el.find('.scroller__bar');
	        this.scrollerBarWrapper = this.$el.find('.scroller__bar-wrapper');
	    },

	    removeScroll: function() {
	        if (this.scroll) {
	            this.scroll.dispose();
	            this.scroll = null;
	        }
	    },

	    pageResized: function() {
	        // TODO: check size on window resize
	        //if (this.checkSize && (!e || e.source === 'window')) {
	        //    this.checkSize();
	        //}
	        if (this.scroll) {
	            this.scroll.update();
	            this.requestAnimationFrame(function() {
	                this.scroll.update();
	                var barHeight = this.scrollerBar.height(),
	                    wrapperHeight = this.scrollerBarWrapper.height();
	                this.scrollerBarWrapper.toggleClass('invisible', barHeight >= wrapperHeight);
	            });
	        }
	    },

	    initScroll: function() {
	        if (isEnabled) {
	            this.listenTo(Backbone, 'page-geometry', this.pageResized);
	        }
	    }
	};

	module.exports = Scrollable;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {'use strict';

	var Backbone = __webpack_require__(1),
	    FieldView = __webpack_require__(19),
	    GeneratorView = __webpack_require__(52),
	    KeyHandler = __webpack_require__(10),
	    Keys = __webpack_require__(6),
	    PasswordGenerator = __webpack_require__(35),
	    kdbxweb = __webpack_require__(9);

	var FieldViewText = FieldView.extend({
	    renderValue: function(value) {
	        return value && value.isProtected ? PasswordGenerator.present(value.textLength) :
	            _.escape(value || '').replace(/\n/g, '<br/>');
	    },

	    getEditValue: function(value) {
	        return value && value.isProtected ? value.getText() : value || '';
	    },

	    startEdit: function() {
	        var text = this.getEditValue(this.value);
	        var isProtected = !!(this.value && this.value.isProtected);
	        this.$el.toggleClass('details__field--protected', isProtected);
	        this.input = $(document.createElement(this.model.multiline ? 'textarea' : 'input'));
	        this.valueEl.html('').append(this.input);
	        this.input.attr({ autocomplete: 'off', spellcheck: 'false' })
	            .val(text).focus()[0].setSelectionRange(text.length, text.length);
	        this.input.bind({
	            input: this.fieldValueInput.bind(this),
	            keydown: this.fieldValueKeydown.bind(this),
	            keypress: this.fieldValueInput.bind(this),
	            click: this.fieldValueInputClick.bind(this),
	            mousedown: this.fieldValueInputMouseDown.bind(this)
	        });
	        this.listenTo(Backbone, 'click', this.fieldValueBlur);
	        if (this.model.multiline) {
	            this.setInputHeight();
	        }
	        if (this.model.canGen) {
	            $('<div/>').addClass('details__field-value-btn details__field-value-btn-gen').appendTo(this.valueEl)
	                .click(this.showGeneratorClick.bind(this))
	                .mousedown(this.showGenerator.bind(this));
	        }
	    },

	    showGeneratorClick: function(e) {
	        e.stopPropagation();
	        if (!this.gen) {
	            this.input.focus();
	        }
	    },

	    showGenerator: function() {
	        if (this.gen) {
	            this.hideGenerator();
	        } else {
	            var fieldRect = this.input[0].getBoundingClientRect();
	            this.gen = new GeneratorView({model: {pos: {left: fieldRect.left, top: fieldRect.bottom}}}).render();
	            this.gen.once('remove', this.generatorClosed.bind(this));
	            this.gen.once('result', this.generatorResult.bind(this));
	        }
	    },

	    hideGenerator: function() {
	        if (this.gen) {
	            var gen = this.gen;
	            delete this.gen;
	            gen.remove();
	        }
	    },

	    generatorClosed: function() {
	        if (this.gen) {
	            delete this.gen;
	            this.endEdit();
	        }
	    },

	    generatorResult: function(password) {
	        if (this.gen) {
	            delete this.gen;
	            this.endEdit(password);
	        }
	    },

	    setInputHeight: function() {
	        var MinHeight = 18;
	        this.input.height(MinHeight);
	        var newHeight = this.input[0].scrollHeight;
	        if (newHeight <= MinHeight) {
	            newHeight = MinHeight;
	        } else {
	            newHeight += 2;
	        }
	        this.input.height(newHeight);
	    },

	    fieldValueBlur: function() {
	        if (!this.gen && this.input) {
	            this.endEdit(this.input.val());
	        }
	    },

	    fieldValueInput: function(e) {
	        e.stopPropagation();
	        if (this.model.multiline) {
	            this.setInputHeight();
	        }
	    },

	    fieldValueInputClick: function() {
	        if (this.gen) {
	            this.hideGenerator();
	        }
	    },

	    fieldValueInputMouseDown: function(e) {
	        e.stopPropagation();
	    },

	    fieldValueKeydown: function(e) {
	        KeyHandler.reg();
	        e.stopPropagation();
	        var code = e.keyCode || e.which;
	        if (code === Keys.DOM_VK_RETURN) {
	            if (!this.model.multiline || (!e.altKey && !e.shiftKey)) {
	                this.stopListening(Backbone, 'click', this.fieldValueBlur);
	                this.endEdit(e.target.value);
	            }
	        } else if (code === Keys.DOM_VK_ESCAPE) {
	            this.stopListening(Backbone, 'click', this.fieldValueBlur);
	            this.endEdit();
	        } else if (code === Keys.DOM_VK_TAB) {
	            e.preventDefault();
	            this.stopListening(Backbone, 'click', this.fieldValueBlur);
	            this.endEdit(e.target.value, { tab: { field: this.model.name, prev: e.shiftKey } });
	        }
	    },

	    endEdit: function(newVal, extra) {
	        if (this.gen) {
	            this.hideGenerator();
	        }
	        if (!this.editing) {
	            return;
	        }
	        delete this.input;
	        this.stopListening(Backbone, 'click', this.fieldValueBlur);
	        if (typeof newVal === 'string' && this.value instanceof kdbxweb.ProtectedValue) {
	            newVal = kdbxweb.ProtectedValue.fromString(newVal);
	        }
	        if (typeof newVal === 'string') {
	            newVal = $.trim(newVal);
	        }
	        FieldView.prototype.endEdit.call(this, newVal, extra);
	    },

	    render: function() {
	        FieldView.prototype.render.call(this);
	    }
	});

	module.exports = FieldViewText;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    FeatureDetector = __webpack_require__(13),
	    CopyPaste = __webpack_require__(26);

	var FieldView = Backbone.View.extend({
	    template: __webpack_require__(121),

	    events: {
	        'click .details__field-label': 'fieldLabelClick',
	        'click .details__field-value': 'fieldValueClick'
	    },

	    render: function () {
	        this.value = typeof this.model.value === 'function' ? this.model.value() : this.model.value;
	        this.renderTemplate({ editable: !this.readonly, multiline: this.model.multiline, title: this.model.title,
	            canEditTitle: this.model.newField });
	        this.valueEl = this.$el.find('.details__field-value');
	        this.valueEl.html(this.renderValue(this.value));
	        this.labelEl = this.$el.find('.details__field-label');
	        return this;
	    },

	    update: function() {
	        if (typeof this.model.value === 'function') {
	            var newVal = this.model.value();
	            if (!_.isEqual(newVal, this.value) || (this.value && newVal && this.value.toString() !== newVal.toString())) {
	                this.render();
	            }
	        }
	    },

	    fieldLabelClick: function(e) {
	        e.stopImmediatePropagation();
	        var field = this.model.name;
	        if (FeatureDetector.shouldMoveHiddenInputToCopySource()) {
	            var box = this.valueEl[0].getBoundingClientRect();
	            var textValue = this.value && this.value.isProtected ? this.value.getText() : this.getEditValue(this.value);
	            if (!textValue) {
	                return;
	            }
	            CopyPaste.createHiddenInput(textValue, box);
	            //CopyPaste.copy(); // maybe Apple will ever support this?
	            return;
	        }
	        if (field) {
	            var value = this.value || '';
	            if (value && value.isProtected) {
	                var text = value.getText();
	                if (!CopyPaste.simpleCopy) {
	                    CopyPaste.createHiddenInput(text);
	                }
	                CopyPaste.copy(text);
	                return;
	            }
	        }
	        var selection = window.getSelection();
	        var range = document.createRange();
	        range.selectNodeContents(this.valueEl[0]);
	        selection.removeAllRanges();
	        selection.addRange(range);
	        if (CopyPaste.copy(this.valueEl.text())) {
	            selection.removeAllRanges();
	        }
	    },

	    fieldValueClick: function(e) {
	        if (['a', 'input', 'textarea'].indexOf(e.target.tagName.toLowerCase()) >= 0) {
	            return;
	        }
	        var sel = window.getSelection().toString();
	        if (!sel) {
	            this.edit();
	        }
	    },

	    edit: function() {
	        if (this.readonly || this.editing) {
	            return;
	        }
	        this.$el.addClass('details__field--edit');
	        this.startEdit();
	        this.editing = true;
	    },

	    endEdit: function(newVal, extra) {
	        if (!this.editing) {
	            return;
	        }
	        this.editing = false;
	        var textEqual;
	        if (this.value && this.value.isProtected) {
	            textEqual = this.value.equals(newVal);
	        } else if (newVal && newVal.isProtected) {
	            textEqual = newVal.equals(this.value);
	        } else {
	            textEqual = _.isEqual(this.value, newVal);
	        }
	        var protectedEqual = (newVal && newVal.isProtected) === (this.value && this.value.isProtected);
	        var nameChanged = extra && extra.newField;
	        var arg;
	        if (newVal !== undefined && (!textEqual || !protectedEqual || nameChanged)) {
	            arg = { val: newVal, field: this.model.name };
	            if (extra) {
	                _.extend(arg, extra);
	            }
	        } else if (extra) {
	            arg = extra;
	        }
	        if (arg) {
	            arg.sender = this;
	            this.trigger('change', arg);
	        }
	        this.valueEl.html(this.renderValue(this.value));
	        this.$el.removeClass('details__field--edit');
	    }
	});

	module.exports = FieldView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    GroupModel = __webpack_require__(23);

	var GroupCollection = Backbone.Collection.extend({
	    model: GroupModel
	});

	module.exports = GroupCollection;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dropbox = __webpack_require__(54),
	    Alerts = __webpack_require__(11),
	    Launcher = __webpack_require__(7),
	    Logger = __webpack_require__(8),
	    Locale = __webpack_require__(5),
	    Links = __webpack_require__(15);

	var logger = new Logger('dropbox');

	var DropboxKeys = {
	    AppFolder: 'qp7ctun6qt5n9d6',
	    AppFolderKeyParts: ['qp7ctun6', 'qt5n9d6'] // to allow replace key by sed, compare in this way
	};

	var DropboxCustomErrors = {
	    BadKey: 'bad-key'
	};

	function isValidKey() {
	    var isSelfHostedApp = !/^http(s?):\/\/localhost:8085/.test(location.href) &&
	        !/http(s?):\/\/antelle\.github\.io\/keeweb/.test(location.href) &&
	        !/http(s?):\/\/app\.keeweb\.info/.test(location.href);
	    return Launcher || !isSelfHostedApp || DropboxKeys.AppFolder !== DropboxKeys.AppFolderKeyParts.join('');
	}

	var DropboxChooser = function(callback) {
	    this.cb = callback;
	    this.onMessage = this.onMessage.bind(this);
	};

	DropboxChooser.prototype.callback = function(err, res) {
	    if (this.cb) {
	        this.cb(err, res);
	    }
	    this.cb = null;
	};

	DropboxChooser.prototype.choose = function() {
	    var windowFeatures = 'width=640,height=552,left=357,top=100,resizable=yes,location=yes';
	    var url = this.buildUrl();
	    this.popup = window.open(url, 'dropbox', windowFeatures);
	    if (!this.popup) {
	        return this.callback('Failed to open window');
	    }
	    window.addEventListener('message', this.onMessage);
	    this.closeInt = setInterval(this.checkClose.bind(this), 200);
	};

	DropboxChooser.prototype.buildUrl = function() {
	    var urlParams = {
	        origin: encodeURIComponent(window.location.protocol + '//' + window.location.host),
	        'app_key': DropboxKeys.AppFolder,
	        'link_type': 'direct',
	        trigger: 'js',
	        multiselect: 'false',
	        extensions: '',
	        folderselect: 'false',
	        iframe: 'false',
	        version: 2
	    };
	    return 'https://www.dropbox.com/chooser?' + Object.keys(urlParams).map(function(key) {
	        return key + '=' + urlParams[key];
	    }).join('&');
	};

	DropboxChooser.prototype.onMessage = function(e) {
	    if (e.source !== this.popup) {
	        return;
	    }
	    var data = JSON.parse(e.data);
	    switch (data.method) {
	        case 'origin_request':
	            e.source.postMessage(JSON.stringify({ method: 'origin' }), 'https://www.dropbox.com');
	            break;
	        case 'files_selected':
	            this.popup.close();
	            this.success(data.params);
	            break;
	        case 'close_dialog':
	            this.popup.close();
	            break;
	        case 'web_session_error':
	        case 'web_session_unlinked':
	            this.callback(data.method);
	            break;
	        case 'resize':
	            this.popup.resize(data.params);
	            break;
	        case 'error':
	            this.callback(data.params);
	            break;
	    }
	};

	DropboxChooser.prototype.checkClose = function() {
	    if (this.popup.closed) {
	        clearInterval(this.closeInt);
	        window.removeEventListener('message', this.onMessage);
	        if (!this.result) {
	            this.callback('closed');
	        }
	    }
	};

	DropboxChooser.prototype.success = function(params) {
	    /* jshint camelcase:false */
	    if (!params || !params[0] || !params[0].link || params[0].is_dir) {
	        return this.callback('bad result');
	    }
	    this.result = params[0];
	    this.readFile(this.result.link);
	};

	DropboxChooser.prototype.readFile = function(url) {
	    var xhr = new XMLHttpRequest();
	    xhr.addEventListener('load', (function() {
	        this.callback(null, { name: this.result.name, data: xhr.response });
	    }).bind(this));
	    xhr.addEventListener('error', this.callback.bind(this, 'download error'));
	    xhr.addEventListener('abort', this.callback.bind(this, 'download abort'));
	    xhr.open('GET', url);
	    xhr.responseType = 'arraybuffer';
	    xhr.send();
	};

	var DropboxLink = {
	    ERROR_CONFLICT: Dropbox.ApiError.CONFLICT,
	    ERROR_NOT_FOUND: Dropbox.ApiError.NOT_FOUND,
	    _getClient: function(complete) {
	        if (this._dropboxClient && this._dropboxClient.isAuthenticated()) {
	            complete(null, this._dropboxClient);
	            return;
	        }
	        if (!isValidKey()) {
	            Alerts.error({
	                icon: 'dropbox',
	                header: Locale.dropboxNotConfigured,
	                body: Locale.dropboxNotConfiguredBody1 + '<br/>' + Locale.dropboxNotConfiguredBody2.replace('{}',
	                        '<a href="' + Links.SelfHostedDropbox + '" target="blank">' + Locale.dropboxNotConfiguredLink + '</a>')
	            });
	            return complete(DropboxCustomErrors.BadKey);
	        }
	        var client = new Dropbox.Client({key: DropboxKeys.AppFolder});
	        if (Launcher) {
	            client.authDriver(new Dropbox.AuthDriver.Electron({ receiverUrl: location.href }));
	        } else {
	            client.authDriver(new Dropbox.AuthDriver.Popup({ receiverUrl: location.href }));
	        }
	        client.authenticate((function(error, client) {
	            if (!error) {
	                this._dropboxClient = client;
	            }
	            complete(error, client);
	        }).bind(this));
	    },

	    _handleUiError: function(err, alertCallback, callback) {
	        if (!alertCallback) {
	            if (!Alerts.alertDisplayed) {
	                alertCallback = Alerts.error.bind(Alerts);
	            }
	        }
	        logger.error('Dropbox error', err);
	        switch (err.status) {
	            case Dropbox.ApiError.INVALID_TOKEN:
	                if (!Alerts.alertDisplayed) {
	                    Alerts.yesno({
	                        icon: 'dropbox',
	                        header: Locale.dropboxLogin,
	                        body: Locale.dropboxLoginBody,
	                        buttons: [{result: 'yes', title: Locale.alertSignIn}, {result: '', title: Locale.alertCancel}],
	                        success: (function () {
	                            this.authenticate(function (err) { callback(!err); });
	                        }).bind(this),
	                        cancel: function () {
	                            callback(false);
	                        }
	                    });
	                    return;
	                }
	                break;
	            case Dropbox.ApiError.NOT_FOUND:
	                alertCallback({
	                    header: Locale.dropboxSyncError,
	                    body: Locale.dropboxNotFoundBody
	                });
	                break;
	            case Dropbox.ApiError.OVER_QUOTA:
	                alertCallback({
	                    header: Locale.dropboxFull,
	                    body: Locale.dropboxFullBody
	                });
	                break;
	            case Dropbox.ApiError.RATE_LIMITED:
	                alertCallback({
	                    header: Locale.dropboxSyncError,
	                    body: Locale.dropboxRateLimitedBody
	                });
	                break;
	            case Dropbox.ApiError.NETWORK_ERROR:
	                alertCallback({
	                    header: Locale.dropboxNetError,
	                    body: Locale.dropboxNetErrorBody
	                });
	                break;
	            case Dropbox.ApiError.INVALID_PARAM:
	            case Dropbox.ApiError.OAUTH_ERROR:
	            case Dropbox.ApiError.INVALID_METHOD:
	                alertCallback({
	                    header: Locale.dropboxSyncError,
	                    body: Locale.dropboxErrorBody + err.status
	                });
	                break;
	            case Dropbox.ApiError.CONFLICT:
	                break;
	            default:
	                alertCallback({
	                    header: Locale.dropboxSyncError,
	                    body: Locale.dropboxErrorRepeatBody + err
	                });
	                break;
	        }
	        callback(false);
	    },

	    _callAndHandleError: function(callName, args, callback, errorAlertCallback) {
	        var that = this;
	        this._getClient(function(err, client) {
	            if (err) {
	                return callback(err);
	            }
	            var ts = logger.ts();
	            logger.debug('Call', callName);
	            client[callName].apply(client, args.concat(function(err) {
	                logger.debug('Result', callName, logger.ts(ts), arguments);
	                if (err) {
	                    that._handleUiError(err, errorAlertCallback, function(repeat) {
	                        if (repeat) {
	                            that._callAndHandleError(callName, args, callback, errorAlertCallback);
	                        } else {
	                            callback(err);
	                        }
	                    });
	                } else {
	                    callback.apply(null, arguments);
	                }
	            }));
	        });
	    },

	    authenticate: function(copmlete) {
	        this._getClient(function(err) { copmlete(err); });
	    },

	    receive: function() {
	        Dropbox.AuthDriver.Popup.oauthReceiver();
	    },

	    saveFile: function(fileName, data, rev, complete, alertCallback) {
	        if (rev) {
	            var opts = typeof rev === 'string' ? { lastVersionTag: rev, noOverwrite: true, noAutoRename: true } : undefined;
	            this._callAndHandleError('writeFile', [fileName, data, opts], complete, alertCallback);
	        } else {
	            this.getFileList((function(err, files) {
	                if (err) { return complete(err); }
	                var exists = files.some(function(file) { return file.toLowerCase() === fileName.toLowerCase(); });
	                if (exists) { return complete({ exists: true }); }
	                this._callAndHandleError('writeFile', [fileName, data], complete);
	            }).bind(this));
	        }
	    },

	    openFile: function(fileName, complete, errorAlertCallback) {
	        this._callAndHandleError('readFile', [fileName, { arrayBuffer: true }], complete, errorAlertCallback);
	    },

	    stat: function(fileName, complete, errorAlertCallback) {
	        this._callAndHandleError('stat', [fileName], complete, errorAlertCallback);
	    },

	    getFileList: function(complete) {
	        this._callAndHandleError('readdir', [''], function(err, files, dirStat, filesStat) {
	            if (files) {
	                files = files.filter(function(f) { return /\.kdbx$/i.test(f); });
	            }
	            complete(err, files, dirStat, filesStat);
	        });
	    },

	    deleteFile: function(fileName, complete) {
	        this._callAndHandleError('remove', [fileName], complete);
	    },

	    chooseFile: function(callback) {
	        new DropboxChooser(callback).choose();
	    }
	};

	module.exports = DropboxLink;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var MenuItemModel = __webpack_require__(46),
	    EntryModel = __webpack_require__(32),
	    IconMap = __webpack_require__(29),
	    IconUrl = __webpack_require__(34),
	    kdbxweb = __webpack_require__(9),
	    KdbxIcons = kdbxweb.Consts.Icons,
	    GroupCollection, EntryCollection;

	var GroupModel = MenuItemModel.extend({
	    defaults: _.extend({}, MenuItemModel.prototype.defaults, {
	        iconId: 0,
	        entries: null,
	        filterKey: 'group',
	        editable: true,
	        top: false,
	        drag: true,
	        drop: true,
	        enableSearching: true
	    }),

	    initialize: function() {
	        if (!GroupCollection) { GroupCollection = __webpack_require__(21); }
	        if (!EntryCollection) { EntryCollection = __webpack_require__(38); }
	    },

	    setGroup: function(group, file, parentGroup) {
	        var isRecycleBin = file.db.meta.recycleBinUuid && file.db.meta.recycleBinUuid.id === group.uuid.id;
	        this.set({
	            id: group.uuid.id,
	            expanded: group.expanded,
	            visible: !isRecycleBin,
	            items: new GroupCollection(),
	            entries: new EntryCollection(),
	            filterValue: group.uuid.id,
	            enableSearching: group.enableSearching,
	            top: !parentGroup,
	            drag: !!parentGroup
	        }, { silent: true });
	        this.group = group;
	        this.file = file;
	        this.parentGroup = parentGroup;
	        this._fillByGroup(true);
	        var items = this.get('items'),
	            entries = this.get('entries');
	        group.groups.forEach(function(subGroup) {
	            var existing = file.getGroup(subGroup.uuid);
	            if (existing) {
	                existing.setGroup(subGroup, file, this);
	                items.add(existing);
	            } else {
	                items.add(GroupModel.fromGroup(subGroup, file, this));
	            }
	        }, this);
	        group.entries.forEach(function(entry) {
	            var existing = file.getEntry(entry.uuid);
	            if (existing) {
	                existing.setEntry(entry, this, file);
	                entries.add(existing);
	            } else {
	                entries.add(EntryModel.fromEntry(entry, this, file));
	            }
	        }, this);
	    },

	    _fillByGroup: function(silent) {
	        this.set({
	            title: this.group.name,
	            iconId: this.group.icon,
	            icon: this._iconFromId(this.group.icon),
	            customIcon: this._buildCustomIcon(),
	            customIconId: this.group.customIcon ? this.group.customIcon.toString() : null
	        }, { silent: silent });
	    },

	    _iconFromId: function(id) {
	        if (id === KdbxIcons.Folder || id === KdbxIcons.FolderOpen) {
	            return undefined;
	        }
	        return IconMap[id];
	    },

	    _buildCustomIcon: function() {
	        this.customIcon = null;
	        if (this.group.customIcon) {
	            return IconUrl.toDataUrl(this.file.db.meta.customIcons[this.group.customIcon]);
	        }
	        return null;
	    },

	    _groupModified: function() {
	        this.file.setModified();
	        if (this.isJustCreated) {
	            this.isJustCreated = false;
	        }
	        this.group.times.update();
	    },

	    forEachGroup: function(callback, includeDisabled) {
	        var result = true;
	        this.get('items').forEach(function(group) {
	            if (includeDisabled || group.group.enableSearching !== false) {
	                result = callback(group) !== false && group.forEachGroup(callback, includeDisabled) !== false;
	            }
	        });
	        return result;
	    },

	    forEachOwnEntry: function(filter, callback) {
	        this.get('entries').forEach(function(entry) {
	            if (entry.matches(filter)) {
	                callback(entry, this);
	            }
	        });
	    },

	    getOwnSubGroups: function() {
	        return this.group.groups;
	    },

	    addEntry: function(entry) {
	        this.get('entries').add(entry);
	    },

	    addGroup: function(group) {
	        this.get('items').add(group);
	    },

	    setName: function(name) {
	        this._groupModified();
	        this.group.name = name;
	        this._fillByGroup();
	    },

	    setIcon: function(iconId) {
	        this._groupModified();
	        this.group.icon = iconId;
	        this.group.customIcon = undefined;
	        this._fillByGroup();
	    },

	    setCustomIcon: function(customIconId) {
	        this._groupModified();
	        this.group.customIcon = new kdbxweb.KdbxUuid(customIconId);
	        this._fillByGroup();
	    },

	    setExpanded: function(expanded) {
	        this._groupModified();
	        this.group.expanded = expanded;
	        this.set('expanded', expanded);
	    },

	    setEnableSearching: function(enabled) {
	        this._groupModified();
	        this.group.enableSearching = enabled;
	        this.set('enableSearching', enabled);
	    },

	    moveToTrash: function() {
	        this.file.setModified();
	        this.file.db.remove(this.group);
	        this.file.reload();
	    },

	    deleteFromTrash: function() {
	        this.file.db.move(this.group, null);
	        this.file.reload();
	    },

	    removeWithoutHistory: function() {
	        var ix = this.parentGroup.group.groups.indexOf(this.group);
	        if (ix >= 0) {
	            this.parentGroup.group.groups.splice(ix, 1);
	        }
	        this.file.reload();
	    },

	    moveHere: function(object) {
	        if (!object || object.id === this.id || object.file !== this.file) {
	            return;
	        }
	        this.file.setModified();
	        if (object instanceof GroupModel) {
	            for (var parent = this; parent; parent = parent.parentGroup) {
	                if (object === parent) {
	                    return;
	                }
	            }
	            if (this.group.groups.indexOf(object.group) >= 0) {
	                return;
	            }
	            this.file.db.move(object.group, this.group);
	            this.file.reload();
	        } else if (object instanceof EntryModel) {
	            if (this.group.entries.indexOf(object.entry) >= 0) {
	                return;
	            }
	            this.file.db.move(object.entry, this.group);
	            this.file.reload();
	        }
	    }
	});

	GroupModel.fromGroup = function(group, file, parentGroup) {
	    var model = new GroupModel();
	    model.setGroup(group, file, parentGroup);
	    return model;
	};

	GroupModel.newGroup = function(group, file) {
	    var model = new GroupModel();
	    var grp = file.db.createGroup(group.group);
	    model.setGroup(grp, file, group);
	    model.group.times.update();
	    model.isJustCreated = true;
	    group.addGroup(model);
	    file.setModified();
	    file.reload();
	    return model;
	};

	module.exports = GroupModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    SettingsStore = __webpack_require__(28);

	var UpdateModel = Backbone.Model.extend({
	    defaults: {
	        lastSuccessCheckDate: null,
	        lastCheckDate: null,
	        lastVersion: null,
	        lastVersionReleaseDate: null,
	        lastCheckError: null,
	        lastCheckUpdMin: null,
	        status: null,
	        updateStatus: null,
	        updateError: null,
	        updateManual: false
	    },

	    initialize: function() {
	    },

	    load: function() {
	        var data = SettingsStore.load('update-info');
	        if (data) {
	            try {
	                _.each(data, function(val, key) {
	                    if (/Date$/.test(key)) {
	                        data[key] = val ? new Date(val) : null;
	                    }
	                });
	                this.set(data, { silent: true });
	            } catch (e) { /* failed to load model */ }
	        }
	    },

	    save: function() {
	        var attr = _.clone(this.attributes);
	        Object.keys(attr).forEach(function(key) {
	            if (key.lastIndexOf('update', 0) === 0) {
	                delete attr[key];
	            }
	        });
	        SettingsStore.save('update-info', attr);
	    }
	});

	UpdateModel.instance = new UpdateModel();
	UpdateModel.instance.load();

	module.exports = UpdateModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Launcher = __webpack_require__(7);

	var RuntimeInfo = {
	    version: '1.0.4',
	    buildDate: '2016-03-21',
	    commit: 'c021028',
	    userAgent: navigator.userAgent,
	    launcher: Launcher ? Launcher.name + ' v' + Launcher.version : ''
	};

	module.exports = RuntimeInfo;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var FeatureDetector = __webpack_require__(13),
	    Launcher = __webpack_require__(7),
	    AppSettingsModel = __webpack_require__(12);

	var CopyPaste = {
	    simpleCopy: !!Launcher,

	    copy: function(text) {
	        if (Launcher) {
	            Launcher.setClipboardText(text);
	            var clipboardSeconds = AppSettingsModel.instance.get('clipboardSeconds');
	            if (clipboardSeconds > 0) {
	                setTimeout(function () {
	                    if (Launcher.getClipboardText() === text) {
	                        Launcher.clearClipboardText();
	                    }
	                }, clipboardSeconds * 1000);
	            }
	            return {success: true, seconds: clipboardSeconds};
	        } else {
	            try {
	                if (document.execCommand('copy')) {
	                    return {success: true};
	                }
	            } catch (e) { }
	            return false;
	        }
	    },

	    createHiddenInput: function(text, pos) {
	        var hiddenInput = $('<input/>')
	            .val(text)
	            .attr({ type: 'text', 'class': pos ? '' : 'hide-by-pos' })
	            .appendTo(document.body);
	        if (FeatureDetector.canCopyReadonlyInput()) {
	            hiddenInput.attr('readonly', true);
	        }
	        if (pos) {
	            hiddenInput.css({ position: 'absolute', zIndex: 100, padding: '0 .6em',
	                border: 'none', background: 'transparent', color: 'transparent',
	                left: pos.left, top: pos.top, width: pos.width, height: pos.height });
	        }
	        hiddenInput[0].selectionStart = 0;
	        hiddenInput[0].selectionEnd = text.length;
	        hiddenInput.focus();
	        hiddenInput.on({
	            'copy cut paste': function() { setTimeout(function() { hiddenInput.blur(); }, 0); },
	            blur: function() { hiddenInput.remove(); }
	        });
	    }
	};

	module.exports = CopyPaste;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    AppSettingsModel = __webpack_require__(12);

	var IdleTracker = {
	    idleMinutes: 0,
	    init: function() {
	        setInterval(this.minuteTick.bind(this), 1000 * 60);
	    },
	    minuteTick: function() {
	        if (++this.idleMinutes === AppSettingsModel.instance.get('idleMinutes')) {
	            Backbone.trigger('user-idle');
	        }
	    },
	    regUserAction: function() {
	        this.idleMinutes = 0;
	    }
	};

	module.exports = IdleTracker;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Launcher = __webpack_require__(7),
	    StringUtil = __webpack_require__(84),
	    Logger = __webpack_require__(8);

	var logger = new Logger('settings');

	var SettingsStore = {
	    fileName: function(key) {
	        return key + '.json';
	    },

	    load: function(key) {
	        try {
	            if (Launcher) {
	                var settingsFile = Launcher.getUserDataPath(this.fileName(key));
	                if (Launcher.fileExists(settingsFile)) {
	                    return JSON.parse(Launcher.readFile(settingsFile, 'utf8'));
	                }
	            } else {
	                var data = localStorage[StringUtil.camelCase(key)];
	                return data ? JSON.parse(data) : undefined;
	            }
	        } catch (e) {
	            logger.error('Error loading ' + key, e);
	        }
	        return null;
	    },

	    save: function(key, data) {
	        try {
	            if (Launcher) {
	                Launcher.writeFile(Launcher.getUserDataPath(this.fileName(key)), JSON.stringify(data));
	            } else if (typeof localStorage !== 'undefined') {
	                localStorage[StringUtil.camelCase(key)] = JSON.stringify(data);
	            }
	        } catch (e) {
	            logger.error('Error saving ' + key, e);
	        }
	    }
	};

	module.exports = SettingsStore;


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	var IconMap = [
	    'key', 'globe', 'exclamation-triangle', 'server', 'thumb-tack',
	    'comments-o', 'puzzle-piece', 'pencil-square-o', 'plug', 'newspaper-o',
	    'paperclip', 'camera', 'wifi', 'link', 'battery-three-quarters',
	    'barcode', 'certificate', 'bullseye', 'desktop', 'envelope-o',
	    'cog', 'clipboard', 'paper-plane-o', 'television', 'bolt',
	    'inbox', 'floppy-o', 'hdd-o', 'dot-circle-o', 'expeditedssl',
	    'terminal', 'print', 'map-signs', 'flag-checkered', 'wrench',
	    'laptop', 'archive', 'credit-card', 'windows', 'clock-o',
	    'search', 'flask', 'gamepad', 'trash-o', 'sticky-note-o',
	    'ban', 'question-circle', 'cube', 'folder-o', 'folder-open-o',
	    'database', 'unlock-alt', 'lock', 'check', 'pencil',
	    'picture-o', 'book', 'list-alt', 'user-secret', 'cutlery',
	    'home', 'star-o', 'linux', 'map-pin', 'apple',
	    'wikipedia-w', 'usd', 'calendar', 'mobile'
	];

	module.exports = IconMap;


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	var Timeouts = {
	    AutoSync: 30 * 1000 * 60,
	    CopyTip: 1500,
	    AutoHideHint: 3000,
	    FileChangeSync: 3000
	};

	module.exports = Timeouts;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1);

	var Resizable = {
	    listenDrag: function(dragView) {
	        this.listenTo(dragView, 'dragstart', this.dragStart);
	        this.listenTo(dragView, 'drag', this.drag);
	        this.listenTo(dragView, 'autosize', this.autoSize);
	    },

	    dragStart: function(e) {
	        this._dragInfo = this.getDragInfo(e.coord);
	    },

	    drag: function(e) {
	        var dragInfo = this._dragInfo;
	        var size = dragInfo.startSize + e.offset;
	        size = Math.max(dragInfo.min, Math.min(dragInfo.max, size));
	        this.$el[dragInfo.prop](size);
	        this.trigger('view-resize', size);
	        Backbone.trigger('page-geometry', { source: 'resizable' });
	    },

	    autoSize: function(e) {
	        var dragInfo = this.getDragInfo(e.coord);
	        if (dragInfo.auto !== undefined) {
	            this.$el.css(dragInfo.prop, dragInfo.auto);
	        } else {
	            this.$el.css(dragInfo.prop, 'auto');
	        }
	        this.fixSize(dragInfo);
	        this.trigger('view-resize', null);
	        Backbone.trigger('page-geometry', { source: 'resizable' });
	    },

	    fixSize: function(cfg) {
	        var size = this.$el[cfg.prop]();
	        var newSize = Math.max(cfg.min, Math.min(cfg.max, size));
	        if (newSize !== size) {
	            this.$el[cfg.prop](size);
	        }
	    },

	    // TODO: check size on window resize
	    //checkSize: function() {
	    //    if (this.maxWidth) {
	    //        this.fixSize(this.getDragInfo('x'));
	    //    }
	    //    if (this.maxHeight) {
	    //        this.fixSize(this.getDragInfo('y'));
	    //    }
	    //},

	    getDragInfo: function(coord) {
	        var prop = coord === 'x' ? 'Width' : 'Height',
	            propLower = prop.toLowerCase(),
	            min = this.getSizeProp('min' + prop),
	            max = this.getSizeProp('max' + prop),
	            auto = this.getSizeProp('auto' + prop) || 'auto',
	            startSize = this.$el[propLower]();
	        return { startSize: startSize, prop: propLower, min: min, max: max, auto: auto };
	    },

	    getSizeProp: function(prop) {
	        var member = this[prop];
	        return typeof member === 'function' ? member.call(this) : member;
	    }
	};

	module.exports = Resizable;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    AttachmentModel = __webpack_require__(72),
	    IconMap = __webpack_require__(29),
	    Color = __webpack_require__(81),
	    IconUrl = __webpack_require__(34),
	    kdbxweb = __webpack_require__(9);

	var EntryModel = Backbone.Model.extend({
	    defaults: {},
	    urlRegex: /^https?:\/\//i,

	    builtInFields: ['Title', 'Password', 'Notes', 'URL', 'UserName'],

	    initialize: function() {
	    },

	    setEntry: function(entry, group, file) {
	        this.entry = entry;
	        this.group = group;
	        this.file = file;
	        if (this.id === entry.uuid.id) {
	            this._checkUpdatedEntry();
	        }
	        this._fillByEntry();
	    },

	    _fillByEntry: function() {
	        var entry = this.entry;
	        this.set({id: entry.uuid.id}, {silent: true});
	        this.fileName = this.file.get('name');
	        this.title = entry.fields.Title || '';
	        this.password = entry.fields.Password || kdbxweb.ProtectedValue.fromString('');
	        this.notes = entry.fields.Notes || '';
	        this.url = entry.fields.URL || '';
	        this.displayUrl = this._getDisplayUrl(entry.fields.URL);
	        this.user = entry.fields.UserName || '';
	        this.iconId = entry.icon;
	        this.icon = this._iconFromId(entry.icon);
	        this.tags = entry.tags;
	        this.color = this._colorToModel(entry.bgColor) || this._colorToModel(entry.fgColor);
	        this.fields = this._fieldsToModel(entry.fields);
	        this.attachments = this._attachmentsToModel(entry.binaries);
	        this.created = entry.times.creationTime;
	        this.updated = entry.times.lastModTime;
	        this.expires = entry.times.expires ? entry.times.expiryTime : undefined;
	        this.expired = entry.times.expires && entry.times.expiryTime <= new Date();
	        this.historyLength = entry.history.length;
	        this._buildCustomIcon();
	        this._buildSearchText();
	        this._buildSearchTags();
	        this._buildSearchColor();
	    },

	    _checkUpdatedEntry: function() {
	        if (this.isJustCreated) {
	            this.isJustCreated = false;
	        }
	        if (this.unsaved && +this.updated !== +this.entry.times.lastModTime) {
	            this.unsaved = false;
	        }
	    },

	    _buildSearchText: function() {
	        var text = '';
	        _.forEach(this.entry.fields, function(value) {
	            if (typeof value === 'string') {
	                text += value.toLowerCase() + '\n';
	            }
	        });
	        this.entry.tags.forEach(function(tag) {
	            text += tag.toLowerCase() + '\n';
	        });
	        this.attachments.forEach(function(att) {
	            text += att.title.toLowerCase() + '\n';
	        });
	        this.searchText = text;
	    },

	    _buildCustomIcon: function() {
	        this.customIcon = null;
	        this.customIconId = null;
	        if (this.entry.customIcon) {
	            this.customIcon = IconUrl.toDataUrl(this.file.db.meta.customIcons[this.entry.customIcon]);
	            this.customIconId = this.entry.customIcon.toString();
	        }
	    },

	    _buildSearchTags: function() {
	        this.searchTags = this.entry.tags.map(function(tag) { return tag.toLowerCase(); });
	    },

	    _buildSearchColor: function() {
	        this.searchColor = this.color;
	    },

	    _iconFromId: function(id) {
	        return IconMap[id];
	    },

	    _getDisplayUrl: function(url) {
	        if (!url) {
	            return '';
	        }
	        return url.replace(this.urlRegex, '');
	    },

	    _colorToModel: function(color) {
	        return color ? Color.getNearest(color) : null;
	    },

	    _fieldsToModel: function(fields) {
	        return _.omit(fields, this.builtInFields);
	    },

	    _attachmentsToModel: function(binaries) {
	        var att = [];
	        _.forEach(binaries, function(data, title) {
	            if (data && data.ref) {
	                data = this.file.db.meta.binaries[data.ref];
	            }
	            if (data) {
	                att.push(AttachmentModel.fromAttachment({data: data, title: title}));
	            }
	        }, this);
	        return att;
	    },

	    _entryModified: function() {
	        if (!this.unsaved) {
	            this.unsaved = true;
	            this.entry.pushHistory();
	            this.file.setModified();
	        }
	        if (this.isJustCreated) {
	            this.isJustCreated = false;
	        }
	        this.entry.times.update();
	    },

	    matches: function(filter) {
	        return !filter ||
	            (!filter.tagLower || this.searchTags.indexOf(filter.tagLower) >= 0) &&
	            (!filter.textLower || (filter.advanced ? this.matchesAdv(filter) : this.searchText.indexOf(filter.textLower) >= 0)) &&
	            (!filter.color || filter.color === true && this.searchColor || this.searchColor === filter.color);
	    },

	    matchesAdv: function(filter) {
	        var adv = filter.advanced;
	        var search, match;
	        if (adv.regex) {
	            try { search = new RegExp(filter.text, adv.cs ? '' : 'i'); }
	            catch (e) { return false; }
	            match = this.matchRegex;
	        } else if (adv.cs) {
	            search = filter.text;
	            match = this.matchString;
	        } else {
	            search = filter.textLower;
	            match = this.matchStringLower;
	        }
	        if (this.matchEntry(this.entry, adv, match, search)) {
	            return true;
	        }
	        if (adv.history) {
	            for (var i = 0, len = this.entry.history.length; i < len; i++) {
	                if (this.matchEntry(this.entry.history[0], adv, match, search)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    },

	    matchString: function(str, find) {
	        if (str.isProtected) {
	            return str.includes(find);
	        }
	        return str.indexOf(find) >= 0;
	    },

	    matchStringLower: function(str, findLower) {
	        if (str.isProtected) {
	            return str.includesLower(findLower);
	        }
	        return str.toLowerCase().indexOf(findLower) >= 0;
	    },

	    matchRegex: function(str, regex) {
	        if (str.isProtected) {
	            str = str.getText();
	        }
	        return regex.test(str);
	    },

	    matchEntry: function(entry, adv, compare, search) {
	        var matchField = this.matchField;
	        if (adv.user && matchField(entry, 'UserName', compare, search)) {
	            return true;
	        }
	        if (adv.url && matchField(entry, 'URL', compare, search)) {
	            return true;
	        }
	        if (adv.notes && matchField(entry, 'Notes', compare, search)) {
	            return true;
	        }
	        if (adv.pass && matchField(entry, 'Password', compare, search)) {
	            return true;
	        }
	        if (adv.other && matchField(entry, 'Title', compare, search)) {
	            return true;
	        }
	        var matches = false;
	        if (adv.other || adv.protect) {
	            var builtInFields = this.builtInFields;
	            var fieldNames = Object.keys(entry.fields);
	            matches = fieldNames.some(function (field) {
	                if (builtInFields.indexOf(field) >= 0) {
	                    return false;
	                }
	                if (typeof entry.fields[field] === 'string') {
	                    return adv.other && matchField(entry, field, compare, search);
	                } else {
	                    return adv.protect && matchField(entry, field, compare, search);
	                }
	            });
	        }
	        return matches;
	    },

	    matchField: function(entry, field, compare, search) {
	        var val = entry.fields[field];
	        return val ? compare(val, search) : false;
	    },

	    setColor: function(color) {
	        this._entryModified();
	        this.entry.bgColor = Color.getKnownBgColor(color);
	        this._fillByEntry();
	    },

	    setIcon: function(iconId) {
	        this._entryModified();
	        this.entry.icon = iconId;
	        this.entry.customIcon = undefined;
	        this._fillByEntry();
	    },

	    setCustomIcon: function(customIconId) {
	        this._entryModified();
	        this.entry.customIcon = new kdbxweb.KdbxUuid(customIconId);
	        this._fillByEntry();
	    },

	    setExpires: function(dt) {
	        this._entryModified();
	        this.entry.times.expiryTime = dt instanceof Date ? dt : undefined;
	        this.entry.times.expires = !!dt;
	        this._fillByEntry();
	    },

	    setTags: function(tags) {
	        this._entryModified();
	        this.entry.tags = tags;
	        this._fillByEntry();
	    },

	    setField: function(field, val) {
	        this._entryModified();
	        var hasValue = val && (typeof val === 'string' || val.isProtected && val.byteLength);
	        if (hasValue || this.builtInFields.indexOf(field) >= 0) {
	            this.entry.fields[field] = val;
	        } else {
	            delete this.entry.fields[field];
	        }
	        this._fillByEntry();
	    },

	    hasField: function(field) {
	        return this.entry.fields.hasOwnProperty(field);
	    },

	    addAttachment: function(name, data) {
	        this._entryModified();
	        var binaryId;
	        for (var i = 0; ; i++) {
	            if (!this.file.db.meta.binaries[i]) {
	                binaryId = i.toString();
	                break;
	            }
	        }
	        this.file.db.meta.binaries[binaryId] = data;
	        this.entry.binaries[name] = { ref: binaryId };
	        this._fillByEntry();
	    },

	    removeAttachment: function(name) {
	        this._entryModified();
	        delete this.entry.binaries[name];
	        this._fillByEntry();
	    },

	    getHistory: function() {
	        var history = this.entry.history.map(function(rec) {
	            return EntryModel.fromEntry(rec, this.group, this.file);
	        }, this);
	        history.push(this);
	        history.sort(function(x, y) { return x.updated - y.updated; });
	        return history;
	    },

	    deleteHistory: function(historyEntry) {
	        var ix = this.entry.history.indexOf(historyEntry);
	        if (ix >= 0) {
	            this.entry.removeHistory(ix);
	        }
	        this._fillByEntry();
	    },

	    revertToHistoryState: function(historyEntry) {
	        var ix = this.entry.history.indexOf(historyEntry);
	        if (ix < 0) {
	            return;
	        }
	        this.entry.pushHistory();
	        this.unsaved = true;
	        this.file.setModified();
	        this.entry.fields = {};
	        this.entry.binaries = {};
	        this.entry.copyFrom(historyEntry);
	        this._entryModified();
	        this._fillByEntry();
	    },

	    discardUnsaved: function() {
	        if (this.unsaved && this.entry.history.length) {
	            this.unsaved = false;
	            var historyEntry = this.entry.history[this.entry.history.length - 1];
	            this.entry.removeHistory(this.entry.history.length - 1);
	            this.entry.fields = {};
	            this.entry.binaries = {};
	            this.entry.copyFrom(historyEntry);
	            this._fillByEntry();
	        }
	    },

	    moveToTrash: function() {
	        this.file.setModified();
	        if (this.isJustCreated) {
	            this.isJustCreated = false;
	        }
	        this.file.db.remove(this.entry);
	        this.file.reload();
	    },

	    deleteFromTrash: function() {
	        this.file.setModified();
	        this.file.db.move(this.entry, null);
	        this.file.reload();
	    },

	    removeWithoutHistory: function() {
	        var ix = this.group.group.entries.indexOf(this.entry);
	        if (ix >= 0) {
	            this.group.group.entries.splice(ix, 1);
	        }
	        this.file.reload();
	    }
	});

	EntryModel.fromEntry = function(entry, group, file) {
	    var model = new EntryModel();
	    model.setEntry(entry, group, file);
	    return model;
	};

	EntryModel.newEntry = function(group, file) {
	    var model = new EntryModel();
	    var entry = file.db.createEntry(group.group);
	    model.setEntry(entry, group, file);
	    model.entry.times.update();
	    model.unsaved = true;
	    model.isJustCreated = true;
	    group.addEntry(model);
	    file.setModified();
	    return model;
	};

	module.exports = EntryModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    MenuItemCollection = __webpack_require__(39);

	var MenuItemModel = Backbone.Model.extend({
	    defaults: {
	        items: null,
	        scrollable: false,
	        grow: false,
	        drag: false
	    },

	    defaultItems: undefined,

	    initialize: function(items) {
	        this.set('items', new MenuItemCollection(items || this.defaultItems));
	    },

	    addItem: function(item) {
	        this.get('items').add(item);
	        this.trigger('change-items');
	    },

	    removeAllItems: function() {
	        this.get('items').reset(this.defaultItems);
	        this.trigger('change-items');
	    },

	    removeByFile: function(file, skipEvent) {
	        var items = this.get('items');
	        var toRemove;
	        items.each(function(item) {
	            if (item.file === file || item.get('file') === file) {
	                toRemove = item;
	            }
	        });
	        if (toRemove) {
	            items.remove(toRemove);
	        }
	        if (!skipEvent) {
	            this.trigger('change-items');
	        }
	    },

	    setItems: function(items) {
	        this.get('items').reset(items);
	        this.trigger('change-items');
	    }
	});

	module.exports = MenuItemModel;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var kdbxweb = __webpack_require__(9);

	var IconUrl = {
	    toDataUrl: function(iconData) {
	        return iconData ? 'data:image/png;base64,' + kdbxweb.ByteUtils.bytesToBase64(iconData) : null;
	    }
	};

	module.exports = IconUrl;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var kdbxweb = __webpack_require__(9);

	var PasswordGenerator = {
	    charRanges: {
	        upper: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
	        lower: 'abcdefghijkmnpqrstuvwxyz',
	        digits: '123456789',
	        special: '!@#$%^&*_+-=,./?;:`"~\'\\',
	        brackets: '(){}[]<>',
	        high: '¡¢£¤¥¦§©ª«¬®¯°±²³´µ¶¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ',
	        ambiguous: 'O0oIl'
	    },
	    generate: function(opts) {
	        if (!opts || typeof opts.length !== 'number' || opts.length < 0) {
	            return '';
	        }
	        var ranges = Object.keys(this.charRanges)
	            .filter(function(r) { return opts[r]; })
	            .map(function(r) { return this.charRanges[r]; }, this);
	        if (!ranges.length) {
	            return '';
	        }
	        var randomBytes = kdbxweb.Random.getBytes(opts.length);
	        var chars = [];
	        for (var i = 0; i < opts.length; i++) {
	            var range = ranges[i % ranges.length];
	            var rand = Math.round(Math.random() * 1000) + randomBytes[i];
	            chars.push(range[rand % range.length]);
	        }
	        return _.shuffle(chars).join('');
	    },
	    present: function(length) {
	        return new Array(length + 1).join('•');
	    }
	};

	module.exports = PasswordGenerator;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    EntryModel = __webpack_require__(32),
	    Comparators = __webpack_require__(82);

	var EntryCollection = Backbone.Collection.extend({
	    model: EntryModel,

	    comparator: function() {},

	    comparators: {
	        'title': Comparators.stringComparator('title', true),
	        '-title': Comparators.stringComparator('title', false),
	        'website': Comparators.stringComparator('url', true),
	        '-website': Comparators.stringComparator('url', false),
	        'user': Comparators.stringComparator('user', true),
	        '-user': Comparators.stringComparator('user', false),
	        'created': Comparators.dateComparator('created', true),
	        '-created': Comparators.dateComparator('created', false),
	        'updated': Comparators.dateComparator('updated', true),
	        '-updated': Comparators.dateComparator('updated', false),
	        '-attachments': function(x, y) { return this.attachmentSortVal(x).localeCompare(this.attachmentSortVal(y)); }
	    },

	    defaultComparator: 'title',

	    initialize: function() {
	        this.comparator = this.comparators[this.defaultComparator];
	    },

	    sortEntries: function(comparator) {
	        this.comparator = this.comparators[comparator] || this.comparators[this.defaultComparator];
	        this.sort();
	    },

	    attachmentSortVal: function(entry) {
	        var att = entry.attachments;
	        var str = att.length ? String.fromCharCode(64 + att.length) : 'Z';
	        if (att[0]) {
	            str += att[0].title;
	        }
	        return str;
	    }
	});

	module.exports = EntryCollection;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    MenuItemModel = __webpack_require__(46);

	var MenuItemCollection = Backbone.Collection.extend({
	    model: MenuItemModel
	});

	module.exports = MenuItemCollection;


/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	var DragDropInfo = {
	    dragObject: null
	};

	module.exports = DragDropInfo;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var kdbxweb = __webpack_require__(9);

	var SecureInput = function() {
	    this.el = null;
	    this.minChar = 0x1400 + Math.round(Math.random() * 100);
	    this.maxLen = 128;
	    this.length = 0;
	    this.pseudoValue = '';
	    this.salt = new Uint32Array(0);
	};

	SecureInput.prototype.setElement = function(el) {
	    this.el = el;
	    this.el.val(this.pseudoValue);
	    this.el.on('input', this._input.bind(this));
	};

	SecureInput.prototype.reset = function() {
	    this.el = null;
	    this.length = 0;
	    this.pseudoValue = '';

	    if (this.salt) {
	        for (var i = 0; i < this.salt.length; i++) {
	            this.salt[i] = 0;
	        }
	    }
	    this.salt = new Uint32Array(0);
	};

	SecureInput.prototype._input = function() {
	    var selStart = this.el[0].selectionStart;
	    var value = this.el.val();
	    var newPs = '',
	        newSalt = new Uint32Array(this.maxLen);
	    var valIx = 0, psIx = 0;
	    while (valIx < value.length) {
	        var valCh = value.charCodeAt(valIx),
	            psCh = this.pseudoValue.charCodeAt(psIx),
	            isSpecial = this._isSpecialChar(valCh);
	        if (psCh === valCh) {
	            // not changed
	            newPs += this._getChar(newPs.length);
	            newSalt[newPs.length - 1] = psCh ^ this.salt[psIx] ^ newPs.charCodeAt(newPs.length - 1);
	            psIx++;
	            valIx++;
	        } else if (isSpecial) {
	            // deleted
	            psIx++;
	        } else {
	            // inserted or replaced
	            newPs += this._getChar(newPs.length);
	            newSalt[newPs.length - 1] = newPs.charCodeAt(newPs.length - 1) ^ valCh;
	            valIx++;
	        }
	    }
	    this.length = newPs.length;
	    this.pseudoValue = newPs;
	    this.salt = newSalt;
	    this.el.val(newPs);
	    this.el[0].selectionStart = selStart;
	    this.el[0].selectionEnd = selStart;
	};

	SecureInput.prototype._getChar = function(ix) {
	    return String.fromCharCode(this.minChar + ix);
	};

	SecureInput.prototype._isSpecialChar = function(ch) {
	    return ch >= this.minChar && ch <= this.minChar + this.maxLen;
	};

	Object.defineProperty(SecureInput.prototype, 'value', {
	    enumerable: true,
	    get: function() {
	        var pseudoValue = this.pseudoValue,
	            salt = this.salt,
	            len = pseudoValue.length,
	            byteLength = 0,
	            valueBytes = new Uint8Array(len * 4),
	            saltBytes = kdbxweb.Random.getBytes(len * 4),
	            ch, bytes;
	        for (var i = 0; i < len; i++) {
	            ch = String.fromCharCode(pseudoValue.charCodeAt(i) ^ salt[i]);
	            bytes = kdbxweb.ByteUtils.stringToBytes(ch);
	            for (var j = 0; j < bytes.length; j++) {
	                valueBytes[byteLength] = bytes[j] ^ saltBytes[byteLength];
	                byteLength++;
	            }
	        }
	        return new kdbxweb.ProtectedValue(valueBytes.buffer.slice(0, byteLength), saltBytes.buffer.slice(0, byteLength));
	    }
	});

	module.exports = SecureInput;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    RuntimeInfo = __webpack_require__(25),
	    Links = __webpack_require__(15),
	    Launcher = __webpack_require__(7),
	    AppSettingsModel = __webpack_require__(12),
	    UpdateModel = __webpack_require__(24),
	    Transport = __webpack_require__(62),
	    Logger = __webpack_require__(8);

	var logger = new Logger('updater');

	var Updater = {
	    UpdateInterval: 1000*60*60*24,
	    MinUpdateTimeout: 500,
	    MinUpdateSize: 10000,
	    UpdateCheckFiles: ['index.html', 'app.js'],
	    nextCheckTimeout: null,
	    updateCheckDate: new Date(0),
	    enabled: Launcher && Launcher.updaterEnabled(),

	    getAutoUpdateType: function() {
	        if (!this.enabled) {
	            return false;
	        }
	        var autoUpdate = AppSettingsModel.instance.get('autoUpdate');
	        if (autoUpdate && autoUpdate === true) {
	            autoUpdate = 'install';
	        }
	        return autoUpdate;
	    },

	    updateInProgress: function() {
	        return UpdateModel.instance.get('status') === 'checking' ||
	            ['downloading', 'extracting'].indexOf(UpdateModel.instance.get('updateStatus')) >= 0;
	    },

	    init: function() {
	        var willCheckNow = this.scheduleNextCheck();
	        if (!willCheckNow && this.getAutoUpdateType()) {
	            this.check();
	        }
	        if (!Launcher && window.applicationCache) {
	            window.applicationCache.addEventListener('updateready', this.checkAppCacheUpdateReady.bind(this));
	            this.checkAppCacheUpdateReady();
	        }
	    },

	    scheduleNextCheck: function() {
	        if (this.nextCheckTimeout) {
	            clearTimeout(this.nextCheckTimeout);
	            this.nextCheckTimeout = null;
	        }
	        if (!this.getAutoUpdateType()) {
	            return;
	        }
	        var timeDiff = this.MinUpdateTimeout;
	        var lastCheckDate = UpdateModel.instance.get('lastCheckDate');
	        if (lastCheckDate) {
	            timeDiff = Math.min(Math.max(this.UpdateInterval + (lastCheckDate - new Date()), this.MinUpdateTimeout), this.UpdateInterval);
	        }
	        this.nextCheckTimeout = setTimeout(this.check.bind(this), timeDiff);
	        logger.info('Next update check will happen in ' + Math.round(timeDiff / 1000) + 's');
	        return timeDiff === this.MinUpdateTimeout;
	    },

	    check: function(startedByUser) {
	        if (!this.enabled || this.updateInProgress()) {
	            return;
	        }
	        UpdateModel.instance.set('status', 'checking');
	        var that = this;
	        if (!startedByUser) {
	            // additional protection from broken program logic, to ensure that auto-checks are not performed more than once an hour
	            var diffMs = new Date() - this.updateCheckDate;
	            if (isNaN(diffMs) || diffMs < 1000 * 60 * 60) {
	                logger.error('Prevented update check; last check was performed at ' + this.updateCheckDate);
	                that.scheduleNextCheck();
	                return;
	            }
	            this.updateCheckDate = new Date();
	        }
	        logger.info('Checking for update...');
	        Transport.httpGet({
	            url: Links.Manifest,
	            utf8: true,
	            success: function(data) {
	                var dt = new Date();
	                var match = data.match(/#\s*(\d+\-\d+\-\d+):v([\d+\.\w]+)/);
	                logger.info('Update check: ' + (match ? match[0] : 'unknown'));
	                if (!match) {
	                    var errMsg = 'No version info found';
	                    UpdateModel.instance.set({ status: 'error', lastCheckDate: dt, lastCheckError: errMsg });
	                    UpdateModel.instance.save();
	                    that.scheduleNextCheck();
	                    return;
	                }
	                var updateMinVersionMatch = data.match(/#\s*updmin:v([\d+\.\w]+)/);
	                var prevLastVersion = UpdateModel.instance.get('lastVersion');
	                UpdateModel.instance.set({
	                    status: 'ok',
	                    lastCheckDate: dt,
	                    lastSuccessCheckDate: dt,
	                    lastVersionReleaseDate: new Date(match[1]),
	                    lastVersion: match[2],
	                    lastCheckError: null,
	                    lastCheckUpdMin: updateMinVersionMatch ? updateMinVersionMatch[1] : null
	                });
	                UpdateModel.instance.save();
	                that.scheduleNextCheck();
	                if (!that.canAutoUpdate()) {
	                    return;
	                }
	                if (prevLastVersion === UpdateModel.instance.get('lastVersion') &&
	                    UpdateModel.instance.get('updateStatus') === 'ready') {
	                    logger.info('Waiting for the user to apply downloaded update');
	                    return;
	                }
	                if (!startedByUser && that.getAutoUpdateType() === 'install') {
	                    that.update(startedByUser);
	                } else if (that.compareVersions(UpdateModel.instance.get('lastVersion'), RuntimeInfo.version) > 0) {
	                    UpdateModel.instance.set('updateStatus', 'found');
	                }
	            },
	            error: function(e) {
	                logger.error('Update check error', e);
	                UpdateModel.instance.set({
	                    status: 'error',
	                    lastCheckDate: new Date(),
	                    lastCheckError: 'Error checking last version'
	                });
	                UpdateModel.instance.save();
	                that.scheduleNextCheck();
	            }
	        });
	    },

	    canAutoUpdate: function() {
	        var minLauncherVersion = UpdateModel.instance.get('lastCheckUpdMin');
	        if (minLauncherVersion) {
	            var cmp = this.compareVersions(Launcher.version, minLauncherVersion);
	            if (cmp < 0) {
	                UpdateModel.instance.set({ updateStatus: 'ready', updateManual: true });
	                return false;
	            }
	        }
	        return true;
	    },

	    compareVersions: function(left, right) {
	        left = left.split('.');
	        right = right.split('.');
	        for (var num = 0; num < left.length; num++) {
	            var partLeft = left[num] | 0,
	                partRight = right[num] | 0;
	            if (partLeft < partRight) {
	                return -1;
	            }
	            if (partLeft > partRight) {
	                return 1;
	            }
	        }
	        return 0;
	    },

	    update: function(startedByUser, successCallback) {
	        var ver = UpdateModel.instance.get('lastVersion');
	        if (!this.enabled) {
	            logger.info('Updater is disabled');
	            return;
	        }
	        if (this.compareVersions(RuntimeInfo.version, ver) >= 0) {
	            logger.info('You are using the latest version');
	            return;
	        }
	        UpdateModel.instance.set({ updateStatus: 'downloading', updateError: null });
	        var that = this;
	        logger.info('Downloading update', ver);
	        Transport.httpGet({
	            url: Links.UpdateDesktop.replace('{ver}', ver),
	            file: 'KeeWeb-' + ver + '.zip',
	            cache: !startedByUser,
	            success: function(filePath) {
	                UpdateModel.instance.set('updateStatus', 'extracting');
	                logger.info('Extracting update file', that.UpdateCheckFiles, filePath);
	                that.extractAppUpdate(filePath, function(err) {
	                    if (err) {
	                        logger.error('Error extracting update', err);
	                        UpdateModel.instance.set({ updateStatus: 'error', updateError: 'Error extracting update' });
	                    } else {
	                        UpdateModel.instance.set({ updateStatus: 'ready', updateError: null });
	                        if (!startedByUser) {
	                            Backbone.trigger('update-app');
	                        }
	                        if (typeof successCallback === 'function') {
	                            successCallback();
	                        }
	                    }
	                });
	            },
	            error: function(e) {
	                logger.error('Error downloading update', e);
	                UpdateModel.instance.set({ updateStatus: 'error', updateError: 'Error downloading update' });
	            }
	        });
	    },

	    extractAppUpdate: function(updateFile, cb) {
	        var expectedFiles = this.UpdateCheckFiles;
	        var appPath = Launcher.getUserDataPath();
	        var StreamZip = Launcher.req('node-stream-zip');
	        var zip = new StreamZip({ file: updateFile, storeEntries: true });
	        zip.on('error', cb);
	        zip.on('ready', function() {
	            var containsAll = expectedFiles.every(function(expFile) {
	                var entry = zip.entry(expFile);
	                return entry && entry.isFile;
	            });
	            if (!containsAll) {
	                return cb('Bad archive');
	            }
	            zip.extract(null, appPath, function(err) {
	                zip.close();
	                if (err) {
	                    return cb(err);
	                }
	                Launcher.req('fs').unlink(updateFile);
	                cb();
	            });
	        });
	    },

	    checkAppCacheUpdateReady: function() {
	        if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
	            try { window.applicationCache.swapCache(); } catch (e) { }
	            UpdateModel.instance.set('updateStatus', 'ready');
	        }
	    }
	};

	module.exports = Updater;


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	var Colors = {
	    AllColors: ['yellow', 'green', 'red', 'orange', 'blue', 'violet'],

	    ColorsValues: {
	        yellow: 'ffff00',
	        green: '00ff00',
	        red: 'ff0000',
	        orange: 'ff8800',
	        blue: '0000ff',
	        violet: 'ff00ff'
	    },

	    BgColors: {
	        yellow: 'ffff88',
	        green: '88ff88',
	        red: 'ff8888',
	        orange: 'ffcc88',
	        blue: '8888ff',
	        violet: 'ff88ff'
	    }
	};

	module.exports = Colors;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1);

	var FileInfoModel = Backbone.Model.extend({
	    defaults: {
	        id: '',
	        name: '',
	        storage: null,
	        path: null,
	        modified: false,
	        editState: null,
	        rev: null,
	        syncDate: null,
	        openDate: null
	    },

	    initialize: function(data, options) {
	        _.each(data, function(val, key) {
	            if (/Date$/.test(key)) {
	                this.set(key, val ? new Date(val) : null, options);
	            }
	        }, this);
	    }
	});

	module.exports = FileInfoModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    GroupCollection = __webpack_require__(21),
	    GroupModel = __webpack_require__(23),
	    IconUrl = __webpack_require__(34),
	    Logger = __webpack_require__(8),
	    kdbxweb = __webpack_require__(9),
	    demoFileData = __webpack_require__(114);

	var logger = new Logger('file');

	var FileModel = Backbone.Model.extend({
	    defaults: {
	        id: '',
	        name: '',
	        keyFileName: '',
	        passwordLength: 0,
	        path: '',
	        storage: null,
	        modified: false,
	        dirty: false,
	        open: false,
	        created: false,
	        demo: false,
	        groups: null,
	        oldPasswordLength: 0,
	        oldKeyFileName: '',
	        passwordChanged: false,
	        keyFileChanged: false,
	        syncing: false,
	        syncError: null,
	        syncDate: null,
	        cacheId: null
	    },

	    db: null,
	    entryMap: null,
	    groupMap: null,

	    initialize: function() {
	        this.entryMap = {};
	        this.groupMap = {};
	    },

	    open: function(password, fileData, keyFileData, callback) {
	        try {
	            var credentials = new kdbxweb.Credentials(password, keyFileData);
	            var ts = logger.ts();
	            kdbxweb.Kdbx.load(fileData, credentials, (function(db, err) {
	                if (err) {
	                    logger.error('Error opening file', err.code, err.message, err);
	                    callback(err);
	                } else {
	                    this.db = db;
	                    this.readModel();
	                    this.setOpenFile({ passwordLength: password.textLength });
	                    if (keyFileData) {
	                        kdbxweb.ByteUtils.zeroBuffer(keyFileData);
	                    }
	                    logger.info('Opened file ' + this.get('name') + ': ' + logger.ts(ts) + ', ' +
	                        db.header.keyEncryptionRounds + ' rounds, ' + Math.round(fileData.byteLength / 1024) + ' kB');
	                    callback();
	                }
	            }).bind(this));
	        } catch (e) {
	            logger.error('Error opening file', e, e.code, e.message, e);
	            callback(e);
	        }
	    },

	    create: function(name) {
	        var password = kdbxweb.ProtectedValue.fromString('');
	        var credentials = new kdbxweb.Credentials(password);
	        this.db = kdbxweb.Kdbx.create(credentials, name);
	        this.set('name', name);
	        this.readModel();
	        this.set({ open: true, created: true, name: name });
	    },

	    openDemo: function(callback) {
	        var password = kdbxweb.ProtectedValue.fromString('demo');
	        var credentials = new kdbxweb.Credentials(password);
	        var demoFile = kdbxweb.ByteUtils.arrayToBuffer(kdbxweb.ByteUtils.base64ToBytes(demoFileData));
	        kdbxweb.Kdbx.load(demoFile, credentials, (function(db) {
	            this.db = db;
	            this.set('name', 'Demo');
	            this.readModel();
	            this.setOpenFile({passwordLength: 4, demo: true});
	            callback();
	        }).bind(this));
	    },

	    setOpenFile: function(props) {
	        _.extend(props, {
	            open: true,
	            oldKeyFileName: this.get('keyFileName'),
	            oldPasswordLength: props.passwordLength,
	            passwordChanged: false,
	            keyFileChanged: false
	        });
	        this.set(props);
	        this._oldPasswordHash = this.db.credentials.passwordHash;
	        this._oldKeyFileHash = this.db.credentials.keyFileHash;
	        this._oldKeyChangeDate = this.db.meta.keyChanged;
	    },

	    readModel: function() {
	        var groups = new GroupCollection();
	        this.set({
	            id: this.db.getDefaultGroup().uuid.toString(),
	            groups: groups,
	            defaultUser: this.db.meta.defaultUser,
	            recycleBinEnabled: this.db.meta.recycleBinEnabled,
	            historyMaxItems: this.db.meta.historyMaxItems,
	            historyMaxSize: this.db.meta.historyMaxSize,
	            keyEncryptionRounds: this.db.header.keyEncryptionRounds
	        }, { silent: true });
	        this.db.groups.forEach(function(group) {
	            var groupModel = this.getGroup(group.uuid.id);
	            if (groupModel) {
	                groupModel.setGroup(group, this);
	            } else {
	                groupModel = GroupModel.fromGroup(group, this);
	            }
	            groupModel.set({title: this.get('name')});
	            groups.add(groupModel);
	        }, this);
	        this.buildObjectMap();
	    },

	    buildObjectMap: function() {
	        var entryMap = {};
	        var groupMap = {};
	        this.forEachGroup(function(group) {
	            groupMap[group.id] = group;
	            group.forEachOwnEntry(null, function(entry) {
	                entryMap[entry.id] = entry;
	            });
	        }, true);
	        this.entryMap = entryMap;
	        this.groupMap = groupMap;
	    },

	    reload: function() {
	        this.buildObjectMap();
	        this.readModel();
	        this.trigger('reload', this);
	    },

	    mergeOrUpdate: function(fileData, remoteKey, callback) {
	        var credentials;
	        if (remoteKey) {
	            credentials = new kdbxweb.Credentials(kdbxweb.ProtectedValue.fromString(''));
	            if (remoteKey.password) {
	                credentials.setPassword(remoteKey.password);
	            } else {
	                credentials.passwordHash = this.db.credentials.passwordHash;
	            }
	            if (remoteKey.keyFileName) {
	                if (remoteKey.keyFileData) {
	                    credentials.setKeyFile(remoteKey.keyFileData);
	                } else {
	                    credentials.keyFileHash = this.db.credentials.keyFileHash;
	                }
	            }
	        } else {
	            credentials = this.db.credentials;
	        }
	        kdbxweb.Kdbx.load(fileData, credentials, (function(remoteDb, err) {
	            if (err) {
	                logger.error('Error opening file to merge', err.code, err.message, err);
	            } else {
	                if (this.get('modified')) {
	                    try {
	                        if (remoteKey && remoteDb.meta.keyChanged > this.db.meta.keyChanged) {
	                            this.db.credentials = remoteDb.credentials;
	                            this.set('keyFileName', remoteKey.keyFileName || '');
	                            if (remoteKey.password) {
	                                this.set('passwordLength', remoteKey.password.textLength);
	                            }
	                        }
	                        this.db.merge(remoteDb);
	                    } catch (e) {
	                        logger.error('File merge error', e);
	                        return callback(e);
	                    }
	                } else {
	                    this.db = remoteDb;
	                }
	                this.set('dirty', true);
	                this.reload();
	            }
	            callback(err);
	        }).bind(this));
	    },

	    getLocalEditState: function() {
	        return this.db.getLocalEditState();
	    },

	    setLocalEditState: function(editState) {
	        this.db.setLocalEditState(editState);
	    },

	    close: function() {
	        this.set({
	            keyFileName: '',
	            passwordLength: 0,
	            modified: false,
	            dirty: false,
	            open: false,
	            created: false,
	            groups: null,
	            passwordChanged: false,
	            keyFileChanged: false,
	            syncing: false
	        });
	    },

	    getEntry: function(id) {
	        return this.entryMap[id];
	    },

	    getGroup: function(id) {
	        return this.groupMap[id];
	    },

	    forEachEntry: function(filter, callback) {
	        var top = this;
	        if (filter.trash) {
	            top = this.getGroup(this.db.meta.recycleBinUuid ? this.db.meta.recycleBinUuid.id : null);
	        } else if (filter.group) {
	            top = this.getGroup(filter.group);
	        }
	        if (top) {
	            if (top.forEachOwnEntry) {
	                top.forEachOwnEntry(filter, callback);
	            }
	            if (!filter.group || filter.subGroups) {
	                top.forEachGroup(function (group) {
	                    group.forEachOwnEntry(filter, callback);
	                });
	            }
	        }
	    },

	    forEachGroup: function(callback, includeDisabled) {
	        this.get('groups').forEach(function(group) {
	            if (callback(group) !== false) {
	                group.forEachGroup(callback, includeDisabled);
	            }
	        });
	    },

	    getTrashGroup: function() {
	        return this.db.meta.recycleBinEnabled ? this.getGroup(this.db.meta.recycleBinUuid.id) : null;
	    },

	    setModified: function() {
	        if (!this.get('demo')) {
	            this.set({ modified: true, dirty: true });
	        }
	    },

	    getData: function(cb) {
	        this.db.cleanup({
	            historyRules: true,
	            customIcons: true,
	            binaries: true
	        });
	        var that = this;
	        this.db.cleanup({ binaries: true });
	        this.db.save(function(data, err) {
	            if (err) {
	                logger.error('Error saving file', that.get('name'), err);
	            }
	            cb(data, err);
	        });
	    },

	    getXml: function(cb) {
	        this.db.saveXml(cb);
	    },

	    setSyncProgress: function() {
	        this.set({ syncing: true });
	    },

	    setSyncComplete: function(path, storage, error, savedToCache) {
	        if (!error) {
	            this.db.removeLocalEditState();
	        }
	        var modified = this.get('modified') && !!error;
	        var dirty = this.get('dirty') && !savedToCache;
	        this.set({
	            created: false,
	            path: path || this.get('path'),
	            storage: storage || this.get('storage'),
	            modified: modified,
	            dirty: dirty,
	            syncing: false,
	            syncError: error
	        });
	        this.setOpenFile({ passwordLength: this.get('passwordLength') });
	        this.forEachEntry({}, function(entry) {
	            entry.unsaved = false;
	        });
	    },

	    setPassword: function(password) {
	        this.db.credentials.setPassword(password);
	        this.db.meta.keyChanged = new Date();
	        this.set({ passwordLength: password.textLength, passwordChanged: true });
	        this.setModified();
	    },

	    resetPassword: function() {
	        this.db.credentials.passwordHash = this._oldPasswordHash;
	        if (this.db.credentials.keyFileHash === this._oldKeyFileHash) {
	            this.db.meta.keyChanged = this._oldKeyChangeDate;
	        }
	        this.set({ passwordLength: this.get('oldPasswordLength'), passwordChanged: false });
	    },

	    setKeyFile: function(keyFile, keyFileName) {
	        this.db.credentials.setKeyFile(keyFile);
	        this.db.meta.keyChanged = new Date();
	        this.set({ keyFileName: keyFileName, keyFileChanged: true });
	        this.setModified();
	    },

	    generateAndSetKeyFile: function() {
	        var keyFile = kdbxweb.Credentials.createRandomKeyFile();
	        var keyFileName = 'Generated';
	        this.setKeyFile(keyFile, keyFileName);
	        return keyFile;
	    },

	    resetKeyFile: function() {
	        this.db.credentials.keyFileHash = this._oldKeyFileHash;
	        if (this.db.credentials.passwordHash === this._oldPasswordHash) {
	            this.db.meta.keyChanged = this._oldKeyChangeDate;
	        }
	        this.set({ keyFileName: this.get('oldKeyFileName'), keyFileChanged: false });
	    },

	    removeKeyFile: function() {
	        this.db.credentials.keyFileHash = null;
	        var changed = !!this._oldKeyFileHash;
	        if (!changed && this.db.credentials.passwordHash === this._oldPasswordHash) {
	            this.db.meta.keyChanged = this._oldKeyChangeDate;
	        }
	        this.set({ keyFileName: '', keyFileChanged: changed });
	    },

	    setName: function(name) {
	        this.db.meta.name = name;
	        this.db.meta.nameChanged = new Date();
	        this.set('name', name);
	        this.get('groups').first().setName(name);
	        this.setModified();
	        this.reload();
	    },

	    setDefaultUser: function(defaultUser) {
	        this.db.meta.defaultUser = defaultUser;
	        this.db.meta.defaultUserChanged = new Date();
	        this.set('defaultUser', defaultUser);
	        this.setModified();
	    },

	    setRecycleBinEnabled: function(enabled) {
	        enabled = !!enabled;
	        this.db.meta.recycleBinEnabled = enabled;
	        if (enabled) {
	            this.db.createRecycleBin();
	        }
	        this.set('setRecycleBinEnabled', enabled);
	        this.setModified();
	    },

	    setHistoryMaxItems: function(count) {
	        this.db.meta.historyMaxItems = count;
	        this.set('historyMaxItems', count);
	        this.setModified();
	    },

	    setHistoryMaxSize: function(size) {
	        this.db.meta.historyMaxSize = size;
	        this.set('historyMaxSize', size);
	        this.setModified();
	    },

	    setKeyEncryptionRounds: function(rounds) {
	        this.db.header.keyEncryptionRounds = rounds;
	        this.set('keyEncryptionRounds', rounds);
	        this.setModified();
	    },

	    emptyTrash: function() {
	        var trashGroup = this.getTrashGroup();
	        if (trashGroup) {
	            trashGroup.getOwnSubGroups().slice().forEach(function(group) {
	                this.db.move(group, null);
	            }, this);
	            trashGroup.group.entries.forEach(function(entry) {
	                this.db.move(entry, null);
	            }, this);
	            trashGroup.get('entries').reset();
	        }
	    },

	    getCustomIcons: function() {
	        return _.mapObject(this.db.meta.customIcons, function(customIcon) {
	            return IconUrl.toDataUrl(customIcon);
	        });
	    },

	    addCustomIcon: function(iconData) {
	        var id = kdbxweb.KdbxUuid.random();
	        this.db.meta.customIcons[id] = kdbxweb.ByteUtils.arrayToBuffer(kdbxweb.ByteUtils.base64ToBytes(iconData));
	        return id.toString();
	    }
	});

	module.exports = FileModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    MenuOptionCollection = __webpack_require__(60),
	    ItemCollection;

	var MenuItemModel = Backbone.Model.extend({
	    defaults: {
	        title: '',
	        icon: '',
	        customIcon: null,
	        active: false,
	        expanded: true,
	        items: null,
	        shortcut: null,
	        options: null,
	        cls: null,
	        disabled: false,
	        visible: true,
	        drag: false,
	        drop: false,
	        filterKey: null,
	        filterValue: null
	    },

	    initialize: function(model) {
	        if (model && model.file) {
	            this.listenTo(model.file, 'change:name', this.changeTitle, this);
	        }
	    },

	    _loadItemCollectionType: function() {
	        return __webpack_require__(39);
	    },

	    addItem: function(item) {
	        if (!ItemCollection) {
	            ItemCollection = this._loadItemCollectionType();
	        }
	        var items = this.get('items');
	        if (!items) {
	            items = new ItemCollection();
	            this.set('items', items);
	        }
	        items.add(item);
	    },

	    addOption: function(option) {
	        var options = this.get('options');
	        if (!options) {
	            options = new MenuOptionCollection();
	            this.set('options', options);
	        }
	        options.add(option);
	    },

	    toggleExpanded: function() {
	        var items = this.get('items'),
	            expanded = !this.get('expanded');
	        if (!items || !items.length) {
	            expanded = true;
	        }
	        this.set('expanded', expanded);
	    },

	    changeTitle: function(model, newTitle) {
	        this.set('title', newTitle);
	    }
	});

	module.exports = MenuItemModel;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Launcher = __webpack_require__(7);

	var Storage = {
	    file: __webpack_require__(80),
	    dropbox: __webpack_require__(78),
	    cache: Launcher ? __webpack_require__(79) : __webpack_require__(77)
	};

	module.exports = Storage;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var ThemeChanger = {
	    setTheme: function(theme) {
	        _.forEach(document.body.classList, function(cls) {
	            if (/^th\-/.test(cls)) {
	                document.body.classList.remove(cls);
	            }
	        });
	        document.body.classList.add('th-' + theme);
	    }
	};

	module.exports = ThemeChanger;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    FeatureDetector = __webpack_require__(13);

	var Tip = function(el, config) {
	    this.el = el;
	    this.title = config && config.title || el.attr('title');
	    this.placement = config && config.placement || el.attr('tip-placement');
	    this.fast = config && config.fast || false;
	    this.tipEl = null;
	    this.showTimeout = null;
	    this.hideTimeout = null;
	    this.hide = this.hide.bind(this);
	};

	Tip.enabled = FeatureDetector.isDesktop();

	Tip.prototype.init = function() {
	    if (!Tip.enabled) {
	        return;
	    }
	    this.el.removeAttr('title');
	    this.el.mouseenter(this.mouseenter.bind(this)).mouseleave(this.mouseleave.bind(this));
	    this.el.click(this.mouseleave.bind(this));
	};

	Tip.prototype.show = function() {
	    if (!Tip.enabled) {
	        return;
	    }
	    Backbone.on('page-geometry', this.hide);
	    if (this.tipEl) {
	        this.tipEl.remove();
	        if (this.hideTimeout) {
	            clearTimeout(this.hideTimeout);
	            this.hideTimeout = null;
	        }
	    }
	    var tipEl = this.tipEl = $('<div></div>').addClass('tip').appendTo('body').html(this.title);
	    var rect = this.el[0].getBoundingClientRect(),
	        tipRect = this.tipEl[0].getBoundingClientRect();
	    var placement = this.placement || this.getAutoPlacement(rect, tipRect);
	    tipEl.addClass('tip--' + placement);
	    if (this.fast) {
	        tipEl.addClass('tip--fast');
	    }
	    var top, left;
	    var offset = 10;
	    var sideOffset = 10;
	    switch (placement) {
	        case 'top':
	            top = rect.top - tipRect.height - offset;
	            left = rect.left + rect.width / 2 - tipRect.width / 2;
	            break;
	        case 'top-left':
	            top = rect.top - tipRect.height - offset;
	            left = rect.left + rect.width / 2 - tipRect.width + sideOffset;
	            break;
	        case 'bottom':
	            top = rect.bottom + offset;
	            left = rect.left + rect.width / 2 - tipRect.width / 2;
	            break;
	        case 'left':
	            top = rect.top + rect.height / 2 - tipRect.height / 2;
	            left = rect.left - tipRect.width - offset;
	            break;
	        case 'right':
	            top = rect.top + rect.height / 2 - tipRect.height / 2;
	            left = rect.right + offset;
	            break;
	    }
	    tipEl.css({ top: top, left: left });
	};

	Tip.prototype.hide = function() {
	    if (this.tipEl) {
	        this.tipEl.remove();
	        this.tipEl = null;
	    }
	    Backbone.off('page-geometry', this.hide);
	};

	Tip.prototype.mouseenter = function() {
	    var that = this;
	    if (this.showTimeout) {
	        return;
	    }
	    this.showTimeout = setTimeout(function() {
	        that.showTimeout = null;
	        that.show();
	    }, 200);
	};

	Tip.prototype.mouseleave = function() {
	    var that = this;
	    if (this.tipEl) {
	        that.tipEl.addClass('tip--hide');
	        this.hideTimeout = setTimeout(function () {
	            that.hideTimeout = null;
	            that.hide();
	        }, 500);
	    }
	    if (this.showTimeout) {
	        clearTimeout(this.showTimeout);
	        this.showTimeout = null;
	    }
	};

	Tip.prototype.getAutoPlacement = function(rect, tipRect) {
	    var padding = 20;
	    var bodyRect = document.body.getBoundingClientRect();
	    var canShowToBottom = bodyRect.bottom - rect.bottom > padding + tipRect.height,
	        canShowToHalfRight = bodyRect.right - rect.right > padding + tipRect.width / 2,
	        canShowToRight = bodyRect.right - rect.right > padding + tipRect.width,
	        canShowToHalfLeft = rect.left > padding + tipRect.width / 2,
	        canShowToLeft = rect.left > padding + tipRect.width;
	    if (canShowToBottom) {
	        if (canShowToLeft && !canShowToHalfRight) {
	            return 'left';
	        } else if (canShowToRight && !canShowToHalfLeft) {
	            return 'right';
	        } else {
	            return 'bottom';
	        }
	    }
	    if (canShowToLeft && !canShowToHalfRight) {
	        return 'left';
	    } else if (canShowToRight && !canShowToHalfLeft) {
	        return 'right';
	    } else {
	        return 'top';
	    }
	};

	Tip.createTips = function(container) {
	    if (!Tip.enabled) {
	        return;
	    }
	    container.find('[title]').each(function(ix, el) {
	        var tip = new Tip($(el));
	        tip.init();
	    });
	};

	module.exports = Tip;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1);

	var DragView = Backbone.View.extend({
	    events: {
	        'mousedown': 'mousedown'
	    },

	    initialize: function (coord) {
	        this.setCoord(coord);
	        this.mouseDownTime = -1;
	        this.mouseDownCount = 0;
	    },

	    setCoord: function(coord) {
	        this.coord = coord;
	        this.offsetProp = 'page' + coord.toUpperCase();
	    },

	    render: function() {
	        $('<div/>').addClass('drag-handle__inner').appendTo(this.$el);
	    },

	    mousedown: function(e) {
	        if (e.which === 1) {
	            var now = Date.now();
	            if (now - this.mouseDownTime < 500) {
	                this.mouseDownCount++;
	                if (this.mouseDownCount === 2) {
	                    this.trigger('autosize', { coord: this.coord });
	                    return;
	                }
	            } else {
	                this.mouseDownTime = now;
	                this.mouseDownCount = 1;
	            }
	            this.initialOffset = e[this.offsetProp];
	            var cursor = this.$el.css('cursor');
	            this.dragMask = $('<div/>', {'class': 'drag-mask'}).css('cursor', cursor).appendTo('body');
	            this.dragMask.on('mousemove', this.mousemove.bind(this));
	            this.dragMask.on('mouseup', this.mouseup.bind(this));
	            this.trigger('dragstart', { offset: this.initialOffset, coord: this.coord });
	            this.$el.addClass('dragging');
	            e.preventDefault();
	        }
	    },

	    mousemove: function(e) {
	        if (e.which === 0) {
	            this.mouseup();
	        } else {
	            this.trigger('drag', { offset: e[this.offsetProp] - this.initialOffset });
	        }
	    },

	    mouseup: function() {
	        this.dragMask.remove();
	        this.$el.removeClass('dragging');
	    }
	});

	module.exports = DragView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var FieldView = __webpack_require__(19);

	var FieldViewReadOnly = FieldView.extend({
	    renderValue: function(value) {
	        return value.isProtected ? new Array(value.textLength + 1).join('•') : _.escape(value);
	    },

	    readonly: true
	});

	module.exports = FieldViewReadOnly;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    PasswordGenerator = __webpack_require__(35),
	    CopyPaste = __webpack_require__(26),
	    Locale = __webpack_require__(5);

	var DefaultGenOpts = {
	    length: 16, upper: true, lower: true, digits: true, special: false, brackets: false, high: false, ambiguous: false
	};

	var GeneratorView = Backbone.View.extend({
	    el: 'body',

	    template: __webpack_require__(124),

	    events: {
	        'click': 'click',
	        'mousedown .gen__length-range': 'generate',
	        'mousemove .gen__length-range': 'lengthChange',
	        'change .gen__length-range': 'lengthChange',
	        'change .gen__check input[type=checkbox]': 'checkChange',
	        'click .gen__btn-ok': 'btnOkClick'
	    },

	    valuesMap: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,48,64],

	    initialize: function () {
	        $('body').one('click', this.remove.bind(this));
	        this.gen = _.clone(DefaultGenOpts);
	    },

	    render: function() {
	        var canCopy = document.queryCommandSupported('copy');
	        var btnTitle = this.model.copy ? canCopy ? Locale.alertCopy : Locale.alertClose : Locale.alertOk;
	        this.renderTemplate({ btnTitle: btnTitle, opt: this.gen });
	        this.resultEl = this.$el.find('.gen__result');
	        this.$el.css(this.model.pos);
	        this.generate();
	        return this;
	    },

	    click: function(e) {
	        e.stopPropagation();
	    },

	    lengthChange: function(e) {
	        var val = this.valuesMap[e.target.value];
	        if (val !== this.gen.length) {
	            this.gen.length = val;
	            this.$el.find('.gen__length-range-val').html(val);
	            this.generate();
	        }
	    },

	    checkChange: function(e) {
	        var id = $(e.target).data('id');
	        if (id) {
	            this.gen[id] = e.target.checked;
	        }
	        this.generate();
	    },

	    generate: function() {
	        this.password = PasswordGenerator.generate(this.gen);
	        this.resultEl.text(this.password);
	        var isLong = this.password.length > 32;
	        this.resultEl.toggleClass('gen__result--long-pass', isLong);
	    },

	    btnOkClick: function() {
	        var selection = window.getSelection();
	        var range = document.createRange();
	        range.selectNodeContents(this.resultEl[0]);
	        selection.removeAllRanges();
	        selection.addRange(range);
	        CopyPaste.copy(this.password);
	        this.trigger('result', this.password);
	        this.remove();
	    }
	});

	module.exports = GeneratorView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    IconMap = __webpack_require__(29),
	    Launcher = __webpack_require__(7),
	    Logger = __webpack_require__(8);

	var logger = new Logger('icon-select-view');

	var IconSelectView = Backbone.View.extend({
	    template: __webpack_require__(126),

	    events: {
	        'click .icon-select__icon': 'iconClick',
	        'click .icon-select__icon-download': 'downloadIcon',
	        'click .icon-select__icon-select': 'selectIcon',
	        'change .icon-select__file-input': 'iconSelected'
	    },

	    initialize: function() {
	        this.special = {
	            select: null,
	            download: null
	        };
	    },

	    render: function() {
	        this.renderTemplate({
	            sel: this.model.iconId,
	            icons: IconMap,
	            canDownloadFavicon: !!this.model.url,
	            customIcons: this.model.file.getCustomIcons()
	        }, true);
	        return this;
	    },

	    iconClick: function(e) {
	        var target = $(e.target).closest('.icon-select__icon');
	        var iconId = target[0].getAttribute('data-val');
	        if (iconId === 'special') {
	            var iconData = this.special[target.data('special')];
	            if (iconData) {
	                var id = this.model.file.addCustomIcon(iconData.data);
	                this.trigger('select', { id: id, custom: true });
	                e.preventDefault();
	                e.stopImmediatePropagation();
	            }
	        } else if (iconId) {
	            var isCustomIcon = target.hasClass('icon-select__icon-custom');
	            this.trigger('select', { id: iconId, custom: isCustomIcon });
	        }
	    },

	    downloadIcon: function() {
	        if (this.downloadingFavicon) {
	            return;
	        }
	        this.downloadingFavicon = true;
	        this.$el.find('.icon-select__icon-download>i').addClass('fa-spinner fa-spin');
	        var that = this;
	        var url = this.getIconUrl(!Launcher); // inside launcher we can load images without CORS
	        var img = document.createElement('img');
	        img.crossOrigin = 'Anonymous';
	        img.src = url;
	        img.onload = function () {
	            that.setSpecialImage(img, 'download');
	            that.$el.find('.icon-select__icon-download img').remove();
	            that.$el.find('.icon-select__icon-download>i').removeClass('fa-spinner fa-spin');
	            that.$el.find('.icon-select__icon-download').addClass('icon-select__icon--custom-selected').append(img);
	            that.downloadingFavicon = false;
	        };
	        img.onerror = function (e) {
	            logger.error('Favicon download error: ' + url, e);
	            that.$el.find('.icon-select__icon-download>i').removeClass('fa-spinner fa-spin');
	            that.$el.find('.icon-select__icon-download').removeClass('icon-select__icon--custom-selected');
	            that.downloadingFavicon = false;
	        };
	    },

	    getIconUrl: function(useService) {
	        if (!this.model.url) {
	            return null;
	        }
	        var url = this.model.url.replace(/([^\/:]\/.*)?$/, function(match) { return (match && match[0]) + '/favicon.ico'; });
	        if (url.indexOf('://') >= 0) {
	            url = 'http://' + url;
	        }
	        if (useService) {
	            return 'https://favicon-antelle.rhcloud.com/' + url.replace(/^.*:\/+/, '').replace(/\/.*/, '');
	        }
	        return url;
	    },

	    selectIcon: function() {
	        this.$el.find('.icon-select__file-input').click();
	    },

	    iconSelected: function(e) {
	        var that = this;
	        var file = e.target.files[0];
	        if (file) {
	            var reader = new FileReader();
	            reader.onload = function(e) {
	                var img = document.createElement('img');
	                img.onload = function() {
	                    that.setSpecialImage(img, 'select');
	                    that.$el.find('.icon-select__icon-select img').remove();
	                    that.$el.find('.icon-select__icon-select').addClass('icon-select__icon--custom-selected').append(img);
	                };
	                img.src = e.target.result;
	            };
	            reader.readAsDataURL(file);
	        } else {
	            that.$el.find('.icon-select__icon-select img').remove();
	            that.$el.find('.icon-select__icon-select').removeClass('icon-select__icon--custom-selected');
	        }
	    },

	    setSpecialImage: function(img, name) {
	        var size = Math.min(img.width, 32);
	        var canvas = document.createElement('canvas');
	        var ctx = canvas.getContext('2d');
	        canvas.width = size;
	        canvas.height = size;
	        ctx.drawImage(img, 0, 0, size, size);
	        var data = canvas.toDataURL().replace(/^.*,/, '');
	        this.special[name] = { width: img.width, height: img.height, data: data };
	    }
	});

	module.exports = IconSelectView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(14);

	var _exception = __webpack_require__(20);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(148);

	var _decorators = __webpack_require__(146);

	var _logger = __webpack_require__(156);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];



/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    FileModel = __webpack_require__(45);

	var FileCollection = Backbone.Collection.extend({
	    model: FileModel,

	    hasOpenFiles: function() {
	        return this.some(function(file) { return file.get('open'); });
	    },

	    hasUnsavedFiles: function() {
	        return this.some(function(file) { return file.get('modified'); });
	    },

	    hasDirtyFiles: function() {
	        return this.some(function(file) { return file.get('dirty'); });
	    },

	    getByName: function(name) {
	        return this.find(function(file) { return file.get('name').toLowerCase() === name.toLowerCase(); });
	    },

	    getById: function(id) {
	        return this.find(function(file) { return file.get('id') === id; });
	    }
	});

	module.exports = FileCollection;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    FileInfoModel = __webpack_require__(44),
	    SettingsStore = __webpack_require__(28);

	var FileInfoCollection = Backbone.Collection.extend({
	    model: FileInfoModel,

	    initialize: function () {
	    },

	    load: function () {
	        var data = SettingsStore.load('file-info');
	        if (data) {
	            this.reset(data, {silent: true});
	        }
	    },

	    save: function () {
	        SettingsStore.save('file-info', this.toJSON());
	    },

	    getLast: function () {
	        return this.first();
	    },

	    getMatch: function (storage, name, path) {
	        return this.find(function(fi) {
	            return (fi.get('storage') || '') === (storage || '') &&
	                (fi.get('name') || '') === (name || '') &&
	                (fi.get('path') || '') === (path || '');
	        });
	    },

	    getByName: function(name) {
	        return this.find(function(file) { return file.get('name').toLowerCase() === name.toLowerCase(); });
	    }
	});

	FileInfoCollection.load = function() {
	    var coll = new FileInfoCollection();
	    coll.load();
	    return coll;
	};

	module.exports = FileInfoCollection;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    MenuOptionModel = __webpack_require__(75);

	var MenuOptionCollection = Backbone.Collection.extend({
	    model: MenuOptionModel
	});

	module.exports = MenuOptionCollection;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    MenuSectionModel = __webpack_require__(33);

	var MenuSectionCollection = Backbone.Collection.extend({
	    model: MenuSectionModel
	});

	module.exports = MenuSectionCollection;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Launcher = __webpack_require__(7),
	    Logger = __webpack_require__(8);

	var logger = new Logger('transport');

	var Transport = {
	    httpGet: function(config) {
	        var tmpFile;
	        var fs = Launcher.req('fs');
	        if (config.file) {
	            tmpFile = Launcher.getTempPath(config.file);
	            if (fs.existsSync(tmpFile)) {
	                try {
	                    if (config.cache && fs.statSync(tmpFile).size > 0) {
	                        logger.info('File already downloaded ' + config.url);
	                        return config.success(tmpFile);
	                    } else {
	                        fs.unlinkSync(tmpFile);
	                    }
	                } catch (e) {
	                    fs.unlink(tmpFile);
	                }
	            }
	        }
	        var proto = config.url.split(':')[0];
	        logger.info('GET ' + config.url);
	        var opts = Launcher.req('url').parse(config.url);
	        opts.headers = { 'User-Agent': navigator.userAgent };
	        Launcher.resolveProxy(config.url, function(proxy) {
	            logger.info('Request to ' + config.url + ' ' + (proxy ? 'using proxy ' + proxy.host + ':' + proxy.port : 'without proxy'));
	            if (proxy) {
	                opts.headers.Host = opts.host;
	                opts.host = proxy.host;
	                opts.port = proxy.port;
	                opts.path = config.url;
	            }
	            Launcher.req(proto).get(opts, function (res) {
	                logger.info('Response from ' + config.url + ': ' + res.statusCode);
	                if (res.statusCode === 200) {
	                    if (config.file) {
	                        var file = fs.createWriteStream(tmpFile);
	                        res.pipe(file);
	                        file.on('finish', function () {
	                            file.close(function () {
	                                config.success(tmpFile);
	                            });
	                        });
	                        file.on('error', function (err) {
	                            config.error(err);
	                        });
	                    } else {
	                        var data = [];
	                        res.on('data', function (chunk) {
	                            data.push(chunk);
	                        });
	                        res.on('end', function () {
	                            data = window.Buffer.concat(data);
	                            if (config.utf8) {
	                                data = data.toString('utf8');
	                            }
	                            config.success(data);
	                        });
	                    }
	                } else if (res.headers.location && [301, 302].indexOf(res.statusCode) >= 0) {
	                    if (config.noRedirect) {
	                        return config.error('Too many redirects');
	                    }
	                    config.url = res.headers.location;
	                    config.noRedirect = true;
	                    Transport.httpGet(config);
	                } else {
	                    config.error('HTTP status ' + res.statusCode);
	                }
	            }).on('error', function (e) {
	                logger.error('Cannot GET ' + config.url, e);
	                if (tmpFile) {
	                    fs.unlink(tmpFile);
	                }
	                config.error(e);
	            });
	        });
	    }
	};

	module.exports = Transport;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Handlebars = __webpack_require__(3);

	Handlebars.registerHelper('cmp', function(lvalue, rvalue, op, options) {
	    var cond;
	    switch (op) {
	        case '<':
	            cond = lvalue < rvalue;
	            break;
	        case '>':
	            cond = lvalue > rvalue;
	            break;
	        case '>=':
	            cond = lvalue >= rvalue;
	            break;
	        case '<=':
	            cond = lvalue <= rvalue;
	            break;
	        case '===':
	        case '==':
	            cond = lvalue === rvalue;
	            break;
	        case '!==':
	        case '!=':
	            cond = lvalue !== rvalue;
	            break;
	    }
	    return cond ? options.fn(this) : options.inverse(this);
	});


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Handlebars = __webpack_require__(3);

	Handlebars.registerHelper('ifemptyoreq', function(lvalue, rvalue, options) {
	    return !lvalue || lvalue === rvalue ? options.fn(this) : options.inverse(this);
	});


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Handlebars = __webpack_require__(3);

	Handlebars.registerHelper('ifeq', function(lvalue, rvalue, options) {
	    return lvalue === rvalue ? options.fn(this) : options.inverse(this);
	});


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Handlebars = __webpack_require__(3);

	Handlebars.registerHelper('ifneq', function(lvalue, rvalue, options) {
	    return lvalue !== rvalue ? options.fn(this) : options.inverse(this);
	});


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(63);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(64);
	__webpack_require__(68);


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Handlebars = __webpack_require__(3),
	    Locale = __webpack_require__(5);

	Handlebars.registerHelper('res', function(key, options) {
	    var value = Locale[key];
	    if (value) {
	        var ix = value.indexOf('{}');
	        if (ix >= 0) {
	            value = value.replace('{}', options.fn(this));
	        }
	    }
	    return value;
	});

	Handlebars.registerHelper('Res', function(key) {
	    var value = Locale[key];
	    if (value) {
	        value = value[0].toUpperCase() + value.substr(1);
	    }
	    return value;
	});


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var kdbxweb = __webpack_require__(9);

	kdbxweb.ProtectedValue.prototype.isProtected = true;

	kdbxweb.ProtectedValue.prototype.forEachChar = function(fn) {
	    var value = this._value, salt = this._salt;
	    var b, b1, b2, b3;
	    for (var i = 0, len = value.length; i < len; i++) {
	        b = value[i] ^ salt[i];
	        if (b < 128) {
	            fn(b);
	            continue;
	        }
	        i++; b1 = value[i] ^ salt[i];
	        if (i === len) { break; }
	        if (b >= 192 && b < 224) {
	            fn(((b & 0x1f) << 6) | (b1 & 0x3f));
	            continue;
	        }
	        i++; b2 = value[i] ^ salt[i];
	        if (i === len) { break; }
	        if (b >= 224 && b < 240) {
	            fn(((b & 0xf) << 12) | ((b1 & 0x3f) << 6) | (b2 & 0x3f));
	        }
	        i++; b3 = value[i] ^ salt[i];
	        if (i === len) { break; }
	        if (b >= 240 && b < 248) {
	            var c = ((b & 7) << 18) | ((b1 & 0x3f) << 12) | ((b2 & 0x3f) << 6) | (b3 & 0x3f);
	            if (c <= 0xffff) {
	                fn(c);
	            } else {
	                c ^= 0x10000;
	                fn(0xd800 | (c >> 10));
	                fn(0xdc00 | (c & 0x3ff));
	            }
	        }
	        // skip error
	    }
	};

	Object.defineProperty(kdbxweb.ProtectedValue.prototype, 'textLength', {
	    get: function() {
	        var textLength = 0;
	        this.forEachChar(function() { textLength++; });
	        return textLength;
	    }
	});

	kdbxweb.ProtectedValue.prototype.includesLower = function(findLower) {
	    var matches = false;
	    var foundSeqs = [];
	    var ix = 0;
	    var len = findLower.length;
	    this.forEachChar(function(ch) {
	        ch = String.fromCharCode(ch).toLowerCase();
	        if (matches) {
	            return;
	        }
	        for (var i = 0; i < foundSeqs.length; i++) {
	            var seqIx = ++foundSeqs[i];
	            if (findLower[seqIx] !== ch) {
	                foundSeqs.splice(i, 1);
	                i--;
	                continue;
	            }
	            if (seqIx === len - 1) {
	                matches = true;
	                return;
	            }
	        }
	        if (findLower[0] === ch) {
	            foundSeqs.push(0);
	        }
	        ix++;
	    });
	    return matches;
	};

	kdbxweb.ProtectedValue.prototype.equals = function(other) {
	    if (!other) {
	        return false;
	    }
	    if (!other.isProtected) {
	        return this.textLength === other.length && this.includes(other);
	    }
	    if (other === this) {
	        return true;
	    }
	    var len = this.byteLength;
	    if (len !== other.byteLength) {
	        return false;
	    }
	    for (var i = 0; i < len; i++) {
	        if ((this._value[i] ^ this._salt[i]) !== (other._value[i] ^ other._salt[i])) {
	            return false;
	        }
	    }
	    return true;
	};

	module.exports = kdbxweb.ProtectedValue;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {'use strict';

	var Backbone = __webpack_require__(1),
	    Tip = __webpack_require__(49);

	_.extend(Backbone.View.prototype, {
	    hide: function() {
	        return this.toggle(false);
	    },

	    show: function() {
	        return this.toggle(true);
	    },

	    toggle: function(visible) {
	        if (visible === undefined) {
	            visible = this._hidden;
	        }
	        this.$el.toggleClass('show', !!visible);
	        this.$el.toggleClass('hide', !visible);
	        this._hidden = !visible;
	        this.trigger(visible ? 'show' : 'hide');
	        return this;
	    },

	    isHidden: function() {
	        return this._hidden;
	    },

	    afterPaint: function(callback) {
	        this.requestAnimationFrame(function() {
	            this.requestAnimationFrame(callback);
	        });
	    },

	    setTimeout: function(callback) {
	        setTimeout(callback.bind(this), 0);
	    },

	    requestAnimationFrame: function(callback) {
	        requestAnimationFrame(callback.bind(this));
	    },

	    renderTemplate: function(model, replace) {
	        if (replace && replace.plain) {
	            this.$el.html(this.template(model));
	        } else {
	            if (replace) {
	                this.$el.html('');
	            }
	            var el = $(this.template(model));
	            if (!this._elAppended || replace) {
	                this.$el.append(el);
	                this._elAppended = true;
	            } else {
	                this.$el.replaceWith(el);
	            }
	            this.setElement(el);
	        }
	        Tip.createTips(this.$el);
	    },

	    _parentRemove: Backbone.View.prototype.remove,

	    remove: function() {
	        this.trigger('remove');
	        if (this.views) {
	            _.each(this.views, function(view) {
	                if (view) {
	                    if (view instanceof Backbone.View) {
	                        view.remove();
	                    } else if (view.length) {
	                        view.forEach(function (v) {
	                            v.remove();
	                        });
	                    }
	                }
	            });
	        }
	        if (this.scroll) {
	            try { this.scroll.dispose(); }
	            catch (e) { }
	        }
	        this._parentRemove(arguments);
	    }
	});

	module.exports = Backbone.View;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    AppSettingsModel = __webpack_require__(12),
	    MenuModel = __webpack_require__(74),
	    EntryModel = __webpack_require__(32),
	    GroupModel = __webpack_require__(23),
	    FileCollection = __webpack_require__(58),
	    EntryCollection = __webpack_require__(38),
	    FileInfoCollection = __webpack_require__(59),
	    FileModel = __webpack_require__(45),
	    FileInfoModel = __webpack_require__(44),
	    Storage = __webpack_require__(47),
	    Timeouts = __webpack_require__(30),
	    IdGenerator = __webpack_require__(83),
	    Logger = __webpack_require__(8);

	__webpack_require__(69);

	var AppModel = Backbone.Model.extend({
	    defaults: {},

	    initialize: function() {
	        this.tags = [];
	        this.files = new FileCollection();
	        this.fileInfos = FileInfoCollection.load();
	        this.menu = new MenuModel();
	        this.filter = {};
	        this.sort = 'title';
	        this.settings = AppSettingsModel.instance;
	        this.activeEntryId = null;

	        this.listenTo(Backbone, 'refresh', this.refresh);
	        this.listenTo(Backbone, 'set-filter', this.setFilter);
	        this.listenTo(Backbone, 'add-filter', this.addFilter);
	        this.listenTo(Backbone, 'set-sort', this.setSort);
	        this.listenTo(Backbone, 'empty-trash', this.emptyTrash);

	        this.appLogger = new Logger('app');
	    },

	    addFile: function(file) {
	        if (this.files.getById(file.id)) {
	            return false;
	        }
	        this.files.add(file);
	        file.get('groups').forEach(function (group) {
	            this.menu.groupsSection.addItem(group);
	        }, this);
	        this._addTags(file);
	        this._tagsChanged();
	        this.menu.filesSection.addItem({
	            icon: 'lock',
	            title: file.get('name'),
	            page: 'file',
	            file: file
	        });
	        this.refresh();
	        this.listenTo(file, 'reload', this.reloadFile);
	        return true;
	    },

	    reloadFile: function(file) {
	        this.menu.groupsSection.removeByFile(file, true);
	        file.get('groups').forEach(function (group) {
	            this.menu.groupsSection.addItem(group);
	        }, this);
	        this.updateTags();
	    },

	    _addTags: function(file) {
	        var tagsHash = {};
	        this.tags.forEach(function(tag) {
	            tagsHash[tag.toLowerCase()] = true;
	        });
	        var that = this;
	        file.forEachEntry({}, function(entry) {
	            _.forEach(entry.tags, function(tag) {
	                if (!tagsHash[tag.toLowerCase()]) {
	                    tagsHash[tag.toLowerCase()] = true;
	                    that.tags.push(tag);
	                }
	            });
	        });
	        this.tags.sort();
	    },

	    _tagsChanged: function() {
	        if (this.tags.length) {
	            this.menu.tagsSection.set('scrollable', true);
	            this.menu.tagsSection.setItems(this.tags.map(function (tag) {
	                return {title: tag, icon: 'tag', filterKey: 'tag', filterValue: tag};
	            }));
	        } else {
	            this.menu.tagsSection.set('scrollable', false);
	            this.menu.tagsSection.removeAllItems();
	        }
	    },

	    updateTags: function() {
	        var oldTags = this.tags.slice();
	        this.tags.splice(0, this.tags.length);
	        this.files.forEach(function(file) {
	            this._addTags(file);
	        }, this);
	        if (!_.isEqual(oldTags, this.tags)) {
	            this._tagsChanged();
	        }
	    },

	    closeAllFiles: function() {
	        var that = this;
	        this.files.each(function(file) {
	            file.close();
	            that.fileClosed(file);
	        });
	        this.files.reset();
	        this.menu.groupsSection.removeAllItems();
	        this.menu.tagsSection.set('scrollable', false);
	        this.menu.tagsSection.removeAllItems();
	        this.menu.filesSection.removeAllItems();
	        this.tags.splice(0, this.tags.length);
	        this.filter = {};
	        this.refresh();
	    },

	    closeFile: function(file) {
	        file.close();
	        this.fileClosed(file);
	        this.files.remove(file);
	        this.updateTags();
	        this.menu.groupsSection.removeByFile(file);
	        this.menu.filesSection.removeByFile(file);
	        this.refresh();
	    },

	    emptyTrash: function() {
	        this.files.forEach(function(file) {
	            file.emptyTrash();
	        }, this);
	        this.refresh();
	    },

	    setFilter: function(filter) {
	        this.filter = filter;
	        this.filter.subGroups = this.settings.get('expandGroups');
	        var entries = this.getEntries();
	        if (!this.activeEntryId || !entries.get(this.activeEntryId)) {
	            var firstEntry = entries.first();
	            this.activeEntryId = firstEntry ? firstEntry.id : null;
	        }
	        Backbone.trigger('filter', { filter: this.filter, sort: this.sort, entries: entries });
	        Backbone.trigger('select-entry', entries.get(this.activeEntryId));
	    },

	    refresh: function() {
	        this.setFilter(this.filter);
	    },

	    addFilter: function(filter) {
	        this.setFilter(_.extend(this.filter, filter));
	    },

	    setSort: function(sort) {
	        this.sort = sort;
	        this.setFilter(this.filter);
	    },

	    getEntries: function() {
	        var entries = new EntryCollection();
	        var filter = this.prepareFilter();
	        this.files.forEach(function(file) {
	            file.forEachEntry(filter, function(entry) {
	                entries.push(entry);
	            });
	        });
	        entries.sortEntries(this.sort);
	        if (this.filter.trash) {
	            this.addTrashGroups(entries);
	        }
	        return entries;
	    },

	    addTrashGroups: function(collection) {
	        this.files.forEach(function(file) {
	            var trashGroup = file.getTrashGroup();
	            if (trashGroup) {
	                trashGroup.getOwnSubGroups().forEach(function(group) {
	                    collection.unshift(GroupModel.fromGroup(group, file, trashGroup));
	                });
	            }
	        });
	    },

	    prepareFilter: function() {
	        var filter = _.clone(this.filter);
	        if (filter.text) {
	            filter.textLower = filter.text.toLowerCase();
	        }
	        if (filter.tag) {
	            filter.tagLower = filter.tag.toLowerCase();
	        }
	        return filter;
	    },

	    getFirstSelectedGroup: function() {
	        var selGroupId = this.filter.group;
	        var file, group;
	        if (selGroupId) {
	            this.files.forEach(function(f) {
	                group = f.getGroup(selGroupId);
	                if (group) {
	                    file = f;
	                    return false;
	                }
	            }, this);
	        }
	        if (!group) {
	            file = this.files.first();
	            group = file.get('groups').first();
	        }
	        return { group: group, file: file };
	    },

	    createNewEntry: function() {
	        var sel = this.getFirstSelectedGroup();
	        return EntryModel.newEntry(sel.group, sel.file);
	    },

	    createNewGroup: function() {
	        var sel = this.getFirstSelectedGroup();
	        return GroupModel.newGroup(sel.group, sel.file);
	    },

	    createDemoFile: function() {
	        var that = this;
	        if (!this.files.getByName('Demo')) {
	            var demoFile = new FileModel();
	            demoFile.openDemo(function() {
	                that.addFile(demoFile);
	            });
	            return true;
	        } else {
	            return false;
	        }
	    },

	    createNewFile: function() {
	        var name;
	        for (var i = 0; ; i++) {
	            name = 'New' + (i || '');
	            if (!this.files.getByName(name) && !this.fileInfos.getByName(name)) {
	                break;
	            }
	        }
	        var newFile = new FileModel();
	        newFile.create(name);
	        this.addFile(newFile);
	    },

	    openFile: function(params, callback) {
	        var logger = new Logger('open', params.name);
	        logger.info('File open request');
	        var that = this;
	        var fileInfo = params.id ? this.fileInfos.get(params.id) : this.fileInfos.getMatch(params.storage, params.name, params.path);
	        if (fileInfo && fileInfo.get('modified')) {
	            logger.info('Open file from cache because it is modified');
	            this.openFileFromCache(params, callback, fileInfo);
	        } else if (params.fileData) {
	            logger.info('Open file from supplied content');
	            this.openFileWithData(params, callback, fileInfo, params.fileData, true);
	        } else if (!params.storage) {
	            logger.info('Open file from cache as main storage');
	            this.openFileFromCache(params, callback, fileInfo);
	        } else if (fileInfo && fileInfo.get('rev') === params.rev && fileInfo.get('storage') !== 'file') {
	            logger.info('Open file from cache because it is latest');
	            this.openFileFromCache(params, callback, fileInfo);
	        } else {
	            logger.info('Open file from storage', params.storage);
	            var storage = Storage[params.storage];
	            var storageLoad = function() {
	                logger.info('Load from storage');
	                storage.load(params.path, function(err, data, stat) {
	                    if (err) {
	                        if (fileInfo) {
	                            logger.info('Open file from cache because of storage load error', err);
	                            that.openFileFromCache(params, callback, fileInfo);
	                        } else {
	                            logger.info('Storage load error', err);
	                            callback(err);
	                        }
	                    } else {
	                        logger.info('Open file from content loaded from storage');
	                        params.fileData = data;
	                        params.rev = stat && stat.rev || null;
	                        that.openFileWithData(params, callback, fileInfo, data, true);
	                    }
	                });
	            };
	            var cacheRev = fileInfo && fileInfo.get('rev') || null;
	            if (cacheRev && storage.stat) {
	                logger.info('Stat file');
	                storage.stat(params.path, function(err, stat) {
	                    if (fileInfo && (err || stat && stat.rev === cacheRev)) {
	                        logger.info('Open file from cache because ' + (err ? 'stat error' : 'it is latest'), err);
	                        that.openFileFromCache(params, callback, fileInfo);
	                    } else if (stat) {
	                        logger.info('Open file from storage');
	                        storageLoad();
	                    } else {
	                        logger.info('Stat error', err);
	                        callback(err);
	                    }
	                });
	            } else {
	                storageLoad();
	            }
	        }
	    },

	    openFileFromCache: function(params, callback, fileInfo) {
	        var that = this;
	        Storage.cache.load(fileInfo.id, function(err, data) {
	            new Logger('open', params.name).info('Loaded file from cache', err);
	            if (err) {
	                callback(err);
	            } else {
	                that.openFileWithData(params, callback, fileInfo, data);
	            }
	        });
	    },

	    openFileWithData: function(params, callback, fileInfo, data, updateCacheOnSuccess) {
	        var logger = new Logger('open', params.name);
	        var file = new FileModel({
	            name: params.name,
	            storage: params.storage,
	            path: params.path,
	            keyFileName: params.keyFileName
	        });
	        var that = this;
	        file.open(params.password, data, params.keyFileData, function(err) {
	            if (err) {
	                return callback(err);
	            }
	            if (that.files.get(file.id)) {
	                return callback('Duplicate file id');
	            }
	            if (fileInfo && fileInfo.get('modified')) {
	                if (fileInfo.get('editState')) {
	                    logger.info('Loaded local edit state');
	                    file.setLocalEditState(fileInfo.get('editState'));
	                }
	                logger.info('Mark file as modified and schedule sync');
	                file.set('modified', true);
	                setTimeout(that.syncFile.bind(that, file), 0);
	            }
	            if (fileInfo) {
	                file.set('syncDate', fileInfo.get('syncDate'));
	            }
	            var cacheId = fileInfo && fileInfo.id || IdGenerator.uuid();
	            file.set('cacheId', cacheId);
	            if (updateCacheOnSuccess) {
	                logger.info('Save loaded file to cache');
	                Storage.cache.save(cacheId, params.fileData);
	            }
	            var rev = params.rev || fileInfo && fileInfo.get('rev');
	            that.addToLastOpenFiles(file, rev);
	            that.addFile(file);
	            that.fileOpened(file);
	        });
	    },

	    addToLastOpenFiles: function(file, rev) {
	        this.appLogger.debug('Add last open file', file.get('cacheId'), file.get('name'), file.get('storage'), file.get('path'), rev);
	        var dt = new Date();
	        var fileInfo = new FileInfoModel({
	            id: file.get('cacheId'),
	            name: file.get('name'),
	            storage: file.get('storage'),
	            path: file.get('path'),
	            modified: file.get('modified'),
	            editState: file.getLocalEditState(),
	            rev: rev,
	            syncDate: file.get('syncDate') || dt,
	            openDate: dt
	        });
	        this.fileInfos.remove(file.get('cacheId'));
	        this.fileInfos.unshift(fileInfo);
	        this.fileInfos.save();
	    },

	    fileOpened: function(file) {
	        var that = this;
	        if (file.get('storage') === 'file') {
	            Storage.file.watch(file.get('path'), _.debounce(function() {
	                that.syncFile(file);
	            }, Timeouts.FileChangeSync));
	        }
	    },

	    fileClosed: function(file) {
	        if (file.get('storage') === 'file') {
	            Storage.file.unwatch(file.get('path'));
	        }
	    },

	    removeFileInfo: function(id) {
	        Storage.cache.remove(id);
	        this.fileInfos.remove(id);
	        this.fileInfos.save();
	    },

	    syncFile: function(file, options, callback) {
	        var that = this;
	        if (file.get('demo')) {
	            return callback && callback();
	        }
	        if (file.get('syncing')) {
	            return callback && callback('Sync in progress');
	        }
	        if (!options) {
	            options = {};
	        }
	        var logger = new Logger('sync', file.get('name'));
	        var storage = options.storage || file.get('storage');
	        var path = options.path || file.get('path');
	        if (storage && Storage[storage].getPathForName && !options.path) {
	            path = Storage[storage].getPathForName(file.get('name'));
	        }
	        logger.info('Sync started', storage, path, options);
	        var fileInfo = file.get('cacheId') ? this.fileInfos.get(file.get('cacheId')) :
	            this.fileInfos.getMatch(file.get('storage'), file.get('name'), file.get('path'));
	        if (!fileInfo) {
	            logger.info('Create new file info');
	            var dt = new Date();
	            fileInfo = new FileInfoModel({
	                id: IdGenerator.uuid(),
	                name: file.get('name'),
	                storage: file.get('storage'),
	                path: file.get('path'),
	                modified: file.get('modified'),
	                editState: null,
	                rev: null,
	                syncDate: dt,
	                openDate: dt
	            });
	        }
	        file.setSyncProgress();
	        var complete = function(err, savedToCache) {
	            if (!err) { savedToCache = true; }
	            logger.info('Sync finished', err || 'no error');
	            file.setSyncComplete(path, storage, err ? err.toString() : null, savedToCache);
	            file.set('cacheId', fileInfo.id);
	            fileInfo.set({
	                name: file.get('name'),
	                storage: storage,
	                path: path,
	                modified: file.get('modified'),
	                editState: file.getLocalEditState(),
	                syncDate: file.get('syncDate'),
	                cacheId: fileInfo.id
	            });
	            if (!that.fileInfos.get(fileInfo.id)) {
	                that.fileInfos.unshift(fileInfo);
	            }
	            that.fileInfos.save();
	            if (callback) { callback(err); }
	        };
	        if (!storage) {
	            if (!file.get('modified') && fileInfo.id === file.get('cacheId')) {
	                logger.info('Local, not modified');
	                return complete();
	            }
	            logger.info('Local, save to cache');
	            file.getData(function(data, err) {
	                if (err) { return complete(err); }
	                Storage.cache.save(fileInfo.id, data, function(err) {
	                    logger.info('Saved to cache', err || 'no error');
	                    complete(err);
	                });
	            });
	        } else {
	            var maxLoadLoops = 3, loadLoops = 0;
	            var loadFromStorageAndMerge = function() {
	                if (++loadLoops === maxLoadLoops) {
	                    return complete('Too many load attempts');
	                }
	                logger.info('Load from storage, attempt ' + loadLoops);
	                Storage[storage].load(path, function(err, data, stat) {
	                    logger.info('Load from storage', stat, err || 'no error');
	                    if (err) { return complete(err); }
	                    file.mergeOrUpdate(data, options.remoteKey, function(err) {
	                        logger.info('Merge complete', err || 'no error');
	                        that.refresh();
	                        if (err) {
	                            if (err.code === 'InvalidKey') {
	                                logger.info('Remote key changed, request to enter new key');
	                                Backbone.trigger('remote-key-changed', { file: file });
	                            }
	                            return complete(err);
	                        }
	                        if (stat && stat.rev) {
	                            logger.info('Update rev in file info');
	                            fileInfo.set('rev', stat.rev);
	                        }
	                        file.set('syncDate', new Date());
	                        if (file.get('modified')) {
	                            logger.info('Updated sync date, saving modified file to cache and storage');
	                            saveToCacheAndStorage();
	                        } else if (file.get('dirty')) {
	                            logger.info('Saving not modified dirty file to cache');
	                            Storage.cache.save(fileInfo.id, data, function (err) {
	                                if (err) { return complete(err); }
	                                file.set('dirty', false);
	                                logger.info('Complete, remove dirty flag');
	                                complete();
	                            });
	                        } else {
	                            logger.info('Complete, no changes');
	                            complete();
	                        }
	                    });
	                });
	            };
	            var saveToCacheAndStorage = function() {
	                logger.info('Save to cache and storage');
	                file.getData(function(data, err) {
	                    if (err) { return complete(err); }
	                    if (!file.get('dirty')) {
	                        logger.info('Save to storage, skip cache because not dirty');
	                        saveToStorage(data);
	                    } else {
	                        logger.info('Saving to cache');
	                        Storage.cache.save(fileInfo.id, data, function (err) {
	                            if (err) { return complete(err); }
	                            file.set('dirty', false);
	                            logger.info('Saved to cache, saving to storage');
	                            saveToStorage(data);
	                        });
	                    }
	                });
	            };
	            var saveToStorage = function(data) {
	                logger.info('Save data to storage');
	                Storage[storage].save(path, data, function(err, stat) {
	                    if (err && err.revConflict) {
	                        logger.info('Save rev conflict, reloading from storage');
	                        loadFromStorageAndMerge();
	                    } else if (err) {
	                        logger.info('Error saving data to storage');
	                        complete(err);
	                    } else {
	                        if (stat && stat.rev) {
	                            logger.info('Update rev in file info');
	                            fileInfo.set('rev', stat.rev);
	                        }
	                        file.set('syncDate', new Date());
	                        logger.info('Save to storage complete, update sync date');
	                        complete();
	                    }
	                }, fileInfo.get('rev'));
	            };
	            logger.info('Stat file');
	            Storage[storage].stat(path, function (err, stat) {
	                if (err) {
	                    if (err.notFound) {
	                        logger.info('File does not exist in storage, creating');
	                        saveToCacheAndStorage();
	                    } else if (file.get('dirty')) {
	                        logger.info('Stat error, dirty, save to cache', err || 'no error');
	                        file.getData(function (data) {
	                            if (data) {
	                                Storage.cache.save(fileInfo.id, data, function (e) {
	                                    if (!e) {
	                                        file.set('dirty', false);
	                                    }
	                                    logger.info('Saved to cache, exit with error', err || 'no error');
	                                    complete(err);
	                                });
	                            }
	                        });
	                    } else {
	                        logger.info('Stat error, not dirty', err || 'no error');
	                        complete(err);
	                    }
	                } else if (stat.rev === fileInfo.get('rev')) {
	                    if (file.get('modified')) {
	                        logger.info('Stat found same version, modified, saving to cache and storage');
	                        saveToCacheAndStorage();
	                    } else {
	                        logger.info('Stat found same version, not modified');
	                        complete();
	                    }
	                } else {
	                    logger.info('Found new version, loading from storage');
	                    loadFromStorageAndMerge();
	                }
	            });
	        }
	    }
	});

	module.exports = AppModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1);

	var AttachmentModel = Backbone.Model.extend({
	    defaults: {},

	    initialize: function() {
	    },

	    setAttachment: function(att) {
	        this.title = att.title;
	        this.data = att.data;
	        this.ext = this._getExtension(this.title);
	        this.icon = this._getIcon(this.ext);
	        this.mimeType = this._getMimeType(this.ext);
	    },

	    _getExtension: function(fileName) {
	        var ext = fileName ? fileName.split('.').pop() : undefined;
	        return ext ? ext.toLowerCase() : undefined;
	    },

	    _getIcon: function(ext) {
	        switch (ext) {
	            case 'txt': case 'log': case 'rtf':
	                return 'file-text-o';
	            case 'html': case 'htm': case 'js': case 'css': case 'xml': case 'config': case 'json': case 'yaml':
	            case 'cpp': case 'c': case 'h': case 'cc': case 'hpp':  case 'mm': case 'cs': case 'php': case 'sh':
	            case 'py':  case 'java': case 'rb': case 'cfg': case 'properties': case 'yml': case 'asm': case 'bat':
	                return 'file-code-o';
	            case 'pdf':
	                return 'file-pdf-o';
	            case 'zip': case 'rar': case 'bz': case 'bz2': case '7z': case 'gzip': case 'gz': case 'tar':
	            case 'cab': case 'ace': case 'dmg': case 'jar':
	                return 'file-archive-o';
	            case 'doc': case 'docx':
	                return 'file-word-o';
	            case 'xls': case 'xlsx':
	                return 'file-excel-o';
	            case 'ppt': case 'pptx':
	                return 'file-powerpoint-o';
	            case 'jpeg': case 'jpg': case 'png': case 'gif': case 'bmp': case 'tiff': case 'svg': case 'ico': case 'psd':
	               return 'file-image-o';
	            case 'avi': case 'mp4': case '3gp': case 'm4v': case 'mov': case 'mpeg': case 'mpg': case 'mpe':
	                return 'file-video-o';
	            case 'mp3': case 'wav': case 'flac':
	                return 'file-audio-o';
	        }
	        return 'file-o';
	    },

	    _getMimeType: function(ext) {
	        switch (ext) {
	            case 'txt': case 'log':
	            case 'html': case 'htm': case 'js': case 'css': case 'xml': case 'config': case 'json': case 'yaml':
	            case 'cpp': case 'c': case 'h': case 'cc': case 'hpp':  case 'mm': case 'cs': case 'php': case 'sh':
	            case 'py':  case 'java': case 'rb': case 'cfg': case 'properties': case 'yml': case 'asm':
	                return 'text/plain';
	            case 'pdf':
	                return 'application/pdf';
	            case 'jpeg': case 'jpg': case 'png': case 'gif': case 'bmp': case 'tiff': case 'svg':
	                return 'image/' + ext;
	        }
	    },

	    getBinary: function() {
	        var data = this.data;
	        if (data && data.ref) {
	            data = data.value;
	        }
	        if (data && data.getBinary) {
	            data = data.getBinary();
	        }
	        if (data instanceof ArrayBuffer && data.byteLength) {
	            data = new Uint8Array(data);
	        }
	        if (data instanceof Uint8Array) {
	            return data;
	        }
	    }
	});

	AttachmentModel.fromAttachment = function(att) {
	    var model = new AttachmentModel();
	    model.setAttachment(att);
	    return model;
	};

	module.exports = AttachmentModel;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var MenuSectionModel = __webpack_require__(33),
	    GroupCollection = __webpack_require__(21);

	var GroupsMenuModel = MenuSectionModel.extend({
	    defaults: _.extend({}, MenuSectionModel.prototype.defaults, {
	        scrollable: true,
	        grow: true
	    }),

	    initialize: function() {
	        this.set('items', new GroupCollection());
	    },

	    _loadItemCollectionType: function() {
	        return __webpack_require__(21);
	    }
	});

	module.exports = GroupsMenuModel;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    MenuSectionCollection = __webpack_require__(61),
	    MenuSectionModel = __webpack_require__(33),
	    GroupsMenuModel = __webpack_require__(73),
	    Locale = __webpack_require__(5),
	    Keys = __webpack_require__(6),
	    Colors = __webpack_require__(43);

	var MenuModel = Backbone.Model.extend({
	    defaults: {
	        sections: null
	    },

	    menus: null,

	    initialize: function() {
	        this.menus = {};
	        this.allItemsSection = new MenuSectionModel([{ title: Locale.menuAllItems, icon: 'th-large', active: true,
	            shortcut: Keys.DOM_VK_A, filterKey: '*' }]);
	        this.groupsSection = new GroupsMenuModel();
	        this.colorsSection = new MenuSectionModel([{ title: Locale.menuColors, icon: 'bookmark', shortcut: Keys.DOM_VK_C,
	            cls: 'menu__item-colors', filterKey: 'color', filterValue: true }]);
	        this.colorsItem = this.colorsSection.get('items').models[0];
	        var defTags = [{ title: Locale.menuTags, icon: 'tags', defaultItem: true,
	            disabled: { header: Locale.menuAlertNoTags, body: Locale.menuAlertNoTagsBody, icon: 'tags' } }];
	        this.tagsSection = new MenuSectionModel(defTags);
	        this.tagsSection.set({ scrollable: true, drag: true });
	        this.tagsSection.defaultItems = defTags;
	        this.trashSection = new MenuSectionModel([{ title: Locale.menuTrash, icon: 'trash', shortcut: Keys.DOM_VK_D,
	            filterKey: 'trash', filterValue: true, drop: true }]);
	        Colors.AllColors.forEach(function(color) { this.colorsSection.get('items').models[0]
	            .addOption({ cls: 'fa ' + color + '-color', value: color, filterValue: color }); }, this);
	        this.menus.app = new MenuSectionCollection([
	            this.allItemsSection,
	            this.colorsSection,
	            this.tagsSection,
	            this.groupsSection,
	            this.trashSection
	        ]);

	        this.generalSection = new MenuSectionModel([{ title: Locale.menuSetGeneral, icon: 'cog', page: 'general', active: true }]);
	        this.shortcutsSection = new MenuSectionModel([{ title: Locale.menuSetShortcuts, icon: 'keyboard-o', page: 'shortcuts' }]);
	        this.aboutSection = new MenuSectionModel([{ title: Locale.menuSetAbout, icon: 'info', page: 'about' }]);
	        this.helpSection = new MenuSectionModel([{ title: Locale.menuSetHelp, icon: 'question', page: 'help' }]);
	        this.filesSection = new MenuSectionModel();
	        this.filesSection.set({ scrollable: true, grow: true });
	        this.menus.settings = new MenuSectionCollection([
	            this.generalSection,
	            this.shortcutsSection,
	            this.aboutSection,
	            this.helpSection,
	            this.filesSection
	        ]);
	        this.set('sections', this.menus.app);
	    },

	    select: function(sel) {
	        var sections = this.get('sections');
	        sections.forEach(function(section) { this._select(section, sel.item); }, this);
	        if (sections === this.menus.app) {
	            this.colorsItem.get('options').forEach(function (opt) {
	                opt.set('active', opt === sel.option);
	            });
	            var selColor = sel.item === this.colorsItem && sel.option ? sel.option.get('value') + '-color' : '';
	            this.colorsItem.set('cls', 'menu__item-colors ' + selColor);
	            var filterKey = sel.item.get('filterKey'),
	                filterValue = (sel.option || sel.item).get('filterValue');
	            var filter = {};
	            filter[filterKey] = filterValue;
	            Backbone.trigger('set-filter', filter);
	        } else if (sections === this.menus.settings) {
	            Backbone.trigger('set-page', { page: sel.item.get('page'), file: sel.item.get('file') });
	        }
	    },

	    _select: function(item, selectedItem) {
	        var items = item.get('items');
	        if (items) {
	            items.forEach(function(it) {
	                it.set('active', it === selectedItem);
	                this._select(it, selectedItem);
	            }, this);
	        }
	    },

	    setMenu: function(type) {
	        this.set('sections', this.menus[type]);
	    }
	});

	module.exports = MenuModel;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1);

	var MenuOptionModel = Backbone.Model.extend({
	    defaults: {
	        title: '',
	        cls: '',
	        value: '',
	        active: false,
	        filterValue: null
	    }
	});

	module.exports = MenuOptionModel;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Format = __webpack_require__(16),
	    Locale = __webpack_require__(5);

	var EntryPresenter = function(descField, noColor, activeEntryId) {
	    this.entry = null;
	    this.descField = descField;
	    this.noColor = noColor || '';
	    this.activeEntryId = activeEntryId;
	};

	EntryPresenter.prototype = {
	    present: function(item) {
	        if (item.entry) {
	            this.entry = item;
	        } else {
	            this.group = item;
	        }
	        return this;
	    },
	    get id() { return this.entry ? this.entry.id : this.group.get('id'); },
	    get icon() { return this.entry ? this.entry.icon : (this.group.get('icon') || 'folder'); },
	    get customIcon() { return this.entry ? this.entry.customIcon : undefined; },
	    get color() { return this.entry ? (this.entry.color || (this.entry.customIcon ? this.noColor : undefined)) : undefined; },
	    get title() { return this.entry ? this.entry.title : this.group.get('title'); },
	    get notes() { return this.entry ? this.entry.notes : undefined; },
	    get url() { return this.entry ? this.entry.displayUrl : undefined; },
	    get user() { return this.entry ? this.entry.user : undefined; },
	    get active() { return this.entry ? this.entry.id === this.activeEntryId : this.group.active; },
	    get created() { return this.entry ? Format.dtStr(this.entry.created) : undefined; },
	    get updated() { return this.entry ? Format.dtStr(this.entry.updated) : undefined; },
	    get expired() { return this.entry ? this.entry.expired : false; },
	    get tags() { return this.entry ? this.entry.tags : false; },
	    get description() {
	        if (!this.entry) {
	            return '[' + Locale.listGroup + ']';
	        }
	        switch (this.descField) {
	            case 'website':
	                return this.url || '(' + Locale.listNoWebsite + ')';
	            case 'user':
	                return this.user || '(' + Locale.listNoUser + ')';
	            case 'created':
	                return this.created;
	            case 'updated':
	                return this.updated;
	            case 'attachments':
	                return this.entry.attachments.map(function(a) { return a.title; }).join(', ') || '(' + Locale.listNoAttachments + ')';
	            default:
	                return this.notes || this.url || this.user;
	        }
	    }
	};

	module.exports = EntryPresenter;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Logger = __webpack_require__(8);

	var logger = new Logger('storage-cache');
	var idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

	var StorageCache = {
	    name: 'cache',
	    enabled: !!idb,

	    db: null,
	    errorOpening: null,

	    init: function(callback) {
	        if (this.db) {
	            return callback && callback();
	        }
	        var that = this;
	        try {
	            var req = idb.open('FilesCache');
	            req.onerror = function (e) {
	                logger.error('Error opening indexed db', e);
	                that.errorOpening = e;
	                if (callback) { callback(e); }
	            };
	            req.onsuccess = function (e) {
	                that.db = e.target.result;
	                if (callback) { callback(); }
	            };
	            req.onupgradeneeded = function (e) {
	                var db = e.target.result;
	                db.createObjectStore('files');
	            };
	        } catch (e) {
	            logger.error('Error opening indexed db', e);
	            if (callback) { callback(e); }
	        }
	    },

	    save: function(id, data, callback) {
	        logger.debug('Save', id);
	        this.init((function(err) {
	            if (err) {
	                return callback && callback(err);
	            }
	            try {
	                var ts = logger.ts();
	                var req = this.db.transaction(['files'], 'readwrite').objectStore('files').put(data, id);
	                req.onsuccess = function () {
	                    logger.debug('Saved', id, logger.ts(ts));
	                    if (callback) { callback(); }
	                };
	                req.onerror = function () {
	                    logger.error('Error saving to cache', id, req.error);
	                    if (callback) { callback(req.error); }
	                };
	            } catch (e) {
	                logger.error('Error saving to cache', id, e);
	                if (callback) { callback(e); }
	            }
	        }).bind(this));
	    },

	    load: function(id, callback) {
	        logger.debug('Load', id);
	        this.init((function(err) {
	            if (err) {
	                return callback && callback(err, null);
	            }
	            try {
	                var ts = logger.ts();
	                var req = this.db.transaction(['files'], 'readonly').objectStore('files').get(id);
	                req.onsuccess = function () {
	                    logger.debug('Loaded', id, logger.ts(ts));
	                    if (callback) { callback(null, req.result); }
	                };
	                req.onerror = function () {
	                    logger.error('Error loading from cache', id, req.error);
	                    if (callback) { callback(req.error); }
	                };
	            } catch (e) {
	                logger.error('Error loading from cache', id, e);
	                if (callback) { callback(e, null); }
	            }
	        }).bind(this));
	    },

	    remove: function(id, callback) {
	        logger.debug('Remove', id);
	        this.init((function(err) {
	            if (err) {
	                return callback && callback(err);
	            }
	            try {
	                var ts = logger.ts();
	                var req = this.db.transaction(['files'], 'readwrite').objectStore('files').delete(id);
	                req.onsuccess = function () {
	                    logger.debug('Removed', id, logger.ts(ts));
	                    if (callback) { callback(); }
	                };
	                req.onerror = function () {
	                    logger.error('Error removing from cache', id, req.error);
	                    if (callback) { callback(req.error); }
	                };
	            } catch(e) {
	                logger.error('Error removing from cache', id, e);
	                if (callback) { callback(e); }
	            }
	        }).bind(this));
	    }
	};

	module.exports = StorageCache;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var DropboxLink = __webpack_require__(22),
	    Logger = __webpack_require__(8);

	var logger = new Logger('storage-dropbox');

	var StorageDropbox = {
	    name: 'dropbox',
	    enabled: true,

	    _convertError: function(err) {
	        if (!err) {
	            return err;
	        }
	        if (err.status === DropboxLink.ERROR_NOT_FOUND) {
	            err.notFound = true;
	        }
	        if (err.status === DropboxLink.ERROR_CONFLICT) {
	            err.revConflict = true;
	        }
	        return err;
	    },

	    getPathForName: function(fileName) {
	        return '/' + fileName + '.kdbx';
	    },

	    load: function(path, callback) {
	        logger.debug('Load', path);
	        var ts = logger.ts();
	        DropboxLink.openFile(path, function(err, data, stat) {
	            logger.debug('Loaded', path, stat ? stat.versionTag : null, logger.ts(ts));
	            err = StorageDropbox._convertError(err);
	            if (callback) { callback(err, data, stat ? { rev: stat.versionTag } : null); }
	        }, _.noop);
	    },

	    stat: function(path, callback) {
	        logger.debug('Stat', path);
	        var ts = logger.ts();
	        DropboxLink.stat(path, function(err, stat) {
	            if (stat && stat.isRemoved) {
	                err = new Error('File removed');
	                err.notFound = true;
	            }
	            logger.debug('Stated', path, stat ? stat.versionTag : null, logger.ts(ts));
	            err = StorageDropbox._convertError(err);
	            if (callback) { callback(err, stat ? { rev: stat.versionTag } : null); }
	        }, _.noop);
	    },

	    save: function(path, data, callback, rev) {
	        logger.debug('Save', path, rev);
	        var ts = logger.ts();
	        DropboxLink.saveFile(path, data, rev, function(err, stat) {
	            logger.debug('Saved', path, logger.ts(ts));
	            if (!callback) { return; }
	            err = StorageDropbox._convertError(err);
	            callback(err, stat ? { rev: stat.versionTag } : null);
	        }, _.noop);
	    }
	};

	module.exports = StorageDropbox;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Launcher = __webpack_require__(7),
	    Logger = __webpack_require__(8);

	var logger = new Logger('storage-file-cache');

	var StorageFileCache = {
	    name: 'cache',
	    enabled: !!Launcher,

	    path: null,

	    getPath: function(id) {
	        return Launcher.req('path').join(this.path, id);
	    },

	    init: function(callback) {
	        if (this.path) {
	            return callback && callback();
	        }
	        try {
	            var path = Launcher.getUserDataPath('OfflineFiles');
	            var fs = Launcher.req('fs');
	            if (!fs.existsSync(path)) {
	                fs.mkdirSync(path);
	            }
	            this.path = path;
	            callback();
	        } catch (e) {
	            logger.error('Error opening local offline storage', e);
	            if (callback) { callback(e); }
	        }
	    },

	    save: function(id, data, callback) {
	        logger.debug('Save', id);
	        this.init((function(err) {
	            if (err) {
	                return callback && callback(err);
	            }
	            var ts = logger.ts();
	            try {
	                Launcher.writeFile(this.getPath(id), data);
	                logger.debug('Saved', id, logger.ts(ts));
	                if (callback) { callback(); }
	            } catch (e) {
	                logger.error('Error saving to cache', id, e);
	                if (callback) { callback(e); }
	            }
	        }).bind(this));
	    },

	    load: function(id, callback) {
	        logger.debug('Load', id);
	        this.init((function(err) {
	            if (err) {
	                return callback && callback(null, err);
	            }
	            var ts = logger.ts();
	            try {
	                var data = Launcher.readFile(this.getPath(id));
	                logger.debug('Loaded', id, logger.ts(ts));
	                if (callback) { callback(null, data.buffer); }
	            } catch (e) {
	                logger.error('Error loading from cache', id, e);
	                if (callback) { callback(e, null); }
	            }
	        }).bind(this));
	    },

	    remove: function(id, callback) {
	        logger.debug('Remove', id);
	        this.init((function(err) {
	            if (err) {
	                return callback && callback(err);
	            }
	            var ts = logger.ts();
	            try {
	                var path = this.getPath(id);
	                if (Launcher.fileExists(path)) {
	                    Launcher.deleteFile(path);
	                }
	                logger.debug('Removed', id, logger.ts(ts));
	                if (callback) { callback(); }
	            } catch(e) {
	                logger.error('Error removing from cache', id, e);
	                if (callback) { callback(e); }
	            }
	        }).bind(this));
	    }
	};

	module.exports = StorageFileCache;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Launcher = __webpack_require__(7),
	    Logger = __webpack_require__(8);

	var logger = new Logger('storage-file');

	var fileWatchers = {};

	var StorageFile = {
	    name: 'file',
	    enabled: !!Launcher,

	    load: function(path, callback) {
	        logger.debug('Load', path);
	        var ts = logger.ts();
	        try {
	            var data = Launcher.readFile(path);
	            var rev = Launcher.statFile(path).mtime.getTime().toString();
	            logger.debug('Loaded', path, rev, logger.ts(ts));
	            if (callback) { callback(null, data.buffer, { rev: rev }); }
	        } catch (e) {
	            logger.error('Error reading local file', path, e);
	            if (callback) { callback(e, null); }
	        }
	    },

	    stat: function(path, callback) {
	        logger.debug('Stat', path);
	        var ts = logger.ts();
	        try {
	            var stat = Launcher.statFile(path);
	            logger.debug('Stat done', path, logger.ts(ts));
	            if (callback) { callback(null, { rev: stat.mtime.getTime().toString() }); }
	        } catch (e) {
	            logger.error('Error stat local file', path, e);
	            if (e.code === 'ENOENT') {
	                e.notFound = true;
	            }
	            if (callback) { callback(e, null); }
	        }
	    },

	    save: function(path, data, callback, rev) {
	        logger.debug('Save', path, rev);
	        var ts = logger.ts();
	        try {
	            if (rev) {
	                try {
	                    var stat = Launcher.statFile(path);
	                    var fileRev = stat.mtime.getTime().toString();
	                    if (fileRev !== rev) {
	                        logger.debug('Save mtime differs', rev, fileRev);
	                        if (callback) { callback({ revConflict: true }, { rev: fileRev }); }
	                        return;
	                    }
	                } catch (e) {
	                    // file doesn't exist or we cannot stat it: don't care and overwrite
	                }
	            }
	            Launcher.writeFile(path, data);
	            var newRev = Launcher.statFile(path).mtime.getTime().toString();
	            logger.debug('Saved', path, logger.ts(ts));
	            if (callback) { callback(undefined, { rev: newRev }); }
	        } catch (e) {
	            logger.error('Error writing local file', path, e);
	            if (callback) { callback(e); }
	        }
	    },

	    watch: function(path, callback) {
	        var names = Launcher.parsePath(path);
	        if (!fileWatchers[names.dir]) {
	            logger.debug('Watch dir', names.dir);
	            var fsWatcher = Launcher.createFsWatcher(names.dir);
	            fsWatcher.on('change', this.fsWatcherChange.bind(this, names.dir));
	            fileWatchers[names.dir] = { fsWatcher: fsWatcher, callbacks: [] };
	        }
	        fileWatchers[names.dir].callbacks.push({ file: names.file, callback: callback });
	    },

	    unwatch: function(path) {
	        var names = Launcher.parsePath(path);
	        var watcher = fileWatchers[names.dir];
	        if (watcher) {
	            var ix = watcher.callbacks.findIndex(function(cb) { return cb.file === names.file; });
	            if (ix >= 0) {
	                watcher.callbacks.splice(ix, 1);
	            }
	            if (!watcher.callbacks.length) {
	                logger.debug('Stop watch dir', names.dir);
	                watcher.fsWatcher.close();
	                delete fileWatchers[names.dir];
	            }
	        }
	    },

	    fsWatcherChange: function(dirname, evt, fileName) {
	        var watcher = fileWatchers[dirname];
	        if (watcher) {
	            watcher.callbacks.forEach(function(cb) {
	                if (cb.file === fileName && typeof cb.callback === 'function') {
	                    logger.debug('File changed', dirname, evt, fileName);
	                    cb.callback();
	                }
	            });
	        }
	    }
	};

	module.exports = StorageFile;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Colors = __webpack_require__(43);

	var KnownColors = {};

	var Color = function(str) {
	    var start = str[0] === '#' ? 1 : 0,
	        len = str.length === 3 ? 1 : 2;
	    this.r = parseInt(str.substr(start, len), 16);
	    this.g = parseInt(str.substr(start + len, len), 16);
	    this.b = parseInt(str.substr(start + len * 2, len), 16);
	    this.setHsl();
	};

	Color.prototype.setHsl = function() {
	    var r = this.r / 255;
	    var g = this.g / 255;
	    var b = this.b / 255;

	    var max = Math.max(r, g, b),
	        min = Math.min(r, g, b),
	        h, s, l = (max + min) / 2;

	    if (max === min) {
	        h = s = 0; // achromatic
	    } else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch (max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }

	    this.h = h;
	    this.s = s;
	    this.l = l;
	};

	Color.prototype.toHex = function() {
	    return '#' + hex(this.r) + hex(this.g) + hex(this.b);
	};

	Color.prototype.distanceTo = function(color) {
	    return Math.abs(this.h - color.h);
	};

	Color.getNearest = function(colorStr) {
	    var color = new Color(colorStr);
	    if (!color.s) {
	        return null;
	    }
	    var selected = null, minDistance = Number.MAX_VALUE;
	    _.forEach(KnownColors, function(col, name) {
	        var distance = color.distanceTo(col);
	        if (distance < minDistance) {
	            minDistance = distance;
	            selected = name;
	        }
	    });
	    return selected;
	};

	Color.getKnownBgColor = function(knownColor) {
	    return Colors.BgColors[knownColor] ? '#' + Colors.BgColors[knownColor] : undefined;
	};

	_.forEach(Colors.ColorsValues, function(val, name) {
	    KnownColors[name] = new Color(val);
	});

	function hex(num) {
	    var str = (num || 0).toString(16);
	    return str.length < 2 ? '0' + str : str;
	}

	module.exports = Color;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	var LastChar = String.fromCharCode(0xffffffff);

	var ciCompare = (window.Intl && window.Intl.Collator) ?
	    new Intl.Collator(undefined, { sensitivity: 'base' }).compare : function(x, y) {
	    return x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase());
	};

	var Comparators = {
	    stringComparator: function(field, asc) {
	        if (asc) {
	            return function (x, y) { return ciCompare(x[field] || LastChar, y[field] || LastChar); };
	        } else {
	            return function (x, y) { return ciCompare(y[field], x[field]); };
	        }
	    },

	    dateComparator: function(field, asc) {
	        if (asc) {
	            return function (x, y) { return x[field] - y[field]; };
	        } else {
	            return function (x, y) { return y[field] - x[field]; };
	        }
	    }
	};

	module.exports = Comparators;


/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	var IdGenerator = {
	    uuid: function() {
	        var s4 = IdGenerator.s4;
	        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	    },
	    s4: function() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	    }
	};

	module.exports = IdGenerator;


/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	var StringUtil = {
	    camelCaseRegex: /\-./g,

	    camelCase: function(str) {
	        return str.replace(this.camelCaseRegex, function(match) { return match[1].toUpperCase(); });
	    }
	};

	module.exports = StringUtil;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    DragView = __webpack_require__(50),
	    MenuView = __webpack_require__(104),
	    FooterView = __webpack_require__(96),
	    ListView = __webpack_require__(100),
	    ListWrapView = __webpack_require__(101),
	    DetailsView = __webpack_require__(88),
	    GrpView = __webpack_require__(97),
	    OpenView = __webpack_require__(106),
	    SettingsView = __webpack_require__(113),
	    KeyChangeView = __webpack_require__(98),
	    Alerts = __webpack_require__(11),
	    Keys = __webpack_require__(6),
	    Timeouts = __webpack_require__(30),
	    KeyHandler = __webpack_require__(10),
	    IdleTracker = __webpack_require__(27),
	    Launcher = __webpack_require__(7),
	    ThemeChanger = __webpack_require__(48),
	    Locale = __webpack_require__(5),
	    UpdateModel = __webpack_require__(24);

	var AppView = Backbone.View.extend({
	    el: 'body',

	    template: __webpack_require__(115),

	    events: {
	        'contextmenu': 'contextmenu',
	        'drop': 'drop',
	        'dragover': 'dragover',
	        'click a[target=_blank]': 'extLinkClick',
	        'mousedown': 'bodyClick'
	    },

	    views: null,

	    initialize: function () {
	        this.views = {};
	        this.views.menu = new MenuView({ model: this.model.menu });
	        this.views.menuDrag = new DragView('x');
	        this.views.footer = new FooterView({ model: this.model });
	        this.views.listWrap = new ListWrapView({ model: this.model });
	        this.views.list = new ListView({ model: this.model });
	        this.views.listDrag = new DragView('x');
	        this.views.list.dragView = this.views.listDrag;
	        this.views.details = new DetailsView();
	        this.views.details.appModel = this.model;
	        this.views.grp = new GrpView();

	        this.views.menu.listenDrag(this.views.menuDrag);
	        this.views.list.listenDrag(this.views.listDrag);

	        this.listenTo(this.model.settings, 'change:theme', this.setTheme);
	        this.listenTo(this.model.files, 'update reset', this.fileListUpdated);

	        this.listenTo(Backbone, 'select-all', this.selectAll);
	        this.listenTo(Backbone, 'menu-select', this.menuSelect);
	        this.listenTo(Backbone, 'lock-workspace', this.lockWorkspace);
	        this.listenTo(Backbone, 'show-file', this.showFileSettings);
	        this.listenTo(Backbone, 'open-file', this.toggleOpenFile);
	        this.listenTo(Backbone, 'save-all', this.saveAll);
	        this.listenTo(Backbone, 'remote-key-changed', this.remoteKeyChanged);
	        this.listenTo(Backbone, 'toggle-settings', this.toggleSettings);
	        this.listenTo(Backbone, 'toggle-menu', this.toggleMenu);
	        this.listenTo(Backbone, 'toggle-details', this.toggleDetails);
	        this.listenTo(Backbone, 'edit-group', this.editGroup);
	        this.listenTo(Backbone, 'launcher-open-file', this.launcherOpenFile);
	        this.listenTo(Backbone, 'user-idle', this.userIdle);
	        this.listenTo(Backbone, 'app-minimized', this.appMinimized);

	        this.listenTo(UpdateModel.instance, 'change:updateReady', this.updateApp);

	        window.onbeforeunload = this.beforeUnload.bind(this);
	        window.onresize = this.windowResize.bind(this);

	        KeyHandler.onKey(Keys.DOM_VK_ESCAPE, this.escPressed, this);
	        KeyHandler.onKey(Keys.DOM_VK_BACK_SPACE, this.backspacePressed, this);

	        setInterval(this.syncAllByTimer.bind(this), Timeouts.AutoSync);
	    },

	    render: function () {
	        this.$el.html(this.template());
	        this.setTheme();
	        this.views.listWrap.setElement(this.$el.find('.app__list-wrap')).render();
	        this.views.menu.setElement(this.$el.find('.app__menu')).render();
	        this.views.menuDrag.setElement(this.$el.find('.app__menu-drag')).render();
	        this.views.footer.setElement(this.$el.find('.app__footer')).render();
	        this.views.list.setElement(this.$el.find('.app__list')).render();
	        this.views.listDrag.setElement(this.$el.find('.app__list-drag')).render();
	        this.views.details.setElement(this.$el.find('.app__details')).render();
	        this.views.grp.setElement(this.$el.find('.app__grp')).render().hide();
	        this.showLastOpenFile();
	        return this;
	    },

	    showOpenFile: function() {
	        this.views.menu.hide();
	        this.views.menuDrag.hide();
	        this.views.listWrap.hide();
	        this.views.list.hide();
	        this.views.listDrag.hide();
	        this.views.details.hide();
	        this.views.grp.hide();
	        this.views.footer.toggle(this.model.files.hasOpenFiles());
	        this.hideSettings();
	        this.hideOpenFile();
	        this.hideKeyChange();
	        this.views.open = new OpenView({ model: this.model });
	        this.views.open.setElement(this.$el.find('.app__body')).render();
	        this.views.open.on('close', this.showEntries, this);
	    },

	    showLastOpenFile: function() {
	        this.showOpenFile();
	        var lastOpenFile = this.model.fileInfos.getLast();
	        if (lastOpenFile) {
	            this.views.open.showOpenFileInfo(lastOpenFile);
	        }
	    },

	    launcherOpenFile: function(path) {
	        if (path && /\.kdbx$/i.test(path)) {
	            this.showOpenFile();
	            this.views.open.showOpenLocalFile(path);
	        }
	    },

	    updateApp: function() {
	        if (UpdateModel.instance.get('updateStatus') === 'ready' &&
	            !Launcher && !this.model.files.hasOpenFiles()) {
	            window.location.reload();
	        }
	    },

	    showEntries: function() {
	        this.views.menu.show();
	        this.views.menuDrag.show();
	        this.views.listWrap.show();
	        this.views.list.show();
	        this.views.listDrag.show();
	        this.views.details.show();
	        this.views.grp.hide();
	        this.views.footer.show();
	        this.hideOpenFile();
	        this.hideSettings();
	        this.hideKeyChange();
	    },

	    hideOpenFile: function() {
	        if (this.views.open) {
	            this.views.open.remove();
	            this.views.open = null;
	        }
	    },

	    hideSettings: function() {
	        if (this.views.settings) {
	            this.model.menu.setMenu('app');
	            this.views.settings.remove();
	            this.views.settings = null;
	        }
	    },

	    hideKeyChange: function() {
	        if (this.views.keyChange) {
	            this.views.keyChange.hide();
	            this.views.keyChange = null;
	        }
	    },

	    showSettings: function(selectedMenuItem) {
	        this.model.menu.setMenu('settings');
	        this.views.menu.show();
	        this.views.menuDrag.show();
	        this.views.listWrap.hide();
	        this.views.list.hide();
	        this.views.listDrag.hide();
	        this.views.details.hide();
	        this.views.grp.hide();
	        this.hideOpenFile();
	        this.hideKeyChange();
	        this.views.settings = new SettingsView({ model: this.model });
	        this.views.settings.setElement(this.$el.find('.app__body')).render();
	        if (!selectedMenuItem) {
	            selectedMenuItem = this.model.menu.generalSection.get('items').first();
	        }
	        this.model.menu.select({ item: selectedMenuItem });
	        this.views.menu.switchVisibility(false);
	    },

	    showEditGroup: function() {
	        this.views.listWrap.hide();
	        this.views.list.hide();
	        this.views.listDrag.hide();
	        this.views.details.hide();
	        this.views.grp.show();
	    },

	    showKeyChange: function(file) {
	        if (this.views.keyChange || Alerts.alertDisplayed) {
	            return;
	        }
	        this.views.menu.hide();
	        this.views.listWrap.hide();
	        this.views.list.hide();
	        this.views.listDrag.hide();
	        this.views.details.hide();
	        this.views.grp.hide();
	        this.views.keyChange = new KeyChangeView({ model: file });
	        this.views.keyChange.setElement(this.$el.find('.app__body')).render();
	        this.views.keyChange.on('accept', this.keyChangeAccept.bind(this));
	        this.views.keyChange.on('cancel', this.showEntries.bind(this));
	    },

	    fileListUpdated: function() {
	        if (this.model.files.hasOpenFiles()) {
	            this.showEntries();
	        } else {
	            this.showOpenFile();
	        }
	    },

	    showFileSettings: function(e) {
	        var menuItem = this.model.menu.filesSection.get('items').find(function(item) {
	            return item.get('file').cid === e.fileId;
	        });
	        if (this.views.settings) {
	            if (this.views.settings.file === menuItem.get('file')) {
	                this.showEntries();
	            } else {
	                this.model.menu.select({ item: menuItem });
	            }
	        } else {
	            this.showSettings(menuItem);
	        }
	    },

	    toggleOpenFile: function() {
	        if (this.views.open) {
	            this.showEntries();
	        } else {
	            this.showOpenFile();
	        }
	    },

	    beforeUnload: function(e) {
	        if (this.model.files.hasDirtyFiles()) {
	            if (Launcher && !Launcher.exitRequested) {
	                if (!this.exitAlertShown) {
	                    var that = this;
	                    if (this.model.settings.get('autoSave')) {
	                        that.saveAndExit();
	                        return Launcher.preventExit(e);
	                    }
	                    that.exitAlertShown = true;
	                    Alerts.yesno({
	                        header: Locale.appUnsavedWarn,
	                        body: Locale.appUnsavedWarnBody,
	                        buttons: [
	                            {result: 'save', title: Locale.appExitSaveBtn},
	                            {result: 'exit', title: Locale.appExitBtn, error: true},
	                            {result: '', title: Locale.appDontExitBtn}
	                        ],
	                        success: function (result) {
	                            if (result === 'save') {
	                                that.saveAndExit();
	                            } else {
	                                Launcher.exit();
	                            }
	                        },
	                        cancel: function() {
	                            Launcher.cancelRestart(false);
	                        },
	                        complete: function () {
	                            that.exitAlertShown = false;
	                        }
	                    });
	                }
	                return Launcher.preventExit(e);
	            }
	            return Locale.appUnsavedWarnBody;
	        } else if (Launcher && !Launcher.exitRequested && !Launcher.restartPending &&
	                Launcher.canMinimize() && this.model.settings.get('minimizeOnClose')) {
	            Launcher.minimizeApp();
	            return Launcher.preventExit(e);
	        }
	    },

	    windowResize: function() {
	        Backbone.trigger('page-geometry', { source: 'window' });
	    },

	    escPressed: function() {
	        if (this.views.open && this.model.files.hasOpenFiles()) {
	            this.showEntries();
	        }
	    },

	    backspacePressed: function(e) {
	        if (e.target === document.body) {
	            e.preventDefault();
	        }
	    },

	    selectAll: function() {
	        this.menuSelect({ item: this.model.menu.allItemsSection.get('items').first() });
	    },

	    menuSelect: function(opt) {
	        this.model.menu.select(opt);
	        if (!this.views.grp.isHidden()) {
	            this.showEntries();
	        }
	    },

	    userIdle: function() {
	        this.lockWorkspace(true);
	    },

	    appMinimized: function() {
	        if (this.model.settings.get('lockOnMinimize')) {
	            this.lockWorkspace(true);
	        }
	    },

	    lockWorkspace: function(autoInit) {
	        var that = this;
	        if (Alerts.alertDisplayed) {
	            return;
	        }
	        if (this.model.files.hasUnsavedFiles()) {
	            if (this.model.settings.get('autoSave')) {
	                this.saveAndLock();
	            } else {
	                var message = autoInit ? Locale.appCannotLockAutoInit : Locale.appCannotLock;
	                Alerts.alert({
	                    icon: 'lock',
	                    header: 'Lock',
	                    body: message,
	                    buttons: [
	                        { result: 'save', title: Locale.appSaveChangesBtn },
	                        { result: 'discard', title: Locale.appDiscardChangesBtn, error: true },
	                        { result: '', title: Locale.alertCancel }
	                    ],
	                    checkbox: Locale.appAutoSave,
	                    success: function(result, autoSaveChecked) {
	                        if (result === 'save') {
	                            if (autoSaveChecked) {
	                                that.model.settings.set('autoSave', autoSaveChecked);
	                            }
	                            that.saveAndLock();
	                        } else if (result === 'discard') {
	                            that.model.closeAllFiles();
	                        }
	                    }
	                });
	            }
	        } else {
	            this.closeAllFilesAndShowFirst();
	        }
	    },

	    saveAndLock: function(complete) {
	        var pendingCallbacks = 0,
	            errorFiles = [],
	            that = this;
	        this.model.files.forEach(function(file) {
	            if (!file.get('dirty')) {
	                return;
	            }
	            this.model.syncFile(file, null, fileSaved.bind(this, file));
	            pendingCallbacks++;
	        }, this);
	        if (!pendingCallbacks) {
	            this.closeAllFilesAndShowFirst();
	        }
	        function fileSaved(file, err) {
	            if (err) {
	                errorFiles.push(file.get('name'));
	            }
	            if (--pendingCallbacks === 0) {
	                if (errorFiles.length && that.model.files.hasDirtyFiles()) {
	                    if (!Alerts.alertDisplayed) {
	                        var alertBody = errorFiles.length > 1 ? Locale.appSaveErrorBodyMul : Locale.appSaveErrorBody;
	                        Alerts.error({
	                            header: Locale.appSaveError,
	                            body: alertBody + ' ' + errorFiles.join(', ')
	                        });
	                    }
	                    if (complete) { complete(true); }
	                } else {
	                    that.closeAllFilesAndShowFirst();
	                    if (complete) { complete(true); }
	                }
	            }
	        }
	    },

	    saveAndExit: function() {
	        this.saveAndLock(function(result) {
	            if (result) {
	                Launcher.exit();
	            }
	        });
	    },

	    closeAllFilesAndShowFirst: function() {
	        var fileToShow = this.model.files.find(function(file) { return !file.get('demo') && !file.get('created'); });
	        this.model.closeAllFiles();
	        if (!fileToShow) {
	            fileToShow = this.model.fileInfos.getLast();
	        }
	        if (fileToShow) {
	            var fileInfo = this.model.fileInfos.getMatch(fileToShow.get('storage'), fileToShow.get('name'), fileToShow.get('path'));
	            if (fileInfo) {
	                this.views.open.showOpenFileInfo(fileInfo);
	            }
	        }
	    },

	    saveAll: function() {
	        this.model.files.forEach(function(file) {
	            this.model.syncFile(file);
	        }, this);
	    },

	    syncAllByTimer: function() {
	        if (this.model.settings.get('autoSave')) {
	            this.saveAll();
	        }
	    },

	    remoteKeyChanged: function(e) {
	        this.showKeyChange(e.file);
	    },

	    keyChangeAccept: function(e) {
	        this.showEntries();
	        this.model.syncFile(e.file, {
	            remoteKey: {
	                password: e.password,
	                keyFileName: e.keyFileName,
	                keyFileData: e.keyFileData
	            }
	        });
	    },

	    toggleSettings: function(page) {
	        var menuItem = page ? this.model.menu[page + 'Section'] : null;
	        if (menuItem) {
	            menuItem = menuItem.get('items').first();
	        }
	        if (this.views.settings) {
	            if (this.views.settings.page === page || !menuItem) {
	                if (this.model.files.hasOpenFiles()) {
	                    this.showEntries();
	                } else {
	                    this.showLastOpenFile();
	                }
	            } else {
	                if (menuItem) {
	                    this.model.menu.select({item: menuItem});
	                }
	            }
	        } else {
	            this.showSettings();
	            if (menuItem) {
	                this.model.menu.select({item: menuItem});
	            }
	        }
	    },

	    toggleMenu: function() {
	        this.views.menu.switchVisibility();
	    },

	    toggleDetails: function(visible) {
	        this.$el.find('.app').toggleClass('app--details-visible', visible);
	        this.views.menu.switchVisibility(false);
	    },

	    editGroup: function(group) {
	        if (group && this.views.grp.isHidden()) {
	            this.showEditGroup();
	            this.views.grp.showGroup(group);
	        } else {
	            this.showEntries();
	        }
	    },

	    contextmenu: function(e) {
	        if (['input', 'textarea'].indexOf(e.target.tagName.toLowerCase()) < 0) {
	            e.preventDefault();
	        }
	    },

	    dragover: function(e) {
	        e.preventDefault();
	    },

	    drop: function(e) {
	        e.preventDefault();
	    },

	    setTheme: function() {
	        ThemeChanger.setTheme(this.model.settings.get('theme'));
	    },

	    extLinkClick: function(e) {
	        if (Launcher) {
	            e.preventDefault();
	            Launcher.openLink(e.target.href);
	        }
	    },

	    bodyClick: function(e) {
	        IdleTracker.regUserAction();
	        Backbone.trigger('click', e);
	    }
	});

	module.exports = AppView;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	'use strict';

	var Backbone = __webpack_require__(1),
	    FeatureDetector = __webpack_require__(13);

	var DetailsAttachmentView = Backbone.View.extend({
	    template: __webpack_require__(116),

	    events: {
	    },

	    render: function(complete) {
	        this.renderTemplate({}, true);
	        var shortcut = this.$el.find('.details__attachment-preview-download-text-shortcut');
	        shortcut.html(FeatureDetector.actionShortcutSymbol(false));
	        var blob = new Blob([this.model.getBinary()], {type: this.model.mimeType});
	        var dataEl = this.$el.find('.details__attachment-preview-data');
	        switch ((this.model.mimeType || '').split('/')[0]) {
	            case 'text':
	                var reader = new FileReader();
	                reader.addEventListener('loadend', (function() {
	                    $('<pre/>').text(reader.result).appendTo(dataEl);
	                    complete();
	                }).bind(this));
	                reader.readAsText(blob);
	                return this;
	            case 'image':
	                $('<img/>').attr('src', URL.createObjectURL(blob)).appendTo(dataEl);
	                complete();
	                return this;
	        }
	        this.$el.addClass('details__attachment-preview--empty');
	        this.$el.find('.details__attachment-preview-icon').addClass('fa-' + this.model.icon);
	        complete();
	        return this;
	    }
	});

	module.exports = DetailsAttachmentView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    KeyHandler = __webpack_require__(10),
	    Keys = __webpack_require__(6),
	    Format = __webpack_require__(16),
	    Locale = __webpack_require__(5),
	    Alerts = __webpack_require__(11),
	    FieldViewReadOnly = __webpack_require__(51),
	    FieldViewReadOnlyRaw = __webpack_require__(93);

	var DetailsHistoryView = Backbone.View.extend({
	    template: __webpack_require__(119),

	    events: {
	        'click .details__history-close': 'closeHistory',
	        'click .details__history-timeline-item': 'timelineItemClick',
	        'click .details__history-arrow-prev': 'timelinePrevClick',
	        'click .details__history-arrow-next': 'timelineNextClick',
	        'click .details__history-button-revert': 'revertClick',
	        'click .details__history-button-delete': 'deleteClick',
	        'click .details__history-button-discard': 'discardClick'
	    },

	    formats: [
	        { name: 'ms', round: 1, format: function(d) { return Format.dtStr(d); } },
	        { name: 'sec', round: 1000, format: function(d) { return Format.dtStr(d); } },
	        { name: 'min', round: 1000*60, format: function(d) { return Format.dtStr(d).replace(':00 ', ' '); } },
	        { name: 'hour', round: 1000*60*60, format: function(d) { return Format.dtStr(d).replace(':00', ''); } },
	        { name: 'day', round: 1000*60*60*24, format: function(d) { return Format.dStr(d); } },
	        { name: 'month', round: 1000*60*60*24*31, format: function(d) { return Format.dStr(d); } },
	        { name: 'year', round: 1000*60*60*24*365, format: function(d) { return d.getFullYear(); } }
	    ],

	    fieldViews: null,

	    initialize: function() {
	        this.fieldViews = [];
	    },

	    render: function(visibleRecord) {
	        this.renderTemplate(null, true);
	        KeyHandler.onKey(Keys.DOM_VK_ESCAPE, this.closeHistory, this);
	        this.history = this.model.getHistory();
	        this.buildTimeline();
	        this.timelineEl = this.$el.find('.details__history-timeline');
	        this.bodyEl = this.$el.find('.details__history-body');
	        this.timeline.forEach(function(item, ix) {
	            $('<i/>').addClass('fa fa-circle details__history-timeline-item')
	                .css('left', (item.pos * 100) + '%')
	                .attr('data-id', ix)
	                .appendTo(this.timelineEl);
	        }, this);
	        this.labels.forEach(function(label) {
	            $('<div/>').addClass('details__history-timeline-label')
	                .css('left', (label.pos * 100) + '%')
	                .text(label.text)
	                .appendTo(this.timelineEl);
	        }, this);
	        if (visibleRecord === undefined) {
	            visibleRecord = this.history.length - 1;
	        }
	        this.showRecord(visibleRecord);
	        return this;
	    },

	    remove: function() {
	        this.removeFieldViews();
	        KeyHandler.offKey(Keys.DOM_VK_ESCAPE, this.closeHistory, this);
	        Backbone.View.prototype.remove.call(this);
	    },

	    removeFieldViews: function() {
	        this.fieldViews.forEach(function(fieldView) { fieldView.remove(); });
	        this.fieldViews = [];
	    },

	    showRecord: function(ix) {
	        this.activeIx = ix;
	        this.record = this.timeline[ix].rec;
	        this.timelineEl.find('.details__history-timeline-item').removeClass('details__history-timeline-item--active');
	        this.timelineEl.find('.details__history-timeline-item[data-id="' + ix + '"]').addClass('details__history-timeline-item--active');
	        this.removeFieldViews();
	        this.bodyEl.html('');
	        var colorCls = this.record.color ? this.record.color + '-color' : '';
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Rev', title: Locale.detHistoryVersion, value: ix + 1 } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Updated', title: Locale.detHistorySaved,
	            value: Format.dtStr(this.record.updated) +
	            (this.record.unsaved ? ' (' + Locale.detHistoryCurUnsavedState + ')' : '') +
	            ((ix === this.history.length - 1 && !this.record.unsaved) ? ' (' + Locale.detHistoryCurState + ')' : '') } }));
	        this.fieldViews.push(new FieldViewReadOnlyRaw({ model: { name: '$Title', title: Locale.detHistoryTitle,
	            value: '<i class="fa fa-' + this.record.icon + ' ' + colorCls + '"></i> ' +
	            _.escape(this.record.title) || '(' + Locale.detHistoryNoTitle + ')' } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: '$UserName', title: Locale.detUser, value: this.record.user } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: '$Password', title: Locale.detPassword, value: this.record.password } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: '$URL', title: Locale.detWebsite, value: this.record.url } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: '$Notes', title: Locale.detNotes, value: this.record.notes } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Tags', title: Locale.detTags, value: this.record.tags.join(', ') } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Expires', title: Locale.detExpires,
	            value: this.record.expires ? Format.dtStr(this.record.expires) : '' } }));
	        _.forEach(this.record.fields, function(value, field) {
	            this.fieldViews.push(new FieldViewReadOnly({ model: { name: '$' + field, title: field, value: value } }));
	        }, this);
	        if (this.record.attachments.length) {
	            this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Attachments', title: Locale.detAttachments,
	                value: this.record.attachments.map(function(att) { return att.title; }).join(', ') } }));
	        }
	        this.fieldViews.forEach(function(fieldView) {
	            fieldView.setElement(this.bodyEl).render();
	        }, this);
	        var buttons = this.$el.find('.details__history-buttons');
	        buttons.find('.details__history-button-revert').toggle(ix < this.history.length - 1);
	        buttons.find('.details__history-button-delete').toggle(ix < this.history.length - 1);
	        buttons.find('.details__history-button-discard').toggle(this.record.unsaved && ix === this.history.length - 1 &&
	            this.history.length > 1 || false);
	    },

	    timelineItemClick: function(e) {
	        var id = $(e.target).closest('.details__history-timeline-item').data('id');
	        this.showRecord(id);
	    },

	    timelinePrevClick: function() {
	        if (this.activeIx > 0) {
	            this.showRecord(this.activeIx - 1);
	        }
	    },

	    timelineNextClick: function() {
	        if (this.activeIx < this.timeline.length - 1) {
	            this.showRecord(this.activeIx + 1);
	        }
	    },

	    buildTimeline: function() {
	        var firstRec = this.history[0],
	            lastRec = this.history[this.history.length - 1];
	        this.timeline = this.history.map(function(rec) {
	            return {
	                pos: (rec.updated - firstRec.updated) / (lastRec.updated - firstRec.updated),
	                rec: rec
	            };
	        }, this);
	        var period = lastRec.updated - firstRec.updated;
	        var format = this.getDateFormat(period);
	        this.labels = this.getLabels(firstRec.updated.getTime(), lastRec.updated.getTime(), format.round)
	            .map(function(label) {
	                return {
	                    pos: (label - firstRec.updated) / (lastRec.updated - firstRec.updated),
	                    val: label,
	                    text: format.format(new Date(label))
	                };
	            });
	    },

	    getDateFormat: function(period) {
	        for (var i = 0; i < this.formats.length; i++) {
	            if (period < this.formats[i].round * 1.2) {
	                return this.formats[i > 0 ? i - 1 : 0];
	            }
	        }
	        return this.formats[this.formats.length - 1];
	    },

	    getLabels: function(first, last, round) {
	        var count = Math.floor((last - first) / round);
	        if (count > 2) {
	            round *= Math.ceil(count / 2);
	        }
	        var labels = [];
	        var label = Math.ceil(first / round) * round;
	        while (label < last) {
	            labels.push(label);
	            label += round;
	        }
	        if (labels.length > 1 && (labels[0] - first) / (last - first) < 0.10) {
	            labels.shift();
	        }
	        return labels;
	    },

	    closeHistory: function(updated) {
	        this.trigger('close', { updated: updated });
	    },

	    revertClick: function() {
	        Alerts.yesno({
	            header: 'Revert to this history state?',
	            body: 'Your current state will be saved to history.',
	            success: (function() {
	                this.model.revertToHistoryState(this.record.entry);
	                this.closeHistory(true);
	            }).bind(this)
	        });
	    },

	    deleteClick: function() {
	        Alerts.yesno({
	            header: 'Delete this history state?',
	            body: 'You will not be able to restore it.',
	            success: (function() {
	                this.model.deleteHistory(this.record.entry);
	                this.render(this.activeIx);
	            }).bind(this)
	        });
	    },

	    discardClick: function() {
	        Alerts.yesno({
	            header: 'Discard changed made to entry?',
	            body: 'Unsaved changed will by lost, there will be no way back.',
	            success: (function() {
	                this.model.discardUnsaved();
	                this.closeHistory(true);
	            }).bind(this)
	        });
	    }
	});

	module.exports = DetailsHistoryView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    GroupModel = __webpack_require__(23),
	    AppSettingsModel = __webpack_require__(12),
	    Scrollable = __webpack_require__(17),
	    FieldViewText = __webpack_require__(18),
	    FieldViewDate = __webpack_require__(91),
	    FieldViewTags = __webpack_require__(94),
	    FieldViewUrl = __webpack_require__(95),
	    FieldViewReadOnly = __webpack_require__(51),
	    FieldViewHistory = __webpack_require__(92),
	    FieldViewCustom = __webpack_require__(90),
	    IconSelectView = __webpack_require__(53),
	    DetailsHistoryView = __webpack_require__(87),
	    DetailsAttachmentView = __webpack_require__(86),
	    Keys = __webpack_require__(6),
	    KeyHandler = __webpack_require__(10),
	    Alerts = __webpack_require__(11),
	    CopyPaste = __webpack_require__(26),
	    Format = __webpack_require__(16),
	    Locale = __webpack_require__(5),
	    Tip = __webpack_require__(49),
	    Timeouts = __webpack_require__(30),
	    FileSaver = __webpack_require__(36),
	    kdbxweb = __webpack_require__(9);

	var DetailsView = Backbone.View.extend({
	    template: __webpack_require__(120),
	    emptyTemplate: __webpack_require__(117),
	    groupTemplate: __webpack_require__(118),

	    fieldViews: null,
	    views: null,
	    passEditView: null,
	    addNewFieldView: null,
	    passCopyTip: null,

	    events: {
	        'click .details__colors-popup-item': 'selectColor',
	        'click .details__header-icon': 'toggleIcons',
	        'click .details__attachment': 'toggleAttachment',
	        'click .details__header-title': 'editTitle',
	        'click .details__history-link': 'showHistory',
	        'click .details__buttons-trash': 'moveToTrash',
	        'click .details__buttons-trash-del': 'deleteFromTrash',
	        'click .details__back-button': 'backClick',
	        'dragover .details': 'dragover',
	        'dragleave .details': 'dragleave',
	        'drop .details': 'drop'
	    },

	    initialize: function () {
	        this.fieldViews = [];
	        this.views = {};
	        this.initScroll();
	        this.listenTo(Backbone, 'select-entry', this.showEntry);
	        KeyHandler.onKey(Keys.DOM_VK_C, this.copyKeyPress, this, KeyHandler.SHORTCUT_ACTION, false, true);
	        KeyHandler.onKey(Keys.DOM_VK_DELETE, this.deleteKeyPress, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.onKey(Keys.DOM_VK_BACK_SPACE, this.deleteKeyPress, this, KeyHandler.SHORTCUT_ACTION);
	    },

	    remove: function() {
	        KeyHandler.offKey(Keys.DOM_VK_C, this.copyKeyPress, this);
	        KeyHandler.offKey(Keys.DOM_VK_DELETE, this.deleteKeyPress, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.offKey(Keys.DOM_VK_BACK_SPACE, this.deleteKeyPress, this, KeyHandler.SHORTCUT_ACTION);
	        this.removeFieldViews();
	        Backbone.View.prototype.remove.call(this);
	    },

	    removeFieldViews: function() {
	        this.fieldViews.forEach(function(fieldView) { fieldView.remove(); });
	        this.fieldViews = [];
	        if (this.passCopyTip) {
	            this.passCopyTip.hide();
	            this.passCopyTip = null;
	        }
	    },

	    render: function () {
	        this.removeScroll();
	        this.removeFieldViews();
	        if (this.views.sub) {
	            this.views.sub.remove();
	            delete this.views.sub;
	        }
	        if (!this.model) {
	            this.$el.html(this.emptyTemplate());
	            return;
	        }
	        if (this.model instanceof GroupModel) {
	            this.$el.html(this.groupTemplate());
	            Tip.createTips(this.$el);
	            return;
	        }
	        var model = $.extend({ deleted: this.appModel.filter.trash }, this.model);
	        this.$el.html(this.template(model));
	        Tip.createTips(this.$el);
	        this.setSelectedColor(this.model.color);
	        this.addFieldViews();
	        this.createScroll({
	            root: this.$el.find('.details__body')[0],
	            scroller: this.$el.find('.scroller')[0],
	            bar: this.$el.find('.scroller__bar')[0]
	        });
	        this.$el.find('.details').removeClass('details--drag');
	        this.dragging = false;
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        this.pageResized();
	        this.showCopyTip();
	        return this;
	    },

	    addFieldViews: function() {
	        var model = this.model;
	        this.fieldViews.push(new FieldViewText({ model: { name: '$UserName', title: Locale.detUser,
	            value: function() { return model.user; } } }));
	        this.passEditView = new FieldViewText({ model: { name: '$Password', title: Locale.detPassword, canGen: true,
	            value: function() { return model.password; } } });
	        this.fieldViews.push(this.passEditView);
	        this.fieldViews.push(new FieldViewUrl({ model: { name: '$URL', title: Locale.detWebsite,
	            value: function() { return model.url; } } }));
	        this.fieldViews.push(new FieldViewText({ model: { name: '$Notes', title: Locale.detNotes, multiline: 'true',
	            value: function() { return model.notes; } } }));
	        this.fieldViews.push(new FieldViewTags({ model: { name: 'Tags', title: Locale.detTags, tags: this.appModel.tags,
	            value: function() { return model.tags; } } }));
	        this.fieldViews.push(new FieldViewDate({ model: { name: 'Expires', title: Locale.detExpires, lessThanNow: '(' + Locale.detExpired + ')',
	            value: function() { return model.expires; } } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'File', title: Locale.detFile,
	            value: function() { return model.fileName; } } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Created', title: Locale.detCreated,
	            value: function() { return Format.dtStr(model.created); } } }));
	        this.fieldViews.push(new FieldViewReadOnly({ model: { name: 'Updated', title: Locale.detUpdated,
	            value: function() { return Format.dtStr(model.updated); } } }));
	        this.fieldViews.push(new FieldViewHistory({ model: { name: 'History', title: Locale.detHistory,
	            value: function() { return { length: model.historyLength, unsaved: model.unsaved }; } } }));
	        _.forEach(model.fields, function(value, field) {
	            this.fieldViews.push(new FieldViewCustom({ model: { name: '$' + field, title: field,
	                value: function() { return model.fields[field]; } } }));
	        }, this);
	        var newFieldTitle = Locale.detNetField;
	        if (model.fields[newFieldTitle]) {
	            for (var i = 1; ; i++) {
	                var newFieldTitleVariant = newFieldTitle + i;
	                if (!model.fields[newFieldTitleVariant]) {
	                    newFieldTitle = newFieldTitleVariant;
	                    break;
	                }
	            }
	        }
	        this.addNewFieldView = new FieldViewCustom({ model: { name: '$', title: Locale.detAddField, newField: newFieldTitle,
	            value: function() { return ''; } } });
	        this.fieldViews.push(this.addNewFieldView);

	        var fieldsMainEl = this.$el.find('.details__body-fields');
	        var fieldsAsideEl = this.$el.find('.details__body-aside');
	        this.fieldViews.forEach(function(fieldView) {
	            fieldView.setElement(fieldView.readonly ? fieldsAsideEl : fieldsMainEl).render();
	            fieldView.on('change', this.fieldChanged.bind(this));
	        }, this);
	    },

	    setSelectedColor: function(color) {
	        this.$el.find('.details__colors-popup > .details__colors-popup-item').removeClass('details__colors-popup-item--active');
	        var colorEl = this.$el.find('.details__header-color')[0];
	        _.forEach(colorEl.classList, function(cls) {
	            if (cls.indexOf('color') > 0 && cls.lastIndexOf('details', 0) !== 0) {
	                colorEl.classList.remove(cls);
	            }
	        });
	        if (color) {
	            this.$el.find('.details__colors-popup > .' + color + '-color').addClass('details__colors-popup-item--active');
	            colorEl.classList.add(color + '-color');
	        }
	    },

	    selectColor: function(e) {
	        var color = $(e.target).closest('.details__colors-popup-item').data('color');
	        if (!color) {
	            return;
	        }
	        if (color === this.model.color) {
	            color = null;
	        }
	        this.model.setColor(color);
	        this.entryUpdated();
	    },

	    toggleIcons: function() {
	        if (this.views.sub && this.views.sub instanceof IconSelectView) {
	            this.render();
	            return;
	        }
	        this.removeSubView();
	        var subView = new IconSelectView({
	            el: this.scroller,
	            model: {
	                iconId: this.model.customIconId || this.model.iconId,
	                url: this.model.url, file: this.model.file
	            }
	        });
	        this.listenTo(subView, 'select', this.iconSelected);
	        subView.render();
	        this.pageResized();
	        this.views.sub = subView;
	    },

	    toggleAttachment: function(e) {
	        var attBtn = $(e.target).closest('.details__attachment');
	        var id = attBtn.data('id');
	        var attachment = this.model.attachments[id];
	        if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) {
	            this.downloadAttachment(attachment);
	            return;
	        }
	        if (this.views.sub && this.views.sub.attId === id) {
	            this.render();
	            return;
	        }
	        this.removeSubView();
	        var subView = new DetailsAttachmentView({ el: this.scroller, model: attachment });
	        subView.attId = id;
	        subView.render(this.pageResized.bind(this));
	        this.views.sub = subView;
	        attBtn.addClass('details__attachment--active');
	    },

	    removeSubView: function() {
	        this.$el.find('.details__attachment').removeClass('details__attachment--active');
	        if (this.views.sub) {
	            this.views.sub.remove();
	            delete this.views.sub;
	        }
	    },

	    downloadAttachment: function(attachment) {
	        var data = attachment.getBinary();
	        if (!data) {
	            return;
	        }
	        var mimeType = attachment.mimeType || 'application/octet-stream';
	        var blob = new Blob([data], {type: mimeType});
	        FileSaver.saveAs(blob, attachment.title);
	    },

	    iconSelected: function(sel) {
	        if (sel.custom) {
	            if (sel.id !== this.model.customIconId) {
	                this.model.setCustomIcon(sel.id);
	                this.entryUpdated();
	            } else {
	                this.render();
	            }
	        } else if (sel.id !== this.model.iconId) {
	            this.model.setIcon(+sel.id);
	            this.entryUpdated();
	        } else {
	            this.render();
	        }
	    },

	    showEntry: function(entry) {
	        this.model = entry;
	        this.render();
	        if (entry && !entry.title && entry.isJustCreated) {
	            this.editTitle();
	        }
	    },

	    copyKeyPress: function() { // TODO: fix this in Safari
	        if (!window.getSelection().toString()) {
	            var pw = this.model.password;
	            var password = pw.isProtected ? pw.getText() : pw;
	            if (!CopyPaste.simpleCopy) {
	                CopyPaste.createHiddenInput(password);
	            }
	            var copyRes = CopyPaste.copy(password);
	            if (copyRes && !this.passCopyTip) {
	                var passLabel = this.passEditView.labelEl;
	                var clipboardTime = copyRes.seconds;
	                var msg = clipboardTime ? Locale.detPassCopiedTime.replace('{}', clipboardTime)
	                    : Locale.detPassCopied;
	                var tip = new Tip(passLabel, { title: msg, placement: 'right', fast: true });
	                this.passCopyTip = tip;
	                tip.show();
	                var that = this;
	                setTimeout(function() {
	                    tip.hide();
	                    that.passCopyTip = null;
	                }, Timeouts.CopyTip);
	            }
	        }
	    },

	    showCopyTip: function() {
	        if (this.helpTipCopyShown) {
	            return;
	        }
	        this.helpTipCopyShown = AppSettingsModel.instance.get('helpTipCopyShown');
	        if (this.helpTipCopyShown) {
	            return;
	        }
	        AppSettingsModel.instance.set('helpTipCopyShown', true);
	        this.helpTipCopyShown = true;
	        var newFieldLabel = this.addNewFieldView.labelEl;
	        var tip = new Tip(newFieldLabel, { title: Locale.detCopyHint, placement: 'right' });
	        tip.show();
	        setTimeout(function() { tip.hide(); }, Timeouts.AutoHideHint);
	    },

	    fieldChanged: function(e) {
	        if (e.field) {
	            if (e.field[0] === '$') {
	                var fieldName = e.field.substr(1);
	                if (e.newField && e.newField !== fieldName) {
	                    if (fieldName) {
	                        this.model.setField(fieldName, undefined);
	                    }
	                    fieldName = e.newField;
	                    var i = 0;
	                    while (this.model.hasField(fieldName)) {
	                        i++;
	                        fieldName = e.newField + i;
	                    }
	                    this.model.setField(fieldName, e.val);
	                    this.entryUpdated();
	                    return;
	                } else if (fieldName) {
	                    this.model.setField(fieldName, e.val);
	                }
	            } else if (e.field === 'Tags') {
	                this.model.setTags(e.val);
	                this.appModel.updateTags();
	            } else if (e.field === 'Expires') {
	                var dt = e.val || undefined;
	                if (!_.isEqual(dt, this.model.expires)) {
	                    this.model.setExpires(dt);
	                }
	            }
	            this.entryUpdated(true);
	            this.fieldViews.forEach(function(fieldView, ix) {
	                if (fieldView instanceof FieldViewCustom && !fieldView.model.newField &&
	                    !this.model.hasField(fieldView.model.title)) {
	                    fieldView.remove();
	                    this.fieldViews.splice(ix, 1);
	                } else {
	                    fieldView.update();
	                }
	            }, this);
	        }
	        if (e.tab) {
	            this.focusNextField(e.tab);
	        }
	    },

	    dragover: function(e) {
	        e.preventDefault();
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        if (this.model && !this.dragging) {
	            this.dragging = true;
	            this.$el.find('.details').addClass('details--drag');
	        }
	    },

	    dragleave: function() {
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        this.dragTimeout = setTimeout((function() {
	            this.$el.find('.details').removeClass('details--drag');
	            this.dragging = false;
	        }).bind(this), 100);
	    },

	    drop: function(e) {
	        e.preventDefault();
	        if (!this.model) {
	            return;
	        }
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        this.$el.find('.details').removeClass('details--drag');
	        this.dragging = false;
	        var files = e.target.files || e.originalEvent.dataTransfer.files;
	        _.forEach(files, function(file) {
	            var reader = new FileReader();
	            reader.onload = (function() {
	                this.addAttachment(file.name, reader.result);
	            }).bind(this);
	            reader.readAsArrayBuffer(file);
	        }, this);
	    },

	    addAttachment: function(name, data) {
	        this.model.addAttachment(name, data);
	        this.entryUpdated();
	    },

	    deleteKeyPress: function() {
	        if (this.views.sub && this.views.sub.attId !== undefined) {
	            var attachment = this.model.attachments[this.views.sub.attId];
	            this.model.removeAttachment(attachment.title);
	            this.render();
	        }
	    },

	    editTitle: function() {
	        var input = $('<input/>')
	            .addClass('details__header-title-input')
	            .attr({ autocomplete: 'off', spellcheck: 'false', placeholder: 'Title' })
	            .val(this.model.title);
	        input.bind({
	            blur: this.titleInputBlur.bind(this),
	            input: this.titleInputInput.bind(this),
	            keydown: this.titleInputKeydown.bind(this),
	            keypress: this.titleInputInput.bind(this)
	        });
	        $('.details__header-title').replaceWith(input);
	        input.focus()[0].setSelectionRange(this.model.title.length, this.model.title.length);
	    },

	    titleInputBlur: function(e) {
	        this.setTitle(e.target.value);
	    },

	    titleInputInput: function(e) {
	        e.stopPropagation();
	    },

	    titleInputKeydown: function(e) {
	        KeyHandler.reg();
	        e.stopPropagation();
	        var code = e.keyCode || e.which;
	        if (code === Keys.DOM_VK_RETURN) {
	            $(e.target).unbind('blur');
	            this.setTitle(e.target.value);
	        } else if (code === Keys.DOM_VK_ESCAPE) {
	            $(e.target).unbind('blur');
	            if (this.model.isJustCreated) {
	                this.model.removeWithoutHistory();
	                Backbone.trigger('refresh');
	                return;
	            }
	            this.render();
	        } else if (code === Keys.DOM_VK_TAB) {
	            e.preventDefault();
	            $(e.target).unbind('blur');
	            this.setTitle(e.target.value);
	            if (!e.shiftKey) {
	                this.focusNextField({ field: '$Title' });
	            }
	        }
	    },

	    setTitle: function(title) {
	        if (this.model.title instanceof kdbxweb.ProtectedValue) {
	            title = kdbxweb.ProtectedValue.fromString(title);
	        }
	        if (title !== this.model.title) {
	            this.model.setField('Title', title);
	            this.entryUpdated(true);
	        }
	        var newTitle = $('<h1 class="details__header-title"></h1>').text(title || '(no title)');
	        this.$el.find('.details__header-title-input').replaceWith(newTitle);
	    },

	    entryUpdated: function(skipRender) {
	        Backbone.trigger('entry-updated', { entry: this.model });
	        if (!skipRender) {
	            this.render();
	        }
	    },

	    focusNextField: function(config) {
	        var found = false, nextFieldView;
	        if (config.field === '$Title' && !config.prev) {
	            found = true;
	        }
	        var start = config.prev ? this.fieldViews.length - 1 : 0;
	        var end = config.prev ? -1 : this.fieldViews.length;
	        var inc = config.prev ? -1 : 1;
	        for (var i = start; i !== end; i += inc) {
	            var fieldView = this.fieldViews[i];
	            if (fieldView.model.name === config.field) {
	                found = true;
	            } else if (found && !fieldView.readonly) {
	                nextFieldView = fieldView;
	                break;
	            }
	        }
	        if (nextFieldView) {
	            nextFieldView.edit();
	        }
	    },

	    showHistory: function() {
	        this.removeSubView();
	        var subView = new DetailsHistoryView({ el: this.scroller, model: this.model });
	        this.listenTo(subView, 'close', this.historyClosed.bind(this));
	        subView.render();
	        this.pageResized();
	        this.views.sub = subView;
	    },

	    historyClosed: function(e) {
	        if (e.updated) {
	            this.entryUpdated();
	        } else {
	            this.render();
	        }
	    },

	    moveToTrash: function() {
	        this.model.moveToTrash();
	        Backbone.trigger('refresh');
	    },

	    deleteFromTrash: function() {
	        Alerts.yesno({
	            header: Locale.detDelFromTrash,
	            body: Locale.detDelFromTrashBody + ' <p class="muted-color">' + Locale.detDelFromTrashBodyHint + '</p>',
	            icon: 'minus-circle',
	            success: (function() {
	                this.model.deleteFromTrash();
	                Backbone.trigger('refresh');
	            }).bind(this)
	        });
	    },

	    backClick: function() {
	        Backbone.trigger('toggle-details', false);
	    }
	});

	_.extend(DetailsView.prototype, Scrollable);

	module.exports = DetailsView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1);

	var DropdownView = Backbone.View.extend({
	    template: __webpack_require__(122),

	    events: {
	        'click .dropdown__item': 'itemClick'
	    },

	    initialize: function () {
	        this.bodyClick = this.bodyClick.bind(this);
	        $('body').on('click', this.bodyClick);
	    },

	    render: function (config) {
	        this.options = config.options;
	        this.renderTemplate(config);
	        this.$el.appendTo(document.body);
	        var ownRect = this.$el[0].getBoundingClientRect();
	        this.$el.css({ top: config.position.top, left: config.position.right - ownRect.right + ownRect.left });
	        return this;
	    },

	    remove: function() {
	        $('body').off('click', this.bodyClick);
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    bodyClick: function() {
	        this.trigger('cancel');
	    },

	    itemClick: function(e) {
	        e.stopPropagation();
	        var selected = $(e.target).closest('.dropdown__item').data('value');
	        this.trigger('select', { item: selected });
	    }
	});

	module.exports = DropdownView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {'use strict';

	var Backbone = __webpack_require__(1),
	    FieldViewText = __webpack_require__(18),
	    FieldView = __webpack_require__(19),
	    Keys = __webpack_require__(6),
	    Locale = __webpack_require__(5),
	    kdbxweb = __webpack_require__(9);

	var FieldViewCustom = FieldViewText.extend({
	    events: {
	        'mousedown .details__field-label': 'fieldLabelMousedown'
	    },

	    initialize: function() {
	        _.extend(this.events, FieldViewText.prototype.events);
	    },

	    startEdit: function() {
	        FieldViewText.prototype.startEdit.call(this);
	        if (this.model.newField && this.model.title === Locale.detAddField) {
	            this.model.title = this.model.newField;
	            this.$el.find('.details__field-label').text(this.model.newField);
	        }
	        this.$el.addClass('details__field--can-edit-title');
	        if (this.isProtected === undefined) {
	            this.isProtected = this.value instanceof kdbxweb.ProtectedValue;
	        }
	        this.$el.toggleClass('details__field--protected', this.isProtected);
	        $('<div/>').addClass('details__field-value-btn details__field-value-btn-protect')
	            .appendTo(this.valueEl)
	            .mousedown(this.protectBtnClick.bind(this));
	    },

	    endEdit: function(newVal, extra) {
	        this.$el.removeClass('details__field--can-edit-title');
	        extra = _.extend({}, extra);
	        if (this.model.titleChanged || this.model.newField) {
	            extra.newField = this.model.title;
	        }
	        if (!this.editing) {
	            return;
	        }
	        delete this.input;
	        this.stopListening(Backbone, 'click', this.fieldValueBlur);
	        if (typeof newVal === 'string') {
	            newVal = $.trim(newVal);
	            if (this.isProtected) {
	                newVal = kdbxweb.ProtectedValue.fromString(newVal);
	            }
	        }
	        FieldView.prototype.endEdit.call(this, newVal, extra);
	        if (!newVal && this.model.newField) {
	            this.model.title = Locale.detAddField;
	            this.$el.find('.details__field-label').text(this.model.title);
	        }
	        if (this.model.titleChanged) {
	            delete this.model.titleChanged;
	        }
	    },

	    startEditTitle: function(emptyTitle) {
	        var text = emptyTitle ? '' : this.model.title || '';
	        this.labelInput = $('<input/>');
	        this.labelEl.html('').append(this.labelInput);
	        this.labelInput.attr({ autocomplete: 'off', spellcheck: 'false' })
	            .val(text).focus()[0].setSelectionRange(text.length, text.length);
	        this.labelInput.bind({
	            input: this.fieldLabelInput.bind(this),
	            keydown: this.fieldLabelKeydown.bind(this),
	            keypress: this.fieldLabelInput.bind(this),
	            mousedown: this.fieldLabelInputClick.bind(this),
	            click: this.fieldLabelInputClick.bind(this)
	        });
	    },

	    endEditTitle: function(newTitle) {
	        if (newTitle && newTitle !== this.model.title) {
	            this.model.title = newTitle;
	            this.model.titleChanged = true;
	        }
	        this.$el.find('.details__field-label').text(this.model.title);
	        delete this.labelInput;
	        if (this.editing && this.input) {
	            this.input.focus();
	        }
	    },

	    fieldLabelClick: function(e) {
	        e.stopImmediatePropagation();
	        if (this.editing) {
	            this.startEditTitle();
	        } else if (this.model.newField) {
	            this.edit();
	            this.startEditTitle(true);
	        } else {
	            FieldViewText.prototype.fieldLabelClick.call(this, e);
	        }
	    },

	    fieldLabelMousedown: function(e) {
	        if (this.editing) {
	            e.stopPropagation();
	        }
	    },

	    fieldValueBlur: function() {
	        if (this.labelInput) {
	            this.endEditTitle(this.labelInput.val());
	        }
	        if (this.input) {
	            this.endEdit(this.input.val());
	        }
	    },

	    fieldLabelInput: function(e) {
	        e.stopPropagation();
	    },

	    fieldLabelInputClick: function(e) {
	        e.stopPropagation();
	    },

	    fieldLabelKeydown: function(e) {
	        e.stopPropagation();
	        var code = e.keyCode || e.which;
	        if (code === Keys.DOM_VK_RETURN) {
	            this.endEditTitle(e.target.value);
	        } else if (code === Keys.DOM_VK_ESCAPE) {
	            this.endEditTitle();
	        } else if (code === Keys.DOM_VK_TAB) {
	            e.preventDefault();
	            this.endEditTitle(e.target.value);
	        }
	    },

	    fieldValueInputClick: function() {
	        if (this.labelInput) {
	            this.endEditTitle(this.labelInput.val());
	        }
	        FieldViewText.prototype.fieldValueInputClick.call(this);
	    },

	    protectBtnClick: function(e) {
	        e.stopPropagation();
	        this.isProtected = !this.isProtected;
	        this.$el.toggleClass('details__field--protected', this.isProtected);
	        if (this.labelInput) {
	            this.endEditTitle(this.labelInput.val());
	        }
	        this.setTimeout(function() { this.input.focus(); });
	    }
	});

	module.exports = FieldViewCustom;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var FieldViewText = __webpack_require__(18),
	    Locale = __webpack_require__(5),
	    Pikaday = __webpack_require__(55),
	    Format = __webpack_require__(16);

	var FieldViewDate = FieldViewText.extend({
	    renderValue: function(value) {
	        var result = value ? Format.dStr(value) : '';
	        if (value && this.model.lessThanNow && value < new Date()) {
	            result += ' ' + this.model.lessThanNow;
	        }
	        return result;
	    },

	    getEditValue: function(value) {
	        return value ? Format.dStr(value) : '';
	    },

	    startEdit: function() {
	        FieldViewText.prototype.startEdit.call(this);
	        this.picker = new Pikaday({
	            field: this.input[0],
	            onSelect: this.pickerSelect.bind(this),
	            onClose: this.pickerClose.bind(this),
	            defaultDate: this.value,
	            minDate: new Date(),
	            firstDay: 1,
	            i18n: {
	                previousMonth: '',
	                nextMonth: '',
	                months: Locale.months,
	                weekdays: Locale.weekdays,
	                weekdaysShort: Locale.weekdaysShort
	            }
	        });
	        _.defer(this.picker.show.bind(this.picker));
	    },

	    fieldValueBlur: function(e) {
	        if (!this.picker) {
	            FieldViewText.prototype.fieldValueBlur.call(this, e);
	        }
	    },

	    endEdit: function(newVal, extra) {
	        if (this.picker) {
	            try { this.picker.destroy(); } catch (e) {}
	            this.picker = null;
	        }
	        newVal = new Date(newVal);
	        if (!newVal || isNaN(newVal.getTime())) {
	            newVal = null;
	        }
	        FieldViewText.prototype.endEdit.call(this, newVal, extra);
	    },

	    pickerClose: function() {
	        this.endEdit(this.input.val());
	    },

	    pickerSelect: function(dt) {
	        this.endEdit(dt);
	    }
	});

	module.exports = FieldViewDate;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var FieldView = __webpack_require__(19),
	    Locale = __webpack_require__(5);

	var FieldViewHistory = FieldView.extend({
	    renderValue: function(value) {
	        if (!value.length) {
	            return Locale.detHistoryEmpty;
	        }
	        var text = value.length + ' ' + (value.length % 10 === 1 ? Locale.detHistoryRec : Locale.detHistoryRecs);
	        if (value.unsaved) {
	            text += ' (' + Locale.detHistoryModified + ')';
	        }
	        return '<a class="details__history-link">' + text + '</a>';
	    },

	    readonly: true
	});

	module.exports = FieldViewHistory;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var FieldView = __webpack_require__(19);

	var FieldViewReadOnlyRaw = FieldView.extend({
	    renderValue: function(value) {
	        return value;
	    },

	    readonly: true
	});

	module.exports = FieldViewReadOnlyRaw;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {'use strict';

	var FieldViewText = __webpack_require__(18);

	var FieldViewTags = FieldViewText.extend({
	    renderValue: function(value) {
	        return value ? _.escape(value.join(', ')) : '';
	    },

	    getEditValue: function(value) {
	        return value ? value.join(', ') : '';
	    },

	    valueToTags: function(val) {
	        var allTags = {};
	        this.model.tags.forEach(function(tag) {
	            allTags[tag.toLowerCase()] = tag;
	        });
	        return _.unique(val.split(/\s*[;,:]\s*/).filter(_.identity).map(function (tag) {
	            return allTags[tag.toLowerCase()] || tag;
	        }));
	    },

	    endEdit: function(newVal, extra) {
	        if (newVal !== undefined) {
	            newVal = this.valueToTags(newVal);
	        }
	        if (this.tagsAutocomplete) {
	            this.tagsAutocomplete.remove();
	            this.tagsAutocomplete = null;
	        }
	        FieldViewText.prototype.endEdit.call(this, newVal, extra);
	    },

	    startEdit: function() {
	        FieldViewText.prototype.startEdit.call(this);
	        var fieldRect = this.input[0].getBoundingClientRect();
	        this.tagsAutocomplete = $('<div class="details__tags-autocomplete"></div>').appendTo('body');
	        this.tagsAutocomplete.css({
	            top: fieldRect.bottom,
	            left: fieldRect.left,
	            width: fieldRect.width - 2
	        });
	        this.tagsAutocomplete.mousedown(this.tagsAutocompleteClick.bind(this));
	        this.setTags();
	    },

	    fieldValueInput: function(e) {
	        e.stopPropagation();
	        this.setTags();
	        FieldViewText.prototype.fieldValueInput.call(this, e);
	    },

	    getAvailableTags: function() {
	        var tags = this.valueToTags(this.input.val());
	        var last = tags[tags.length - 1];
	        var isLastPart = last && this.model.tags.indexOf(last) < 0;
	        return this.model.tags.filter(function(tag) {
	            return tags.indexOf(tag) < 0 && (!isLastPart || tag.toLowerCase().indexOf(last.toLowerCase()) >= 0);
	        });
	    },

	    setTags: function() {
	        var availableTags = this.getAvailableTags();
	        var tagsHtml = availableTags.map(function(tag) {
	            return '<div class="details__tags-autocomplete-tag">' + _.escape(tag) + '</div>';
	        }).join('');
	        this.tagsAutocomplete.html(tagsHtml);
	        this.tagsAutocomplete.toggle(!!tagsHtml);
	    },

	    tagsAutocompleteClick: function(e) {
	        e.stopPropagation();
	        if (e.target.classList.contains('details__tags-autocomplete-tag')) {
	            var selectedTag = $(e.target).text(), newVal = this.input.val();
	            if (newVal) {
	                var tags = this.valueToTags(newVal);
	                var last = tags[tags.length - 1];
	                var isLastPart = last && this.model.tags.indexOf(last) < 0;
	                if (isLastPart) {
	                    newVal = newVal.substr(0, newVal.lastIndexOf(last)) + selectedTag;
	                } else {
	                    newVal += ', ' + selectedTag;
	                }
	            } else {
	                newVal = selectedTag;
	            }
	            this.input.val(newVal);
	            this.input.focus();
	            this.setTags();
	        }
	        this.afterPaint(function() { this.input.focus(); });
	    }
	});

	module.exports = FieldViewTags;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var FieldViewText = __webpack_require__(18);

	var FieldViewUrl = FieldViewText.extend({
	    displayUrlRegex: /^http:\/\//i,

	    renderValue: function(value) {
	        return value ? '<a href="' + _.escape(this.fixUrl(value)) + '" target="_blank">' + _.escape(this.displayUrl(value)) + '</a>' : '';
	    },

	    fixUrl: function(url) {
	        return url.indexOf(':') < 0 ? 'http://' + url : url;
	    },

	    displayUrl: function(url) {
	        return url.replace(this.displayUrlRegex, '');
	    }
	});

	module.exports = FieldViewUrl;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    Keys = __webpack_require__(6),
	    KeyHandler = __webpack_require__(10),
	    GeneratorView = __webpack_require__(52),
	    UpdateModel = __webpack_require__(24);

	var FooterView = Backbone.View.extend({
	    template: __webpack_require__(123),

	    events: {
	        'click .footer__db-item': 'showFile',
	        'click .footer__db-open': 'openFile',
	        'click .footer__btn-help': 'toggleHelp',
	        'click .footer__btn-settings': 'toggleSettings',
	        'click .footer__btn-generate': 'genPass',
	        'click .footer__btn-lock': 'lockWorkspace'
	    },

	    initialize: function () {
	        this.views = {};

	        KeyHandler.onKey(Keys.DOM_VK_L, this.lockWorkspace, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.onKey(Keys.DOM_VK_G, this.genPass, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.onKey(Keys.DOM_VK_O, this.openFile, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.onKey(Keys.DOM_VK_S, this.saveAll, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.onKey(Keys.DOM_VK_COMMA, this.toggleSettings, this, KeyHandler.SHORTCUT_ACTION);

	        this.listenTo(this.model.files, 'update reset change', this.render);
	        this.listenTo(UpdateModel.instance, 'change:updateStatus', this.render);
	    },

	    render: function () {
	        this.renderTemplate({
	            files: this.model.files,
	            updateAvailable: ['ready', 'found'].indexOf(UpdateModel.instance.get('updateStatus')) >= 0
	        }, { plain: true });
	        return this;
	    },

	    lockWorkspace: function() {
	        Backbone.trigger('lock-workspace');
	    },

	    genPass: function(e) {
	        e.stopPropagation();
	        if (this.views.gen) {
	            this.views.gen.remove();
	            return;
	        }
	        var el = this.$el.find('.footer__btn-generate'),
	            rect = el[0].getBoundingClientRect(),
	            bodyRect = document.body.getBoundingClientRect(),
	            right = bodyRect.right - rect.right,
	            bottom = bodyRect.bottom - rect.top;
	        var generator = new GeneratorView({ model: { copy: true, pos: { right: right, bottom: bottom } }}).render();
	        generator.once('remove', (function() { delete this.views.gen; }).bind(this));
	        this.views.gen = generator;
	    },

	    showFile: function(e) {
	        var fileId = $(e.target).closest('.footer__db-item').data('file-id');
	        if (fileId) {
	            Backbone.trigger('show-file', { fileId: fileId });
	        }
	    },

	    openFile: function() {
	        Backbone.trigger('open-file');
	    },

	    saveAll: function() {
	        Backbone.trigger('save-all');
	    },

	    toggleHelp: function() {
	        Backbone.trigger('toggle-settings', 'help');
	    },

	    toggleSettings: function() {
	        Backbone.trigger('toggle-settings', 'general');
	    }
	});

	module.exports = FooterView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    Scrollable = __webpack_require__(17),
	    IconSelectView = __webpack_require__(53);

	var GrpView = Backbone.View.extend({
	    template: __webpack_require__(125),

	    events: {
	        'click .grp__icon': 'showIconsSelect',
	        'click .grp__buttons-trash': 'moveToTrash',
	        'click .grp__back-button': 'returnToApp',
	        'blur #grp__field-title': 'titleBlur',
	        'change #grp__check-search': 'setEnableSearching'
	    },

	    initialize: function() {
	        this.views = {};
	    },

	    render: function() {
	        this.removeSubView();
	        if (this.model) {
	            this.renderTemplate({
	                title: this.model.get('title'),
	                icon: this.model.get('icon') || 'folder',
	                customIcon: this.model.get('customIcon'),
	                enableSearching: this.model.get('enableSearching') !== false,
	                readonly: this.model.get('top')
	            }, { plain: true });
	            if (!this.model.get('title')) {
	                this.$el.find('#grp__field-title').focus();
	            }
	        }
	        this.createScroll({
	            root: this.$el.find('.details__body')[0],
	            scroller: this.$el.find('.scroller')[0],
	            bar: this.$el.find('.scroller__bar')[0]
	        });
	        this.pageResized();
	        return this;
	    },

	    removeSubView: function() {
	        if (this.views.sub) {
	            this.views.sub.remove();
	            delete this.views.sub;
	        }
	    },

	    showGroup: function(group) {
	        this.model = group;
	        this.render();
	    },

	    titleBlur: function(e) {
	        var title = $.trim(e.target.value);
	        if (title) {
	            if (!this.model.get('top') && e.target.value !== this.model.get('title')) {
	                this.model.setName(e.target.value);
	            }
	        } else {
	            if (this.model.isJustCreated) {
	                this.model.removeWithoutHistory();
	                Backbone.trigger('edit-group');
	            } else {
	                this.render();
	            }
	        }
	    },

	    showIconsSelect: function() {
	        if (this.views.sub) {
	            this.removeSubView();
	        } else {
	            var subView = new IconSelectView({
	                el: this.$el.find('.grp__icons'),
	                model: {
	                    iconId: this.model.get('customIconId') || this.model.get('iconId'),
	                    file: this.model.file
	                }
	            });
	            this.listenTo(subView, 'select', this.iconSelected);
	            subView.render();
	            this.views.sub = subView;
	        }
	        this.pageResized();
	    },

	    iconSelected: function(sel) {
	        if (sel.custom) {
	            if (sel.id !== this.model.get('customIconId')) {
	                this.model.setCustomIcon(sel.id);
	            }
	        } else if (sel.id !== this.model.get('iconId')) {
	            this.model.setIcon(+sel.id);
	        }
	        this.render();
	    },

	    moveToTrash: function() {
	        this.model.moveToTrash();
	        Backbone.trigger('select-all');
	    },

	    setEnableSearching: function(e) {
	        var enabled = e.target.checked;
	        this.model.setEnableSearching(enabled);
	    },

	    returnToApp: function() {
	        Backbone.trigger('edit-group');
	    }
	});

	_.extend(GrpView.prototype, Scrollable);

	module.exports = GrpView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    SecureInput = __webpack_require__(41),
	    Alerts = __webpack_require__(11),
	    Locale = __webpack_require__(5),
	    Keys = __webpack_require__(6);

	var KeyChangeView = Backbone.View.extend({
	    template: __webpack_require__(127),

	    events: {
	        'keydown .key-change__pass': 'inputKeydown',
	        'click .key-change__keyfile': 'keyFileClicked',
	        'change .key-change__file': 'keyFileSelected',
	        'click .key-change__btn-ok': 'accept',
	        'click .key-change__btn-cancel': 'cancel'
	    },

	    passwordInput: null,
	    inputEl: null,

	    initialize: function() {
	        this.passwordInput = new SecureInput();
	    },

	    render: function() {
	        this.keyFileName = this.model.get('keyFileName') || null;
	        this.keyFileData = null;
	        this.renderTemplate({
	            fileName: this.model.get('name'),
	            keyFileName: this.model.get('keyFileName')
	        });
	        this.$el.find('.key-change__keyfile-name').text(this.keyFileName ? ': ' + this.keyFileName : '');
	        this.inputEl = this.$el.find('.key-change__pass');
	        this.passwordInput.reset();
	        this.passwordInput.setElement(this.inputEl);
	    },

	    remove: function() {
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    inputKeydown: function(e) {
	        var code = e.keyCode || e.which;
	        if (code === Keys.DOM_VK_RETURN) {
	            this.accept();
	        } else if (code === Keys.DOM_VK_A) {
	            e.stopImmediatePropagation();
	        }
	    },

	    keyFileClicked: function() {
	        if (this.keyFileName) {
	            this.keyFileName = null;
	            this.keyFile = null;
	            this.$el.find('.key-change__keyfile-name').html('');
	        }
	        this.$el.find('.key-change__file').val(null).click();
	        this.inputEl.focus();
	    },

	    keyFileSelected: function(e) {
	        var file = e.target.files[0];
	        if (file) {
	            var reader = new FileReader();
	            reader.onload = (function(e) {
	                this.keyFileName = file.name;
	                this.keyFileData = e.target.result;
	                this.$el.find('.key-change__keyfile-name').text(': ' + this.keyFileName);
	            }).bind(this);
	            reader.onerror = function() {
	                Alerts.error({ header: Locale.openFailedRead });
	            };
	            reader.readAsArrayBuffer(file);
	        } else {
	            this.$el.find('.key-change__keyfile-name').html('');
	        }
	        this.inputEl.focus();
	    },

	    accept: function() {
	        this.trigger('accept', {
	            file: this.model,
	            password: this.passwordInput.value,
	            keyFileName: this.keyFileName,
	            keyFileData: this.keyFileData
	        });
	    },

	    cancel: function() {
	        this.trigger('cancel');
	    }
	});

	module.exports = KeyChangeView;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    Keys = __webpack_require__(6),
	    KeyHandler = __webpack_require__(10),
	    DropdownView = __webpack_require__(89),
	    FeatureDetector = __webpack_require__(13),
	    Locale = __webpack_require__(5);

	var ListSearchView = Backbone.View.extend({
	    template: __webpack_require__(131),

	    events: {
	        'keydown .list__search-field': 'inputKeyDown',
	        'keypress .list__search-field': 'inputKeyPress',
	        'input .list__search-field': 'inputChange',
	        'click .list__search-btn-new': 'createOptionsClick',
	        'click .list__search-btn-sort': 'sortOptionsClick',
	        'click .list__search-icon-search': 'advancedSearchClick',
	        'click .list__search-btn-menu': 'toggleMenu',
	        'change .list__search-adv input[type=checkbox]': 'toggleAdvCheck'
	    },

	    views: null,

	    inputEl: null,
	    sortOptions: null,
	    sortIcons: null,
	    createOptions: null,
	    advancedSearchEnabled: false,
	    advancedSearch: null,

	    initialize: function () {
	        this.sortOptions = [
	            { value: 'title', icon: 'sort-alpha-asc', text: Locale.searchTitle + ' ' + Locale.searchAZ },
	            { value: '-title', icon: 'sort-alpha-desc', text: Locale.searchTitle + ' ' + Locale.searchZA },
	            { value: 'website', icon: 'sort-alpha-asc', text: Locale.searchWebsite + ' ' + Locale.searchAZ },
	            { value: '-website', icon: 'sort-alpha-desc', text: Locale.searchWebsite + ' ' + Locale.searchZA },
	            { value: 'user', icon: 'sort-alpha-asc', text: Locale.searchUser + ' ' + Locale.searchAZ },
	            { value: '-user', icon: 'sort-alpha-desc', text: Locale.searchUser + ' ' + Locale.searchZA },
	            { value: 'created', icon: 'sort-numeric-asc', text: Locale.searchCreated + ' ' + Locale.searchON },
	            { value: '-created', icon: 'sort-numeric-desc', text: Locale.searchCreated + ' ' + Locale.searchNO },
	            { value: 'updated', icon: 'sort-numeric-asc', text: Locale.searchUpdated + ' ' + Locale.searchON },
	            { value: '-updated', icon: 'sort-numeric-desc', text: Locale.searchUpdated + ' ' + Locale.searchNO },
	            { value: '-attachments', icon: 'sort-amount-desc', text: Locale.searchAttachments }
	        ];
	        this.sortIcons = {};
	        this.sortOptions.forEach(function(opt) {
	            this.sortIcons[opt.value] = opt.icon;
	        }, this);
	        var entryDesc = FeatureDetector.isMobile() ? '' : (' <span class="muted-color">(' + Locale.searchShiftClickOr + ' ' +
	            FeatureDetector.altShortcutSymbol(true) + 'N)</span>');
	        this.createOptions = [
	            { value: 'entry', icon: 'key', text: 'Entry' + entryDesc },
	            { value: 'group', icon: 'folder', text: 'Group' }
	        ];
	        this.views = {};
	        this.advancedSearch = {
	            user: true, other: true,
	            url: true, protect: false,
	            notes: true, pass: false,
	            cs: false, regex: false,
	            history: false
	        };
	        KeyHandler.onKey(Keys.DOM_VK_F, this.findKeyPress, this, KeyHandler.SHORTCUT_ACTION);
	        KeyHandler.onKey(Keys.DOM_VK_N, this.newKeyPress, this, KeyHandler.SHORTCUT_OPT);
	        KeyHandler.onKey(Keys.DOM_VK_DOWN, this.downKeyPress, this);
	        KeyHandler.onKey(Keys.DOM_VK_UP, this.upKeyPress, this);
	        this.listenTo(this, 'show', this.viewShown);
	        this.listenTo(this, 'hide', this.viewHidden);
	        this.listenTo(Backbone, 'filter', this.filterChanged);
	    },

	    remove: function() {
	        KeyHandler.offKey(Keys.DOM_VK_F, this.findKeyPress, this);
	        KeyHandler.offKey(Keys.DOM_VK_N, this.newKeyPress, this);
	        KeyHandler.offKey(Keys.DOM_VK_DOWN, this.downKeyPress, this);
	        KeyHandler.offKey(Keys.DOM_VK_UP, this.upKeyPress, this);
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    viewShown: function() {
	        this.listenTo(KeyHandler, 'keypress', this.documentKeyPress);
	    },

	    viewHidden: function() {
	        this.stopListening(KeyHandler, 'keypress', this.documentKeyPress);
	    },

	    render: function () {
	        this.renderTemplate({ adv: this.advancedSearch });
	        this.inputEl = this.$el.find('.list__search-field');
	        return this;
	    },

	    inputKeyDown: function(e) {
	        switch (e.which) {
	            case Keys.DOM_VK_UP:
	            case Keys.DOM_VK_DOWN:
	                break;
	            case Keys.DOM_VK_RETURN:
	                e.target.blur();
	                break;
	            case Keys.DOM_VK_ESCAPE:
	                if (this.inputEl.val()) {
	                    this.inputEl.val('');
	                    this.inputChange();
	                }
	                e.target.blur();
	                break;
	            case Keys.DOM_VK_A:
	                if (e.metaKey || e.ctrlKey) {
	                    e.stopPropagation();
	                    return;
	                }
	                return;
	            default:
	                return;
	        }
	        e.preventDefault();
	    },

	    inputKeyPress: function(e) {
	        e.stopPropagation();
	    },

	    inputChange: function() {
	        Backbone.trigger('add-filter', { text: this.inputEl.val() });
	    },

	    documentKeyPress: function(e) {
	        if (this._hidden) {
	            return;
	        }
	        var code = e.charCode;
	        if (!code) {
	            return;
	        }
	        this.hideSearchOptions();
	        this.inputEl.val(String.fromCharCode(code)).focus();
	        this.inputEl[0].setSelectionRange(1, 1);
	        this.inputChange();
	        e.preventDefault();
	    },

	    findKeyPress: function(e) {
	        if (!this._hidden) {
	            e.preventDefault();
	            this.hideSearchOptions();
	            this.inputEl.focus();
	        }
	    },

	    newKeyPress: function(e) {
	        if (!this._hidden) {
	            e.preventDefault();
	            this.hideSearchOptions();
	            this.trigger('create-entry');
	        }
	    },

	    downKeyPress: function(e) {
	        e.preventDefault();
	        this.hideSearchOptions();
	        this.trigger('select-next');
	    },

	    upKeyPress: function(e) {
	        e.preventDefault();
	        this.hideSearchOptions();
	        this.trigger('select-prev');
	    },

	    filterChanged: function(filter) {
	        this.hideSearchOptions();
	        if (filter.filter.text !== this.inputEl.val()) {
	            this.inputEl.val(filter.text || '');
	        }
	        var sortIconCls = this.sortIcons[filter.sort] || 'sort';
	        this.$el.find('.list__search-btn-sort>i').attr('class', 'fa fa-' + sortIconCls);
	        var adv = !!filter.filter.advanced;
	        if (this.advancedSearchEnabled !== adv) {
	            this.advancedSearchEnabled = adv;
	            this.$el.find('.list__search-adv').toggleClass('hide', !this.advancedSearchEnabled);
	        }
	    },

	    createOptionsClick: function(e) {
	        e.stopImmediatePropagation();
	        if (e.shiftKey) {
	            this.hideSearchOptions();
	            this.trigger('create-entry');
	            return;
	        }
	        this.toggleCreateOptions();
	    },

	    sortOptionsClick: function(e) {
	        this.toggleSortOptions();
	        e.stopImmediatePropagation();
	    },

	    advancedSearchClick: function() {
	        this.advancedSearchEnabled = !this.advancedSearchEnabled;
	        this.$el.find('.list__search-adv').toggleClass('hide', !this.advancedSearchEnabled);
	        Backbone.trigger('add-filter', { advanced: this.advancedSearchEnabled ? this.advancedSearch : false });
	    },

	    toggleMenu: function() {
	        Backbone.trigger('toggle-menu');
	    },

	    toggleAdvCheck: function(e) {
	        var setting = $(e.target).data('id');
	        this.advancedSearch[setting] = e.target.checked;
	        Backbone.trigger('add-filter', { advanced: this.advancedSearch });
	    },

	    hideSearchOptions: function() {
	        if (this.views.searchDropdown) {
	            this.views.searchDropdown.remove();
	            this.views.searchDropdown = null;
	            this.$el.find('.list__search-btn-sort,.list__search-btn-new').removeClass('sel--active');
	        }
	    },

	    toggleSortOptions: function() {
	        if (this.views.searchDropdown && this.views.searchDropdown.options === this.sortOptions) {
	            this.hideSearchOptions();
	            return;
	        }
	        this.hideSearchOptions();
	        this.$el.find('.list__search-btn-sort').addClass('sel--active');
	        var view = new DropdownView();
	        this.listenTo(view, 'cancel', this.hideSearchOptions);
	        this.listenTo(view, 'select', this.sortDropdownSelect);
	        this.sortOptions.forEach(function(opt) {
	            opt.active = this.model.sort === opt.value;
	        }, this);
	        view.render({
	            position: {
	                top: this.$el.find('.list__search-btn-sort')[0].getBoundingClientRect().bottom,
	                right: this.$el[0].getBoundingClientRect().right + 1
	            },
	            options: this.sortOptions
	        });
	        this.views.searchDropdown = view;
	    },

	    toggleCreateOptions: function() {
	        if (this.views.searchDropdown && this.views.searchDropdown.options === this.createOptions) {
	            this.hideSearchOptions();
	            return;
	        }
	        this.hideSearchOptions();
	        this.$el.find('.list__search-btn-new').addClass('sel--active');
	        var view = new DropdownView();
	        this.listenTo(view, 'cancel', this.hideSearchOptions);
	        this.listenTo(view, 'select', this.createDropdownSelect);
	        view.render({
	            position: {
	                top: this.$el.find('.list__search-btn-new')[0].getBoundingClientRect().bottom,
	                right: this.$el[0].getBoundingClientRect().right + 1
	            },
	            options: this.createOptions
	        });
	        this.views.searchDropdown = view;
	    },

	    sortDropdownSelect: function(e) {
	        this.hideSearchOptions();
	        Backbone.trigger('set-sort', e.item);
	    },

	    createDropdownSelect: function(e) {
	        this.hideSearchOptions();
	        switch (e.item) {
	            case 'entry':
	                this.trigger('create-entry');
	                break;
	            case 'group':
	                this.trigger('create-group');
	                break;
	        }
	    }
	});

	module.exports = ListSearchView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    Resizable = __webpack_require__(31),
	    Scrollable = __webpack_require__(17),
	    ListSearchView = __webpack_require__(99),
	    EntryPresenter = __webpack_require__(76),
	    DragDropInfo = __webpack_require__(40),
	    AppSettingsModel = __webpack_require__(12);

	var ListView = Backbone.View.extend({
	    template: __webpack_require__(133),
	    emptyTemplate: __webpack_require__(128),

	    events: {
	        'click .list__item': 'itemClick',
	        'dragstart .list__item': 'itemDragStart'
	    },

	    views: null,

	    minWidth: 200,
	    minHeight: 200,
	    maxWidth: 500,
	    maxHeight: 500,

	    itemsEl: null,

	    initialize: function () {
	        this.initScroll();
	        this.views = {};
	        this.views.search = new ListSearchView({ model: this.model });

	        this.listenTo(this.views.search, 'select-prev', this.selectPrev);
	        this.listenTo(this.views.search, 'select-next', this.selectNext);
	        this.listenTo(this.views.search, 'create-entry', this.createEntry);
	        this.listenTo(this.views.search, 'create-group', this.createGroup);
	        this.listenTo(this, 'show', this.viewShown);
	        this.listenTo(this, 'hide', this.viewHidden);
	        this.listenTo(this, 'view-resize', this.viewResized);
	        this.listenTo(Backbone, 'filter', this.filterChanged);
	        this.listenTo(Backbone, 'entry-updated', this.entryUpdated);

	        this.listenTo(this.model.settings, 'change:tableView', this.setTableView);

	        this.items = [];
	    },

	    render: function () {
	        if (!this.itemsEl) {
	            this.$el.html(this.template());
	            this.itemsEl = this.$el.find('.list__items>.scroller');
	            this.views.search.setElement(this.$el.find('.list__header')).render();
	            this.setTableView();

	            this.createScroll({
	                root: this.$el.find('.list__items')[0],
	                scroller: this.$el.find('.scroller')[0],
	                bar: this.$el.find('.scroller__bar')[0]
	            });
	        }
	        if (this.items.length) {
	            var itemTemplate = this.getItemTemplate();
	            var itemsTemplate = this.getItemsTemplate();
	            var noColor = AppSettingsModel.instance.get('colorfulIcons') ? '' : 'grayscale';
	            var presenter = new EntryPresenter(this.getDescField(), noColor, this.model.activeEntryId);
	            var itemsHtml = '';
	            this.items.forEach(function (item) {
	                presenter.present(item);
	                itemsHtml += itemTemplate(presenter);
	            }, this);
	            var html = itemsTemplate({ items: itemsHtml });
	            this.itemsEl.html(html);
	        } else {
	            this.itemsEl.html(this.emptyTemplate());
	        }
	        this.pageResized();
	        return this;
	    },

	    getItemsTemplate: function() {
	        if (this.model.settings.get('tableView')) {
	            return __webpack_require__(132);
	        } else {
	            return this.renderPlainItems;
	        }
	    },

	    renderPlainItems: function(itemsHtml) {
	        return itemsHtml.items;
	    },

	    getItemTemplate: function() {
	        if (this.model.settings.get('tableView')) {
	            return __webpack_require__(130);
	        } else {
	            return __webpack_require__(129);
	        }
	    },

	    getDescField: function() {
	        return this.model.sort.replace('-', '');
	    },

	    itemClick: function(e) {
	        var id = $(e.target).closest('.list__item').attr('id');
	        var item = this.items.get(id);
	        if (!item.active) {
	            this.selectItem(item);
	        }
	        Backbone.trigger('toggle-details', true);
	    },

	    selectPrev: function() {
	        var ix = this.items.indexOf(this.items.get(this.model.activeEntryId));
	        if (ix > 0) {
	            this.selectItem(this.items.at(ix - 1));
	        }
	    },

	    selectNext: function() {
	        var ix = this.items.indexOf(this.items.get(this.model.activeEntryId));
	        if (ix < this.items.length - 1) {
	            this.selectItem(this.items.at(ix + 1));
	        }
	    },

	    createEntry: function() {
	        var newEntry = this.model.createNewEntry();
	        this.items.unshift(newEntry);
	        this.render();
	        this.selectItem(newEntry);
	    },

	    createGroup: function() {
	        var newGroup = this.model.createNewGroup();
	        Backbone.trigger('edit-group', newGroup);
	    },

	    selectItem: function(item) {
	        this.model.activeEntryId = item.id;
	        Backbone.trigger('select-entry', item);
	        this.itemsEl.find('.list__item--active').removeClass('list__item--active');
	        var itemEl = document.getElementById(item.id);
	        itemEl.classList.add('list__item--active');
	        var listEl = this.itemsEl[0],
	            itemRect = itemEl.getBoundingClientRect(),
	            listRect = listEl.getBoundingClientRect();
	        if (itemRect.top < listRect.top) {
	            listEl.scrollTop += itemRect.top - listRect.top;
	        } else if (itemRect.bottom > listRect.bottom) {
	            listEl.scrollTop += itemRect.bottom - listRect.bottom;
	        }
	    },

	    viewShown: function() {
	        this.views.search.show();
	    },

	    viewHidden: function() {
	        this.views.search.hide();
	    },

	    setTableView: function() {
	        var isTable = this.model.settings.get('tableView');
	        this.dragView.setCoord(isTable ? 'y' : 'x');
	        this.setDefaultSize();
	    },

	    setDefaultSize: function() {
	        this.setSize(this.model.settings.get('listViewWidth'));
	    },

	    setSize: function(size) {
	        this.$el.css({ width: null, height: null });
	        if (size) {
	            this.$el.css('flex', '0 0 ' + size + 'px');
	        } else {
	            this.$el.css('flex', null);
	        }
	    },

	    viewResized: function(size) {
	        this.setSize(size);
	        this.throttleSetViewSizeSetting(size);
	    },

	    throttleSetViewSizeSetting: _.throttle(function(size) {
	        AppSettingsModel.instance.set('listViewWidth', size);
	    }, 1000),

	    filterChanged: function(filter) {
	        this.items = filter.entries;
	        this.render();
	    },

	    entryUpdated: function() {
	        var scrollTop = this.itemsEl[0].scrollTop;
	        this.render();
	        this.itemsEl[0].scrollTop = scrollTop;
	    },

	    itemDragStart: function(e) {
	        e.stopPropagation();
	        var id = $(e.target).closest('.list__item').attr('id');
	        e.originalEvent.dataTransfer.setData('text/entry', id);
	        e.originalEvent.dataTransfer.effectAllowed = 'move';
	        DragDropInfo.dragObject = this.items.get(id);
	    }
	});

	_.extend(ListView.prototype, Resizable);
	_.extend(ListView.prototype, Scrollable);

	module.exports = ListView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1);

	var ListWrapView = Backbone.View.extend({
	    events: {
	    },

	    initialize: function() {
	        this.listenTo(this.model.settings, 'change:tableView', this.setListLayout);
	    },

	    render: function() {
	        this.setListLayout();
	    },

	    setListLayout: function() {
	        var tableView = this.model.settings.get('tableView');
	        this.$el.toggleClass('app__list-wrap--table', tableView);
	    }
	});

	module.exports = ListWrapView;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    KeyHandler = __webpack_require__(10),
	    Keys = __webpack_require__(6),
	    Alerts = __webpack_require__(11),
	    DragDropInfo = __webpack_require__(40),
	    Locale = __webpack_require__(5);

	var MenuItemView = Backbone.View.extend({
	    template: __webpack_require__(134),

	    events: {
	        'mouseover': 'mouseover',
	        'mouseout': 'mouseout',
	        'click .menu__item-option': 'selectOption',
	        'click': 'selectItem',
	        'dblclick': 'expandItem',
	        'click .menu__item-edit': 'editItem',
	        'click .menu__item-empty-trash': 'emptyTrash',
	        'dragstart': 'dragstart',
	        'dragover': 'dragover',
	        'dragleave': 'dragleave',
	        'drop' : 'drop'
	    },

	    iconEl: null,
	    itemViews: null,

	    initialize: function () {
	        this.itemViews = [];
	        this.listenTo(this.model, 'change:title', this.changeTitle);
	        this.listenTo(this.model, 'change:icon', this.changeIcon);
	        this.listenTo(this.model, 'change:customIconId', this.render);
	        this.listenTo(this.model, 'change:active', this.changeActive);
	        this.listenTo(this.model, 'change:expanded', this.changeExpanded);
	        this.listenTo(this.model, 'change:cls', this.changeCls);
	        this.listenTo(this.model, 'delete', this.remove);
	        this.listenTo(this.model, 'insert', this.insertItem);
	        var shortcut = this.model.get('shortcut');
	        if (shortcut) {
	            KeyHandler.onKey(shortcut, this.selectItem, this, KeyHandler.SHORTCUT_OPT);
	            if (shortcut !== Keys.DOM_VK_C) {
	                KeyHandler.onKey(shortcut, this.selectItem, this, KeyHandler.SHORTCUT_ACTION);
	            }
	        }
	    },

	    render: function() {
	        this.removeInnerViews();
	        this.renderTemplate(this.model.attributes);
	        this.iconEl = this.$el.find('i');
	        var items = this.model.get('items');
	        if (items) {
	            items.forEach(function (item) {
	                if (item.get('visible')) {
	                    this.insertItem(item);
	                }
	            }, this);
	        }
	        this.$el.toggleClass('menu__item--collapsed', !this.model.get('expanded'));
	        return this;
	    },

	    insertItem: function(item) {
	        this.itemViews.push(new MenuItemView({el: this.$el, model: item}).render());
	    },

	    remove : function() {
	        this.removeInnerViews();
	        var shortcut = this.model.get('shortcut');
	        if (shortcut) {
	            KeyHandler.offKey(shortcut, this.selectItem, this, KeyHandler.SHORTCUT_OPT);
	            if (shortcut !== Keys.DOM_VK_C) {
	                KeyHandler.offKey(shortcut, this.selectItem, this, KeyHandler.SHORTCUT_ACTION);
	            }
	        }
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    removeInnerViews: function() {
	        this.itemViews.forEach(function(itemView) { itemView.remove(); });
	        this.itemViews = [];
	    },

	    changeTitle: function(model, title) {
	        this.$el.find('.menu__item-title').first().text(title || '(no title)');
	    },

	    changeIcon: function(model, icon) {
	        this.iconEl[0].className = 'menu__item-icon fa ' + (icon ? 'fa-' + icon : 'menu__item-icon--no-icon');
	    },

	    changeActive: function(model, active) {
	        this.$el.toggleClass('menu__item--active', active);
	    },

	    changeExpanded: function(model, expanded) {
	        this.$el.toggleClass('menu__item--collapsed', !expanded);
	        this.model.setExpanded(expanded);
	    },

	    changeCls: function(model, cls) {
	        var oldCls = model.previousAttributes().cls;
	        if (oldCls) {
	            this.$el.removeClass(oldCls);
	        }
	        this.$el.addClass(cls);
	    },

	    mouseover: function(e) {
	        if (!e.button) {
	            this.$el.addClass('menu__item--hover');
	            e.stopPropagation();
	        }
	    },

	    mouseout: function(e) {
	        this.$el.removeClass('menu__item--hover');
	        e.stopPropagation();
	    },

	    selectItem: function(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        if (this.model.get('active')) {
	            return;
	        }
	        if (this.model.get('disabled')) {
	            Alerts.info(this.model.get('disabled'));
	        } else {
	            Backbone.trigger('menu-select', { item: this.model });
	        }
	    },

	    selectOption: function(e) {
	        var options = this.model.get('options');
	        var value = $(e.target).data('value');
	        if (options && options.length) {
	            var option = options.find(function(op) { return op.get('value') === value; });
	            if (option) {
	                Backbone.trigger('menu-select', { item: this.model, option: option });
	            }
	        }
	        e.stopImmediatePropagation();
	        e.preventDefault();
	    },

	    expandItem: function(e) {
	        if (this.model.toggleExpanded) {
	            this.model.toggleExpanded();
	        }
	        e.stopPropagation();
	    },

	    editItem: function(e) {
	        if (this.model.get('active') && this.model.get('editable')) {
	            e.stopPropagation();
	            Backbone.trigger('edit-group', this.model);
	        }
	    },

	    emptyTrash: function(e) {
	        e.stopPropagation();
	        Alerts.yesno({
	            header: Locale.menuEmptyTrashAlert,
	            body: Locale.menuEmptyTrashAlertBody,
	            icon: 'minus-circle',
	            success: function() {
	                Backbone.trigger('empty-trash');
	            }
	        });
	    },

	    dropAllowed: function(e) {
	        return ['text/group', 'text/entry'].indexOf(e.originalEvent.dataTransfer.types[0]) >= 0;
	    },

	    dragstart: function(e) {
	        e.stopPropagation();
	        if (this.model.get('drag')) {
	            e.originalEvent.dataTransfer.setData('text/group', this.model.id);
	            e.originalEvent.dataTransfer.effectAllowed = 'move';
	            DragDropInfo.dragObject = this.model;
	        }
	    },

	    dragover: function(e) {
	        e.stopPropagation();
	        if (this.model.get('drop') && this.dropAllowed(e)) {
	            e.preventDefault();
	            this.$el.addClass('menu__item--drag');
	        }
	    },

	    dragleave: function(e) {
	        e.stopPropagation();
	        if (this.model.get('drop') && this.dropAllowed(e)) {
	            this.$el.removeClass('menu__item--drag');
	        }
	    },

	    drop: function(e) {
	        e.stopPropagation();
	        if (this.model.get('drop') && this.dropAllowed(e)) {
	            this.$el.removeClass('menu__item--drag');
	            if (this.model.get('filterKey') === 'trash') {
	                DragDropInfo.dragObject.moveToTrash();
	                Backbone.trigger('refresh');
	            } else {
	                this.model.moveHere(DragDropInfo.dragObject);
	            }
	            Backbone.trigger('refresh');
	        }
	    }
	});

	module.exports = MenuItemView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    MenuItemView = __webpack_require__(102),
	    Resizable = __webpack_require__(31),
	    Scrollable = __webpack_require__(17),
	    AppSettingsModel = __webpack_require__(12);

	var MenuSectionView = Backbone.View.extend({
	    template: __webpack_require__(135),

	    events: {},

	    itemViews: null,

	    minHeight: 55,
	    maxHeight: function() { return this.$el.parent().height() - 116; },
	    autoHeight: 'auto',

	    initialize: function () {
	        this.itemViews = [];
	        this.listenTo(this.model, 'change-items', this.itemsChanged);
	        this.listenTo(this, 'view-resize', this.viewResized);
	    },

	    render: function() {
	        if (!this.itemsEl) {
	            this.renderTemplate(this.model.attributes);
	            this.itemsEl = this.model.get('scrollable') ? this.$el.find('.scroller') : this.$el;
	            if (this.model.get('scrollable')) {
	                this.initScroll();
	                this.createScroll({
	                    root: this.$el[0],
	                    scroller: this.$el.find('.scroller')[0],
	                    bar: this.$el.find('.scroller__bar')[0]
	                });
	            }
	        } else {
	            this.removeInnerViews();
	        }
	        this.model.get('items').forEach(function(item) {
	            var itemView = new MenuItemView({ el: this.itemsEl, model: item });
	            itemView.render();
	            this.itemViews.push(itemView);
	        }, this);
	        if (this.model.get('drag')) {
	            var height = AppSettingsModel.instance.get('tagsViewHeight');
	            if (typeof height === 'number') {
	                this.$el.height();
	                this.$el.css('flex', '0 0 ' + height + 'px');
	            }
	        }
	        this.pageResized();
	    },

	    remove : function() {
	        if (this.scroll) {
	            this.scroll.dispose();
	        }
	        this.removeInnerViews();
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    removeInnerViews: function() {
	        this.itemViews.forEach(function(itemView) { itemView.remove(); });
	        this.itemViews = [];
	    },

	    itemsChanged: function() {
	        this.render();
	    },

	    viewResized: function(size) {
	        this.$el.css('flex', '0 0 ' + (size ? size + 'px' : 'auto'));
	        this.saveViewHeight(size);
	    },

	    saveViewHeight: _.throttle(function(size) {
	        AppSettingsModel.instance.set('tagsViewHeight', size);
	    }, 1000)
	});

	_.extend(MenuSectionView.prototype, Resizable);
	_.extend(MenuSectionView.prototype, Scrollable);

	module.exports = MenuSectionView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    Resizable = __webpack_require__(31),
	    MenuSectionView = __webpack_require__(103),
	    DragView = __webpack_require__(50),
	    AppSettingsModel = __webpack_require__(12);

	var MenuView = Backbone.View.extend({
	    template: __webpack_require__(136),

	    events: {},

	    sectionViews: [],

	    minWidth: 110,
	    maxWidth: 300,

	    initialize: function () {
	        this.listenTo(this.model, 'change:sections', this.menuChanged);
	        this.listenTo(this, 'view-resize', this.viewResized);
	    },

	    remove: function() {
	        this.sectionViews.forEach(function(sectionView) { sectionView.remove(); });
	        this.sectionViews = [];
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    render: function () {
	        this.$el.html(this.template());
	        var sectionsEl = this.$el.find('.menu');
	        this.model.get('sections').forEach(function(section) {
	            var sectionView = new MenuSectionView({ el: sectionsEl, model: section });
	            sectionView.render();
	            if (section.get('drag')) {
	                var dragView = new DragView('y');
	                var dragEl = $('<div/>').addClass('menu__drag-section').appendTo(sectionsEl);
	                sectionView.listenDrag(dragView);
	                dragView.setElement(dragEl).render();
	                this.sectionViews.push(dragView);
	            }
	            this.sectionViews.push(sectionView);
	        }, this);
	        if (typeof AppSettingsModel.instance.get('menuViewWidth') === 'number') {
	            this.$el.width(AppSettingsModel.instance.get('menuViewWidth'));
	        }
	        return this;
	    },

	    menuChanged: function() {
	        this.render();
	    },

	    viewResized: _.throttle(function(size) {
	        AppSettingsModel.instance.set('menuViewWidth', size);
	    }, 1000),

	    switchVisibility: function(visible) {
	        this.$el.toggleClass('menu-visible', visible);
	    }
	});

	_.extend(MenuView.prototype, Resizable);

	module.exports = MenuView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    Keys = __webpack_require__(6),
	    KeyHandler = __webpack_require__(10);

	var ModalView = Backbone.View.extend({
	    el: 'body',

	    template: __webpack_require__(137),

	    events: {
	        'click .modal__buttons button': 'buttonClick',
	        'click': 'bodyClick'
	    },

	    initialize: function () {
	        if (typeof this.model.esc === 'string') {
	            KeyHandler.onKey(Keys.DOM_VK_ESCAPE, this.escPressed, this, false, true);
	        }
	        if (typeof this.model.enter === 'string') {
	            KeyHandler.onKey(Keys.DOM_VK_RETURN, this.enterPressed, this, false, true);
	        }
	        KeyHandler.setModal(true);
	    },

	    remove : function() {
	        KeyHandler.offKey(Keys.DOM_VK_ESCAPE, this.escPressed, this);
	        KeyHandler.offKey(Keys.DOM_VK_RETURN, this.enterPressed, this);
	        KeyHandler.setModal(false);
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    render: function () {
	        var parent = this.$el;
	        this.setElement($(this.template(this.model)));
	        parent.append(this.$el);
	        var el = this.$el;
	        el.addClass('modal--hidden');
	        setTimeout(function() {
	            el.removeClass('modal--hidden');
	        }, 20);
	        return this;
	    },

	    buttonClick: function(e) {
	        var result = $(e.target).data('result');
	        this.closeWithResult(result);
	    },

	    bodyClick: function() {
	        if (typeof this.model.click === 'string') {
	            this.closeWithResult(this.model.click);
	        }
	    },

	    escPressed: function() {
	        this.closeWithResult(this.model.esc);
	    },

	    enterPressed: function(e) {
	        e.stopImmediatePropagation();
	        e.preventDefault();
	        this.closeWithResult(this.model.enter);
	    },

	    closeWithResult: function(result) {
	        var checked = this.model.checkbox ? this.$el.find('#modal__check').is(':checked') : undefined;
	        this.trigger('result', result, checked);
	        this.$el.addClass('modal--hidden');
	        this.undelegateEvents();
	        setTimeout(this.remove.bind(this), 100);
	    }
	});

	module.exports = ModalView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';

	var Backbone = __webpack_require__(1),
	    Keys = __webpack_require__(6),
	    Alerts = __webpack_require__(11),
	    SecureInput = __webpack_require__(41),
	    DropboxLink = __webpack_require__(22),
	    Logger = __webpack_require__(8),
	    Locale = __webpack_require__(5);

	var logger = new Logger('open-view');

	var OpenView = Backbone.View.extend({
	    template: __webpack_require__(138),

	    events: {
	        'change .open__file-ctrl': 'fileSelected',
	        'click .open__icon-open': 'openFile',
	        'click .open__icon-new': 'createNew',
	        'click .open__icon-dropbox': 'openFromDropbox',
	        'click .open__icon-demo': 'createDemo',
	        'click .open__pass-input[readonly]': 'openFile',
	        'input .open__pass-input': 'inputInput',
	        'keydown .open__pass-input': 'inputKeydown',
	        'keypress .open__pass-input': 'inputKeypress',
	        'click .open__pass-enter-btn': 'openDb',
	        'click .open__settings-key-file': 'openKeyFile',
	        'click .open__last-item': 'openLast',
	        'dragover': 'dragover',
	        'dragleave': 'dragleave',
	        'drop': 'drop'
	    },

	    params: null,
	    passwordInput: null,
	    busy: false,

	    initialize: function () {
	        this.params = {
	            id: null,
	            name: '',
	            storage: null,
	            path: null,
	            keyFileName: null,
	            keyFileData: null,
	            fileData: null,
	            rev: null
	        };
	        this.passwordInput = new SecureInput();
	    },

	    render: function () {
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        this.renderTemplate({ lastOpenFiles: this.getLastOpenFiles() });
	        this.inputEl = this.$el.find('.open__pass-input');
	        this.passwordInput.setElement(this.inputEl);
	        return this;
	    },

	    getLastOpenFiles: function() {
	        return this.model.fileInfos.map(function(f) {
	            var icon;
	            switch (f.get('storage')) {
	                case 'dropbox':
	                    icon = 'dropbox';
	                    break;
	                case 'file':
	                    icon = 'hdd-o';
	                    break;
	                default:
	                    icon = 'file-text';
	                    break;
	            }
	            return {
	                id: f.get('id'),
	                name: f.get('name'),
	                icon: icon
	            };
	        });
	    },

	    remove: function() {
	        this.passwordInput.reset();
	        Backbone.View.prototype.remove.apply(this, arguments);
	    },

	    showLocalFileAlert: function() {
	        if (this.model.settings.get('skipOpenLocalWarn')) {
	            return;
	        }
	        var that = this;
	        Alerts.alert({
	            header: Locale.openLocalFile,
	            body: Locale.openLocalFileBody,
	            icon: 'file-text',
	            buttons: [
	                {result: 'skip', title: Locale.openLocalFileDontShow, error: true},
	                {result: 'ok', title: Locale.alertOk}
	            ],
	            click: '',
	            esc: '',
	            enter: '',
	            success: function(res) {
	                if (res === 'skip') {
	                    that.model.settings.set('skipOpenLocalWarn', true);
	                }
	            }
	        });
	    },

	    fileSelected: function(e) {
	        var file = e.target.files[0];
	        if (file) {
	            if (!file.path) {
	                this.showLocalFileAlert();
	            }
	            this.processFile(file);
	        }
	    },

	    processFile: function(file, complete) {
	        var reader = new FileReader();
	        reader.onload = (function(e) {
	            if (this.reading === 'fileData') {
	                this.params.id = null;
	                this.params.fileData = e.target.result;
	                this.params.name = file.name.replace(/\.\w+$/i, '');
	                this.params.path = file.path || null;
	                this.params.storage = file.path ? 'file' : null;
	                this.params.rev = null;
	                this.displayOpenFile();
	            } else {
	                this.params.keyFileData = e.target.result;
	                this.params.keyFileName = file.name;
	                this.displayOpenKeyFile();
	            }
	            if (complete) {
	                complete(true);
	            }
	        }).bind(this);
	        reader.onerror = (function() {
	            Alerts.error({ header: Locale.openFailedRead });
	            if (complete) {
	                complete(false);
	            }
	        }).bind(this);
	        reader.readAsArrayBuffer(file);
	    },

	    displayOpenFile: function() {
	        this.$el.addClass('open--file');
	        this.$el.find('.open__settings-key-file').removeClass('hide');
	        this.inputEl[0].removeAttribute('readonly');
	        this.inputEl[0].setAttribute('placeholder', Locale.openPassFor + ' ' + this.params.name);
	        this.inputEl.focus();
	    },

	    displayOpenKeyFile: function() {
	        this.$el.find('.open__settings-key-file-name').text(this.params.keyFileName);
	        this.$el.addClass('open--key-file');
	        this.inputEl.focus();
	    },

	    setFile: function(file, keyFile) {
	        this.reading = 'fileData';
	        this.processFile(file, (function(success) {
	            if (success && keyFile) {
	                this.reading = 'keyFileData';
	                this.processFile(keyFile);
	            }
	        }).bind(this));
	    },

	    openFile: function() {
	        if (!this.busy) {
	            this.openAny('fileData');
	        }
	    },

	    openKeyFile: function(e) {
	        if ($(e.target).hasClass('open__settings-key-file-dropbox')) {
	            this.openKeyFileFromDropbox();
	        } else if (!this.busy && this.params.name) {
	            if (this.params.keyFileData) {
	                this.params.keyFileData = null;
	                this.params.keyFileName = '';
	                this.$el.removeClass('open--key-file');
	                this.$el.find('.open__settings-key-file-name').text('key file');
	            } else {
	                this.openAny('keyFileData');
	            }
	        }
	    },

	    openKeyFileFromDropbox: function() {
	        if (!this.busy) {
	            DropboxLink.chooseFile((function(err, res) {
	                if (err) {
	                    return;
	                }
	                this.params.keyFileData = res.data;
	                this.params.keyFileName = res.name;
	                this.displayOpenKeyFile();
	            }).bind(this));
	        }
	    },

	    openAny: function(reading, ext) {
	        this.reading = reading;
	        this.params[reading] = null;
	        this.$el.find('.open__file-ctrl').attr('accept', ext || '').val(null).click();
	    },

	    openLast: function(e) {
	        if (this.busy) {
	            return;
	        }
	        var id = $(e.target).closest('.open__last-item').data('id').toString();
	        if ($(e.target).is('.open__last-item-icon-del')) {
	            var fileInfo = this.model.fileInfos.get(id);
	            if (!fileInfo.get('storage')) {
	                var that = this;
	                Alerts.yesno({
	                    header: Locale.openRemoveLastQuestion,
	                    body: Locale.openRemoveLastQuestionBody,
	                    buttons: [
	                        {result: 'yes', title: Locale.alertYes},
	                        {result: '', title: Locale.alertNo}
	                    ],
	                    success: function() {
	                        that.removeFile(id);
	                    }
	                });
	                return;
	            }
	            this.removeFile(id);
	            return;
	        }
	        this.showOpenFileInfo(this.model.fileInfos.get(id));
	    },

	    removeFile: function(id) {
	        this.model.removeFileInfo(id);
	        this.$el.find('.open__last-item[data-id="' + id + '"]').remove();
	        this.initialize();
	        this.render();
	    },

	    inputKeydown: function(e) {
	        var code = e.keyCode || e.which;
	        if (code === Keys.DOM_VK_RETURN) {
	            this.openDb();
	        } else if (code === Keys.DOM_VK_CAPS_LOCK) {
	            this.$el.find('.open__pass-warning').removeClass('invisible');
	        } else if (code === Keys.DOM_VK_A) {
	            e.stopImmediatePropagation();
	        }
	    },

	    inputKeypress: function(e) {
	        var charCode = e.keyCode || e.which;
	        var ch = String.fromCharCode(charCode),
	            lower = ch.toLowerCase(),
	            upper = ch.toUpperCase();
	        if (lower !== upper && !e.shiftKey) {
	            this.toggleCapsLockWarning(ch !== lower);
	        }
	    },

	    toggleCapsLockWarning: function(on) {
	        this.$el.find('.open__file-warning').toggleClass('invisible', on);
	    },

	    dragover: function(e) {
	        e.preventDefault();
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        if (!this.$el.hasClass('open--drag')) {
	            this.$el.addClass('open--drag');
	        }
	    },

	    dragleave: function() {
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        this.dragTimeout = setTimeout((function() {
	            this.$el.removeClass('open--drag');
	        }).bind(this), 100);
	    },

	    drop: function(e) {
	        e.preventDefault();
	        if (this.dragTimeout) {
	            clearTimeout(this.dragTimeout);
	        }
	        this.$el.removeClass('open--drag');
	        var files = e.target.files || e.originalEvent.dataTransfer.files;
	        var dataFile = _.find(files, function(file) { return file.name.split('.').pop().toLowerCase() === 'kdbx'; });
	        var keyFile = _.find(files, function(file) { return file.name.split('.').pop().toLowerCase() === 'key'; });
	        if (dataFile) {
	            if (!dataFile.path) {
	                this.showLocalFileAlert();
	            }
	            this.setFile(dataFile, keyFile);
	        }
	    },

	    displayDropboxLoading: function(isLoading) {
	        this.$el.find('.open__icon-dropbox .open__icon-i').toggleClass('flip3d', !!isLoading);
	    },

	    openFromDropbox: function() {
	        if (this.busy) {
	            return;
	        }
	        var that = this;
	        DropboxLink.authenticate(function(err) {
	            if (err) {
	                return;
	            }
	            that.busy = true;
	            that.displayDropboxLoading(true);
	            DropboxLink.getFileList(function(err, files, dirStat, filesStat) {
	                that.busy = false;
	                that.displayDropboxLoading(false);
	                if (err) {
	                    return;
	                }
	                var buttons = [];
	                var allDropboxFiles = {};
	                filesStat.forEach(function(file) {
	                    if (!file.isFolder && !file.isRemoved) {
	                        var fileName = file.name.replace(/\.kdbx/i, '');
	                        buttons.push({ result: file.path, title: fileName });
	                        allDropboxFiles[file.path] = file;
	                    }
	                });
	                if (!buttons.length) {
	                    Alerts.error({
	                        header: Locale.openNothingFound,
	                        body: Locale.openNothingFoundBody + (dirStat && dirStat.inAppFolder ? ' ' + Locale.openNothingFoundBodyAppFolder : '')
	                    });
	                    return;
	                }
	                buttons.push({ result: '', title: Locale.alertCancel });
	                Alerts.alert({
	                    header: Locale.openSelectFile,
	                    body: Locale.openSelectFileBody,
	                    icon: 'dropbox',
	                    buttons: buttons,
	                    esc: '',
	                    click: '',
	                    success: function(file) {
	                        that.openDropboxFile(allDropboxFiles[file]);
	                    }
	                });
	                that.model.fileInfos.forEach(function(fi) {
	                    if (fi.get('storage') === 'dropbox' && !fi.get('modified') && !allDropboxFiles[fi.get('path')]) {
	                        that.model.removeFileInfo(fi.id);
	                    }
	                });
	            });
	        });
	    },

	    openDropboxFile: function(fileStat) {
	        if (this.busy) {
	            return;
	        }
	        this.params.id = null;
	        this.params.storage = 'dropbox';
	        this.params.path = fileStat.path;
	        this.params.name = fileStat.name.replace(/\.kdbx/i, '');
	        this.params.rev = fileStat.versionTag;
	        this.params.fileData = null;
	        this.displayOpenFile();
	    },

	    showOpenFileInfo: function(fileInfo) {
	        if (this.busy || !fileInfo) {
	            return;
	        }
	        this.params.id = fileInfo.id;
	        this.params.storage = fileInfo.get('storage');
	        this.params.path = fileInfo.get('path');
	        this.params.name = fileInfo.get('name');
	        this.params.fileData = null;
	        this.params.rev = null;
	        this.displayOpenFile();
	    },

	    showOpenLocalFile: function(path) {
	        if (this.busy) {
	            return;
	        }
	        this.params.id = null;
	        this.params.storage = 'file';
	        this.params.path = path;
	        this.params.name = path.match(/[^/\\]*$/)[0];
	        this.params.rev = null;
	        this.params.fileData = null;
	        this.displayOpenFile();
	    },

	    createDemo: function() {
	        if (!this.busy) {
	            if (!this.model.createDemoFile()) {
	                this.trigger('close');
	            }
	        }
	    },

	    createNew: function() {
	        if (!this.busy) {
	            this.model.createNewFile();
	        }
	    },

	    openDb: function() {
	        if (this.busy || !this.params.name) {
	            return;
	        }
	        this.$el.toggleClass('open--opening', true);
	        this.inputEl.attr('disabled', 'disabled');
	        this.busy = true;
	        this.params.password = this.passwordInput.value;
	        this.afterPaint(this.model.openFile.bind(this.model, this.params, this.openDbComplete.bind(this)));
	    },

	    openDbComplete: function(err) {
	        this.busy = false;
	        this.$el.toggleClass('open--opening', false);
	        this.inputEl.removeAttr('disabled').toggleClass('input--error', !!err);
	        if (err) {
	            logger.error('Error opening file', err);
	            this.inputEl.focus();
	            this.inputEl[0].selectionStart = 0;
	            this.inputEl[0].selectionEnd = this.inputEl.val().length;
	        } else {
	            this.trigger('close');
	        }
	    }
	});

	module.exports = OpenView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./settings-about-view": 108,
		"./settings-file-view": 109,
		"./settings-general-view": 110,
		"./settings-help-view": 111,
		"./settings-shortcuts-view": 112
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 107;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    RuntimeInfo = __webpack_require__(25),
	    Links = __webpack_require__(15);

	var SettingsAboutView = Backbone.View.extend({
	    template: __webpack_require__(139),

	    render: function() {
	        this.renderTemplate({
	            version: RuntimeInfo.version,
	            licenseLink: Links.License,
	            repoLink: Links.Repo
	        });
	    }
	});

	module.exports = SettingsAboutView;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var Backbone = __webpack_require__(1),
	    FeatureDetector = __webpack_require__(13),
	    PasswordGenerator = __webpack_require__(35),
	    Alerts = __webpack_require__(11),
	    Launcher = __webpack_require__(7),
	    Storage = __webpack_require__(47),
	    Links = __webpack_require__(15),
	    DropboxLink = __webpack_require__(22),
	    Format = __webpack_require__(16),
	    Locale = __webpack_require__(5),
	    kdbxweb = __webpack_require__(9),
	    FileSaver = __webpack_require__(36);

	var SettingsAboutView = Backbone.View.extend({
	    template: __webpack_require__(140),

	    events: {
	        'click .settings__file-button-save-default': 'saveDefault',
	        'click .settings__file-button-save-file': 'saveToFile',
	        'click .settings__file-button-export-xml': 'exportAsXml',
	        'click .settings__file-button-save-dropbox': 'saveToDropbox',
	        'click .settings__file-button-close': 'closeFile',
	        'change #settings__file-key-file': 'keyFileChange',
	        'click #settings__file-file-select-link': 'triggerSelectFile',
	        'change #settings__file-file-select': 'fileSelected',
	        'focus #settings__file-master-pass': 'focusMasterPass',
	        'blur #settings__file-master-pass': 'blurMasterPass',
	        'blur #settings__file-name': 'blurName',
	        'blur #settings__file-def-user': 'blurDefUser',
	        'change #settings__file-trash': 'changeTrash',
	        'blur #settings__file-hist-len': 'blurHistoryLength',
	        'blur #settings__file-hist-size': 'blurHistorySize',
	        'blur #settings__file-key-rounds': 'blurKeyRounds'
	    },

	    appModel: null,

	    initialize: function() {
	        this.listenTo(this.model, 'change:syncing change:syncError change:syncDate', this.render);
	    },

	    render: function() {
	        this.renderTemplate({
	            cmd: FeatureDetector.actionShortcutSymbol(true),
	            supportFiles: !!Launcher,
	            desktopLink: Links.Desktop,

	            name: this.model.get('name'),
	            path: this.model.get('path'),
	            storage: this.model.get('storage'),
	            syncing: this.model.get('syncing'),
	            syncError: this.model.get('syncError'),
	            syncDate: Format.dtStr(this.model.get('syncDate')),
	            password: PasswordGenerator.present(this.model.get('passwordLength')),
	            defaultUser: this.model.get('defaultUser'),
	            recycleBinEnabled: this.model.get('recycleBinEnabled'),
	            historyMaxItems: this.model.get('historyMaxItems'),
	            historyMaxSize: Math.round(this.model.get('historyMaxSize') / 1024 / 1024),
	            keyEncryptionRounds: this.model.get('keyEncryptionRounds')
	        });
	        if (!this.model.get('created')) {
	            this.$el.find('.settings__file-master-pass-warning').toggle(this.model.get('passwordChanged'));
	        }
	        this.renderKeyFileSelect();
	    },

	    renderKeyFileSelect: function() {
	        var keyFileName = this.model.get('keyFileName'),
	            oldKeyFileName = this.model.get('oldKeyFileName'),
	            keyFileChanged = this.model.get('keyFileChanged');
	        var sel = this.$el.find('#settings__file-key-file');
	        sel.html('');
	        if (keyFileName && keyFileChanged) {
	            var text = keyFileName !== 'Generated' ? Locale.setFileUseKeyFile + ' ' + keyFileName : Locale.setFileUseGenKeyFile;
	            $('<option/>').val('ex').text(text).appendTo(sel);
	        }
	        if (oldKeyFileName) {
	            var useText = keyFileChanged ? Locale.setFileUseOldKeyFile : Locale.setFileUseKeyFile + ' ' + oldKeyFileName;
	            $('<option/>').val('old').text(useText).appendTo(sel);
	        }
	        $('<option/>').val('gen').text(Locale.setFileGenKeyFile).appendTo(sel);
	        $('<option/>').val('none').text(Locale.setFileDontUseKeyFile).appendTo(sel);
	        if (keyFileName && keyFileChanged) {
	            sel.val('ex');
	        } else if (!keyFileName) {
	            sel.val('none');
	        } else if (oldKeyFileName && keyFileName === oldKeyFileName && !keyFileChanged) {
	            sel.val('old');
	        }
	    },

	    validatePassword: function(continueCallback) {
	        if (!this.model.get('passwordLength')) {
	            var that = this;
	            Alerts.yesno({
	                header: Locale.setFileEmptyPass,
	                body: Locale.setFileEmptyPassBody,
	                success: function() {
	                    continueCallback();
	                },
	                cancel: function() {
	                    that.$el.find('#settings__file-master-pass').focus();
	                }
	            });
	            return false;
	        }
	        return true;
	    },

	    save: function(arg) {
	        var that = this;
	        if (!arg) {
	            arg = {};
	        }
	        arg.startedByUser = true;
	        if (!arg.skipValidation) {
	            var isValid = this.validatePassword(function() {
	                arg.skipValidation = true;
	                that.save(arg);
	            });
	            if (!isValid) {
	                return;
	            }
	        }
	        this.appModel.syncFile(this.model, arg);
	    },

	    saveDefault: function() {
	        this.save();
	    },

	    saveToFile: function(skipValidation) {
	        if (skipValidation !== true && !this.validatePassword(this.saveToFile.bind(this, true))) {
	            return;
	        }
	        var fileName = this.model.get('name') + '.kdbx';
	        var that = this;
	        if (Launcher && !this.model.get('storage')) {
	            Launcher.getSaveFileName(fileName, function (path) {
	                if (path) {
	                    that.save({storage: 'file', path: path});
	                }
	            });
	        } else {
	            this.model.getData(function (data) {
	                if (Launcher) {
	                    Launcher.getSaveFileName(fileName, function (path) {
	                        if (path) {
	                            Storage.file.save(path, data, function (err) {
	                                if (err) {
	                                    Alerts.error({
	                                        header: Locale.setFileSaveError,
	                                        body: Locale.setFileSaveErrorBody + ' ' + path + ': \n' + err
	                                    });
	                                }
	                            });
	                        }
	                    });
	                } else {
	                    var blob = new Blob([data], {type: 'application/octet-stream'});
	                    FileSaver.saveAs(blob, fileName);
	                }
	            });
	        }
	    },

	    exportAsXml: function() {
	        this.model.getXml((function(xml) {
	            var blob = new Blob([xml], {type: 'text/xml'});
	            FileSaver.saveAs(blob, this.model.get('name') + '.xml');
	        }).bind(this));
	    },

	    saveToDropbox: function() {
	        var that = this;
	        this.model.set('syncing', true);
	        DropboxLink.authenticate(function(err) {
	            that.model.set('syncing', false);
	            if (err) {
	                return;
	            }
	            if (that.model.get('storage') === 'dropbox') {
	                that.save();
	            } else {
	                that.model.set('syncing', true);
	                DropboxLink.getFileList(function(err, files) {
	                    that.model.set('syncing', false);
	                    if (!files) { return; }
	                    var expName = that.model.get('name').toLowerCase();
	                    var existingPath = files.filter(function(f) { return f.toLowerCase().replace('/', '') === expName; })[0];
	                    if (existingPath) {
	                        Alerts.yesno({
	                            icon: 'dropbox',
	                            header: Locale.setFileAlreadyExists,
	                            body: Locale.setFileAlreadyExistsBody.replace('{}', that.model.escape('name')),
	                            success: function() {
	                                that.model.set('syncing', true);
	                                DropboxLink.deleteFile(existingPath, function(err) {
	                                    that.model.set('syncing', false);
	                                    if (!err) {
	                                        that.save({storage: 'dropbox'});
	                                    }
	                                });
	                            }
	                        });
	                    } else {
	                        that.save({storage: 'dropbox'});
	                    }
	                });
	            }
	        });
	    },

	    closeFile: function() {
	        if (this.model.get('modified')) {
	            var that = this;
	            Alerts.yesno({
	                header: Locale.setFileUnsaved,
	                body: Locale.setFileUnsavedBody,
	                buttons: [
	                    {result: 'close', title: Locale.setFileCloseNoSave, error: true},
	                    {result: '', title: Locale.setFileDontClose}
	                ],
	                success: function(result) {
	                    if (result === 'close') {
	                        that.closeFileNoCheck();
	                    }
	                }
	            });
	        } else {
	            this.closeFileNoCheck();
	        }
	    },

	    closeFileNoCheck: function() {
	        this.appModel.closeFile(this.model);
	    },

	    keyFileChange: function(e) {
	        switch (e.target.value) {
	            case 'old':
	                this.selectOldKeyFile();
	                break;
	            case 'gen':
	                this.generateKeyFile();
	                break;
	            case 'none':
	                this.clearKeyFile();
	                break;
	        }
	    },

	    selectOldKeyFile: function() {
	        this.model.resetKeyFile();
	        this.renderKeyFileSelect();
	    },

	    generateKeyFile: function() {
	        var keyFile = this.model.generateAndSetKeyFile();
	        var blob = new Blob([keyFile], {type: 'application/octet-stream'});
	        FileSaver.saveAs(blob, this.model.get('name') + '.key');
	        this.renderKeyFileSelect();
	    },

	    clearKeyFile: function() {
	        this.model.removeKeyFile();
	        this.renderKeyFileSelect();
	    },

	    triggerSelectFile: function() {
	        this.$el.find('#settings__file-file-select').click();
	    },

	    fileSelected: function(e) {
	        var file = e.target.files[0];
	        var reader = new FileReader();
	        reader.onload = (function(e) {
	            var res = e.target.result;
	            this.model.setKeyFile(res, file.name);
	            this.renderKeyFileSelect();
	        }).bind(this);
	        reader.readAsArrayBuffer(file);
	    },

	    focusMasterPass: function(e) {
	        e.target.value = '';
	        e.target.setAttribute('type', 'text');
	    },

	    blurMasterPass: function(e) {
	        if (!e.target.value) {
	            this.model.resetPassword();
	            e.target.value = PasswordGenerator.present(this.model.get('passwordLength'));
	            this.$el.find('.settings__file-master-pass-warning').hide();
	        } else {
	            this.model.setPassword(kdbxweb.ProtectedValue.fromString(e.target.value));
	            if (!this.model.get('created')) {
	                this.$el.find('.settings__file-master-pass-warning').show();
	            }
	        }
	        e.target.setAttribute('type', 'password');
	    },

	    blurName: function(e) {
	        var value = $.trim(e.target.value);
	        if (!value) {
	            e.target.value = this.model.get('name');
	            return;
	        }
	        this.model.setName(value);
	    },

	    blurDefUser: function(e) {
	        var value = $.trim(e.target.value);
	        this.model.setDefaultUser(value);
	    },

	    changeTrash: function(e) {
	        this.model.setRecycleBinEnabled(e.target.checked);
	    },

	    blurHistoryLength: function(e) {
	        var value = +e.target.value;
	        if (isNaN(value)) {
	            e.target.value = this.model.get('historyMaxItems');
	            return;
	        }
	        this.model.setHistoryMaxItems(value);
	    },

	    blurHistorySize: function(e) {
	        var value = +e.target.value;
	        if (isNaN(value)) {
	            e.target.value = this.model.get('historyMaxSize') / 1024 / 1024;
	            return;
	        }
	        this.model.setHistoryMaxSize(value * 1024 * 1024);
	    },

	    blurKeyRounds: function(e) {
	        var value = +e.target.value;
	        if (isNaN(value)) {
	            e.target.value = this.model.get('keyEncryptionRounds');
	            return;
	        }
	        this.model.setKeyEncryptionRounds(value);
	    }
	});

	module.exports = SettingsAboutView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    Launcher = __webpack_require__(7),
	    Updater = __webpack_require__(42),
	    Format = __webpack_require__(16),
	    AppSettingsModel = __webpack_require__(12),
	    UpdateModel = __webpack_require__(24),
	    RuntimeInfo = __webpack_require__(25),
	    FeatureDetector = __webpack_require__(13),
	    Locale = __webpack_require__(5),
	    Links = __webpack_require__(15);

	var SettingsGeneralView = Backbone.View.extend({
	    template: __webpack_require__(141),

	    events: {
	        'change .settings__general-theme': 'changeTheme',
	        'change .settings__general-expand': 'changeExpandGroups',
	        'change .settings__general-auto-update': 'changeAutoUpdate',
	        'change .settings__general-idle-minutes': 'changeIdleMinutes',
	        'change .settings__general-clipboard': 'changeClipboard',
	        'change .settings__general-auto-save': 'changeAutoSave',
	        'change .settings__general-minimize': 'changeMinimize',
	        'change .settings__general-lock-on-minimize': 'changeLockOnMinimize',
	        'change .settings__general-table-view': 'changeTableView',
	        'change .settings__general-colorful-icons': 'changeColorfulIcons',
	        'click .settings__general-update-btn': 'checkUpdate',
	        'click .settings__general-restart-btn': 'restartApp',
	        'click .settings__general-download-update-btn': 'downloadUpdate',
	        'click .settings__general-update-found-btn': 'installFoundUpdate',
	        'click .settings__general-dev-tools-link': 'openDevTools'
	    },

	    allThemes: {
	        fb: 'Flat blue',
	        db: 'Dark brown',
	        wh: 'White'
	    },

	    initialize: function() {
	        this.listenTo(UpdateModel.instance, 'change:status', this.render, this);
	        this.listenTo(UpdateModel.instance, 'change:updateStatus', this.render, this);
	    },

	    render: function() {
	        var updateReady = UpdateModel.instance.get('updateStatus') === 'ready',
	            updateFound = UpdateModel.instance.get('updateStatus') === 'found',
	            updateManual = UpdateModel.instance.get('updateManual');
	        this.renderTemplate({
	            themes: this.allThemes,
	            activeTheme: AppSettingsModel.instance.get('theme'),
	            expandGroups: AppSettingsModel.instance.get('expandGroups'),
	            canClearClipboard: !!Launcher,
	            clipboardSeconds: AppSettingsModel.instance.get('clipboardSeconds'),
	            autoSave: AppSettingsModel.instance.get('autoSave'),
	            idleMinutes: AppSettingsModel.instance.get('idleMinutes'),
	            minimizeOnClose: AppSettingsModel.instance.get('minimizeOnClose'),
	            devTools: Launcher && Launcher.devTools,
	            canAutoUpdate: Updater.enabled,
	            canMinimize: Launcher && Launcher.canMinimize(),
	            lockOnMinimize: Launcher && AppSettingsModel.instance.get('lockOnMinimize'),
	            tableView: AppSettingsModel.instance.get('tableView'),
	            canSetTableView: FeatureDetector.isDesktop(),
	            autoUpdate: Updater.getAutoUpdateType(),
	            updateInProgress: Updater.updateInProgress(),
	            updateInfo: this.getUpdateInfo(),
	            updateWaitingReload: updateReady && !Launcher,
	            showUpdateBlock: Updater.enabled && !updateManual,
	            updateReady: updateReady,
	            updateFound: updateFound,
	            updateManual: updateManual,
	            releaseNotesLink: Links.ReleaseNotes,
	            colorfulIcons: AppSettingsModel.instance.get('colorfulIcons')
	        });
	    },

	    getUpdateInfo: function() {
	        switch (UpdateModel.instance.get('status')) {
	            case 'checking':
	                return Locale.setGenUpdateChecking + '...';
	            case 'error':
	                var errMsg = Locale.setGenErrorChecking;
	                if (UpdateModel.instance.get('lastError')) {
	                    errMsg += ': ' + UpdateModel.instance.get('lastError');
	                }
	                if (UpdateModel.instance.get('lastSuccessCheckDate')) {
	                    errMsg += '. ' + Locale.setGenLastCheckSuccess.replace('{}', Format.dtStr(UpdateModel.instance.get('lastSuccessCheckDate'))) +
	                        ': ' + Locale.setGenLastCheckVer.replace('{}', UpdateModel.instance.get('lastVersion'));
	                }
	                return errMsg;
	            case 'ok':
	                var msg = Locale.setGenCheckedAt + ' ' + Format.dtStr(UpdateModel.instance.get('lastCheckDate')) + ': ';
	                var cmp = Updater.compareVersions(RuntimeInfo.version, UpdateModel.instance.get('lastVersion'));
	                if (cmp >= 0) {
	                    msg += Locale.setGenLatestVer;
	                } else {
	                    msg += Locale.setGenNewVer.replace('{}', UpdateModel.instance.get('lastVersion')) + ' ' +
	                        Format.dStr(UpdateModel.instance.get('lastVersionReleaseDate'));
	                }
	                switch (UpdateModel.instance.get('updateStatus')) {
	                    case 'downloading':
	                        return msg + '. ' + Locale.setGenDownloadingUpdate;
	                    case 'extracting':
	                        return msg + '. ' + Locale.setGenExtractingUpdate;
	                    case 'error':
	                        return msg + '. ' + Locale.setGenCheckErr;
	                }
	                return msg;
	            default:
	                return Locale.setGenNeverChecked;
	        }
	    },

	    changeTheme: function(e) {
	        var theme = e.target.value;
	        AppSettingsModel.instance.set('theme', theme);
	    },

	    changeClipboard: function(e) {
	        var clipboardSeconds = +e.target.value;
	        AppSettingsModel.instance.set('clipboardSeconds', clipboardSeconds);
	    },

	    changeIdleMinutes: function(e) {
	        var idleMinutes = +e.target.value;
	        AppSettingsModel.instance.set('idleMinutes', idleMinutes);
	    },

	    changeAutoUpdate: function(e) {
	        var autoUpdate = e.target.value || false;
	        AppSettingsModel.instance.set('autoUpdate', autoUpdate);
	        if (autoUpdate) {
	            Updater.scheduleNextCheck();
	        }
	    },

	    checkUpdate: function() {
	        Updater.check(true);
	    },

	    changeAutoSave: function(e) {
	        var autoSave = e.target.checked || false;
	        AppSettingsModel.instance.set('autoSave', autoSave);
	    },

	    changeMinimize: function(e) {
	        var minimizeOnClose = e.target.checked || false;
	        AppSettingsModel.instance.set('minimizeOnClose', minimizeOnClose);
	    },

	    changeLockOnMinimize: function(e) {
	        var lockOnMinimize = e.target.checked || false;
	        AppSettingsModel.instance.set('lockOnMinimize', lockOnMinimize);
	    },

	    changeTableView: function(e) {
	        var tableView = e.target.checked || false;
	        AppSettingsModel.instance.set('tableView', tableView);
	        Backbone.trigger('refresh');
	    },

	    changeColorfulIcons: function(e) {
	        var colorfulIcons = e.target.checked || false;
	        AppSettingsModel.instance.set('colorfulIcons', colorfulIcons);
	        Backbone.trigger('refresh');
	    },

	    restartApp: function() {
	        if (Launcher) {
	            Launcher.requestRestart();
	        } else {
	            window.location.reload();
	        }
	    },

	    downloadUpdate: function() {
	        Launcher.openLink(Links.Desktop);
	    },

	    installFoundUpdate: function() {
	        Updater.update(true, function() {
	            Launcher.requestRestart();
	        });
	    },

	    changeExpandGroups: function(e) {
	        var expand = e.target.checked;
	        AppSettingsModel.instance.set('expandGroups', expand);
	        Backbone.trigger('refresh');
	    },

	    openDevTools: function() {
	        if (Launcher) {
	            Launcher.openDevTools();
	        }
	    }
	});

	module.exports = SettingsGeneralView;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    RuntimeInfo = __webpack_require__(25),
	    Links = __webpack_require__(15);

	var SettingsHelpView = Backbone.View.extend({
	    template: __webpack_require__(142),

	    render: function() {
	        var appInfo = 'KeeWeb v' + RuntimeInfo.version + ' (' + RuntimeInfo.commit + ', ' + RuntimeInfo.buildDate + ')\n' +
	            'Environment: ' + (RuntimeInfo.launcher ? RuntimeInfo.launcher : 'web') + '\n' +
	            'User-Agent: ' + RuntimeInfo.userAgent;
	        this.renderTemplate({
	            issueLink: Links.Repo + '/issues/new?body=' + encodeURIComponent('!please, describe your issue here!\n\n' + appInfo),
	            desktopLink: Links.Desktop,
	            webAppLink: Links.WebApp,
	            appInfo: _.escape(appInfo)
	        });
	    }
	});

	module.exports = SettingsHelpView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Backbone = __webpack_require__(1),
	    FeatureDetector = __webpack_require__(13);

	var SettingsShortcutsView = Backbone.View.extend({
	    template: __webpack_require__(143),

	    render: function() {
	        this.renderTemplate({
	            cmd: FeatureDetector.actionShortcutSymbol(true),
	            alt: FeatureDetector.altShortcutSymbol(true)
	        });
	    }
	});

	module.exports = SettingsShortcutsView;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	var Backbone = __webpack_require__(1),
	    Scrollable = __webpack_require__(17),
	    Keys = __webpack_require__(6),
	    KeyHandler = __webpack_require__(10);

	var SettingsView = Backbone.View.extend({
	    template: __webpack_require__(144),

	    views: null,

	    events: {
	        'click .settings__back-button': 'returnToApp'
	    },

	    initialize: function () {
	        this.listenTo(Backbone, 'set-page', this.setPage);
	        this.views = {  };
	        KeyHandler.onKey(Keys.DOM_VK_ESCAPE, this.returnToApp, this);
	    },

	    remove: function() {
	        KeyHandler.offKey(Keys.DOM_VK_ESCAPE, this.returnToApp, this);
	        Backbone.View.prototype.remove.call(this);
	    },

	    render: function () {
	        this.renderTemplate();
	        this.createScroll({
	            root: this.$el.find('.settings')[0],
	            scroller: this.$el.find('.scroller')[0],
	            bar: this.$el.find('.scroller__bar')[0]
	        });
	        this.pageEl = this.$el.find('.scroller');
	        return this;
	    },

	    setPage: function (e) {
	        if (this.views.page) {
	            this.views.page.remove();
	        }
	        var SettingsPageView = __webpack_require__(107)("./settings-" + e.page + '-view');
	        this.views.page = new SettingsPageView({ el: this.pageEl, model: e.file });
	        this.views.page.appModel = this.model;
	        this.views.page.render();
	        this.file = e.file;
	        this.page = e.page;
	        this.pageResized();
	    },

	    returnToApp: function() {
	        Backbone.trigger('toggle-settings');
	    }
	});

	_.extend(SettingsView.prototype, Scrollable);

	module.exports = SettingsView;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "A9mimmf7S7UBAAMAAhAAMcHy5r9xQ1C+WAUhavxa/wMEAAEAAAAEIABJcuU1InrQNz4vJSk7UF6dEHAe7iPZyv8o9+BpSfwmlAUgAHa57p6mbRSTe3/30O3CxsExslcqbyG/lapD7pc5KSSsBggACgAAAAAAAAAHEADemkerUwYe+ev/Ja7ULQ9VCCAAw6gi0VnCNP91F8uIg/pVtf/wt/1frRD2/JTFwshP0McJIABImBVix5jpBiHeNxupfzqrW3AW/1oAHwT9qhUyYbaJsAoEAAIAAAAABAANCg0KTeeBhV0Auw2ZU1DuznAScmCo06e5zB3DitEn54vL5Y8dAXC8ptybMVjv2DZU/jl5+5kDUhE7KqkQAnSpNgqEAm0HENWTYPrB4e6HFDR9Zhz5LcBH29qE139OPsyLBSrqVESBE/ulek9ReuL2qHuHVqHlLUBcWw1HsU1Hyjn41ebZzAlbuetJSoB6CSkeyOZEQxQKRWr6lJ5R0gYOAssSh2iBDB2BddRBC89qax90bpDzUu6u1peqN5v4IfxigA8ceqTBvXqeHiBfqnq/UUct0DdJkV3ADUcUzDnMSsT91pm5T4oIBRV76r3XJiX4RaJ6z0vrt0jt3T2awIWeaDcBUG73ktkcF4wOcOt0Mq3Neo1yiITbGfv12kgoJd+ZOjpWsux1QZXqht8Kqq0Dxv1EbYnNjX1yMnFWpbA7JMq1ayosd5eOmuhBA5l9cgTu7HTrOOv64mbBAhz4BdMflPqR2thrwQ6MslZd8Eu3co7UKKT+SeQnlfzWOgDR0WXF/HOOIEWBsM54q9RMHqT+X7HwHZBz5WbVZpAd0FQh634qwnDEhR6r3Xf89vauwCEB3TDE0yZ4kk6SUYPoQ8zMiOgbxnv1aS1zTc0S952W48GzmrUkozbD2PE/ab/4LriAqhXAWV52UGCxmotnrOawJUOL26QliU4rETCVmNP+nBtJVvBugYwshJxCCH2rKsK80EZsqqZmGY4/ALgBMmF9GuhbEDmS/gdwncigFq0aSoodhFUrJdeBxxypmr/6K8i2CbMlzdQJVZJ7eLV9NwtXO5OKJmLt6WQakXnTqqYePXt3kDq/3ZgSkvjdtWmePme1IJQTVXc9i9GgyoJAWgirJNFTiQNxCvGOLI5FMei7VqLFtDXoM3lLXSHXKvrkiLgJSHRlnQEnMgllv/++YYpZC/MhmlvYo5teaA0VJhRHw+lpPOyNiXYf8kw2/nKEcXN3B2TWN1xAgkqykrAwGXW+rvDdqtrxyw4dwqG4pWU6nJBXgSOxNsoPTmmG3wycLugonwZHxC4jDkJoe0VY1xmqBj4itDJuUSVFAHnHBRJ/CgpPMJhPsshsqDokmCt2OGnEf6RxWH/iIeJNvUtHa0nTx5QUAvnj4DOJDM+SjuIBb0u79gZKpBdjKDdOnG3ZOQuZKYTR4ebj3KShVT10Wl9l4hWO/LQKbvZnKwAAuureJbU5Q3s9xr0+ddg/pbLi3i6u9fiefGp7eb2b53pAq4/kUQGEC5zdhqK1u1t9O7P0YBDdGsiFSYn9EVLx8S4sV3+S4viMu5Zyr4z8wztuuzp2WE73G8u8x7Qy77J8f6UDRdvuVH1mz03GjBhHauh39j7jLnIwX5wHMThN7ED6fs4okq2dU4CdKcR6x+QSijSfTFppcAkmyRtTtsy4bpWpJ/jF/LEx8xL5FxDoh5AkOh08KGxVrUi0VT9d8+lidanvxt7+1A1GIgXbk6Lv1ui5ChfONZ2eg/EP7hEruy1JijGSvxOCN0YjuWv8TNwQO7mXxTtRe1r9rZqi82nyYKrlyRDBExe6yzJGMN8CX/qRgfnEE+fhC6eX8nlG+tXYR69TIiaUZaiXLF4TE3cYHQy54zyQMb+xwtFpN9/mNVB7yArTuYF9N8ZIxNC5ZLxB8lmtuduhqECuP9ZDPuQ+YX4eVEmmqiG6k15+Olgsg5wQSNnq8McexxFV6tXeLzX9VfYsA3notaDFDbKsahNcXUtNzZh+uMGVT4V68QdKNuq6TUMHC55U0svS0yshhARZsiM+bCxXxPsrW0sshy+VvYpQ7U6e/rtUeH38bdJ447HxfHkfHLClA2x1HH8SoW7JiaBYIcEoRK0sZSMeB7VsHeTZUCj9ZqOYP/8WYzIEMGA/Ba5t3HTpvjSGEiz5vPzbBjVve+/q0LYNMZomNahbVrxoZ8zNhqgZVC0sGpukLIRL5uqyfVyGPJ2ObUhYlxaIXDodbqT+21d1emnvtr1TdBJ+B1owDGTcyADhQ/hzK7LBLg1dZDB6Jmj8OCc7AF/WO2JzRVYB7keWaxOUeK9hBpa9/Ef+QWfj3n5I03y+7fs57W0C1nQQXC9pFq34jnUN9laQIn9hMbqUkdd2x+tYolTcTy7UEltuqmB9WtFCfx9flNXSTXvmlQ/qozdx0cBHNLGW/mmtqs+cHoBNmBGEjipPkhfz3SbIBwgLDOwvYr+YLRSeLpy7S6talZMqheagzQ7zRPeSa/oGv+iCkc0nAJFd5+iy11d3DXUM8Bm5dSFw1Gg5We1dP8uWnMajhpckhhNMf9n+oW1Z0WQgti7dOI31SU7uloi8QcXsMy6kf1iqv77T3N14bB3u72INDNvdvflL6db1bnH8DxRJkAqTdHR070TfL/b/Xao+Xo/mGIDD2ccqQ/DPD6a5yhsBwGSDRjhmWuKrD5rKLjya6aPR/m5JXVOCE/RsJRc43NwEUoO9UsLCnIziX7cx5XA5jUaZc7PqijLMPqlbRr5F87p6K2MPXy24z3lW/wHVtD6S1aYS84pXQjldfZ7r9hDqSQxQ3dgMsrnyWurRSJf88fDf/W7+dt+zy/NwaX9xHz4X59WsIYA6p+gpuadbr90CBk7P5MN48Osb8hYqUbK+Ng66E71I4ffy6OaFBgCUU/N1/k1ctFsLERlbgItJE0k4zg3e1uY2fYbdJyN2tZmn9PF5IUGslVEJUSExjjjh0AC33t/EchfcU0EasFVfIEJWpKX7xIJpsin/lVvD4nTBM46/zY5DSKeXHxvD5Ok2epXZzi21FWVpCdPnOlOiV9F/0J5Gj4w3dmKW8JNOXltkFrmmHEsfPg/+a3isaQ+A83kyDv4qkxh7ieAEXDBlD7AXsXJZBPxFbHK6YXmDNQOJ/HLTJ79hAJbprHSL5vyMO0XIgf46C0QSIqElO17lNZ5FXvU0EaVpvVxi0sbsezs/kldOpCwYBbwkwc3lcUXvVSZYSL21Q7XkvogmdPostpC5bKg5Qmy1dPY4EWnb+X53xT1vC1QPxhdoChWexN9QTooBtQDAgz3gB797dcL2iPz4huNDIPaGlMnLB4irzbjQSmowogngcOmKWW9uNQDvQ8Cbvs8HUyQv3D3xDdV/x+jweR3EKdMwdt7XXhO66lyvJ/JT9aT+sS54wPQK8uMWp1wuXBzkjlBw33HImRTw/bv9fOQkRNMG+83YySNvKZevl2geGO5FtggDw+zi+ole6zgByjhCZMYaX7l3mnCVMDlVXczUra05C5VEltaHC5KJ8Fq/OjB0jN3Xhep7uI/cKSqev72qS9B4bf3mJCsHOefnDaL34qg5alZVfcMh3OW23Mm6890gcA4TvSb+lsbTSbn6IzqV8WjizVPmCYM2oE/0GHDy7+ftdzvmgled8wzAw4mUuB/pm0RCcdjGb47YFataiMXmBmNK5jB4quYsefFPEpaglhmYbJPUt02zvLQk3u+7f5IGW6VecCR+Leu4T8w7FEajPCxULz0YnGDq2FhVwN88s872Ljf/zc08a7Dd4o9r4G+76gAUoP3VuNKxU4ADiS7cdNZp6Bee/M9zs8hLqxeOPe1v5n1MTUqB46yhSXEkWP6ygx4sZ/3kAofD0tHkx3OBKLMYV9SPt8o1S1xHi/cQ1/lwGMycAfSZoBzIX7tlTi7FjQbxKpC9OJWNecG5gPVqmHH4D6phb7r1aWI1ZyO81g32p8WM1aBlZrn/0r4z0Ym5iGRdVA7+Pm3BCmLdFUyV45uK1nV0NUSEAN9MMpQ08Rh1oQVHhY4C5c+ezUVro/JgMgbnvftU9RkzKPOK1MkOzcRQB9xLAJNODQ6JJFMIypHO3NK5dSpooDDx6cXqAXP7L1YZ3eoFB+U1zOm9Gi6WjQg+xIo9TDKVyMCbuljMQBawoTxiIyBcCjKMslRSAxbYkfESpJsQTWmuHyy5MO5wAcS+dlQKXRIAAOi5ZqXO4Fsv6ZmAT9nEBSf30+a+MoD/Ay/51gnM1o09GdJfZQjd+2JH90cChKaRUblsWW+z/+7O4PpEaTn+5eTIcFKTBVC1xYTdVjrXox4S6AUVI/tws/yixf1ZRSU8kU6iHlEcrHZA15Jo7ielNLpNAqfWrU3+GXXyPmARYE+Zh8BjGLhCuswc4paSAxPJ8bMsS7hfqgyf8KYk1+hCzQiaVB+i2aNwYPJktDJy0ZnFfjxchyFNW85EkxL199uJUtwf3vEt+J3waX8PU66s9ZFEzw9MEuUrmb/uYbrZFSVElYl8ciyy9tVgrFb61URHW0fwMxJ/5NwuwfhwjXL4UrSy8SCg+RkuqlTnSkc2kCgrtmjrw60j3TseGoBm09rmmMYWVishmn7Sm8viUmA+PBpq7sJQupuS3X7sCABJ5lvrZpZStCx5RMB1UJ60HdUiEEw3mrTcOwzImr9f3wQ+c/cpMUVokXljQA2u1nDzcLUOS1CnapwxpJhlERFcz81dHGT7uzgtNtiKoloZsBGK7ZjF2Y0H0yscRblXADQcQwSr1hHneJr3BqLYMpUdPlu5gfGn1QdHUBdsYdD/ZDDc7tTqnH9FUeKUkMy1PB2KSu5YTQOvI0bAjfb3JNyziZswCF1T114Lqt0jCAxV8X4nIhADIdqsj9MJbIAmgAxhwG3Y+Qc04UOfjPbYXHMZjuUjaew+jFhjGenpefdpi5MA/QRozafdfW9A5VUmRT9jkFjB33YtNnL7qmdGYlrSYZoiNdI8yD8PaZg4oysllpLqIdc5HiFVxglRyDDnDNW2pCmkdYbqH7/qmRcqFJ+ODNrSUS5xmi2bTO2pTwqJQfkTUZwlQqsxyEGd/HYHR1OYkK1cxjJTLEWh5NN38QHW9fLpJpJWxLGnnrwaVQ9LnltcNrgnIHnjvB24rdkdNCH912hoeXfvmcwvY1Zl++dwYHigaIED7TZtzQasbhYfr0FJsjgv54aLV4zB/ElC07K/a/PJzvvNYWWD7ncpoJT9aEzjfBtash1PUHhZnwZaeUjOI0sZ3DZf2KgxMf4R2BlkD9aNYjje4BAgy1KgA4drjeqqn542yQ/om8GsEmdj5z1DE2184n07BmOVD1jh8B19t+YUd5qTbAIxrseRnEFUztixXyBnDQwaWpVyP5E6o/JOVlCxN7UuTug5rs1TSDjxkg1tKIp/1Wcbind9tEenQ5TsDkuzxzFuDhLxOePtgRkRFHEHb8ohGwiDZ1QEFpBdLnhqO3iF6OUGG0al5xs5y0W8hfLlogd298/y2Bte/MKGUeeTZ/8k5GVVxcjvjIj8QLLec8iWYGW6nA6A3HUMyUIGGIVhGm88MtNqyAN3GC+dl/JClKK790YJtwr4MD80kutDfNC5cmdMyySsCO+sEGzZE52OVwkSunEQaBq4OL3RZWBh02LUZazlI6zrDX/0fZGK74W6lNSMobKQVCeYMx3rF8iq3Tg77oBLv3bSxaUdHZzWlhdsOjtj3IkzC8RFsBKcoRAh4VIVqqJb0izkDiVnm8lUI2hpfAqu81jB2et1GvpNtdGNreXvSN4XtjL26H0vLVKH7xEip9KXLrK/fLv4XC2QNeaRtvx7HxAS3+z7W3kCnL0PdItxhA9+V+zhkmcGM/IGIwreQsixWry6/hKgLRXCdCRZ+oi5RUTgSR4HcVhPHuAddIjqI9In443llWKv2qKMpnciitt9ebo7qn1KGVbv3FYLpG78LoNpO3rM1sEAhKK4vIFucX7oecgjfwkETJNXUmiQu4J+RdMnrm/4iMUafHpDNVFKW/nAQ83H/v/icahf4ynOx0BMeyyW5gXQSm26A8gvzDmqBx9Zi3CtF4CpRbR4qXCDVa7uDmfRi3DRbDSvj7I3p21Q+MjGgRLd2rYX9q4v/vLi+W1A8mRd7PajbgkrAYQneVBfRHwFA6jcglDTTzlS5B8OzJHjcbb/zr9JL9OiuZuVrqWtszcNcrDzN6zvFZWrdvUYsweaIA02M8Cath+EkWk4yVsXNvnDn5sS8iU+lg78hOOzI5/K3cZLJcQ7j5o4F6CMlZgk4SOXzZma/fl18vqpHIr4Z8aalGMhTXZU8ZY2wIPpCtieQtS0o2t1f2PSjLpfbHpD4u6Wgiic7Iqoidbonl71UFo3P0zLRlrDW6dSEqzn/52iEGuGtJy387e1jhKEc0RlOJXqVE4uJNmHXEDrtV9MP3CS4ez2tIh1XKk/d2Y27T9ekN4n0GpiGi7KTiV4c22Dm5Fofc1Vqygth6GOjR3xXjkrHwmdqSeXQ3dECFUZPsTfxAyFlaKlmCB6tFUN5q4sJmbOkqs1yiPYXofgvEckni+hBg0A4l11vsl4apyDWjD+AJ3zKePhkaISqCVqQD0jUe7szT43uepoCsMG6XWElqyfWI0yE68xvW8spWNnHX+vDw38dXzZ5H78iQ4q/0kAVGB7vnR9hPBPJMUsRiSduG+zlammyQannHDTgnUOrQsCSoth3d6z5VLLbBgGc79zbmZ3J104+qVXXd/AL+OeNg08dFYMSSi/kX7Sktd4q1g1U6eoA3i1pjfcuSx/IZZSuCxRsrhm/yFYNlOdn02L8Eh/uaCL+NAaoE/xDED3H3DEfPqjPcPqlahD03+DFbnmQnnB4s/zDpLUUVpVODcrvzOvAz63ZopCtCWrSiwZd/vOUn0HS76uopMaY8cSopNFQ9rloC4cQ1uz2MDf0qA/HTRLVl5Fo0ahXh5aCsanMuXH5/5wkYPI9maXq9sDrS1TS1bSeMFQXNTHh9qmA+Du/OrSnzovfz/OMikoyZ+mm6oKj0lpPiA4KbFdiQgXvwYlKIa/LV2MKstLkdLRW/TA9zSVk3f8nzfY27KnPuxcthkng76V9Q+u5eWY7Vts3V6IZppqhXBxnG1m/KG1DDNoVHfLeDM2ST52yWIqjUkS5kEmEUAb03LHtCf9HvI55SvOK+IrCqlaktzoUpZGLpTc+TYrFFPmSOsQwvYzsIGDbhJL7H3v4mmoTlYVWQTKyAnUgkrdXSjM2PMRhYRDIJBoON16fMMLIca0xn3+C3wLQLaTJUd1kGASLAHKNNKt37DW2YBaMMrGzD38+uZBI8agM4uJ8MlV1sJwQ1ZR4R+Sx8isjOMy4peFm8ybGRu5dOHBAm3DNC3+eDpvcgyRFuHemGQUvJOd+3kOoEL+vpnLgMqCQaRCyOPJB+AAHw47OG4ylEngEU5ZWlk1rfZUR+Py7a2ITj4Kegs9cXi1Xt/HDJBJuefjvffS/nICOzYMB5m+KB/UahB/r5ZhBcMxayAy9/mpIfGSUTHzznWXHTEGqRWHr9rg8S3BDxySNmBWvzVkLyhL2wlDwjH8vJwp/qZTImfFAH8yKPk5/tlfT/dYzCUo+VPex9hGmCHUtkIwFt6HylM3Gii3w3J/vtQOowYq8Xy6Wsvbmg8WQ0AV5S5I/JRS29TpaRL52vSwwVC9Z6Dvkv0IF7NL6WEHAl7O8z87WDrijsUWL6j/DcgbOKqMNNjw8uGDvYVM5D1tfABEkS/5YLWg2anr6OnlXBCDBvKTHqptSb9ZLEVrG4aJ5Vl6hmj/EvTbg6ZzXEnCoXPXwrtUJhcb3BC7cDsQlE9i9CnbB4u1iMmnskuUaqbSF04z1XNYlyXnq03GTKbwnstwFHcreUfbXxaVNbc0wo09LjiZouOhlGIqyaj7m3CEVP3yTuFBHWopXmRQOFLmY4ZxL9TveXfURcLgBgyULDGYyty7BlDWHbF1E4Un3RCCsRqWgQRYUea2E3x77WRhbTXxIckN+ehqBXKwmjMr7O4BMFzoHvI251Thelp5ZjitY+pSugbiCIuwNhups2vc//qtOK4yoPG2vAhA7QS1a0nqftxoQLTRVeXJIPldF6iNM2J4Ef3MJ/WzbM1Ju4PombD/U3uV6IRQZ/OHD+q9LOJmWTkjFHRQ7g7fSrBTUI5hOGfk6850fqkFzBCjXoZJodTG/7ei+TWOC5wwOSyJYFjv7hv2wfsF+X0oSaVWd5EOU2VuYfUWXtCedGnTnYQcVj4BcyI/1hlyOfmNYrUOJdVHFBOuVBEvpdVf39CaniVbr8bkzvraIRmogD+yS2k6g2h6t8+7PPbqLQhDwKe6RQiGrniP+Eu42Fu49vTlVbonub7AphqzFHTzpB/dK2aAlXlPbEfVVlXd9cyQ2e29vo7BQKZCDkBSIttYYna0ETcjGQF+dHaWiI5A0LWlF7aTWr54cLoPPIw7fYpv/QLngoq2dYi/Dav9K7T6BNOAzW279f+Zghu5o7S8/Ihw/2z0sd4VI1XyzSi9yh450y011MJw4GyIIEIK2x2jNEEu/UUQgrcLf1pVMMbRNIuUUxo8XELp71fZnqgOF1EkWjWdh0vWYnFIr/xKP4L5aqUbBO+fXdICyjF7BQcX6uJusN1Zd4+GSdNFs6IRBw4yVCdgRX3XBjZVgbk6DPgqm7/TvDhOwGb1m3Apwzi+mvN6dBk767WCDJqjFtJpgxSoTcBp0uTkH1wpA2QzSTmmzktOniEEZlhKmj46a5LEhUEWXlC2FHYSzrc6sEpgTFWMfKjGPXwoDxr34TQKSzyjSO7sFRtM7AC/MPYxfUdqr10OkBP4XAFCiScI82/P/9Z1dUCowMfZyRu0+8f20R5y6jbzskTwkOsFfMWR+ufKFGOpT0bAD3Jgkpt/Yn6I0mzd8Sm+ZCS0lYj8Wb6KOXuB4aSvbtYN+ojaOIbYxO5qpHsd9XrDJYJN6DwC7GjWg5pTIHQ8FHGthRTngB0KYm9xLLotQMneTkoTdHswmiDc9LuXMHF23jIVpxkCtRs0gUG1wdFEIPYnpgbb4BT5NJR1Zpnq9roBgIFvJlv+dRLVq4WFkUNkLWL42tEeWBoJves9ykQubAGhjArUy/xWdkVNXNEWdUjetMoC3pgh1Mgil8YKGKvzz7riiJErhCsEpq1LF8XEchbtSDtu3sqdCS98tCvXDV1RDjDg9IimeF4smdkQLsY02IltVlOpLiytuTfhsOXWQZ0SCLMWjjUQKzResc7vMPnhg7raQQhJf44RuYwXDKZv2xfYe31WWhR4oNg6LUtcjAw6a5t47xllpVJXYVaYUBeoIkGU0LFdbiPOoOH+ygz/KYDAYQur1LburtJImfHnUPxcf7pH/6QZRJezOmIoh/j2V0LDW6mBSlwszerg7VZdJ7MfnmfTzEGfBcayVORGyalW9HHPTkLKRm2tAsLxCWWcHdT6Yox9+8PJ9gexYb66oQolD4mYqlCn7m5diHPlyqASpicMVFq5Y06C41PvDg9HJJZSO6Gj/TxabuiQrj7KS2S0jn0lrqOYJBpR4+Ij6NXxHX75x60je1opirZHbnrAuIpo3wSf+N5MHky7HXeZxStAHkM9ResWcpvbhFHEjV239LjWK1hPW9y9WITIWuRft5X1HY51rHbMmfRK9KnLfuhjQn41ur0UGorpbT4YnemhADuE5rJSg7FGi5EIyVHHpRWhF6pXD9b2jG3lD4PFI5O8NjvaQZPsckpgZQw3EAXC+vA4tVfkspiImbUAjjQvi+Ss+8fDzUmrG7ckMqvMio4U2q2j7aJvDw7q4X27KRxa+oGvCh8dUlBUEFqNpqZLRnZ85SE0J9x9Ck9qwcOdN0yP5fDCPq+/czHc05+P7p9CIOxtLaR2dFqNvh1S9EZL7nLPDvo6nNdFpSl9imfaKypMa1lUaMqHiNmOGOYU1ukQmxup25p/B2CkRMKIJKsnNmkgpDN6FOmvbQCzYtbQHzzFGNJwgx6/ZjqY3OpyWtmpzhYwSeA6BMEVUQeLTxUuxTAnt3hshcPK81vmwIiqRkJyazfv5BjfW7USI5Kvja1fQEH2+IpSSXI4HlMPo33mcdJMUixcR84On9omGsto+fIIhckHMKgPKdZ2YkiMf29CZqmiH1Tc3QTY72VkC7JphiBjoWzdJFSLqG1cri5uCmzVER9ZFESezGXjeUP2rxRR73IH8U6z0/TqBEMZul16FtYLTiUW5r1y/zoRUVSL2hXhXdm3GPo3ZqphS8T/tK2swGkoCPgDLF6nlBRgf1qmzSMyTbjhWYjBENoHc5caowC+WA3RhA68UFUVgli6dfxk2aovQq2rEKGXnu144ftjNduDMlIDYRGSd2/5lYBNeQQ7PIpHTpmovNGJIrU0rH8b79n1RkYJCTpP7aakpYfw8AgRRyiIc3z1MW1dB1Lv2WGdk3EV3VfXLm4uI3rRhSz3L2/TcSVuZyjGJVBCPrOccm2qwEnDKIyHHRcphUPRhhwBlQBdYQ35/7kxNvK8rOOCERFoY2m+4vBIPGRfJXyNdZcvXiwsxPHDp0s4IFm4rbJs00Q2oOt7JIGZuZBR5CdHsPWJ4I/JrBOns6VfO21V9XbuTunyIChNBnrG9ATLbAh0YGK7fOK2+N88RssycmwhQOeuDBLbS7VBIHzLfGaTlRAPKmU4q2xFzRUWNGGccJLvLzHz2f1Rblc3AuGBoUE2DwGK239wjdmXw9ktEHLPdiqFurdTVGrDOGojgf8MS1P5qxUH4EFb3elFd2+C2EYqTzdJR48JND2X4TDPOR9Yw6aLQKXT/huqktMWEikPucWJfjypTuf3jc7k+2JHGnnEfkyQPKUcr4jAvex5vncXz7hzsZJQCD7W8H8EOaEnIv/yVp86PPQjRzMcosLIpl1ex2NIkbegxb2pmUFc+Um4bmvLlpKme5H8GcCbeiq/EoVSWIOt2hXdmuFn9UXM7/M5SFOa0b0FaQuQOxtHD0uIEOZnOU707MAMjs8pX8+JEaPUIyX/OnzgvvfJMkxVk4UV2nk+ZZF7RoTjOdjEYu5TDj8jYqqKXVtuIv5OsATp4n9FoEQ0oTr8GR9J8ZL1oh4KGt68uJp482qO9OCu6ma1gewUFIIxHYmflIawGDBB+8o2kiQRfnQjF5FkgWW4pOdS3ubhZljk3UPKoJmmXJsx60o45G+o0FaUMOvbFFjF0cTs+S3P9vYLTyknaSx3weq7Qk3o7o8V6vPdeCQG9dWCPKdBoqliyMR8qkpb6z9oYNnVnsVVQeLqmn/AYJJdv9OKP2pQKSDfF+6l1FsJ11qAg39gwOj4nm8ImNCcQmxMe/C6qP7cbMeT5Zyhqu6l0rp6vXOjgGmy9B2WKKcSP1e5LLijkUU7GzgpfS8clKtVZvW3eZB4/pj5u+DOcgvosWvRa4vOXsgC9+H3x9kD8zS4GZox2kt72WS7sRroP/aRpcFDMNNQXphOSURh3AfJfK+Am95KmnRWv6KFg7+2/UprAx/MqOw9c2I5VhDFz+AtNZZc0m9/E+6DU/8uZT1goswJzsjJrp+aO/AZtKwSgQZlA42Xt2xEEpRKLre0JVqxW4YI531rtoqtNmTVSGERdcqaltOMUR8ogFUaXfbWl9N17FhNd4Fg3q+itrLmLEKbY/FF1R3vBtUeFvHkH0EirakE0JdveNc8qu2L+5qdT+a4lvBeVF1+wIFe3RSDNNVl0V37GGz9q08rIbaGnGElt8Svk9ehtpsIQ3CGDi7Gi96gniF6Xzh6fk0co+5kwMOkWeCUJUrB4g/Kp9Y4Mhfc8BJ/rMg0rSH+gVvcaAIN/SaxEtgkC1ruxbPfDKe/JRvDCjOvrTbMd0Iicnh6JqmZS3uOnpxAT+xnu5rsyWuLgCivPTfOLB6gWCJjSFfSt7/PYWP1M2Vd+Ggv0uyYbmZEwku9vfSCY85N/TtDZVQuVZruh7RnOa+baHn+vhVDbhx6/Ji0z1mEl36niliNpI9VTD2W3zJTZsdOHvbKXIwJ5eRYva5rTRyX9Zgqreneag4sa+u/AMMBm15WxMNpJfNqWJ+H+XksmTUxOz94aEufe8n9ET3eK1jwi0C2+Tn5INjcDp8REbiYJWm3zwMyofE+r8tVTPtOvcULQqqNWOcmMxTj+2I3kETRXP+dI2LHTsqFfJRIHSuWnh3WbGfM6L/CR8QxkyEhGk3H+32zksQarVUeJzJLFdsIKWdR7qih8/uF9r4GE8/aRBbSQD2aLj75/ZbdW3aTar6vXhPpsbwEuZQ84yxFAqHPQZUYDRyCtPjM5j+a6qtI49w9UE7D+keJzS5syVRjixbPGt5e/IYetSOcq0ijsmggnJVgBYj7rHsQe2GfpWV0T+YliEGHmA36Mf9xUdmGMdAGUJkCYDAirTq51ApQNcrzsJOcpQv1yikFBTNmRxw58RClrRuCXefKyOVwzzye16kb8wur0sQfxDhoMn8JB61WcFq4DjLwB46sKTZK8lDR+ar+R3c6Ab+eQDUW8usGsqk8mdDQEzhL1NHcnQDXqG3hmOrbtKLtHe3jMw0GEFRUOPxuTZJR0q6OHUnQmVIqmsltFCOJt2wh7rfAPxi4+L/A3/A1BebKItrvoW7cmOrD5dm3PabeWgrGht+cz4nS0wpjD8ZjtAvw4JD9RSKTS5uyFUGzRsSDaHTANzMl5xfLfVe0ZD0YuZigbPHVraNDKtFy6XYrVsnV3ZN7vMtVKNM3Yor2xa+2dgHq0oeznqBOBHtEE9Bbvc1Q74D/mvAWvUcqxE+FRqgMjxV/vnajZT8295DTj42jqfBbC4NtDcSxPPmSTR47vCPdk6VyZ0GsCr0DQi5OuETePzvWAZZOR5wHJk99g1c1xh0N1XrpMqjcZvklXyurq3rv3OHdOFAfWbhhnJIcRPxkZ8w/Ec5C1aCPempfSaMrJ2vjJUvSf9waBnmrnToj4dWqnabo3HLF5DEYpsjAPG8N2x0TCcINKs0kv3wQCYj3HxBZiKfiiyoswjdXafO8YKPpMHp55fH74sXs79CnOhBtQ1Jnh2WRb34qQGu6InNnDPCp8hlPm1YX4iF7IwLAh3J0l0F6eQoLgtgLK2E9S4a1Fciz5FibaL+JCYKjTDlt8x4c9/sBjbxlONZFxwmOyKru/LOYSJzb3G5fQZftggnyyKB3NJYoqoNMYASWUb5d7LxJDgpo216D4uLFaMOBtGw/ukegZuJkOl7PTgiVjDV4QMEhYG1wE4uD9VuH/XgUxmXhTFy23UtpbeHArq5gI155bnGHm+HDM38ALP08vc3arKD4eGSjHJ99OvN2Bc38V902V7pT45spsKr1egwa2BR7Jh1p9GR/Ug3mRi0cuf00AvGOW0DTu2AMzNcn9ivaSlOVtd15XAMTOI1P7u2k4G8yNgFIsXa7oUaNG/uay23fkHro4i/2oUFxHmCIA5BHeh1RnBghukGRafX2/8DHc70qgi5S9+DjjG6aLBAeajnG68Im6pPaUBzIdBR4KkQz4W5r3DuFD7aDyqheWjLIUclJj6O++M9s739/b095v3On5CA/oygOWuqbqU6XJ3wcFOXzbbW2p8B/yXHyDdBZLIfV6/qCObuEw2z16xMh1pJa697+RwmgoCqN/DLVDorgvY1WCCVyMJ1RKgryiQiS/kl6pn8PKDZvbYRUwktqtcGszicLYo7YeeaP37aPyjL1smCoLSLDRUB3RRAus+2bTE8sqT59cmPl5sIE430UfezNw9AcQKC1FTZplykpYjFCu52XdP48Mnbnvd3KjMHKHNrVn5wx+bzo3rRGCBmaf64iVNz4dVFy4B6HTwr+m6UKQPyK+n1KBwGQI/z9pN6t7LdGmL4PQF4aHP/XGvJkA4ywhMeDOtCkP+wNTU4x1wbHNMZ3YZYwglr34eBGrN/EeaqxHdjo4FKH2Ydyr5gBSYfo295R/6ai4xJdQlh16NhBizkUJPOFdGkW81LQtJw2U9y96+fmtD2kUF4xRPybYU+lVK62btcvEo978pmfSUilscJ30WVzWfe00AgTTnRD+T2oV0Jf4d2Yz0UYnAJtujZH+Z/anKbbwPNhS1wT3rB4UH/V5NPaTnoAU3ajIUv+JSWeutZR2eKie4QTD5ldhzl97mFiTr+S9y3BX0EtfYN1edv1mU30uA/E1rGGXTvVV6BUBLbGIZTxQAZCwt8ipC05xwZXoNo95D5EdVCcp2fgP48FgyZjJjSjZ5mNOhK30wSDgso7hw2qJEhQx6k/zK/YSL3r5N9heqnr/xB+Mct2ko5+Xaovw8PeaA/zax41B5MkZlfVJ41zi2FTpOKYJnSmk8gE8diGRywJvYgec/6lrVN1tyDJu8hbEnmtnicfm6MfLcrFGLN9qE8adB/N4tmOb1a3ESrINVqIMh3Oucm5/FCCUwx9YNe6cp0I/eaFQAtb77UFVYVI1xfw36NDjJWjyTvbGg9u48TGQawnwuQtR6QzVsaAIYiY0HhuLUtPnEreX48kPw/7jMnil0OK98jZ3wCOt0bsS4gf9HEsPXK0ZN5mHzn3MM5UtviqPfRFm1jKlo86+fwFPu0Tu1ps68m3nAlIK7lXbT19hiePmYJR8BdK27u6P3NeG3LqRIeIWuQzPqPDDsoVd1KSpOt00Ha99t58LaBzt7IdTVsmQ+M8IUOw3w4SrF1T2Qa3OKK4zT7lsyeyeYSLypB0u/Vd66Nz6A4kPofgM0p/Z8VrHIHjO6C9d3h7+2jLBXLa6z8xTdxryvOn+uYDdHbH+pFqrord5nQ176SY21njDhKfBJnEZpWKN8wQ0wwg51oXKt8kb2xTUP/QY50gTA9EV4A1xwI5x4Ahdo1tkK60AduyasgBSELJ1xL1y6mmeggv6jw8rZ3chbLfAJ6gotPOLRxlPTZsukcz+ExGrRpLAsPtf5ywZZzVmRadWf50XxSyZB0ClgXmiyphfV0FMJuvRoQK1l/LOJo5tp4ng+K2vDCDF//HN6RF+/QUZZYeoiKOeyt1zIwtJLQbs1JF9QCmTxySY83ePbU1PHZJYaTiYz5dkN2K3ddQrBsxfQD/gF8xM4Ii1wfehPZYCI1hMriPXZTSe++ZJFR+fP1mBKBuGuspH+Gl+z2QyPczFBCeHJMbTr4QT0ZpWD4ontfcTpUlwCx+9/JAORlMZtrANUVLgEKyR0/cMlnfyOqdJYVLtxPFN6xpmyDDG3TNhSVjqfcgJiLUrp4imOnMNTwyCh9RT90abu2KbSfq0w4EA6pVoOmUu4t8D5MAyuxD74THB4Xa+zlc+6IC74MK32XUOBBT+ijv7EqRiTZoIc65dizQkJy4NqHOz8VBCQXLsPcbV8svh6JD5Z4eF6Grw7b8Y7mz5by6L5FmjxtSCw94EOViAW+AFp3a+HLfAuGydJuqs0eoTQRQiN2NQtfJGHa8Ywc1GYTRceAuaYqylLPcVzejWuSTmFMlCgVb0I7KcEQN/0jd8A2cqVF1LP5jw6eWASdq7MGB46R49/O/r74o7a+jR6TWLZtrf7rbUbVu9sv5Dnq/OWZnmDeS+yoh7FyRiBpE272sKqonzRjnDOvZV3MABecbYmhSl4Sw5Jm40VeHEP5CLhVh9Yj8yJ0ieCLGCz4olbo9ptV2rWCZ5U1ctAN2r5HfLoya6nuvMnEInWjTBYpOyex29lykLX8vRPhvWLJgjWp0TgzVmm5e4spimklEDRaGHXXZZ15V9xEc/8yo2a5JXelocUojHvYnmLbvbLOkikovaV1cuktKfUAOvPFFT0yPS4LUcppQD7J0vlJVAnElHy/B3WI/vyXstFRLbyleEoaXU6r96rkD9U7I0O1vn11+rcIVZxFUy0j/01+ICurJ3iYD6Bn4Z+CDiKfhxbLvk4e643ig41HJBFdwciC/TLFa5/2vvJ/8GdL6kunAi/AfZxyFqWXyUamvNSalfg3KWl8RKU2TLk5m2+ImVwG/tFPICKDSofcsjNy5srdgchdkycEdz8onyASVqUv8MFbvQtx9/FQjeuj52m+SVrg9/ULXv5lOCKSuY/pMrqysN7B/vwPb3DenzJDMPMR61CYHtNpaLcVnZDE5imnz408uxsnnAfPIN6/Q4lUrtRoELtGCmNa4a4G3lyX+TJUaPTIj79sMyudeFEGcRvvbBrHX2DiNws5Y0VBxQXDJNlLOsE0T+Au49MAccVUf8ICxQhSK2t+lxqeUqJtYtwO/8X6N2yR8XX7uRHnot8lXnPZseB0r7MpBnR7QztiOV/cCy8x09a8NRL+XGiwVdH+tjfgCLjnAx7kX5E0LeAPM8IASXJW5wQuHLq2GXz8r0FcXHDW9cA6mxjgCNXxJjCKf2u3Acgmgl74yPgb4azRpi7dKb2vBvgTvNRldA5/tmqrNOCNatgKKrVuCEmQloSCdPUNbiIEYqespzbxe7YRDqBB5Yq1gnMyjfiRmdh0uRvH+di3Pf2BmO6rcKBryxgHuW/zTA0yRadRIS6zNkHAnZHJJ6vPmwdC57eyQ7Px6wym9yoSCwnm2jGOXZ8MxMuYmUpSD7Ad6yfBrx/6jGqj8pOmNOExW6dEF/kOpiAZGciph1+HsqueKI14Er/Gc2brzOK0F7pDH+TuSkR81tDHwQBC7UmSXUY+HNfzyShaAfnhsZZgDETCfAUgnOL0EgC1k7kcm/aZYRfUI4yhPL1DU6F83s7GHGJrDSTznFdx721DbeToKA2dUR1ybBla4p/Vb0TXPwwAslGB7ogc+uwmoV1YJ1ACSW0+xMUucu8DDE2XZ6AU2o/Sth0ATaRDIMQXTCDD+KxxiGRx9esDP+n8cQ8IviB49pNcndGgeU+pQGoHdFYHh6teEnSVsJu4tptPT3De370IK6b7TB4nACRWTmTUaa25EPMb+PE/2518kfzwPNDRooLQXAxX5nLgo7pRBscWlX4hV8mzPhc313DG5E6nZD4isS+W7p/DsT82NmX4/RD8dWlrjnpyiO3ITa+GSJnhIvsOvUo6uyuVHOOdgi1KLv6KGdgiYwhysT3/l3fXuuSJUXbr9uRoY1yhQqjw+MC2yHx+hoYWQd+dwING5180cZGxueSAmwR8cG8uMy7tOO/gqKpF4r5XoAKTliywroo3unYt70vTELx38kAJPHwVJChPcbopjsTqojzs77inbx2YfZEhTiVUi/E7estvjZ4MXDlUwi86WzauvSLHjTlmy29dxFAn3TwKJD3tXF+b7uZh6FBWDfKBoNV0wus7WEIAj2DzdwF5p5r9X5rQLn9WnLgIYf1uboxLbpwMdPKk2MeQVhAx4c05643s5Ho3n/dVFachZ6EEKun+tOhrbgYP4dj+/4vgj61bvbrPXRbtY5dTLzfe59W8THrVktt5MAzUquwnvbVD0w8AeDG6FflwemdXE7mv8hSF3ZGcs1BiGrpTtb/I0dydKKtm49X1veCDN7/oF0v7PZDkHFpkSi0QeFKyDu6dmmOJQ8BX1ZPSMIZOZmH2Bv3nyzmUWvvQr1/ZBku+DhwOtBgvag4BszQsN7vgi4F7j9b1tbVEfvOgta5+W+ux72WJjnjx2S/BN1e2d5gMVTtZ+AruK9yz2CEYCU58+Ro81A69Ba5BAW3puNvIQUO1ssGnwo/+hSMmmNFNJ6dsbm+O+qQF1NXd05fs0999Kiid02OULnpjoIWIvl0VqpcIn4QV9k1Yw384+Mss0ZcBGBlkDc/VbXBxewS4hgdC9TVhhLi6i2KsqyMTgtfnqZOCFACwY2yc0tOXGNJBySqI1EJ31171rzE6gDwiYIWPzFni6+Vs7LcriIX0v9OTygIMEyXw72oY3AenH/yKMhZvnXz/LA6fOweJltI0fiz3jbJ//o0qN4W6qAzN72T6/BtrNf5wW8T8Rt6lukXOYF2qM15ge+1yr9u6u/i69Isn5r45f0/tEFfwHFSpfBV+U3Knx6Vl/wqbTE5Vuzc8W0/6OUGFDbWGjjPpls5Yl3o7D03vlFEmFvCHXZeaoPOfYIHwkFEWbg6QOj16ZyOjcENAEmP0Pq5buZSm4nBFsLlG4wvDNYrKtw86sLpdU2d5NiGr8bWENZgR+Ed7FSCS+0FvZsupS/epVhxH7vXcNfqUCSvSC0I4ed+P2GT19qUlRgHHjWzGc0jJiKFFOLSgcfyJzM8r2G1Ti3ybJ1sfT/T6m85wQYkROQ5CkXSLSDddl4GIxxslyFeEX2a8ylyFpCOhhb0QH/jyVLoshDoVwkjZjwOHLuOEhXLlA3HMhLsKAisTLx2A4lBK0K5/BwDC/SGHEcjl2KPY+Xm7bwBraRvQpjQ0svFFSFhw2S4e/ZrzNbRZ5WXqHD11IDS1ZL5ukHfYYVcyZN/ytALn6e1r82pDD23+eOXcsWe8iltkaf3hkhR7MDO8X9aEnI6RsE94cQWHLMg4zHjCtjDXqoSnhdKdA37Y3hhmJB/FqpUbmPBacnKlHboJKm6Bpk0O0M9OQfAYYxn68TcRvYBqxwas5hQIYaZYMjNOpau8xhQ7lR00+tcJEf510+pFfrxsQijPLdxLeO1ZGQdD5DdBWKTftL7EU2xbQmApp/BzY0TN3jIBbe1G8jIQQ34rAo0TagaehcWMrx+Qk3ZwdMInNPNC+6aPC1I0k7HX5cI92VfrP430IrOHr96/mBE9SJ22AY3bLTCL+vIdB6fe5knClHpjGb1VBnLXeWIVL1Xty180nePZ+rylFwAxIqW8t8sPTRkgGc5nN1WtlZKj3dzdQ/M8eKMK0287xVpf4TOpH5QcQ3zIgO/QAr2P+hxPRLJ7M+n0Be1sRzqZOEp53l92kPXbsm7ayYRkSThqLjhT+EWk8PafqZPxmHHPRyUZ9X6zl0rVXoAnfPXnRTIg4iBubXUffvg44q3IDXu9ypwi/jSy2AfNeOc8FHzh9dO/7yy0h07VgxOWzgwQna05Ln/gTXq/ccoMhfZaaxX+46wic65OFSDgcLXlsNdlY2pKVYMqtRg16jAUifeVBgJ/dQAG0TKMQJbb+0y+D3koojZ7g2kzoH/XQCHxsZjnJ3gGIqEdmw2xvaaMDAPMPMKwPJaBD5G85LR+H725EBbVzHARPNMIhY3YEtg6ums+z8+IN9f22czzzsJX3iPwWO3rUpuJG8bFatxSNKc1AyCsjqKljUtsyGZzdKuB1PWt1U6zmTItmkgSkna+BIjZK3kzVz0I3Pjat1JSb/0hKFOEfLlQsAotdsCEsFyA7e3ok5V/RgiNsVrwx14v/TnWRf45ZdqDOlhc3Bq7M5LgF9XNItcuvBulahUysXT8leKrYTVoxml0EL87Q0rpJS0NPtZhQ6YwnkxjZ6LMupknNaMfx+EER7c4oU6T7MoWmb3qUEFgBJ2jxQTOI9u/x/W/07guPSxObe0QZgIotwdPF/Swtvk2qFK2TDcs+GhiLj8mix2dvX5mfRKs="

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"app\">\n<div class=\"app__body\">\n<div class=\"app__menu\"></div>\n<div class=\"app__menu-drag\"></div>\n<div class=\"app__list-wrap\">\n<div class=\"app__list\"></div>\n<div class=\"app__list-drag\"></div>\n<div class=\"app__details\"></div>\n</div>\n<div class=\"app__grp\"></div>\n</div>\n<div class=\"app__footer\"></div>\n</div>\n";
	},"useData":true});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"details__attachment-preview\">\n<div class=\"details__attachment-preview-data\"></div>\n<i class=\"fa details__attachment-preview-icon\"></i>\n<div class=\"details__attachment-preview-download-text\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detAttDownload",{"name":"res","hash":{},"data":data}))
	    + "\n<span class=\"details__attachment-preview-download-text-shortcut\"></span>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detAttDelToRemove",{"name":"res","hash":{},"data":data}))
	    + "</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"empty-block muted-color\">\n<h1 class=\"empty-block__title\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"detEmpty",{"name":"res","hash":{},"data":data}))
	    + "</h1>\n</div>\n";
	},"useData":true});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"empty-block muted-color\">\n<h1 class=\"empty-block__title\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"detGroupRestore",{"name":"res","hash":{},"data":data}))
	    + "</h1>\n<div class=\"empty-block__lower-btns\">\n<i class=\"details__buttons-trash-del fa fa-minus-circle\"></i>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"details__history\">\n<div class=\"details__history-desc muted-color\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detHistoryClickPoint",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div class=\"details__history-top\">\n<div class=\"details__history-timeline\">\n<div class=\"details__history-timeline-axis\"></div>\n<div class=\"details__history-arrow-prev\"><i class=\"fa fa-long-arrow-left\"></i></div>\n<div class=\"details__history-arrow-next\"><i class=\"fa fa-long-arrow-right\"></i></div>\n</div>\n<a class=\"details__history-close\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detHistoryReturn",{"name":"res","hash":{},"data":data}))
	    + " <i class=\"fa fa-external-link-square\"></i></a>\n</div>\n<div class=\"details__history-body\">\n<div class=\"details__field\">\n<div class=\"details__field-label\">"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"title",{"name":"Res","hash":{},"data":data}))
	    + "</div>\n<div class=\"details__field-value\"><i class=\"fa fa-key\"></i> </div>\n</div>\n</div>\n<div class=\"details__history-buttons\">\n<button class=\"details__history-button details__history-button-revert btn-silent\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detHistoryRevert",{"name":"res","hash":{},"data":data}))
	    + "</button>\n<button class=\"details__history-button details__history-button-delete btn-error\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detHistoryDel",{"name":"res","hash":{},"data":data}))
	    + "</button>\n<button class=\"details__history-button details__history-button-discard btn-error\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detHistoryDiscard",{"name":"res","hash":{},"data":data}))
	    + "</button>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
	},"3":function(container,depth0,helpers,partials,data) {
	    return "(no title)";
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

	  return "<div class=\"details__header-icon details__header-icon--icon\" style=\"background-image: url("
	    + ((stack1 = ((helper = (helper = helpers.customIcon || (depth0 != null ? depth0.customIcon : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"customIcon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + ")\" title=\""
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detSetIcon",{"name":"res","hash":{},"data":data}))
	    + "\"></div>\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<i class=\"details__header-icon fa fa-"
	    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
	    + "\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detSetIcon",{"name":"res","hash":{},"data":data}))
	    + "\"></i>\n";
	},"9":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"details__buttons-trash-del fa fa-minus-circle\" title=\""
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"detDelEntryPerm",{"name":"res","hash":{},"data":data}))
	    + "\" tip-placement=\"top\"></i>";
	},"11":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"details__buttons-trash fa fa-trash-o\" title=\""
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"detDelEntry",{"name":"res","hash":{},"data":data}))
	    + "\" tip-placement=\"top\"></i>";
	},"13":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<div class=\"details__attachment\" data-id=\""
	    + alias2(alias1(blockParams[0][1], depth0))
	    + "\"><i class=\"fa fa-"
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.icon : stack1), depth0))
	    + "\"></i> "
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.title : stack1), depth0))
	    + "</div>\n";
	},"15":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"details__attachment-add\">\n<span class=\"details__attachment-add-title\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"detDropAttachments",{"name":"res","hash":{},"data":data}))
	    + "</span> <i class=\"fa fa-paperclip\"></i>\n</div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"details\">\n<div class=\"details__back-button\">\n<i class=\"fa fa-chevron-left\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detBackToList",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\n</div>\n<div class=\"details__header\">\n<i class=\"details__header-color fa fa-bookmark-o\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detSetIconColor",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\" tip-placement=\"left\">\n<span class=\"details__colors-popup\">\n<span class=\"details__colors-popup-item yellow-color fa fa-bookmark-o\" data-color=\"yellow\"></span>\n<span class=\"details__colors-popup-item green-color fa fa-bookmark-o\" data-color=\"green\"></span>\n<span class=\"details__colors-popup-item red-color fa fa-bookmark-o\" data-color=\"red\"></span>\n<span class=\"details__colors-popup-item orange-color fa fa-bookmark-o\" data-color=\"orange\"></span>\n<span class=\"details__colors-popup-item blue-color fa fa-bookmark-o\" data-color=\"blue\"></span>\n<span class=\"details__colors-popup-item violet-color fa fa-bookmark-o\" data-color=\"violet\"></span>\n</span>\n</i>\n<h1 class=\"details__header-title\">"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.program(3, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</h1>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customIcon : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams),"inverse":container.program(7, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n<div class=\"details__body\">\n<div class=\"scroller\">\n<div class=\"details__body-fields\">\n</div>\n<div class=\"details__body-aside\">\n</div>\n</div>\n<div class=\"scroller__bar-wrapper\"><div class=\"scroller__bar\"></div></div>\n</div>\n<div class=\"details__buttons\">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deleted : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams),"inverse":container.program(11, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "<div class=\"details__attachments\">\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.attachments : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 2, blockParams),"inverse":container.program(15, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n</div>\n<div class=\"details__dropzone\">\n<i class=\"fa fa-paperclip muted-color details__dropzone-icon\"></i>\n<h1 class=\"muted-color details__dropzone-header\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"detDropAttachments",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</h1>\n</div>\n</div>\n";
	},"useData":true,"useBlockParams":true});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return " details__field--editable";
	},"3":function(container,depth0,helpers,partials,data) {
	    return " details__field--multiline";
	},"5":function(container,depth0,helpers,partials,data) {
	    return " details__field--can-edit-title";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};

	  return "<div class=\"details__field"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiline : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canEditTitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n<div class=\"details__field-label\">"
	    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</div>\n<div class=\"details__field-value\">\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<div class=\"dropdown__item "
	    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = blockParams[0][0]) != null ? stack1.active : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\" data-value=\""
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.value : stack1), depth0))
	    + "\">\n<i class=\"fa fa-"
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.icon : stack1), depth0))
	    + " dropdown__item-icon\"></i>\n<span class=\"dropdown__item-text\">"
	    + ((stack1 = alias1(((stack1 = blockParams[0][0]) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
	    + "</span>\n</div>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "dropdown__item--active";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1;

	  return "<div class=\"dropdown\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true,"useBlockParams":true});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

	  return "<div class=\"footer__db footer__db-item "
	    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.open : stack1),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\" data-file-id=\""
	    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? stack1.cid : stack1), depth0))
	    + "\">\n<i class=\"fa fa-"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.open : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.program(6, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\"></i> "
	    + alias3(alias2(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.name : stack1), depth0))
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.syncing : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams),"inverse":container.program(10, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "footer__db--dimmed";
	},"4":function(container,depth0,helpers,partials,data) {
	    return "unlock";
	},"6":function(container,depth0,helpers,partials,data) {
	    return "lock";
	},"8":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"fa fa-refresh fa-spin footer__db-sign\"></i>";
	},"10":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1;

	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = blockParams[1][0]) != null ? stack1.attributes : stack1)) != null ? stack1.syncError : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams),"inverse":container.program(16, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
	},"11":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression;

	  return "<i class=\"fa "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = blockParams[2][0]) != null ? stack1.attributes : stack1)) != null ? stack1.modified : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams),"inverse":container.program(14, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + " footer__db-sign footer__db-sign--error\"\ntitle=\""
	    + alias2((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(alias1,"footerSyncError",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + ": "
	    + alias2(container.lambda(((stack1 = ((stack1 = blockParams[2][0]) != null ? stack1.attributes : stack1)) != null ? stack1.syncError : stack1), depth0))
	    + "\"></i>";
	},"12":function(container,depth0,helpers,partials,data) {
	    return "fa-circle";
	},"14":function(container,depth0,helpers,partials,data) {
	    return "fa-circle-thin";
	},"16":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1;

	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = blockParams[2][0]) != null ? stack1.attributes : stack1)) != null ? stack1.modified : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
	},"17":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"fa fa-circle footer__db-sign\"></i>";
	},"19":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"fa fa-bell footer__update-icon\"></i>\n";
	},"21":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"fa fa-cog\"></i>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"footer\">\n"
	    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.files : depth0)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "<div class=\"footer__db footer__db--dimmed footer__db--expanded footer__db-open\"><i class=\"fa fa-plus\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"footerOpen",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</div>\n<div class=\"footer__btn footer__btn-help\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"footerTitleHelp",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\" tip-placement=\"top\"><i class=\"fa fa-question\"></i></div>\n<div class=\"footer__btn footer__btn-settings\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"footerTitleSettings",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\" tip-placement=\"top\">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.updateAvailable : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams),"inverse":container.program(21, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n<div class=\"footer__btn footer__btn-generate\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"footerTitleGen",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\" tip-placement=\"top\"><i class=\"fa fa-bolt\"></i></div>\n<div class=\"footer__btn footer__btn-lock\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"footerTitleLock",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\" tip-placement=\"top-left\"><i class=\"fa fa-sign-out\"></i></div>\n</div>\n";
	},"useData":true,"useBlockParams":true});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "checked";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"gen\">\n<div>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"genLen",{"name":"res","hash":{},"data":data}))
	    + ": <span class=\"gen__length-range-val\">"
	    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.length : stack1), depth0))
	    + "</span></div>\n<input type=\"range\" class=\"gen__length-range\" value=\"13\" min=\"0\" max=\"25\" />\n<div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-upper\"\ndata-id=\"upper\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.upper : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-upper\">ABC</label></div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-lower\"\ndata-id=\"lower\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.lower : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-lower\">abc</label></div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-digits\"\ndata-id=\"digits\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.digits : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-digits\">123</label></div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-special\"\ndata-id=\"special\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.special : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-special\">!@#</label></div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-brackets\"\ndata-id=\"brackets\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.brackets : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-brackets\">({&lt;</label></div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-high\"\ndata-id=\"high\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.high : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-high\">äæ±</label></div>\n<div class=\"gen__check\"><input type=\"checkbox\" id=\"gen__check-ambiguous\"\ndata-id=\"ambiguous\" "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.opt : depth0)) != null ? stack1.ambiguous : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"gen__check-ambiguous\">0Oo</label></div>\n</div>\n<div class=\"gen__result\"></div>\n<div class=\"gen__btn-wrap\"><button class=\"gen__btn-ok\">"
	    + alias3(((helper = (helper = helpers.btnTitle || (depth0 != null ? depth0.btnTitle : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"btnTitle","hash":{},"data":data}) : helper)))
	    + "</button></div>\n</div>\n";
	},"useData":true});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "readonly";
	},"3":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};

	  return "<div>\n<input type=\"checkbox\" class=\"input-base\" id=\"grp__check-search\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enableSearching : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " />\n<label for=\"grp__check-search\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(alias1,"grpSearch",{"name":"res","hash":{},"data":data}))
	    + "</label>\n</div>\n";
	},"4":function(container,depth0,helpers,partials,data) {
	    return "checked";
	},"6":function(container,depth0,helpers,partials,data) {
	    var stack1, helper;

	  return "<img src=\""
	    + ((stack1 = ((helper = (helper = helpers.customIcon || (depth0 != null ? depth0.customIcon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"customIcon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\" class=\"grp__icon grp__icon--image\" />\n";
	},"8":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return "<i class=\"fa fa-"
	    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"icon","hash":{},"data":data}) : helper)))
	    + " grp__icon\"></i>\n";
	},"10":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"grp__buttons\">\n<i class=\"grp__buttons-trash fa fa-trash-o\"></i>\n</div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"grp\">\n<div class=\"grp__back-button\">\n"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"retToApp",{"name":"res","hash":{},"data":data}))
	    + " <i class=\"fa fa-external-link-square\"></i>\n</div>\n<div class=\"scroller\">\n<h1>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"grpTitle",{"name":"res","hash":{},"data":data}))
	    + "</h1>\n<div class=\"grp__field\">\n<label for=\"grp__field-title\">"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"name",{"name":"Res","hash":{},"data":data}))
	    + ":</label>\n<input type=\"text\" class=\"input-base\" id=\"grp__field-title\" value=\""
	    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "\" size=\"50\" maxlength=\"1024\"\nrequired "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.readonly : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " />\n</div>\n"
	    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.readonly : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "<label>"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"icon",{"name":"Res","hash":{},"data":data}))
	    + ":</label>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customIcon : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
	    + "<div class=\"grp__icons\"></div>\n</div>\n<div class=\"scroller__bar-wrapper\"><div class=\"scroller__bar\"></div></div>\n"
	    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.readonly : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<i class=\"fa fa-"
	    + alias2(alias1(blockParams[0][0], depth0))
	    + " icon-select__icon "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || helpers.helperMissing).call(depth0 != null ? depth0 : {},blockParams[0][1],(depths[1] != null ? depths[1].sel : depths[1]),{"name":"ifeq","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\" data-val=\""
	    + alias2(alias1(blockParams[0][1], depth0))
	    + "\"></i>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "icon-select__icon--active";
	},"4":function(container,depth0,helpers,partials,data) {
	    return "<span class=\"icon-select__icon icon-select__icon-btn icon-select__icon-download\"\ndata-val=\"special\" data-special=\"download\" title=\""
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"iconFavTitle",{"name":"res","hash":{},"data":data}))
	    + "\">\n<i class=\"fa fa-cloud-download\"></i>\n</span>\n";
	},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda;

	  return "<span class=\"icon-select__icon icon-select__icon-btn icon-select__icon-custom "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || helpers.helperMissing).call(depth0 != null ? depth0 : {},blockParams[0][1],(depths[1] != null ? depths[1].sel : depths[1]),{"name":"ifeq","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\"\ndata-val=\""
	    + container.escapeExpression(alias1(blockParams[0][1], depth0))
	    + "\">\n<img src=\""
	    + ((stack1 = alias1(blockParams[0][0], depth0)) != null ? stack1 : "")
	    + "\" />\n</span>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=depth0 != null ? depth0 : {};

	  return "<div class=\"icon-select\">\n<div class=\"icon-select__items\">\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.icons : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n<div class=\"icon-select__items icon-select__items--custom\">\n<input type=\"file\" class=\"icon-select__file-input hide-by-pos\" accept=\"image/*\" />\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canDownloadFavicon : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "<span class=\"icon-select__icon icon-select__icon-btn icon-select__icon-select\"\ndata-val=\"special\" data-special=\"select\" title=\""
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(alias1,"iconSelCustom",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "\">\n<i class=\"fa fa-ellipsis-h\"></i>\n</span>\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.customIcons : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n</div>\n";
	},"useData":true,"useDepths":true,"useBlockParams":true});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"key-change\">\n<i class=\"key-change__icon fa fa-lock\"></i>\n<div class=\"key-change__header\">"
	    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fileName","hash":{},"data":data}) : helper)))
	    + ": "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"keyChangeTitle",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div class=\"key-change__body\">\n<div class=\"key-change__message\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"keyChangeMessage",{"name":"res","hash":{},"data":data}))
	    + ":</div>\n<div class=\"key-change__input\">\n<input class=\"key-change__file hide-by-pos\" type=\"file\"  />\n<input class=\"key-change__pass\" type=\"password\" size=\"30\" autocomplete=\"off\" maxlength=\"128\" autofocus />\n<div class=\"key-change__keyfile\">\n<i class=\"fa fa-key\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openKeyFile",{"name":"res","hash":{},"data":data}))
	    + "<span class=\"key-change__keyfile-name\"></span>\n</div>\n</div>\n</div>\n<div class=\"key-change__buttons\">\n<button class=\"key-change__btn-ok\" data-result=\"ok\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"alertOk",{"name":"res","hash":{},"data":data}))
	    + "</button>\n<button class=\"btn-error key-change__btn-cancel\" data-result=\"\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"alertCancel",{"name":"res","hash":{},"data":data}))
	    + "</button>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return " <i class=\"fa fa-plus\"></i>";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

	  return "<div class=\"empty-block muted-color\">\n<div class=\"empty-block__icon\"><i class=\"fa fa-key\"></i></div>\n<h1 class=\"empty-block__title\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"listEmptyTitle",{"name":"res","hash":{},"data":data}))
	    + "</h1>\n<p class=\"empty-block__text\">\n"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"listEmptyAdd",{"name":"res","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n</p>\n</div>\n";
	},"useData":true});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "list__item--active";
	},"3":function(container,depth0,helpers,partials,data) {
	    return "list__item--expired";
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};

	  return "<img src=\""
	    + ((stack1 = ((helper = (helper = helpers.customIcon || (depth0 != null ? depth0.customIcon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"customIcon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\" class=\"list__item-icon list__item-icon--custom "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\" />";
	},"6":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)));
	},"8":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};

	  return "<i class=\"fa fa-"
	    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
	    + " "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " list__item-icon\"></i>";
	},"9":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
	    + "-color";
	},"11":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
	},"13":function(container,depth0,helpers,partials,data) {
	    return "("
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"noTitle",{"name":"res","hash":{},"data":data}))
	    + ")";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "<div class=\"list__item "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.expired : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\" id=\""
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\" draggable=\"true\">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customIcon : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
	    + "<span class=\"list__item-title\">"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
	    + "</span><span class=\"list__item-descr thin\">"
	    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
	    + "</span>\n</div>\n";
	},"useData":true});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "list__item--active";
	},"3":function(container,depth0,helpers,partials,data) {
	    return "list__item--expired";
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};

	  return "<img src=\""
	    + ((stack1 = ((helper = (helper = helpers.customIcon || (depth0 != null ? depth0.customIcon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"customIcon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\" class=\"list__item-icon list__item-icon--custom "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\" />";
	},"6":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)));
	},"8":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};

	  return "<i class=\"fa fa-"
	    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
	    + " "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " list__item-icon\"></i>";
	},"9":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
	    + "-color";
	},"11":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
	},"13":function(container,depth0,helpers,partials,data) {
	    return "("
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"noTitle",{"name":"res","hash":{},"data":data}))
	    + ")";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "<tr class=\"list__item list__item--table "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.expired : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\" id=\""
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\" draggable=\"true\">\n<td>"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customIcon : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
	    + "</td>\n<td>"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
	    + "</td>\n<td>"
	    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
	    + "</td>\n<td>"
	    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
	    + "</td>\n<td>"
	    + alias4(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data}) : helper)))
	    + "</td>\n<td>"
	    + alias4(((helper = (helper = helpers.notes || (depth0 != null ? depth0.notes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data}) : helper)))
	    + "</td>\n</tr>\n";
	},"useData":true});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "checked";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"list__search\">\n<div class=\"list__search-header\">\n<div class=\"list__search-btn-menu\">\n<i class=\"fa fa-bars\"></i>\n</div>\n<div class=\"list__search-field-wrap\">\n<input type=\"text\" class=\"list__search-field input-padding-right\" autocomplete=\"off\">\n<i class=\"list__search-icon-search fa fa-search\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchAdvTitle",{"name":"res","hash":{},"data":data}))
	    + "\"></i>\n</div>\n<div class=\"list__search-btn-new\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchAddNew",{"name":"res","hash":{},"data":data}))
	    + "\">\n<i class=\"fa fa-plus\"></i>\n</div>\n<div class=\"list__search-btn-sort\" title=\""
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchSort",{"name":"res","hash":{},"data":data}))
	    + "\">\n<i class=\"fa fa-sort-alpha-asc\"></i>\n</div>\n<div class=\"list__search-adv hide\">\n<div class=\"list__search-adv-text\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchSearchIn",{"name":"res","hash":{},"data":data}))
	    + ":</div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__searcn-adv-check-user\" data-id=\"user\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.user : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__searcn-adv-check-user\">"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"user",{"name":"Res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-other\" data-id=\"other\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.other : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-other\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchOther",{"name":"res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-website\" data-id=\"url\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-website\">"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"website",{"name":"Res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-protect\" data-id=\"protect\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.protect : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-protect\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchProtect",{"name":"res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-notes\" data-id=\"notes\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-notes\">"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"notes",{"name":"Res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-pass\" data-id=\"pass\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.pass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-pass\">"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"password",{"name":"Res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-adv-text\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchOptions",{"name":"res","hash":{},"data":data}))
	    + ":</div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-cs\" data-id=\"cs\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.cs : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-cs\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchCase",{"name":"res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-regex\" data-id=\"regex\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.regex : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-regex\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchRegex",{"name":"res","hash":{},"data":data}))
	    + "</label></div>\n<div class=\"list__search-check\"><input type=\"checkbox\" id=\"list__search-adv-check-history\" data-id=\"history\"\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.adv : depth0)) != null ? stack1.history : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "><label for=\"list__search-adv-check-history\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"searchHistory",{"name":"res","hash":{},"data":data}))
	    + "</label></div>\n</div>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<table class=\"list__table\">\n<thead>\n<tr>\n<th></th>\n<th>"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"title",{"name":"Res","hash":{},"data":data}))
	    + "</th>\n<th>"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"user",{"name":"Res","hash":{},"data":data}))
	    + "</th>\n<th>"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"website",{"name":"Res","hash":{},"data":data}))
	    + "</th>\n<th>"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"tags",{"name":"Res","hash":{},"data":data}))
	    + "</th>\n<th>"
	    + alias3((helpers.Res || (depth0 && depth0.Res) || alias2).call(alias1,"notes",{"name":"Res","hash":{},"data":data}))
	    + "</th>\n</tr>\n</thead>\n<tbody>\n"
	    + ((stack1 = ((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"items","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n</tbody>\n</table>\n";
	},"useData":true});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"list\">\n<div class=\"list__header\"></div>\n<div class=\"list__items\">\n<div class=\"scroller\"></div>\n<div class=\"scroller__bar-wrapper\"><div class=\"scroller__bar\"></div></div>\n</div>\n</div>";
	},"useData":true});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return " menu__item--active";
	},"3":function(container,depth0,helpers,partials,data) {
	    return " menu__item--disabled";
	},"5":function(container,depth0,helpers,partials,data) {
	    return " menu__item--with-options ";
	},"7":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return " "
	    + container.escapeExpression(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cls","hash":{},"data":data}) : helper)));
	},"9":function(container,depth0,helpers,partials,data) {
	    return "draggable=\"true\"";
	},"11":function(container,depth0,helpers,partials,data) {
	    var stack1, helper;

	  return "<img src=\""
	    + ((stack1 = ((helper = (helper = helpers.customIcon || (depth0 != null ? depth0.customIcon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"customIcon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\" class=\"menu__item-icon menu__item-icon--image\" />";
	},"13":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<i class=\"menu__item-icon fa "
	    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
	    + "\"></i>";
	},"14":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return "fa-"
	    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"icon","hash":{},"data":data}) : helper)));
	},"16":function(container,depth0,helpers,partials,data) {
	    return "menu__item-icon--no-icon";
	},"18":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
	},"20":function(container,depth0,helpers,partials,data) {
	    return "("
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"noTitle",{"name":"res","hash":{},"data":data}))
	    + ")";
	},"22":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1;

	  return "<div class=\"menu__item-options\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(23, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n";
	},"23":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<div class=\"menu__item-option "
	    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.cls : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\"\ndata-value=\""
	    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.value : stack1), depth0))
	    + "\">"
	    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.attributes : stack1)) != null ? stack1.title : stack1), depth0))
	    + "</div>\n";
	},"24":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1;

	  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = blockParams[1][0]) != null ? stack1.attributes : stack1)) != null ? stack1.cls : stack1), depth0));
	},"26":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"menu__item-edit fa fa-cog\"></i>";
	},"28":function(container,depth0,helpers,partials,data) {
	    return "<i class=\"menu__item-empty-trash fa fa-minus-circle\" title=\""
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"menuEmptyTrash",{"name":"res","hash":{},"data":data}))
	    + "\"\ntip-placement=\"right\"></i>";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {};

	  return "<div class=\"menu__item"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cls : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\">\n<div class=\"menu__item-body\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.drag : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customIcon : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams),"inverse":container.program(13, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "<span class=\"menu__item-title\">"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams),"inverse":container.program(20, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</span>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.filterKey : depth0),"trash",{"name":"ifeq","hash":{},"fn":container.program(28, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\n</div>\n</div>\n";
	},"useData":true,"useBlockParams":true});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return " menu__section--scrollable";
	},"3":function(container,depth0,helpers,partials,data) {
	    return " menu__section--grow";
	},"5":function(container,depth0,helpers,partials,data) {
	    return " menu__section--drag";
	},"7":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"scroller\"></div><div class=\"scroller__bar-wrapper\"><div class=\"scroller__bar\"></div></div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};

	  return "<div class=\"menu__section"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scrollable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.grow : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.drag : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\">"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scrollable : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"menu\">\n</div>";
	},"useData":true});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return "<div class=\"modal__check-wrap\"><input type=\"checkbox\" id=\"modal__check\" /><label for=\"modal__check\">"
	    + container.escapeExpression(((helper = (helper = helpers.checkbox || (depth0 != null ? depth0.checkbox : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"checkbox","hash":{},"data":data}) : helper)))
	    + "</label></div>\n";
	},"3":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

	  return "<button class=\""
	    + ((stack1 = helpers.unless.call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.result : stack1),{"name":"unless","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + " "
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.error : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "\"\ndata-result=\""
	    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? stack1.result : stack1), depth0))
	    + "\">"
	    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? stack1.title : stack1), depth0))
	    + "</button>\n";
	},"4":function(container,depth0,helpers,partials,data) {
	    return "btn-error";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

	  return "<div class=\"modal modal--hidden\">\n<div class=\"modal__content\">\n<i class=\"modal__icon fa fa-"
	    + container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"blockParams":blockParams}) : helper)))
	    + "\"></i>\n<div class=\"modal__header\">"
	    + ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
	    + "</div>\n<div class=\"modal__body\">\n"
	    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checkbox : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n<div class=\"modal__buttons\">\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n</div>\n</div>\n";
	},"useData":true,"useBlockParams":true});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<div class=\"open__last-item\" data-id=\""
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.id : stack1), depth0))
	    + "\">\n<i class=\"fa fa-"
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.icon : stack1), depth0))
	    + " open__last-item-icon\"></i>\n<span class=\"open__last-item-text\">"
	    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
	    + "</span>\n<i class=\"fa fa-times open__last-item-icon-del\"></i>\n</div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div class=\"open\">\n<input type=\"file\" class=\"open__file-ctrl hide-by-pos\" />\n<div class=\"open__icons\">\n<div class=\"open__icon open__icon-open\">\n<i class=\"fa fa-lock open__icon-i\"></i>\n<div class=\"open__icon-text\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openOpen",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</div>\n</div>\n<div class=\"open__icon open__icon-new\">\n<i class=\"fa fa-plus open__icon-i\"></i>\n<div class=\"open__icon-text\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openNew",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</div>\n</div>\n<div class=\"open__icon open__icon-dropbox\">\n<i class=\"fa fa-dropbox open__icon-i\"></i>\n<div class=\"open__icon-text\">Dropbox</div>\n</div>\n<div class=\"open__icon open__icon-demo\">\n<i class=\"fa fa-magic open__icon-i\"></i>\n<div class=\"open__icon-text\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openDemo",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</div>\n</div>\n</div>\n<div class=\"open__pass-area\">\n<div class=\"open__pass-warn-wrap\">\n<div class=\"open__pass-warning muted-color invisible\"><i class=\"fa fa-exclamation-triangle\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openCaps",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</div>\n</div>\n<div class=\"open__pass-field-wrap\">\n<input class=\"open__pass-input\" type=\"password\" size=\"30\" autocomplete=\"off\" maxlength=\"128\"\nplaceholder=\"Click to open a file\" readonly />\n<div class=\"open__pass-enter-btn\"><i class=\"fa fa-level-down fa-rotate-90\"></i></div>\n<div class=\"open__pass-opening-icon\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n</div>\n<div class=\"open__settings\">\n<div class=\"open__settings-key-file hide\">\n<i class=\"fa fa-key open__settings-key-file-icon\"></i>\n<span class=\"open__settings-key-file-name\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openKeyFile",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</span>\n<span class=\"open__settings-key-file-dropbox\"> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openKeyFileDropbox",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</span>\n</div>\n</div>\n<div class=\"open__last\">\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lastOpenFiles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n</div>\n<div class=\"open__dropzone\">\n<i class=\"fa fa-lock muted-color open__dropzone-icon\"></i>\n<h1 class=\"muted-color open__dropzone-header\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"openDropHere",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</h1>\n</div>\n</div>\n";
	},"useData":true,"useBlockParams":true});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "<a href=\"http://antelle.net\" target=\"_blank\">Antelle</a>";
	},"3":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return "<a href=\""
	    + container.escapeExpression(((helper = (helper = helpers.licenseLink || (depth0 != null ? depth0.licenseLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"licenseLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">MIT</a>";
	},"5":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return "<a href=\""
	    + container.escapeExpression(((helper = (helper = helpers.repoLink || (depth0 != null ? depth0.repoLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"repoLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">GitHub <i class=\"fa fa-github-alt\"></i></a>";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div>\n<h1><i class=\"fa fa-info\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutTitle",{"name":"res","hash":{},"data":data}))
	    + " KeeWeb v"
	    + alias3(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
	    + "</h1>\n<p>"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutFirst",{"name":"res","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutSecond",{"name":"res","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutSource",{"name":"res","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</p>\n<p>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutBuilt",{"name":"res","hash":{},"data":data}))
	    + ":</p>\n<h3>Libraries</h3>\n<ul>\n<li><a href=\"http://electron.atom.io/\" target=\"_blank\">electron</a><span class=\"muted-color\">, cross-platform desktop apps framework</span></li>\n<li><a href=\"http://backbonejs.org/\" target=\"_blank\">backbone</a><span class=\"muted-color\">, JavaScript framework</span></li>\n<li><a href=\"http://underscorejs.org/\" target=\"_blank\">underscore</a><span class=\"muted-color\">, utility-belt library for JavaScript</span></li>\n<li><a href=\"https://jquery.com/\" target=\"_blank\">jQuery</a><span class=\"muted-color\">, fast, small, and feature-rich JavaScript library</span></li>\n<li><a href=\"http://handlebarsjs.com/\" target=\"_blank\">handlebars</a><span class=\"muted-color\">, semantic templates</span></li>\n<li><a href=\"https://github.com/dropbox/dropbox-js\" target=\"_blank\">dropbox-js</a><span class=\"muted-color\">, unofficial JavaScript library for\nthe Dropbox Core API</span></li>\n</ul>\n<h3>Core components</h3>\n<ul>\n<li><a href=\"https://github.com/antelle/kdbxweb\" target=\"_blank\">kdbxweb</a><span class=\"muted-color\">, web kdbx library</span></li>\n<li><a href=\"https://github.com/vibornoff/asmcrypto.js/\" target=\"_blank\">asmcrypto</a><span class=\"muted-color\">, JavaScript cryptographic library\nwith performance in mind</span></li>\n<li><a href=\"http://nodeca.github.io/pako/\" target=\"_blank\">pako</a><span class=\"muted-color\">, zlib port to JavaScript, very fast</span></li>\n<li><a href=\"https://github.com/jindw/xmldom\" target=\"_blank\">xmldom</a><span class=\"muted-color\">, a pure js W3C standard based DOMParser\nand XMLSerializer</span></li>\n</ul>\n<h3>UI components</h3>\n<ul>\n<li><a href=\"https://github.com/Diokuz/baron\" target=\"_blank\">baron</a><span class=\"muted-color\">, native scroll with custom scrollbar</span></li>\n<li><a href=\"http://dbushell.github.io/Pikaday/\" target=\"_blank\">pikaday</a><span class=\"muted-color\">, a refreshing JavaScript datepicker</span></li>\n<li><a href=\"https://github.com/eligrey/FileSaver.js\" target=\"_blank\">filesaver.js</a><span class=\"muted-color\">, HTML5 saveAs FileSaver implementation</span></li>\n</ul>\n<h3>Desktop modules</h3>\n<ul>\n<li><a href=\"https://github.com/antelle/node-stream-zip\" target=\"_blank\">node-stream-zip</a><span class=\"muted-color\">, node.js library for fast reading of large ZIPs</span></li>\n</ul>\n<h3>Styles</h3>\n<ul>\n<li><a href=\"http://sass-lang.com/\" target=\"_blank\">sass</a><span class=\"muted-color\">, syntactically awesome stylesheets</span></li>\n<li><a href=\"http://bourbon.io/\" target=\"_blank\">bourbon</a><span class=\"muted-color\">, a simple and lightweight mixin library for Sass</span></li>\n<li><a href=\"http://bitters.bourbon.io/\" target=\"_blank\">bitters</a><span class=\"muted-color\">, styles, variables and structure for\nBourbon projects</span></li>\n<li><a href=\"https://necolas.github.io/normalize.css/\" target=\"_blank\">normaize.css</a><span class=\"muted-color\">, a modern, HTML5-ready alternative\nto CSS resets</span></li>\n</ul>\n<h3>Graphics</h3>\n<ul>\n<li><a href=\"https://fortawesome.github.io/Font-Awesome/\" target=\"_blank\">fontawesome</a><span class=\"muted-color\">, the iconic font\nand CSS toolkit</span></li>\n</ul>\n<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutLic",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<p>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setAboutLicComment",{"name":"res","hash":{},"data":data}))
	    + ":</p>\n<p></p>\n<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated\ndocumentation files (the \"Software\"), to deal in the Software without restriction, including without limitation\nthe rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,\nand to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>\n<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>\n<p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO\nTHE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS\nOR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,\nARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\n</div>\n";
	},"useData":true});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

	  return ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.storage : depth0),"file",{"name":"ifeq","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.storage : depth0),"dropbox",{"name":"ifeq","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<p>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFilePath",{"name":"res","hash":{},"data":data}))
	    + ": "
	    + alias3(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
	    + "</p>";
	},"4":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<p>"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setFileStorage",{"name":"res","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</p>";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "Dropbox";
	},"7":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};

	  return "<p>"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(alias1,"setFileIntl",{"name":"res","hash":{},"data":data}))
	    + ".</p>\n"
	    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.supportFiles : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"8":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<p>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileLocalHint",{"name":"res","hash":{},"data":data}))
	    + " <a href=\""
	    + alias3(((helper = (helper = helpers.desktopLink || (depth0 != null ? depth0.desktopLink : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"desktopLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileDownloadApp",{"name":"res","hash":{},"data":data}))
	    + "</a></p>\n";
	},"10":function(container,depth0,helpers,partials,data) {
	    return "<button class=\"settings__file-button-save-default\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setFileSave",{"name":"res","hash":{},"data":data}))
	    + "</button>";
	},"12":function(container,depth0,helpers,partials,data) {
	    return "btn-silent";
	},"14":function(container,depth0,helpers,partials,data) {
	    return "disabled";
	},"16":function(container,depth0,helpers,partials,data) {
	    return "<button class=\"settings__file-button-save-file btn-silent\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setFileSaveFile",{"name":"res","hash":{},"data":data}))
	    + "</button>";
	},"18":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileSync",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<div>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileLastSync",{"name":"res","hash":{},"data":data}))
	    + ": "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.syncDate : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
	    + " "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.syncing : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</div>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.syncError : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n";
	},"19":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return container.escapeExpression(((helper = (helper = helpers.syncDate || (depth0 != null ? depth0.syncDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"syncDate","hash":{},"data":data}) : helper)));
	},"21":function(container,depth0,helpers,partials,data) {
	    return container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setFileLastSyncUnknown",{"name":"res","hash":{},"data":data}));
	},"23":function(container,depth0,helpers,partials,data) {
	    return "("
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setFileSyncInProgress",{"name":"res","hash":{},"data":data}))
	    + "...)";
	},"25":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileSyncError",{"name":"res","hash":{},"data":data}))
	    + ": "
	    + alias3(((helper = (helper = helpers.syncError || (depth0 != null ? depth0.syncError : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"syncError","hash":{},"data":data}) : helper)))
	    + "</div>";
	},"27":function(container,depth0,helpers,partials,data) {
	    return "checked";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "<div>\n<h1><i class=\"fa fa-lock\"></i> "
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</h1>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.storage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "<div class=\"settings__file-buttons\">\n"
	    + ((stack1 = (helpers.ifemptyoreq || (depth0 && depth0.ifemptyoreq) || alias2).call(alias1,(depth0 != null ? depth0.storage : depth0),"file",{"name":"ifemptyoreq","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n<button class=\"settings__file-button-save-dropbox "
	    + ((stack1 = (helpers.ifneq || (depth0 && depth0.ifneq) || alias2).call(alias1,(depth0 != null ? depth0.storage : depth0),"dropbox",{"name":"ifneq","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\"\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.syncing : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileSyncWith",{"name":"res","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</button>\n"
	    + ((stack1 = (helpers.ifneq || (depth0 && depth0.ifneq) || alias2).call(alias1,(depth0 != null ? depth0.storage : depth0),"file",{"name":"ifneq","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n<button class=\"settings__file-button-export-xml btn-silent\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileExportXml",{"name":"res","hash":{},"data":data}))
	    + "</button>\n<button class=\"settings__file-button-close btn-silent\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileClose",{"name":"res","hash":{},"data":data}))
	    + "</button>\n</div>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.storage : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "<h2>"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileSettings",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<label for=\"settings__file-master-pass\" class=\"settings__file-master-pass-label input-base\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFilePass",{"name":"res","hash":{},"data":data}))
	    + ":\n<span class=\"settings__file-master-pass-warning\">\n<i class=\"fa fa-warning\"></i> "
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFilePassChanged",{"name":"res","hash":{},"data":data}))
	    + "\n</span>\n</label>\n<input type=\"password\" class=\"settings__input input-base\" id=\"settings__file-master-pass\" value=\""
	    + alias4(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"password","hash":{},"data":data}) : helper)))
	    + "\" />\n<label for=\"settings__file-key-file\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileKeyFile",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<select class=\"settings__select settings__select-no-margin input-base\" id=\"settings__file-key-file\"></select>\n<a id=\"settings__file-file-select-link\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileSelKeyFile",{"name":"res","hash":{},"data":data}))
	    + "</a>\n<input type=\"file\" id=\"settings__file-file-select\" class=\"hide-by-pos\" />\n<h2>"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileNames",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<label for=\"settings__file-name\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileName",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<input type=\"text\" class=\"settings__input input-base\" id=\"settings__file-name\" value=\""
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\" required />\n<label for=\"settings__file-def-user\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileDefUser",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<input type=\"text\" class=\"settings__input input-base\" id=\"settings__file-def-user\" value=\""
	    + alias4(((helper = (helper = helpers.defaultUser || (depth0 != null ? depth0.defaultUser : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defaultUser","hash":{},"data":data}) : helper)))
	    + "\" />\n<h2>"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileHistory",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<div>\n<input type=\"checkbox\" class=\"settings__input input-base\" id=\"settings__file-trash\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recycleBinEnabled : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__file-trash\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileEnableTrash",{"name":"res","hash":{},"data":data}))
	    + "</label>\n</div>\n<label for=\"settings__file-hist-len\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileHistLen",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<input type=\"text\" pattern=\"\\d+\" required class=\"settings__input input-base\" id=\"settings__file-hist-len\" value=\""
	    + alias4(((helper = (helper = helpers.historyMaxItems || (depth0 != null ? depth0.historyMaxItems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"historyMaxItems","hash":{},"data":data}) : helper)))
	    + "\" />\n<label for=\"settings__file-hist-size\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"resFileHistSize",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<input type=\"text\" pattern=\"\\d+\" required class=\"settings__input input-base\" id=\"settings__file-hist-size\" value=\""
	    + alias4(((helper = (helper = helpers.historyMaxSize || (depth0 != null ? depth0.historyMaxSize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"historyMaxSize","hash":{},"data":data}) : helper)))
	    + "\" />\n<h2>"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileAdvanced",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<label for=\"settings__file-key-rounds\">"
	    + alias4((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setFileRounds",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<input type=\"text\" pattern=\"\\d+\" required class=\"settings__input input-base\" id=\"settings__file-key-rounds\" value=\""
	    + alias4(((helper = (helper = helpers.keyEncryptionRounds || (depth0 != null ? depth0.keyEncryptionRounds : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyEncryptionRounds","hash":{},"data":data}) : helper)))
	    + "\" />\n</div>\n";
	},"useData":true});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<h2 class=\"action-color\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenUpdate",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<div>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenNewVersion",{"name":"res","hash":{},"data":data}))
	    + ". <a href=\""
	    + alias3(((helper = (helper = helpers.releaseNotesLink || (depth0 != null ? depth0.releaseNotesLink : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"releaseNotesLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenReleaseNotes",{"name":"res","hash":{},"data":data}))
	    + "</a></div>\n<div class=\"settings__general-update-buttons\">\n<button class=\"settings__general-restart-btn\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenReloadToUpdate",{"name":"res","hash":{},"data":data}))
	    + "</button>\n</div>\n";
	},"3":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.updateManual : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"4":function(container,depth0,helpers,partials,data) {
	    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<h2 class=\"action-color\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenUpdate",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<div>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenUpdateManual",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div class=\"settings__general-update-buttons\">\n<button class=\"settings__general-download-update-btn\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenDownloadUpdate",{"name":"res","hash":{},"data":data}))
	    + "</button>\n</div>\n";
	},"6":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

	  return "<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenUpdate",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<div>\n<select class=\"settings__general-auto-update settings__select input-base\">\n<option value=\"install\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.autoUpdate : depth0),"install",{"name":"ifeq","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenUpdateAuto",{"name":"res","hash":{},"data":data}))
	    + "</option>\n<option value=\"check\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.autoUpdate : depth0),"check",{"name":"ifeq","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenUpdateCheck",{"name":"res","hash":{},"data":data}))
	    + "</option>\n<option value=\"\" "
	    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.autoUpdate : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenNoUpdate",{"name":"res","hash":{},"data":data}))
	    + "</option>\n</select>\n<div>"
	    + alias3(((helper = (helper = helpers.updateInfo || (depth0 != null ? depth0.updateInfo : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"updateInfo","hash":{},"data":data}) : helper)))
	    + "</div>\n<a href=\""
	    + alias3(((helper = (helper = helpers.releaseNotesLink || (depth0 != null ? depth0.releaseNotesLink : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"releaseNotesLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenReleaseNotes",{"name":"res","hash":{},"data":data}))
	    + "</a>\n</div>\n<div class=\"settings__general-update-buttons\">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.updateInProgress : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.updateReady : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.updateFound : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n</div>\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    return "selected";
	},"9":function(container,depth0,helpers,partials,data) {
	    return "<button class=\"settings__general-update-btn btn-silent\" disabled>"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setGenUpdateChecking",{"name":"res","hash":{},"data":data}))
	    + "</button>\n";
	},"11":function(container,depth0,helpers,partials,data) {
	    return "<button class=\"settings__general-update-btn btn-silent\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setGenCheckUpdate",{"name":"res","hash":{},"data":data}))
	    + "</button>\n";
	},"13":function(container,depth0,helpers,partials,data) {
	    return "<button class=\"settings__general-restart-btn\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setGenRestartToUpdate",{"name":"res","hash":{},"data":data}))
	    + "</button>";
	},"15":function(container,depth0,helpers,partials,data) {
	    return "<button class=\"settings__general-update-found-btn\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setGenDownloadAndRestart",{"name":"res","hash":{},"data":data}))
	    + "</button>";
	},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<option value=\""
	    + alias2(alias1(blockParams[0][1], depth0))
	    + "\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || helpers.helperMissing).call(depth0 != null ? depth0 : {},blockParams[0][1],(depths[1] != null ? depths[1].activeTheme : depths[1]),{"name":"ifeq","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">"
	    + alias2(alias1(blockParams[0][0], depth0))
	    + "</option>\n";
	},"19":function(container,depth0,helpers,partials,data) {
	    return "checked";
	},"21":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};

	  return "<div>\n<input type=\"checkbox\" class=\"settings__input input-base settings__general-table-view\" id=\"settings__general-table-view\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tableView : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__general-table-view\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(alias1,"setGenTableView",{"name":"res","hash":{},"data":data}))
	    + "</label>\n</div>\n";
	},"23":function(container,depth0,helpers,partials,data) {
	    return "5";
	},"25":function(container,depth0,helpers,partials,data) {
	    return "10";
	},"27":function(container,depth0,helpers,partials,data) {
	    return "15";
	},"29":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div>\n<label for=\"settings__general-clipboard\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenClearClip",{"name":"res","hash":{},"data":data}))
	    + ":</label>\n<select class=\"settings__general-clipboard settings__select input-base\" id=\"settings__general-clipboard\">\n<option value=\"0\" "
	    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.clipboardSeconds : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenNoClear",{"name":"res","hash":{},"data":data}))
	    + "</option>\n<option value=\"5\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.clipboardSeconds : depth0),5,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenClearSeconds",{"name":"res","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</option>\n<option value=\"10\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.clipboardSeconds : depth0),10,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenClearSeconds",{"name":"res","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</option>\n<option value=\"15\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.clipboardSeconds : depth0),15,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenClearSeconds",{"name":"res","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</option>\n<option value=\"60\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.clipboardSeconds : depth0),60,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenClearMinute",{"name":"res","hash":{},"data":data}))
	    + "</option>\n</select>\n</div>\n";
	},"31":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div>\n<input type=\"checkbox\" class=\"settings__input input-base settings__general-minimize\" id=\"settings__general-minimize\"\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.minimizeOnClose : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__general-minimize\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenMinInstead",{"name":"res","hash":{},"data":data}))
	    + "</label>\n</div>\n<div>\n<input type=\"checkbox\" class=\"settings__input input-base settings__general-lock-on-minimize\" id=\"settings__general-lock-on-minimize\"\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lockOnMinimize : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__general-lock-on-minimize\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenLockMinimize",{"name":"res","hash":{},"data":data}))
	    + "</label>\n</div>\n";
	},"33":function(container,depth0,helpers,partials,data) {
	    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenAdvanced",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<a class=\"settings__general-dev-tools-link\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenDevTools",{"name":"res","hash":{},"data":data}))
	    + "</a>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<div>\n<h1><i class=\"fa fa-cog\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenTitle",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</h1>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.updateWaitingReload : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showUpdateBlock : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenAppearance",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</h2>\n<div>\n<label for=\"settings__general-theme\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenTheme",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + ":</label>\n<select class=\"settings__general-theme settings__select input-base\" id=\"settings__general-theme\">\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.themes : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</select>\n</div>\n<div>\n<input type=\"checkbox\" class=\"settings__input input-base settings__general-expand\" id=\"settings__general-expand\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.expandGroups : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__general-expand\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenShowSubgroups",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</label>\n</div>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canSetTableView : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "<div>\n<input type=\"checkbox\" class=\"settings__input input-base settings__general-colorful-icons\" id=\"settings__general-colorful-icons\" "
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colorfulIcons : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__general-colorful-icons\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenColorfulIcons",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</label>\n</div>\n<h2>Function</h2>\n<div>\n<input type=\"checkbox\" class=\"settings__input input-base settings__general-auto-save\" id=\"settings__general-auto-save\"\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.autoSave : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + " />\n<label for=\"settings__general-auto-save\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenAutoSync",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</label>\n</div>\n<div>\n<label for=\"settings__general-idle-minutes\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenLockInactive",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + ":</label>\n<select class=\"settings__general-idle-minutes settings__select input-base\" id=\"settings__general-idle-minutes\">\n<option value=\"0\" "
	    + ((stack1 = (helpers.cmp || (depth0 && depth0.cmp) || alias2).call(alias1,(depth0 != null ? depth0.idleMinutes : depth0),0,"<=",{"name":"cmp","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenNoAutoLock",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</option>\n<option value=\"5\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.idleMinutes : depth0),5,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenLockMinutes",{"name":"res","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</option>\n<option value=\"10\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.idleMinutes : depth0),10,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenLockMinutes",{"name":"res","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</option>\n<option value=\"15\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.idleMinutes : depth0),15,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenLockMinutes",{"name":"res","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</option>\n<option value=\"60\" "
	    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.idleMinutes : depth0),60,{"name":"ifeq","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setGenLockHour",{"name":"res","hash":{},"data":data,"blockParams":blockParams}))
	    + "</option>\n</select>\n</div>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canClearClipboard : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canMinimize : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.devTools : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true,"useDepths":true,"useBlockParams":true});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "<a href=\"http://keepass.info/\" target=\"_blank\">KeePass</a>";
	},"3":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

	  return "<a href=\""
	    + alias3(((helper = (helper = helpers.issueLink || (depth0 != null ? depth0.issueLink : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"issueLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpOpenIssue",{"name":"res","hash":{},"data":data}))
	    + "</a>";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "<a href=\"http://antelle.net/\" target=\"_blank\">"
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"setHelpContactLink",{"name":"res","hash":{},"data":data}))
	    + "</a>";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

	  return "<div>\n<h1><i class=\"fa fa-question\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpTitle",{"name":"res","hash":{},"data":data}))
	    + "</h1>\n<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpFormat",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<p>"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpFormatBody",{"name":"res","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</p>\n<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpProblems",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<p>"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpProblems1",{"name":"res","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = (helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpProblems2",{"name":"res","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + ".\n</p>\n<p>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpAppInfo",{"name":"res","hash":{},"data":data}))
	    + ":</p>\n<pre class=\"settings__pre input-base\">"
	    + alias3(((helper = (helper = helpers.appInfo || (depth0 != null ? depth0.appInfo : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"appInfo","hash":{},"data":data}) : helper)))
	    + "</pre>\n<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpOtherPlatforms",{"name":"res","hash":{},"data":data}))
	    + "</h2>\n<ul>\n<li>\n<i class=\"fa fa-windows\"></i>\n<i class=\"fa fa-apple\"></i>\n<i class=\"fa fa-linux\"></i>\n<a href=\""
	    + alias3(((helper = (helper = helpers.desktopLink || (depth0 != null ? depth0.desktopLink : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"desktopLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpDesktopApps",{"name":"res","hash":{},"data":data}))
	    + "</a>\n</li>\n<li>\n<i class=\"fa fa-chrome\"></i>\n<i class=\"fa fa-firefox\"></i>\n<i class=\"fa fa-opera\"></i>\n<i class=\"fa fa-compass\"></i>\n<i class=\"fa fa-internet-explorer\"></i>\n<a href=\""
	    + alias3(((helper = (helper = helpers.webAppLink || (depth0 != null ? depth0.webAppLink : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"webAppLink","hash":{},"data":data}) : helper)))
	    + "\" target=\"_blank\">"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpWebApp",{"name":"res","hash":{},"data":data}))
	    + "</a>\n</li>\n</ul>\n<h2>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpUpdates",{"name":"res","hash":{},"data":data}))
	    + " <i class=\"fa fa-twitter\"></i></h2>\n<p>"
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setHelpTwitter",{"name":"res","hash":{},"data":data}))
	    + ": <a href=\"https://twitter.com/kee_web\" target=\"_blank\">kee_web</a></p>\n</div>\n";
	},"useData":true});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

	  return "<div>\n<h1><i class=\"fa fa-keyboard-o\"></i> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShTitle",{"name":"res","hash":{},"data":data}))
	    + "</h1>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.cmd || (depth0 != null ? depth0.cmd : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"cmd","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "A</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"or",{"name":"res","hash":{},"data":data}))
	    + " <span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "A</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShShowAll",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "C</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShColors",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "D</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShTrash",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.cmd || (depth0 != null ? depth0.cmd : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"cmd","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "F</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShFind",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">esc</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShClearSearch",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">⏎</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShEntry",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.cmd || (depth0 != null ? depth0.cmd : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"cmd","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "C</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShCopy",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">&uarr;</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShPrev",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">&darr;</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShNext",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "N</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShCreateEntry",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.cmd || (depth0 != null ? depth0.cmd : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"cmd","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "O</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShOpen",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.cmd || (depth0 != null ? depth0.cmd : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"cmd","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "S</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShSave",{"name":"res","hash":{},"data":data}))
	    + "</div>\n<div><span class=\"shortcut\">"
	    + ((stack1 = ((helper = (helper = helpers.cmd || (depth0 != null ? depth0.cmd : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"cmd","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "G</span> "
	    + alias3((helpers.res || (depth0 && depth0.res) || alias2).call(alias1,"setShGen",{"name":"res","hash":{},"data":data}))
	    + "</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"settings\">\n<div class=\"settings__back-button\">\n<i class=\"fa fa-chevron-left settings__back-button-pre\"></i> "
	    + container.escapeExpression((helpers.res || (depth0 && depth0.res) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"retToApp",{"name":"res","hash":{},"data":data}))
	    + " <i class=\"fa fa-external-link-square settings__back-button-post\"></i>\n</div>\n<div class=\"scroller\">\n</div>\n<div class=\"scroller__bar-wrapper\"><div class=\"scroller__bar\"></div></div>\n</div>\n";
	},"useData":true});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _handlebarsBase = __webpack_require__(57);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(159);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(20);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(14);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(158);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(157);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];



/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _decoratorsInline = __webpack_require__(147);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}



/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(14);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helpersBlockHelperMissing = __webpack_require__(149);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(150);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(151);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(152);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(153);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(154);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(155);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}



/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(14);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(14);

	var _exception = __webpack_require__(20);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = __webpack_require__(20);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(14);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(14);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];



/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(14);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];



/***/ },
/* 157 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utils = __webpack_require__(14);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(20);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(57);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}



/***/ },
/* 159 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];



/***/ }
]);