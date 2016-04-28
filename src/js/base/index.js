'use strict';
// Import base controllers
import BootCtrl from './boot/BootCtrl';
import HomeCtrl from './home/HomeCtrl';
import RegisterCtrl from './register/RegisterCtrl';
import RegisterModuleRegistrationCtrl from './register/RegisterModuleRegistrationCtrl';
import RegisterSelectModuleCtrl from './register/RegisterSelectModuleCtrl';
import SettingsCtrl from './settings/SettingsCtrl';
import SettingsPushCtrl from './settings/SettingsPushCtrl';
import SyncCtrl from './sync/SyncCtrl';
import SyncConfigureCtrl from './sync/SyncConfigureCtrl';
import SyncProgressCtrl from './sync/SyncProgressCtrl';
import AppController from './controllers/AppController';

// Import base factories
import HomeService from './home/HomeService';
import RegisterService from './register/RegisterService';
import RegistrationService from './services/RegistrationService';
import DataService from './services/DataService';
import LoggerService from './services/LoggerService';
import ModuleService from './services/ModuleService';
import PushService from './services/PushService';
import SyncAPIService from './services/SyncAPIService';
import UserService from './services/UserService';
import UserSettings from './services/UserSettings';
import SyncService from './sync/SyncService';
import SyncSelection from './sync/SyncSelection';
import SynthesisRESTClient from './services/SynthesisRESTClient';

import SynthQLoop from './factories/SynthQLoop';
import SynthQIfStatement from './factories/SynthQIfStatement';
import safo from './factories/safo';
import SynthError from './factories/SynthError';
import SynthFail from './factories/SynthFail';
import SynthCheckResponseError from './factories/SynthCheckResponseError';
import SynthErrorHandler from './factories/SynthErrorHandler';
import SynthAuthenticateUser from './factories/SynthAuthenticateUser';
import UserSession from './factories/UserSession';
import Lock from './factories/Lock';


// Import base filters
import noEscape from './filters/noEscape';
import object2Array from './filters/object2Array';
import array2Object from './filters/array2Object';
import formatDate from './filters/formatDate';
import bytesToSize from './filters/bytesToSize';
import attachments from './filters/attachments';

// Import providers
import SynthAttachmentMinerProvider from './handlers/SynthAttachmentMinerProvider';
import SynthEmbeddedImageHandlerProvider from './handlers/SynthEmbeddedImageHandlerProvider';
import SynthDeleteHandlerProvider from './handlers/SynthDeleteHandlerProvider';
import SynthLinkHandlerProvider from './handlers/SynthLinkHandlerProvider';
import SynthUploadResponseHandlerProvider from './handlers/SynthUploadResponseHandlerProvider';


// Import base directives
import synthMenu from './directives/synthMenu';
import synthFooter from './directives/synthFooter';
import toolSyncStatus from './directives/toolSyncStatus';
import overallSyncStatus from './directives/overallSyncStatus';
import synthAttachments from './directives/synthAttachments';
import moduleCollapse from './directives/moduleCollapse';
import animatedEllipse from './directives/animatedEllipse';
import currentModuleName from './directives/currentModuleName';
import moduleName from './directives/moduleName';
import toolName from './directives/toolName';

import bootSpinner from './directives/bootSpinner';

import Routes from './Routes';

var base = 'synthesis.base',
	controllers = 'synthesis.controllers',
	factories = 'synthesis.factories',
	filters = 'synthesis.filters',
	directives = 'synthesis.directives',
	providers = 'synthesis.providers';

// Register controllers
angular.module(controllers, [])
	.controller('BootCtrl', BootCtrl)
	.controller('HomeCtrl', HomeCtrl)
	.controller('RegisterCtrl', RegisterCtrl)
	.controller('RegisterModuleRegistrationCtrl', RegisterModuleRegistrationCtrl)
	.controller('RegisterSelectModuleCtrl', RegisterSelectModuleCtrl)
	.controller('SettingsCtrl', SettingsCtrl)
	.controller('SettingsPushCtrl', SettingsPushCtrl)
	.controller('SyncCtrl', SyncCtrl)
	.controller('SyncConfigureCtrl', SyncConfigureCtrl)
	.controller('SyncProgressCtrl', SyncProgressCtrl)
	.controller('AppController', AppController);

// Register factories
angular.module(factories, [])
	.factory('HomeService', HomeService)
	.factory('RegisterService', RegisterService)
	.factory('RegistrationService', RegistrationService)
	.factory('DataService', DataService)
	.factory('LoggerService', LoggerService)
	.factory('ModuleService', ModuleService)
	.factory('PushService', PushService)
	.factory('SyncAPIService', SyncAPIService)
	.factory('UserService', UserService)
	.factory('UserSettings', UserSettings)
	.factory('UserSession', UserSession)
	.factory('SyncService', SyncService)
	.factory('SyncSelection', SyncSelection)
	.factory('SynthQLoop', SynthQLoop)
	.factory('SynthQIfStatement', SynthQIfStatement)
	.factory('safo', safo)
	.factory('SynthError', SynthError)
	.factory('SynthFail', SynthFail)
	.factory('SynthCheckResponseError', SynthCheckResponseError)
	.factory('SynthErrorHandler', SynthErrorHandler)
	.factory('SynthAuthenticateUser', SynthAuthenticateUser)
	.factory('SynthesisRESTClient', SynthesisRESTClient)
	.factory('Lock', Lock);

// Register filters
angular.module(filters, [])
	.filter('noEscape', noEscape)
	.filter('object2Array', object2Array)
	.filter('array2Object', array2Object)
	.filter('formatDate', formatDate)
	.filter('bytesToSize', bytesToSize)
	.filter('attachments', attachments);

// Register directives
angular.module(directives, [])
	.directive('synthMenu', synthMenu)
	.directive('synthFooter', synthFooter)
	.directive('toolSyncStatus', toolSyncStatus)
	.directive('overallSyncStatus', overallSyncStatus)
	.directive('synthAttachments', synthAttachments)
	.directive('bootSpinner', bootSpinner)
	.directive('moduleCollapse', moduleCollapse)
	.directive('animatedEllipse', animatedEllipse)
	.directive('currentModuleName', currentModuleName)
	.directive('moduleName', moduleName)
	.directive('toolName', toolName);

// Register providers
angular.module(providers, [])
	.provider('SynthAttachmentMiner', SynthAttachmentMinerProvider)
	.provider('SynthEmbeddedImageHandler', SynthEmbeddedImageHandlerProvider)
	.provider('SynthDeleteHandler', SynthDeleteHandlerProvider)
	.provider('SynthLinkHandler', SynthLinkHandlerProvider)
	.provider('SynthUploadResponseHandler', SynthUploadResponseHandlerProvider);

// Create base module
angular.module(base, [
	providers,
	controllers,
	factories,
	filters,
	directives
]).config(Routes);

export default base;