# Filesystem
The following file structure is in placed

Root of the application's filesystem<br>
```
/Synthesis
/Synthesis/data/
/Synthesis/content/
/Synthesis/settings.json
/Synthesis/registration.json
```
## 'data' directory
This directory contains system files related to the application's modules and tool data

**Example**

If there is a module with id "be7f092e-8895-4548-8759-07f2b48b9998", and a tool with Id "resources" the following files can exist<br>
```
/Synthesis/data/be7f092e-8895-4548-8759-07f2b48b9998.json
/Synthesis/data/be7f092e-8895-4548-8759-07f2b48b9998-resources.json
/Synthesis/data/be7f092e-8895-4548-8759-07f2b48b9998-resources.up.json
```

The file `be7f092e-8895-4548-8759-07f2b48b9998.json` contains information about the module.

This includes:
 - Sync status of each tool
 - Versions of each tool and it's content

The file `be7f092e-8895-4548-8759-07f2b48b9998-resources.json` contains information about the resources tool.
This includes:
 - Tool specific data
 - References to downloaded filesystem

The file `be7f092e-8895-4548-8759-07f2b48b9998-resources.up.json` contains a similar structure as the file mentioned above, except this is content that the user created that still needs to be uploaded to the Synthesis Service.


## 'content' directory
This directory contains system generated directory names for files contained within the tool's content.

The directories are generated using a algorithm by using "[0-9]\[a-z\]\_" as a character set

**Example**
```
/Synthesis/content/1/MyImage.png
/Synthesis/content/2/Youtube.url
/Synthesis/content/1axq1/TableMountain.jpeg
```
### settings.json
This file contains settings that the user has configured within the application

```json
{
  "autoSyncEnabled": true,
  "autoSyncInterval": 60000,
  "autoSyncDownload": false,
  "autoSyncUpload": true,
  "singleToolMenu": true
}
```

* **autoSyncEnabled** Flag if the application should automatically attempt sync Checks
* **autoSyncInterval** Interval at which the application should check for sync changes
* **autoSyncDownload** Flag if content to be downloaded should automatically be downloaded instead of waiting for the user to perform a sync
* **autoSyncUpload** Flag if content to be uploaded should automatically be uploaded instead of waiting for the user to perform a sync
* **singleToolMenu** Flag if the menu should be shown as the home screen even if there is only one tool on the menu. This is mainly useful if you don't want to show the user a home screen with only one tool, and rather start by opening the tool directly

### registration.json
This file keeps track of the user's registration

```json
{
  "authToken": "f80ba712357cd636cb70abcc521d936e",
  "username": "student",
  "registered": true,
  "modules": {
    "be7f092e-8895-4548-8759-07f2b48b9998": {
      "id": "be7f092e-8895-4548-8759-07f2b48b9998",
      "name": "My Test Site",
      "description": "A site used to test with",
      "createdDate": "20140115112357000"
    }
  }
}
```

* **authToken** Authentication token used to authenticate the user without a password
* **username** Username of the user linked to the application
* **modules** List of modules available for the user
* **registered** Flag if the user is currently registered for the module. (the value might not be there at all to indicate a false)
