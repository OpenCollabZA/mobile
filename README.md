[![epub-creator version](https://img.shields.io/badge/efundi--move-v1.0.4-green.svg?style=flat)](http://semver.org)
[![Build Status](https://travis-ci.org/SynthesisProject/mobile.svg?branch=efundi-move)](https://travis-ci.org/SynthesisProject/mobile)
[![Dependencies Status](https://david-dm.org/SynthesisProject/mobile.svg)](https://david-dm.org/SynthesisProject/mobile)
[![License](https://img.shields.io/badge/License-AGPLv3-blue.svg)](https://en.wikipedia.org/wiki/Affero_General_Public_License)

# Efundi MOVE

This project is used as a client for the Synthesis Service

Download NWU configuration from
[efundi-move-config.git](https://github.com/OpenCollabZA/efundi-move-config.git)
and see [Build Configuration](./docs/build_configuration.md) to setup the
configuration locally.


## Requirements

Node 5 or higher with gulp installed globally

`(sudo) npm install -g gulp`

[Git client ](https://git-scm.com/downloads)


## Installation
```bash
git clone https://github.com/SynthesisProject/mobile.git
cd mobile
npm install
```
Now you are ready to start building the application

## Usage
Once ready to run on a device or emulator:

`gulp build-android`

`gulp build-ios`

`gulp build-windows`

To run in development mode, add the `--development` parameter
```
gulp build-android --development
```

## Additional documentation

* [Branding](./docs/branding.md)
* [Build Configuration](./docs/build_configuration.md)
* [Build Process](./docs/build_process.md)
* [Cordova Plugins](./docs/cordova_plugins.md)
* [Filesystem](./docs/filesystem.md)
* [Push Notifications](./docs/push_notifications.md)
* [Technology Stack](./docs/technology_stack.md)
* [Javascript Docs](http://synthesisproject.github.io/mobile/js-docs/)

## Development
### Source code
All source code for the application is located `src` directory
 - html, all the web assets
 - js, all the JavaScript assets
 - less, styling
 - res, icons and images

### Android SDK Setup
You need to install the android sdk and have it configured to your path ($ANDROID_HOME, $ANDROID_HOME/tools, $ANDROID_HOME/platform-tools)
Open the SDK manager and install:
 - Android SDK Tools
 - Android SDK Platform Tools
 - Android 5.1.1 (API 22)
 - Android 6 (API 23)
 - Google Play Servics
 - Android Support Repository
 - Google Cloud Messanging for Android Library
 - Google Repository
 - Google USB Driver (if you are using windows)
 - Intel x86 Emulator accelerator (HAXM installer) (if you are using simulator on windows)
