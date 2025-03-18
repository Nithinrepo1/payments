var TypeScriptModule =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rekaSample.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeInfo.js":
/*!**********************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeInfo.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readPropertyInfo = void 0;
function readPropertyInfo(pc) {
    if (Array.isArray(pc) && pc.length === 2 && pc[0] === 'opt-field') {
        return [true, pc[1]];
    }
    else {
        return [false, pc];
    }
}
exports.readPropertyInfo = readPropertyInfo;
//# sourceMappingURL=CustomTypeInfo.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeRegistry.js":
/*!**************************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeRegistry.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTypeRegistry = void 0;
var CustomTypeVerification_1 = __webpack_require__(/*! ./CustomTypeVerification */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeVerification.js");
var CCustomTypeRegistry = /** @class */ (function () {
    function CCustomTypeRegistry() {
        this.typeInfos = {};
        this.typeInfosCache = [];
        this.externalTypes = {};
    }
    CCustomTypeRegistry.prototype.constuctor = function (throwOnError) {
        if (throwOnError === void 0) { throwOnError = false; }
        this.throwOnError = throwOnError;
    };
    CCustomTypeRegistry.prototype.registerTypeInfos = function (customTypeInfos) {
        if (this.typeInfosCache.indexOf(customTypeInfos) === -1) {
            this.typeInfosCache.push(customTypeInfos);
            for (var _i = 0, _a = Object.keys(customTypeInfos); _i < _a.length; _i++) {
                var customTypeName = _a[_i];
                var typeInfo = this.typeInfos[customTypeName];
                if (!typeInfo) {
                    this.typeInfos[customTypeName] = customTypeInfos[customTypeName];
                }
                else if (typeInfo !== customTypeInfos[customTypeName]) {
                    this.handleError("There are two definitions of the same namespace and interface: ".concat(customTypeName));
                }
            }
        }
    };
    CCustomTypeRegistry.prototype.getTypeInfo = function (typeName) {
        var typeInfos = this.typeInfos[typeName];
        if (!typeInfos) {
            this.handleError("CustomTypeInfo \"".concat(typeName, "\" not registered as a custom types."));
            return undefined;
        }
        return typeInfos;
    };
    CCustomTypeRegistry.prototype.registerExternalTypeInfos = function (externalTypeInfos) {
        for (var _i = 0, _a = Object.keys(externalTypeInfos); _i < _a.length; _i++) {
            var externalTypeName = _a[_i];
            var externalType = this.externalTypes[externalTypeName];
            if (!externalType) {
                this.externalTypes[externalTypeName] = externalTypeInfos[externalTypeName];
            }
            else {
                this.handleError("The external type \"".concat(externalTypeName, "\" is already defined."));
            }
        }
    };
    CCustomTypeRegistry.prototype.getExternalType = function (typeName) {
        return this.externalTypes[typeName];
    };
    CCustomTypeRegistry.prototype.getExternalTypeInfos = function () {
        return this.externalTypes;
    };
    CCustomTypeRegistry.prototype.validateParsedObj = function (parsedObj, propertyTypes) {
        for (var _i = 0, _a = Object.keys(propertyTypes); _i < _a.length; _i++) {
            var propertyName = _a[_i];
            parsedObj[propertyName] = (0, CustomTypeVerification_1.verifyType)(this, parsedObj[propertyName], propertyTypes[propertyName]);
        }
        return parsedObj;
    };
    CCustomTypeRegistry.prototype.setThrowOnError = function (throwOnError) {
        this.throwOnError = throwOnError;
    };
    CCustomTypeRegistry.prototype.handleError = function (msg) {
        if (this.throwOnError) {
            throw new Error(msg);
        }
    };
    return CCustomTypeRegistry;
}());
exports.CustomTypeRegistry = new CCustomTypeRegistry();
//# sourceMappingURL=CustomTypeRegistry.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeVerification.js":
/*!******************************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeVerification.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyType = void 0;
var CustomTypeInfo_1 = __webpack_require__(/*! ./CustomTypeInfo */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeInfo.js");
function checkType(customTypeRegistry, condition) {
    if (condition) {
        customTypeRegistry.handleError('Type of property does not match type in CustomTypes definition.');
    }
}
function verifyChildTypes(customTypeRegistry, json, customTypeInfo, isPartial) {
    for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        var propInfo = customTypeInfo[propertyName];
        if (!propInfo) {
            if (!propertyName.startsWith('$')) {
                customTypeRegistry.handleError("Property \"".concat(propertyName, "\" does not exist in CustomType definition."));
            }
        }
        else {
            var _b = (0, CustomTypeInfo_1.readPropertyInfo)(propInfo), propType = _b[1];
            json[propertyName] = verifyType(customTypeRegistry, json[propertyName], propType, isPartial);
        }
    }
    return json;
}
function getParsableType(customTypeRegistry, json, unionTypes, isPartial) {
    for (var _i = 0, _a = Object.keys(unionTypes); _i < _a.length; _i++) {
        var index = _a[_i];
        var isParsable = true;
        var customTypeInfo = customTypeRegistry.getTypeInfo(unionTypes[index]);
        if (!customTypeInfo) {
            continue;
        }
        for (var _b = 0, _c = Object.keys(json); _b < _c.length; _b++) {
            var propertyName = _c[_b];
            if (!customTypeInfo[propertyName]) {
                isParsable = false;
                break;
            }
        }
        if (isParsable) {
            return customTypeInfo;
        }
    }
    return undefined;
}
function verifyContainerTypes(customTypeRegistry, json, propertyType) {
    for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        json[propertyName] = verifyType(customTypeRegistry, json[propertyName], propertyType);
    }
    return json;
}
function generateChildDefaults(customTypeRegistry, json, customTypeInfo, isPartial) {
    if (!customTypeInfo) {
        customTypeRegistry.handleError('Unable to generate default value for unregistered type.');
        return json;
    }
    for (var _i = 0, _a = Object.keys(customTypeInfo); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        var _b = (0, CustomTypeInfo_1.readPropertyInfo)(customTypeInfo[propertyName]), isOptionalField = _b[0], propType = _b[1];
        if (!json.hasOwnProperty(propertyName) && isOptionalField) {
            continue;
        }
        if (json[propertyName] === undefined) {
            var defaultValue = generateDefault(customTypeRegistry, undefined, propType, isPartial);
            if (defaultValue !== undefined) {
                json[propertyName] = defaultValue;
            }
        }
    }
    return json;
}
function generateDefault(customTypeRegistry, json, propertyType, isPartial, isOptional) {
    if (isPartial === void 0) { isPartial = false; }
    if (isOptional === void 0) { isOptional = false; }
    if (!isPartial && !isOptional && (json === null || json === undefined)) {
        if (typeof (propertyType) === 'string') {
            switch (propertyType) {
                case '$string':
                    return '';
                case '$number':
                    return 0;
                case '$boolean':
                    return false;
                case '$any':
                    return undefined;
                default:
                    json = {};
                    return generateChildDefaults(customTypeRegistry, json, customTypeRegistry.getTypeInfo(propertyType), isPartial);
            }
        }
        else {
            // $optional is dealt with outside of this function and persist throughout default generation.
            var typeName = propertyType[0], subTypeDesc = propertyType[1];
            switch (typeName) {
                case '$array':
                    return [];
                case '$indexer':
                    return {};
                case '$union':
                    json = {};
                    return generateChildDefaults(customTypeRegistry, json, customTypeRegistry.getTypeInfo(subTypeDesc[0]), isPartial);
            }
        }
    }
    return (json !== null && json !== undefined) ? json : undefined;
}
function verifyType(customTypeRegistry, json, propertyType, isPartial) {
    if (isPartial === void 0) { isPartial = false; }
    if (json !== null && json !== undefined) {
        if (typeof (propertyType) === 'string') {
            switch (propertyType) {
                case '$string':
                    checkType(customTypeRegistry, typeof (json) !== 'string');
                    break;
                case '$number':
                    checkType(customTypeRegistry, typeof (json) !== 'number');
                    break;
                case '$boolean':
                    checkType(customTypeRegistry, typeof (json) !== 'boolean');
                    break;
                case '$any':
                    // $any json objects might have nesting properties that are null that should be turned into undefined.
                    if (typeof (json) === 'object') {
                        for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
                            var propertyName = _a[_i];
                            json[propertyName] = verifyType(customTypeRegistry, json[propertyName], propertyType, isPartial);
                        }
                    }
                    break;
                default:
                    var customTypeInfo = customTypeRegistry.getTypeInfo(propertyType);
                    if (customTypeInfo) {
                        verifyChildTypes(customTypeRegistry, json, customTypeInfo, isPartial);
                        return generateChildDefaults(customTypeRegistry, json, customTypeInfo, isPartial);
                    }
                    return json;
            }
        }
        else {
            var typeName = propertyType[0], subTypeDesc = propertyType[1];
            switch (typeName) {
                case '$array':
                    var isArray = Array.isArray(json);
                    checkType(customTypeRegistry, !isArray);
                    return (isArray) ? verifyContainerTypes(customTypeRegistry, json, subTypeDesc) : json;
                case '$indexer':
                    var isIndexer = !(typeof (json) === 'object' && Array.isArray(json) || typeof (json) !== 'object');
                    checkType(customTypeRegistry, !isIndexer);
                    return (isIndexer) ? verifyContainerTypes(customTypeRegistry, json, subTypeDesc) : json;
                case '$union':
                    var parsableCustomType = getParsableType(customTypeRegistry, json, subTypeDesc, isPartial);
                    if (!parsableCustomType) {
                        customTypeRegistry.handleError('Json object is not assignable to any custom type in union.');
                        return json;
                    }
                    verifyChildTypes(customTypeRegistry, json, parsableCustomType, isPartial);
                    return generateChildDefaults(customTypeRegistry, json, parsableCustomType, isPartial);
                case '$optional':
                    verifyType(customTypeRegistry, json, subTypeDesc);
                    return generateDefault(customTypeRegistry, json, propertyType, isPartial, true);
                case '$external':
                    if (typeof (json) === 'object') {
                        json = verifyType(customTypeRegistry, json, '$any', isPartial);
                        var externalType = customTypeRegistry.getExternalType(subTypeDesc);
                        if (externalType && externalType.parse) {
                            return externalType.parse(json);
                        }
                    }
                    break;
            }
        }
    }
    else {
        json = generateDefault(customTypeRegistry, json, propertyType, isPartial);
    }
    return json;
}
exports.verifyType = verifyType;
//# sourceMappingURL=CustomTypeVerification.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/Event.js":
/*!*************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/Event.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventImpl = void 0;
var EventSubscription = /** @class */ (function () {
    function EventSubscription(event) {
        this.event = event;
    }
    EventSubscription.prototype.unsubscribe = function () {
        this.event.unsubscribe(this);
    };
    return EventSubscription;
}());
var EventImpl = /** @class */ (function () {
    function EventImpl(listenerUpdate) {
        this.listenerUpdate = listenerUpdate;
        this.handlers = new Map();
        this.hasListener = false;
    }
    EventImpl.prototype.subscribe = function (handler) {
        var subscription = new EventSubscription(this);
        this.handlers.set(subscription, handler);
        if (!this.hasListener) {
            this.sendUpdate(true);
        }
        return subscription;
    };
    EventImpl.prototype.unsubscribe = function (subscription) {
        this.handlers.delete(subscription);
        if (this.hasListener && this.handlers.size === 0) {
            this.sendUpdate(false);
        }
    };
    EventImpl.prototype.unsubscribeAll = function () {
        this.handlers.clear();
        if (this.hasListener) {
            this.sendUpdate(false);
        }
    };
    EventImpl.prototype.trigger = function (eventArg) {
        this.handlers.forEach(function (handler, subscription) { return handler(eventArg, subscription); });
    };
    EventImpl.prototype.sendUpdate = function (value) {
        this.hasListener = value;
        this.listenerUpdate(value);
    };
    return EventImpl;
}());
exports.EventImpl = EventImpl;
//# sourceMappingURL=Event.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/RekaInstance.js":
/*!********************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/RekaInstance.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CRekaInstance = void 0;
var CRekaInstance = /** @class */ (function () {
    function CRekaInstance(registerClasses, registerServiceInstance) {
        this.services = {};
        this.factories = {};
        this.nextNativePromiseId = 0;
        this.nativePromises = {};
        this.nativeBridge = undefined;
        this.registerClasses = registerClasses;
        this.registerServiceInstanceImpl = registerServiceInstance;
    }
    CRekaInstance.prototype.initBridge = function (nativeBridge, services) {
        this.nativeBridge = nativeBridge;
        this.registerClasses.apply(this, services);
        this.nativeBridge.invokeNative({
            serviceName: '$RekaBridge',
            methodName: 'init',
            value: '',
            promiseId: 0
        });
    };
    CRekaInstance.prototype.getConstantJson = function (serviceName, propertyName) {
        this.verifyNativeBridgePresent();
        var rekaConstants = this.nativeBridge.RekaConstants;
        if (rekaConstants !== undefined) {
            var service = rekaConstants[serviceName];
            if (service !== undefined) {
                var constantProperty = service[propertyName];
                if (constantProperty !== undefined) {
                    return constantProperty;
                }
            }
        }
        throw new Error("Reka native service \"".concat(serviceName, "\" must be registered before accessing it's constant property \"").concat(propertyName, "\".")
            + ' This error also happens when the service implementation does not'
            + ' use the generated code from the correct (usually the latest) version of Reka service definition.');
    };
    CRekaInstance.prototype.InvokeNative = function (serviceName, methodName, value) {
        this.verifyNativeBridgePresent();
        this.nativeBridge.invokeNative({ serviceName: serviceName, methodName: methodName, value: value, promiseId: 0 });
    };
    CRekaInstance.prototype.InvokeNativeAndReturn = function (serviceName, methodName, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var promiseId = ++_this.nextNativePromiseId;
            _this.nativePromises[promiseId] = {
                onSuccess: function (v) { return resolve(v); },
                onFailure: function (e) { return reject(e); }
            };
            if (_this.nativeBridge) {
                _this.nativeBridge.invokeNative({ serviceName: serviceName, methodName: methodName, value: value, promiseId: promiseId });
            }
            else {
                reject('Native bridge is not initialized.');
            }
        });
    };
    CRekaInstance.prototype.RegisterService = function (serviceName, factory) {
        this.factories[serviceName] = factory;
    };
    CRekaInstance.prototype.registerServiceInstance = function (service) {
        this.registerServiceInstanceImpl(service);
    };
    CRekaInstance.prototype.invokeJavaScript = function (_a) {
        var _this = this;
        var _b = _a.serviceName, serviceName = _b === void 0 ? '' : _b, _c = _a.methodName, methodName = _c === void 0 ? '' : _c, _d = _a.value, value = _d === void 0 ? '' : _d, _e = _a.promiseId, promiseId = _e === void 0 ? 0 : _e;
        if (serviceName === '$RekaBridge') {
            return this.invokeJavaScriptBridge(methodName, value, promiseId);
        }
        var service = this.services[serviceName] || (this.services[serviceName] = this.factories[serviceName]());
        var result = service.Invoke(methodName, value);
        if (this.nativeBridge && result && result.then) {
            result.then(function (v) { return _this.invokeNativeBridge('onSuccess', v, promiseId); }, function (e) { return _this.invokeNativeBridge('onFailure', e, promiseId); });
        }
    };
    CRekaInstance.prototype.invokeNativeBridge = function (methodName, value, promiseId) {
        this.nativeBridge.invokeNative({ serviceName: '$RekaBridge', methodName: methodName, value: value, promiseId: promiseId });
    };
    CRekaInstance.prototype.invokeJavaScriptBridge = function (methodName, value, promiseId) {
        var promise = this.nativePromises[promiseId];
        if (promise) {
            delete this.nativePromises[promiseId];
            promise[methodName](value);
        }
    };
    CRekaInstance.prototype.verifyNativeBridgePresent = function () {
        if (!this.nativeBridge) {
            throw new Error('Native bridge is not initialized.');
        }
    };
    return CRekaInstance;
}());
exports.CRekaInstance = CRekaInstance;
//# sourceMappingURL=RekaInstance.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/RekaServiceRegistry.js":
/*!***************************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/RekaServiceRegistry.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CRekaServiceRegistry = exports.stringifyJson = exports.parseJson = void 0;
var CustomTypeRegistry_1 = __webpack_require__(/*! ./CustomTypeRegistry */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeRegistry.js");
var Event_1 = __webpack_require__(/*! ./Event */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/Event.js");
function parseJson(str, propertyTypes) {
    var obj = str ? JSON.parse(str) : [];
    if (Array.isArray(obj)) {
        return propertyTypes ? CustomTypeRegistry_1.CustomTypeRegistry.validateParsedObj(obj, propertyTypes) : obj;
    }
    else {
        throw new Error('Everything should be an array');
    }
}
exports.parseJson = parseJson;
function replacer(key, value) {
    if (typeof value === 'object') {
        var externalTypeInfos = CustomTypeRegistry_1.CustomTypeRegistry.getExternalTypeInfos();
        for (var _i = 0, _a = Object.keys(externalTypeInfos); _i < _a.length; _i++) {
            var j = _a[_i];
            var externalType = externalTypeInfos[j];
            if (value instanceof externalType.typeConstructor) {
                if (externalType.stringify) {
                    value = externalType.stringify(value);
                }
                break;
            }
        }
    }
    return value;
}
function stringifyJson(obj) {
    if (!Array.isArray(obj)) {
        throw new Error('Everything should be an array');
    }
    else if (obj.length === 0) {
        return '';
    }
    else {
        return JSON.stringify(obj, replacer);
    }
}
exports.stringifyJson = stringifyJson;
// Temporary logic for deprecated MemberType (should eventually always be MemberInfo)
function getMemberTypeAndArgTypes(member) {
    var _a, _b, _c;
    if (typeof member !== 'string') {
        var memberType = void 0, returnType = void 0, argTypes = void 0;
        switch (member[0]) {
            case 'FireAndForgetMethod':
                _a = member, memberType = _a[0], argTypes = _a[1];
                return [memberType, undefined, argTypes];
            case 'ReturnsPromiseMethod':
                _b = member, memberType = _b[0], returnType = _b[1], argTypes = _b[2];
                return [memberType, [returnType], argTypes];
            case 'Event':
            case 'Constant':
                _c = member, memberType = _c[0], returnType = _c[1];
                return [memberType, [returnType], undefined];
        }
    }
    return [member, undefined, undefined];
}
var CRekaService = /** @class */ (function () {
    function CRekaService(service, methodInfos) {
        this.service = service;
        this.methodInfos = methodInfos;
    }
    CRekaService.prototype.Invoke = function (methodName, value) {
        var _a;
        var _b = getMemberTypeAndArgTypes(this.methodInfos[methodName]), /* memberType*/ /* returnType*/ argTypes = _b[2];
        var args;
        try {
            args = parseJson(value, argTypes);
        }
        catch (e) {
            throw new Error("Reka service invocation failed: JSON payload (length=".concat(value.length, ") for ").concat(methodName, " is invalid.\nInner exception: ").concat(e.stack));
        }
        var result = (_a = this.service)[methodName].apply(_a, args);
        if (result && result.then) {
            return result.then(function (obj) { return stringifyJson([obj]); });
        }
    };
    return CRekaService;
}());
var CRekaServiceNative = /** @class */ (function () {
    function CRekaServiceNative(service, methodInfos) {
        this.service = service;
        this.methodInfos = methodInfos;
    }
    CRekaServiceNative.prototype.Invoke = function (methodName, value) {
        var _a = getMemberTypeAndArgTypes(this.methodInfos[methodName]), /* memberType*/ eventType = _a[1] /* argTypes*/;
        var args;
        try {
            args = parseJson(value, eventType);
        }
        catch (e) {
            throw new Error("Reka native service invocation failed: JSON payload (length=".concat(value.length, ") for ").concat(methodName, " is invalid.\nInner exception: ").concat(e.stack));
        }
        this.service[methodName].trigger(args[0]);
    };
    return CRekaServiceNative;
}());
var CRekaServiceRegistry = /** @class */ (function () {
    function CRekaServiceRegistry(rekaInstance) {
        this.nativeServices = {};
        this.rekaInstance = rekaInstance;
    }
    CRekaServiceRegistry.prototype.registerService = function (serviceRegistration) {
        var _a = serviceRegistration.serviceInfo, serviceName = _a[0], methodInfos = _a[1];
        var factory = serviceRegistration.factory;
        this.rekaInstance.RegisterService(serviceName, function () { return new CRekaService(factory(), methodInfos); });
    };
    CRekaServiceRegistry.prototype.getNativeService = function (serviceInfo) {
        var _this = this;
        var serviceName = serviceInfo[0], members = serviceInfo[1];
        var nativeService = this.nativeServices[serviceName];
        if (!nativeService) {
            this.nativeServices[serviceName] = nativeService = {};
            var hasEvents = false;
            var constantCache_1 = {};
            var _loop_1 = function (memberName) {
                var _b = getMemberTypeAndArgTypes(members[memberName]), memberType = _b[0], returnType = _b[1] /* argTypes*/;
                switch (memberType) {
                    case 'ReturnsPromiseMethod':
                        nativeService[memberName] = function () {
                            var obj = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                obj[_i] = arguments[_i];
                            }
                            return _this.rekaInstance
                                .InvokeNativeAndReturn(serviceName, memberName, stringifyJson(obj))
                                .then(function (str) { return parseJson(str, returnType)[0]; });
                        };
                        break;
                    case 'FireAndForgetMethod':
                        nativeService[memberName] = function () {
                            var obj = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                obj[_i] = arguments[_i];
                            }
                            return _this.rekaInstance.InvokeNative(serviceName, memberName, stringifyJson(obj));
                        };
                        break;
                    case 'Event':
                        nativeService[memberName] = new Event_1.EventImpl(function (active) {
                            if (active) {
                                nativeService.eventSubscribed(memberName);
                            }
                        });
                        hasEvents = true;
                        break;
                    case 'Constant':
                        // At this moment, initReka has not been called, so RekaInstance.getConstantJson doesn't work.
                        // So we have to delay the execution to when the user call this property.
                        Object.defineProperty(nativeService, memberName, {
                            configurable: false,
                            enumerable: true,
                            get: function () {
                                // In order to prevent from deserializing the JSON twice,
                                // this function will keep the constant value in constantCache,
                                // which is inaccessable by users.
                                if (constantCache_1[memberName] === undefined) {
                                    constantCache_1[memberName] = parseJson(_this.rekaInstance.getConstantJson(serviceName, memberName), returnType)[0];
                                }
                                return constantCache_1[memberName];
                            },
                        });
                        break;
                }
            };
            for (var _i = 0, _a = Object.keys(members); _i < _a.length; _i++) {
                var memberName = _a[_i];
                _loop_1(memberName);
            }
            if (hasEvents) {
                nativeService.eventSubscribed = function (memberName) {
                    _this.rekaInstance.InvokeNative('$RekaBridge', 'createService', serviceName);
                };
                this.rekaInstance.RegisterService(serviceName, function () { return new CRekaServiceNative(nativeService, members); });
            }
        }
        return nativeService;
    };
    return CRekaServiceRegistry;
}());
exports.CRekaServiceRegistry = CRekaServiceRegistry;
//# sourceMappingURL=RekaServiceRegistry.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/SharedInstances.js":
/*!***********************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/SharedInstances.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = exports.registerServiceInstance = exports.registerClass = exports.RekaServiceRegistry = exports.RekaInstance = void 0;
var RekaInstance_1 = __webpack_require__(/*! ./RekaInstance */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/RekaInstance.js");
var RekaServiceRegistry_1 = __webpack_require__(/*! ./RekaServiceRegistry */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/RekaServiceRegistry.js");
exports.RekaInstance = new RekaInstance_1.CRekaInstance(registerClasses, registerServiceInstance);
exports.RekaServiceRegistry = new RekaServiceRegistry_1.CRekaServiceRegistry(exports.RekaInstance);
function registerClass(serviceType) {
    exports.RekaServiceRegistry.registerService({ serviceInfo: serviceType.ServiceInfo, factory: function () { return new serviceType(); } });
}
exports.registerClass = registerClass;
function registerServiceInstance(serviceInstance) {
    exports.RekaServiceRegistry.registerService({ serviceInfo: serviceInstance.ServiceInfo, factory: function () { return serviceInstance; } });
}
exports.registerServiceInstance = registerServiceInstance;
function registerClasses() {
    var serviceTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        serviceTypes[_i] = arguments[_i];
    }
    serviceTypes.forEach(function (serviceType) { return registerClass(serviceType); });
}
exports.registerClasses = registerClasses;
//# sourceMappingURL=SharedInstances.js.map

