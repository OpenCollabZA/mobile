[![Build Status](https://travis-ci.org/SynthesisProject/mobile.svg?branch=master)](https://travis-ci.org/SynthesisProject/mobile)
[![Dependencies Status](https://david-dm.org/SynthesisProject/mobile.svg)](https://david-dm.org/SynthesisProject/mobile)

# Synthesis Mobile

This project is used as a client for the Synthesis Service


## Requirements

Node 4.2 or higher with gulp installed globally

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

To use developer mode you need to set an environment variable
Unix:

``` bash
export DEVELOPMENT=true; gulp build-android
```

Windows:

```
set DEVELOPMENT=true; gulp build-android
```

## Additional documentation

* [Branding](./docs/branding.md)
* [Build Configuration](./docs/build_configuration.md)
* [Build Process](./docs/build_process.md)
* [Cordova Plugins](./docs/cordova_plugins.md)
* [Filesystem](./docs/filesystem.md)
* [Push Notifications](./docs/push_notifications.md)
* [Technology Stack](./docs/technology_stack.md)

## Development
### Source code
All source code for the application is located `src` directory
 - html, all the web assets
 - js, all the JavaScript assets
 - less, styling
 - res, icons and images
