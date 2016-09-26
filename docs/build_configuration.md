# Build Configuration
The build configuration is used to set parameters of the build, as well as some base application settings that might be required for your custom instance

```json
{
	"cordova" : {
		"dir" : "cordova",
		"packageId" : "coza.opencollab.synthesis.mobile",
		"authorName" : "John Doe",
		"authorEmail" : "john.doe@yourdomain.com",
		"iconsAndroidXml" : "config/icons-android.xml",
		"iconsIosXml" : "config/icons-ios.xml",
		"iconsWindowsXml" : "config/icons-windows.xml",
		"platforms" : {
			"android" : "5.1.1",
			"ios" : "4.1.0",
			"windows" : "4.3.2"
		},
		"plugins" : [
			"cordova-plugin-whitelist@1.2.1",
			"phonegap-plugin-push@1.3.0",
			"cordova-plugin-file@4.1.1",
			"cordova-plugin-file-transfer@1.5.0",
			"cordova-plugin-device@1.1.1",
			"cordova-plugin-inappbrowser@1.3.0",
			"cordova-plugin-statusbar@2.1.1",
			"cordova-plugin-dialogs@1.2.0",
			"cordova-plugin-disable-nsapptransportsecurity@1.0.2",
			"https://github.com/OpenCollabZA/cordova-plugin-fileopener.git"
		],
		"preferences" : {
			"fullscreen" : "false",
			"webviewbounce" : "false",
			"DisallowOverscroll" : "true",
			"StatusBarOverlaysWebView" : "false",
			"StatusBarBackgroundColor" : "#000000",
			"StatusBarStyle" : "lightcontent",
			"AndroidPersistentFileLocation" : "Compatibility",
			"iosPersistentFileLocation" : "Library",
			"windows-target-version" : "8.1"
		},
		"android" : {
			"storeFile" : null,
			"keyAlias" : null,
			"storePassword" : null,
			"keyPassword" : null
		}
	},
	"serverBaseUrl" : "http://synthesis.opencollab.co.za",
	"serverBaseContextPath" : "/synthesis-service",
	"applicationName" : "Synthesis Mobile",
	"vendorName" : "OPENCOLLAB",
	"vendorURL" : "http://www.opencollab.co.za",
	"dataDir" : "SynthMobile",
	"logLevel" : 1,
	"logToConsole" : true,
	"logToFile" : true,
	"logFileSize" : 1000000,
	"logFileCount" : 5,
	"pushEnabled" : false,
	"androidSenderID" : null
}
```

## External configuration file
You might want to keep your custom configuration out of the project code, especially when you start adding passwords to keystores etc.
An external config file can be placed at `~/.${module-name}/build-config.json`

For example if you did not change the package name the config will be located at
` ~/.efundi-move/build-config.json`

Which resolves to:

**\*unix** `/home/username/.efundi-move/build-config.json`

**Windows** `C:/Users/username/.efundi-move/build-config.json`

All configuration options may be overridden in the external file.

## Options

### cordova.dir
The directory in which the cordova build will take place

### cordova.packageId
The id which must be assigned to your application package.

### cordova.authorName
The author name that must appear in the application meta data.

### cordova.authorEmail
The author email that must appear in the application meta data.

### cordova.iconsAndroidXml
Path to a file containing xml for Android icon configuration

### cordova.iconsIosXml
Path to a file containing xml for iOS icon configuration

### cordova.iconsWindowsXml
Path to a file containing xml for Windows icon configuration

### cordova.platforms
The versions of the platforms to use. Supported platforms are `android`, `ios` and `windows` (still in development)

### cordova.plugins
The plugins and the versions of them to install for the application.

### cordova.preferences
Preferences to set to the cordova project.

### cordova.android.storeFile
Path to the keystore to use for building the Android application

### cordova.android.keyAlias
Alias of the key to use for building the Android application

### cordova.android.storePassword
Keystore password to use for building the Android application

### cordova.android.keyPassword
Key password to use for building the Android application

### serverBaseUrl
Base URL of the server.
Do NOT include any context path or trailing slash.

**example:** http://my.server.com or http://my.server.com:8080

### serverBaseContextPath
Context path the of the Synthesis Server.
This path should contain a trailing slash. if the service is hosted on the root of the server, enter only the "/" as the value

### applicationName
Name of the application to display within the application

### vendorName
Name of the company that is responsible for creating the instance of the application (currently not used)

### vendorURL
Webpage link to the vendor website (not currently used)

### dataDir
Name of the directory where synthesis will save content.
This will be relative to the directory which the native device  selects as a suitable location for content. It might be on a external
SD card, Internal SD card, or any location the system chooses.

**WARNING**: *Never change this once in production! Students will not  see
the content they already downloaded, and content not uploaded yet will seem lost!*

### logLevel
Logging level for the application

| Meaning  | Level  |
| -------- | :----: |
| DEBUG    |    1   |
| INFO     |    2   |
| WARN     |    3   |
| ERROR    |    4   |
| NONE     |    5   |

## Building Android with a Keystore
You might want to build the application with an keystore, especially when you are going to deploy to the app store.

To change the keystore, which by default is a keystore generated by your SDK, and cannot be used to publish to a store, you need to configure 4 properties, `cordova.android.storeFile`, `cordova.android.keyAlias`, `cordova.android.storePassword` and `cordova.android.keyPassword`. See the description of each field to see their purpose.