/***/ }),

/***/ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/index.js":
/*!*************************************************************************************************************************************************!*\
  !*** D:/dbs/el/omr/Build/npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/index.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataServiceRegistry = exports.DataServiceManager = exports.EventImpl = exports.registerClasses = exports.RekaServiceRegistry = exports.RekaInstance = exports.CustomTypeRegistry = void 0;
var CustomTypeRegistry_1 = __webpack_require__(/*! ./CustomTypeRegistry */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/CustomTypeRegistry.js");
Object.defineProperty(exports, "CustomTypeRegistry", { enumerable: true, get: function () { return CustomTypeRegistry_1.CustomTypeRegistry; } });
var SharedInstances_1 = __webpack_require__(/*! ./SharedInstances */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/SharedInstances.js");
Object.defineProperty(exports, "RekaInstance", { enumerable: true, get: function () { return SharedInstances_1.RekaInstance; } });
Object.defineProperty(exports, "RekaServiceRegistry", { enumerable: true, get: function () { return SharedInstances_1.RekaServiceRegistry; } });
Object.defineProperty(exports, "registerClasses", { enumerable: true, get: function () { return SharedInstances_1.registerClasses; } });
var Event_1 = __webpack_require__(/*! ./Event */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/Event.js");
Object.defineProperty(exports, "EventImpl", { enumerable: true, get: function () { return Event_1.EventImpl; } });
/**
 * @deprecated: DataServiceManager has been renamed to RekaInstance
 * @deprecated: DataServiceRegistry has been renamed to RekaServiceRegistry
 */
var SharedInstances_2 = __webpack_require__(/*! ./SharedInstances */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/SharedInstances.js");
Object.defineProperty(exports, "DataServiceManager", { enumerable: true, get: function () { return SharedInstances_2.RekaInstance; } });
Object.defineProperty(exports, "DataServiceRegistry", { enumerable: true, get: function () { return SharedInstances_2.RekaServiceRegistry; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/reka/reka-private-api-bridge.ts":
/*!*********************************************!*\
  !*** ./src/reka/reka-private-api-bridge.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is a bridge implementation between Reka and Office.js Private API.
// TODO: Extract into a separate NPM package.
Object.defineProperty(exports, "__esModule", { value: true });
exports.initReka = void 0;
var reka_1 = __webpack_require__(/*! @office-iss/reka */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/index.js");
// To access Office.js private API
var officeFirstParty = window.OfficeFirstParty;
var privateApi = officeFirstParty === null || officeFirstParty === void 0 ? void 0 : officeFirstParty.PrivateApi;
var RekaPrivateApiBridge = /** @class */ (function () {
    function RekaPrivateApiBridge() {
        // The constants are being deprecated
        this.RekaConstants = {};
    }
    // To handle messages from JS to C++
    RekaPrivateApiBridge.prototype.invokeNative = function (args) {
        privateApi.execute(JSON.stringify(args));
    };
    return RekaPrivateApiBridge;
}());
function initReka() {
    var services = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        services[_i] = arguments[_i];
    }
    if (privateApi) {
        reka_1.RekaInstance.initBridge(new RekaPrivateApiBridge(), services);
        // To handle messages from C++ to JS
        privateApi.onPrivateEvent(function (messageData) {
            return reka_1.RekaInstance.invokeJavaScript(JSON.parse(messageData));
        });
    }
    else {
        throw "OfficeFirstParty.PrivateApi is not found";
    }
}
exports.initReka = initReka;


/***/ }),

/***/ "./src/reka/rekaSampleServices.g.ts":
/*!******************************************!*\
  !*** ./src/reka/rekaSampleServices.g.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the TS2DS compiler.
//     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeServices = exports.ServiceInfos = void 0;
var reka_1 = __webpack_require__(/*! @office-iss/reka */ "../../../../npm/.store/sdx_experimentation/@office-iss-reka@6.0.2-51a70d20a04774c65ed8/node_modules/@office-iss/reka/lib/index.js");
exports.ServiceInfos = {
    RekaSampleService: ['Experimentation::RekaSampleService', {
            usePromise: ['ReturnsPromiseMethod', '$string', ['$string']],
            useAsyncPromise: ['ReturnsPromiseMethod', '$string', ['$string']],
            useJSService: ['FireAndForgetMethod', ['$string']],
            useOnDataEvent: ['FireAndForgetMethod', ['$string']],
            addValues: ['ReturnsPromiseMethod', '$number', ['$number', '$number']],
            onData: ['Event', '$string'],
        }],
    RekaSampleJSService: ['Experimentation::RekaSampleJSService', {
            handleMessage: ['FireAndForgetMethod', ['$string']],
        }],
};
exports.NativeServices = {
    RekaSampleService: reka_1.RekaServiceRegistry.getNativeService(exports.ServiceInfos.RekaSampleService),
};
__exportStar(__webpack_require__(/*! ./rekaSampleServices */ "./src/reka/rekaSampleServices.ts"), exports);


/***/ }),

/***/ "./src/reka/rekaSampleServices.ts":
/*!****************************************!*\
  !*** ./src/reka/rekaSampleServices.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nativeNamespace = void 0;
// The C++ namespace for generated code.
exports.nativeNamespace = "Experimentation";


/***/ }),

/***/ "./src/rekaSample.ts":
/*!***************************!*\
  !*** ./src/rekaSample.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.testReka = exports.RekaSampleJSServiceImpl = void 0;
var reka_private_api_bridge_1 = __webpack_require__(/*! ./reka/reka-private-api-bridge */ "./src/reka/reka-private-api-bridge.ts");
var rekaSampleServices_g_1 = __webpack_require__(/*! ./reka/rekaSampleServices.g */ "./src/reka/rekaSampleServices.g.ts");
// Implementation of a Reka service on JS side.
var RekaSampleJSServiceImpl = /** @class */ (function () {
    function RekaSampleJSServiceImpl() {
    }
    // Implementation of a service method declared in RekaSampleJSService.
    RekaSampleJSServiceImpl.prototype.handleMessage = function (message) {
        log("result3: " + message);
    };
    // This is required for the service registration
    RekaSampleJSServiceImpl.ServiceInfo = rekaSampleServices_g_1.ServiceInfos.RekaSampleJSService;
    return RekaSampleJSServiceImpl;
}());
exports.RekaSampleJSServiceImpl = RekaSampleJSServiceImpl;
function testReka() {
    // Test Reka service method that returns Promise.
    rekaSampleServices_g_1.NativeServices.RekaSampleService.usePromise("test1").then(function (message) {
        return log("result1: " + message);
    });
    // Test Reka service method that returns Promise and
    // internally returns result from a background thread.
    rekaSampleServices_g_1.NativeServices.RekaSampleService.useAsyncPromise("test2").then(function (message) {
        return log("result2: " + message);
    });
    // Test Reka service method that calls RekaSampleJSService.handleMessage.
    rekaSampleServices_g_1.NativeServices.RekaSampleService.useJSService("test3");
    // Test Reka service method that raises onData event.
    // It can be used instead of JS services in simple cases.
    rekaSampleServices_g_1.NativeServices.RekaSampleService.onData.subscribe(function (message, subscription) {
        log("result4: " + message);
        // In this test we unsubscribe from the event
        // after it is handled the first time.
        subscription.unsubscribe();
    });
    rekaSampleServices_g_1.NativeServices.RekaSampleService.useOnDataEvent("test4");
    // Simple test that shows how Reka service can be used calculating sums.
    rekaSampleServices_g_1.NativeServices.RekaSampleService.addValues(42, 12).then(function (result) {
        return log("42 + 12 = " + result);
    });
}
exports.testReka = testReka;
// Expose test_reka global function.
window.test_reka = testReka;
// Initialize Reka in JS and register all JS-implemented services.
reka_private_api_bridge_1.initReka(RekaSampleJSServiceImpl);


/***/ })

/******/ });
//# sourceMappingURL=rekaSample.js.map