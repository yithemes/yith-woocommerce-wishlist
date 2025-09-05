/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnhancerArray: () => (/* binding */ EnhancerArray),
/* harmony export */   MiddlewareArray: () => (/* binding */ MiddlewareArray),
/* harmony export */   SHOULD_AUTOBATCH: () => (/* binding */ SHOULD_AUTOBATCH),
/* harmony export */   TaskAbortError: () => (/* binding */ TaskAbortError),
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.__DO_NOT_USE__ActionTypes),
/* harmony export */   addListener: () => (/* binding */ addListener),
/* harmony export */   applyMiddleware: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware),
/* harmony export */   autoBatchEnhancer: () => (/* binding */ autoBatchEnhancer),
/* harmony export */   bindActionCreators: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators),
/* harmony export */   clearAllListeners: () => (/* binding */ clearAllListeners),
/* harmony export */   combineReducers: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers),
/* harmony export */   compose: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.compose),
/* harmony export */   configureStore: () => (/* binding */ configureStore),
/* harmony export */   createAction: () => (/* binding */ createAction),
/* harmony export */   createActionCreatorInvariantMiddleware: () => (/* binding */ createActionCreatorInvariantMiddleware),
/* harmony export */   createAsyncThunk: () => (/* binding */ createAsyncThunk),
/* harmony export */   createDraftSafeSelector: () => (/* binding */ createDraftSafeSelector),
/* harmony export */   createEntityAdapter: () => (/* binding */ createEntityAdapter),
/* harmony export */   createImmutableStateInvariantMiddleware: () => (/* binding */ createImmutableStateInvariantMiddleware),
/* harmony export */   createListenerMiddleware: () => (/* binding */ createListenerMiddleware),
/* harmony export */   createNextState: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   createReducer: () => (/* binding */ createReducer),
/* harmony export */   createSelector: () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector),
/* harmony export */   createSerializableStateInvariantMiddleware: () => (/* binding */ createSerializableStateInvariantMiddleware),
/* harmony export */   createSlice: () => (/* binding */ createSlice),
/* harmony export */   createStore: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.createStore),
/* harmony export */   current: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.current),
/* harmony export */   findNonSerializableValue: () => (/* binding */ findNonSerializableValue),
/* harmony export */   freeze: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.freeze),
/* harmony export */   getDefaultMiddleware: () => (/* binding */ getDefaultMiddleware),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   isAction: () => (/* binding */ isAction),
/* harmony export */   isActionCreator: () => (/* binding */ isActionCreator),
/* harmony export */   isAllOf: () => (/* binding */ isAllOf),
/* harmony export */   isAnyOf: () => (/* binding */ isAnyOf),
/* harmony export */   isAsyncThunkAction: () => (/* binding */ isAsyncThunkAction),
/* harmony export */   isDraft: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.isDraft),
/* harmony export */   isFluxStandardAction: () => (/* binding */ isFSA),
/* harmony export */   isFulfilled: () => (/* binding */ isFulfilled),
/* harmony export */   isImmutableDefault: () => (/* binding */ isImmutableDefault),
/* harmony export */   isPending: () => (/* binding */ isPending),
/* harmony export */   isPlain: () => (/* binding */ isPlain),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isRejected: () => (/* binding */ isRejected),
/* harmony export */   isRejectedWithValue: () => (/* binding */ isRejectedWithValue),
/* harmony export */   legacy_createStore: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore),
/* harmony export */   miniSerializeError: () => (/* binding */ miniSerializeError),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   original: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.original),
/* harmony export */   prepareAutoBatched: () => (/* binding */ prepareAutoBatched),
/* harmony export */   removeListener: () => (/* binding */ removeListener),
/* harmony export */   unwrapResult: () => (/* binding */ unwrapResult)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray([(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(value) : value], rest));
    };
    return wrappedSelector;
};
// src/configureStore.ts

// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    return redux__WEBPACK_IMPORTED_MODULE_0__.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop2) {
        return noop2;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
        return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/getDefaultMiddleware.ts

// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isAction(action) {
    return isPlainObject(action) && "type" in action;
}
function isActionCreator(action) {
    return typeof action === "function" && "type" in action && hasMatchFunction(action);
}
function isFSA(action) {
    return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
    var splitType = type ? ("" + type).split("/") : [];
    var actionName = splitType[splitType.length - 1] || "actionCreator";
    return "Detected an action creator with type \"" + (type || "unknown") + "\" being dispatched. \nMake sure you're calling the action creator before dispatching, i.e. `dispatch(" + actionName + "())` instead of `dispatch(" + actionName + ")`. This is necessary even if the action has no payload.";
}
function createActionCreatorInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isActionCreator, isActionCreator2 = _c === void 0 ? isActionCreator : _c;
    return function () { return function (next) { return function (action) {
        if (isActionCreator2(action)) {
            console.warn(getMessage(action.type));
        }
        return next(action);
    }; }; };
}
// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function (fn) {
            var started = Date.now();
            try {
                return fn();
            }
            finally {
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function () {
            if (elapsed > maxDelay) {
                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
            }
        }
    };
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
var EnhancerArray = /** @class */ (function (_super) {
    __extends(EnhancerArray, _super);
    function EnhancerArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, EnhancerArray.prototype);
        return _this;
    }
    Object.defineProperty(EnhancerArray, Symbol.species, {
        get: function () {
            return EnhancerArray;
        },
        enumerable: false,
        configurable: true
    });
    EnhancerArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray;
}(Array));
function freezeDraftable(val) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(val) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(val, function () {
    }) : val;
}
// src/immutableStateInvariantMiddleware.ts
var isProduction = "development" === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path, checkedObjects) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (path === void 0) { path = ""; }
    if (checkedObjects === void 0) { checkedObjects = new Set(); }
    var tracked = { value: obj };
    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
        checkedObjects.add(obj);
        tracked.children = {};
        for (var key in obj) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    if (sameParentRef === void 0) { sameParentRef = false; }
    if (path === void 0) { path = ""; }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path: path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (var key in obj) {
        keysToDetect[key] = true;
    }
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_1 = function (key) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return { value: result };
        }
    };
    for (var key in keysToDetect) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_c) {
        var getState = _c.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function (next) { return function (action) {
            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            var dispatchedAction = next(action);
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        }; };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
    if (path === void 0) { path = ""; }
    if (isSerializable === void 0) { isSerializable = isPlain; }
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value: value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache == null ? void 0 : cache.has(value))
        return false;
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_2 = function (key, nestedValue) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        if (!isSerializable(nestedValue)) {
            return { value: {
                    keyPath: nestedPath,
                    value: nestedValue
                } };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return { value: foundNestedSerializable };
            }
        }
    };
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
        var state_2 = _loop_2(key, nestedValue);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    if (cache && isNestedFrozen(value))
        cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value))
        return false;
    for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
        var nestedValue = _c[_i];
        if (typeof nestedValue !== "object" || nestedValue === null)
            continue;
        if (!isNestedFrozen(nestedValue))
            return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
    var cache = !disableCache && WeakSet ? new WeakSet() : void 0;
    return function (storeAPI) { return function (next) { return function (action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function () {
                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                if (foundActionNonSerializableValue) {
                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                }
            });
        }
        if (!ignoreState) {
            measureUtils.measureTime(function () {
                var state = storeAPI.getState();
                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                if (foundStateNonSerializableValue) {
                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    }; }; };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e, _f = options.actionCreatorCheck, actionCreatorCheck = _f === void 0 ? true : _f;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
        }
        else {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
        }
    }
    if (true) {
        if (immutableCheck) {
            var immutableOptions = {};
            if (!isBoolean(immutableCheck)) {
                immutableOptions = immutableCheck;
            }
            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
        }
        if (serializableCheck) {
            var serializableOptions = {};
            if (!isBoolean(serializableCheck)) {
                serializableOptions = serializableCheck;
            }
            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
        }
        if (actionCreatorCheck) {
            var actionCreatorOptions = {};
            if (!isBoolean(actionCreatorCheck)) {
                actionCreatorOptions = actionCreatorCheck;
            }
            middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "development" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject(reducer)) {
        rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
    var storeEnhancers = defaultEnhancers;
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(defaultEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, preloadedState, composedEnhancer);
}
// src/createReducer.ts

// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (true) {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (!type) {
                throw new Error("`builder.addCase` cannot be called with an empty action type");
            }
            if (type in actionsMap) {
                throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    if (true) {
        if (typeof mapOrBuilderCallback === "object") {
            if (!hasWarnedAboutObjectNotation) {
                hasWarnedAboutObjectNotation = true;
                console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
            }
        }
    }
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = function () { return freezeDraftable(initialState()); };
    }
    else {
        var frozenInitialState_1 = freezeDraftable(initialState);
        getInitialState = function () { return frozenInitialState_1; };
    }
    function reducer(state, action) {
        if (state === void 0) { state = getInitialState(); }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function (_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                }
                else if (!(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/createSlice.ts
var hasWarnedAboutObjectNotation2 = false;
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "development" === "development") {
        if (options.initialState === void 0) {
            console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
        }
    }
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        if (true) {
            if (typeof options.extraReducers === "object") {
                if (!hasWarnedAboutObjectNotation2) {
                    hasWarnedAboutObjectNotation2 = true;
                    console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
        }
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, function (builder) {
            for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
            }
            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
            }
            if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
            }
        });
    }
    var _reducer;
    return {
        name: name,
        reducer: function (state, action) {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function () {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
// src/entities/state_adapter.ts

function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(state)) {
            runMutator(state);
            return state;
        }
        else {
            return (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if ( true && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = Object.keys(state.entities);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var appliedUpdates = false;
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            var entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            var newId = selectId(entity);
            if (update.id !== newId) {
                delete state.entities[update.id];
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            resortEntities(state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        resortEntities(state);
    }
    function resortEntities(state) {
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _c = __spreadValues({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
var createAsyncThunk = (function () {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var displayedWarning = false;
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    },
                    reason: void 0,
                    throwIfAborted: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
                if (true) {
                    if (!displayedWarning) {
                        displayedWarning = true;
                        console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
                    }
                }
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                var started = false;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                var promise2 = function () {
                    return __async(this, null, function () {
                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, conditionResult];
                                case 1:
                                    conditionResult = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (conditionResult === false || abortController.signal.aborted) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    started = true;
                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
                                        name: "AbortError",
                                        message: abortReason || "Aborted"
                                    }); }); });
                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                abort: abort,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 3:
                                    finalAction = _c.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _c.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 5];
                                case 5:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise2, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise2.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/listenerMiddleware/utils.ts
var assertFunction = function (func, expected) {
    if (typeof func !== "function") {
        throw new TypeError(expected + " is not a function");
    }
};
var noop = function () {
};
var catchRejection = function (promise2, onError) {
    if (onError === void 0) { onError = noop; }
    promise2.catch(onError);
    return promise2;
};
var addAbortSignalListener = function (abortSignal, callback) {
    abortSignal.addEventListener("abort", callback, { once: true });
    return function () { return abortSignal.removeEventListener("abort", callback); };
};
var abortControllerWithReason = function (abortController, reason) {
    var signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = /** @class */ (function () {
    function TaskAbortError(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError;
}());
// src/listenerMiddleware/task.ts
var validateActive = function (signal) {
    if (signal.aborted) {
        throw new TaskAbortError(signal.reason);
    }
};
function raceWithSignal(signal, promise2) {
    var cleanup = noop;
    return new Promise(function (resolve, reject) {
        var notifyRejection = function () { return reject(new TaskAbortError(signal.reason)); };
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise2.finally(function () { return cleanup(); }).then(resolve, reject);
    }).finally(function () {
        cleanup = noop;
    });
}
var runTask = function (task2, cleanUp) { return __async(void 0, null, function () {
    var value, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, Promise.resolve()];
            case 1:
                _c.sent();
                return [4 /*yield*/, task2()];
            case 2:
                value = _c.sent();
                return [2 /*return*/, {
                        status: "ok",
                        value: value
                    }];
            case 3:
                error_1 = _c.sent();
                return [2 /*return*/, {
                        status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
                        error: error_1
                    }];
            case 4:
                cleanUp == null ? void 0 : cleanUp();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createPause = function (signal) {
    return function (promise2) {
        return catchRejection(raceWithSignal(signal, promise2).then(function (output) {
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = function (signal) {
    var pause = createPause(signal);
    return function (timeoutMs) {
        return pause(new Promise(function (resolve) { return setTimeout(resolve, timeoutMs); }));
    };
};
// src/listenerMiddleware/index.ts
var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function (parentAbortSignal, parentBlockingPromises) {
    var linkControllers = function (controller) { return addAbortSignalListener(parentAbortSignal, function () { return abortControllerWithReason(controller, parentAbortSignal.reason); }); };
    return function (taskExecutor, opts) {
        assertFunction(taskExecutor, "taskExecutor");
        var childAbortController = new AbortController();
        linkControllers(childAbortController);
        var result = runTask(function () { return __async(void 0, null, function () {
            var result2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        validateActive(parentAbortSignal);
                        validateActive(childAbortController.signal);
                        return [4 /*yield*/, taskExecutor({
                                pause: createPause(childAbortController.signal),
                                delay: createDelay(childAbortController.signal),
                                signal: childAbortController.signal
                            })];
                    case 1:
                        result2 = _c.sent();
                        validateActive(childAbortController.signal);
                        return [2 /*return*/, result2];
                }
            });
        }); }, function () { return abortControllerWithReason(childAbortController, taskCompleted); });
        if (opts == null ? void 0 : opts.autoJoin) {
            parentBlockingPromises.push(result);
        }
        return {
            result: createPause(parentAbortSignal)(result),
            cancel: function () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = function (startListening, signal) {
    var take = function (predicate, timeout) { return __async(void 0, null, function () {
        var unsubscribe, tuplePromise, promises, output;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    validateActive(signal);
                    unsubscribe = function () {
                    };
                    tuplePromise = new Promise(function (resolve, reject) {
                        var stopListening = startListening({
                            predicate: predicate,
                            effect: function (action, listenerApi) {
                                listenerApi.unsubscribe();
                                resolve([
                                    action,
                                    listenerApi.getState(),
                                    listenerApi.getOriginalState()
                                ]);
                            }
                        });
                        unsubscribe = function () {
                            stopListening();
                            reject();
                        };
                    });
                    promises = [
                        tuplePromise
                    ];
                    if (timeout != null) {
                        promises.push(new Promise(function (resolve) { return setTimeout(resolve, timeout, null); }));
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, raceWithSignal(signal, Promise.race(promises))];
                case 2:
                    output = _c.sent();
                    validateActive(signal);
                    return [2 /*return*/, output];
                case 3:
                    unsubscribe();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return function (predicate, timeout) { return catchRejection(take(predicate, timeout)); };
};
var getListenerEntryPropsFrom = function (options) {
    var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
    if (type) {
        predicate = createAction(type).match;
    }
    else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    }
    else if (matcher) {
        predicate = matcher;
    }
    else if (predicate) {
    }
    else {
        throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return { predicate: predicate, type: type, effect: effect };
};
var createListenerEntry = function (options) {
    var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
    var id = nanoid();
    var entry = {
        id: id,
        effect: effect,
        type: type,
        predicate: predicate,
        pending: new Set(),
        unsubscribe: function () {
            throw new Error("Unsubscribe not initialized");
        }
    };
    return entry;
};
var cancelActiveListeners = function (entry) {
    entry.pending.forEach(function (controller) {
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = function (listenerMap) {
    return function () {
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = function (errorHandler, errorToNotify, errorInfo) {
    try {
        errorHandler(errorToNotify, errorInfo);
    }
    catch (errorHandlerError) {
        setTimeout(function () {
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArray([alm + "/error"], args));
};
function createListenerMiddleware(middlewareOptions) {
    var _this = this;
    if (middlewareOptions === void 0) { middlewareOptions = {}; }
    var listenerMap = new Map();
    var extra = middlewareOptions.extra, _c = middlewareOptions.onError, onError = _c === void 0 ? defaultErrorHandler : _c;
    assertFunction(onError, "onError");
    var insertEntry = function (entry) {
        entry.unsubscribe = function () { return listenerMap.delete(entry.id); };
        listenerMap.set(entry.id, entry);
        return function (cancelOptions) {
            entry.unsubscribe();
            if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    var findListenerEntry = function (comparator) {
        for (var _i = 0, _c = Array.from(listenerMap.values()); _i < _c.length; _i++) {
            var entry = _c[_i];
            if (comparator(entry)) {
                return entry;
            }
        }
        return void 0;
    };
    var startListening = function (options) {
        var entry = findListenerEntry(function (existingEntry) { return existingEntry.effect === options.effect; });
        if (!entry) {
            entry = createListenerEntry(options);
        }
        return insertEntry(entry);
    };
    var stopListening = function (options) {
        var _c = getListenerEntryPropsFrom(options), type = _c.type, effect = _c.effect, predicate = _c.predicate;
        var entry = findListenerEntry(function (entry2) {
            var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    var notifyListener = function (entry, action, api, getOriginalState) { return __async(_this, null, function () {
        var internalTaskController, take, autoJoinPromises, listenerError_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    internalTaskController = new AbortController();
                    take = createTakePattern(startListening, internalTaskController.signal);
                    autoJoinPromises = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 6]);
                    entry.pending.add(internalTaskController);
                    return [4 /*yield*/, Promise.resolve(entry.effect(action, assign({}, api, {
                            getOriginalState: getOriginalState,
                            condition: function (predicate, timeout) { return take(predicate, timeout).then(Boolean); },
                            take: take,
                            delay: createDelay(internalTaskController.signal),
                            pause: createPause(internalTaskController.signal),
                            extra: extra,
                            signal: internalTaskController.signal,
                            fork: createFork(internalTaskController.signal, autoJoinPromises),
                            unsubscribe: entry.unsubscribe,
                            subscribe: function () {
                                listenerMap.set(entry.id, entry);
                            },
                            cancelActiveListeners: function () {
                                entry.pending.forEach(function (controller, _, set) {
                                    if (controller !== internalTaskController) {
                                        abortControllerWithReason(controller, listenerCancelled);
                                        set.delete(controller);
                                    }
                                });
                            }
                        })))];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 6];
                case 3:
                    listenerError_1 = _c.sent();
                    if (!(listenerError_1 instanceof TaskAbortError)) {
                        safelyNotifyError(onError, listenerError_1, {
                            raisedBy: "effect"
                        });
                    }
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, Promise.allSettled(autoJoinPromises)];
                case 5:
                    _c.sent();
                    abortControllerWithReason(internalTaskController, listenerCompleted);
                    entry.pending.delete(internalTaskController);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    var middleware = function (api) { return function (next) { return function (action) {
        if (!isAction(action)) {
            return next(action);
        }
        if (addListener.match(action)) {
            return startListening(action.payload);
        }
        if (clearAllListeners.match(action)) {
            clearListenerMiddleware();
            return;
        }
        if (removeListener.match(action)) {
            return stopListening(action.payload);
        }
        var originalState = api.getState();
        var getOriginalState = function () {
            if (originalState === INTERNAL_NIL_TOKEN) {
                throw new Error(alm + ": getOriginalState can only be called synchronously");
            }
            return originalState;
        };
        var result;
        try {
            result = next(action);
            if (listenerMap.size > 0) {
                var currentState = api.getState();
                var listenerEntries = Array.from(listenerMap.values());
                for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
                    var entry = listenerEntries_1[_i];
                    var runListener = false;
                    try {
                        runListener = entry.predicate(action, currentState, originalState);
                    }
                    catch (predicateError) {
                        runListener = false;
                        safelyNotifyError(onError, predicateError, {
                            raisedBy: "predicate"
                        });
                    }
                    if (!runListener) {
                        continue;
                    }
                    notifyListener(entry, action, api, getOriginalState);
                }
            }
        }
        finally {
            originalState = INTERNAL_NIL_TOKEN;
        }
        return result;
    }; }; };
    return {
        middleware: middleware,
        startListening: startListening,
        stopListening: stopListening,
        clearListeners: clearListenerMiddleware
    };
}
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function () { return function (payload) {
    var _c;
    return ({
        payload: payload,
        meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    });
}; };
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
var createQueueWithTimer = function (timeout) {
    return function (notify) {
        setTimeout(notify, timeout);
    };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = function (options) {
    if (options === void 0) { options = { type: "raf" }; }
    return function (next) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var store = next.apply(void 0, args);
        var notifying = true;
        var shouldNotifyAtEndOfTick = false;
        var notificationQueued = false;
        var listeners = new Set();
        var queueCallback = options.type === "tick" ? queueMicrotaskShim : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
        var notifyListeners = function () {
            notificationQueued = false;
            if (shouldNotifyAtEndOfTick) {
                shouldNotifyAtEndOfTick = false;
                listeners.forEach(function (l) { return l(); });
            }
        };
        return Object.assign({}, store, {
            subscribe: function (listener2) {
                var wrappedListener = function () { return notifying && listener2(); };
                var unsubscribe = store.subscribe(wrappedListener);
                listeners.add(listener2);
                return function () {
                    unsubscribe();
                    listeners.delete(listener2);
                };
            },
            dispatch: function (action) {
                var _a;
                try {
                    notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
                    shouldNotifyAtEndOfTick = !notifying;
                    if (shouldNotifyAtEndOfTick) {
                        if (!notificationQueued) {
                            notificationQueued = true;
                            queueCallback(notifyListeners);
                        }
                    }
                    return store.dispatch(action);
                }
                finally {
                    notifying = true;
                }
            }
        });
    }; };
};
// src/index.ts
(0,immer__WEBPACK_IMPORTED_MODULE_2__.enableES5)();

//# sourceMappingURL=redux-toolkit.esm.js.map

/***/ }),

/***/ "./assets/js/src/app/store.js":
/*!************************************!*\
  !*** ./assets/js/src/app/store.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _features_products_data_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/products-data/products-data-reducer */ "./assets/js/src/features/products-data/products-data-reducer.js");
/* harmony import */ var _features_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/wishlists/wishlists-reducer */ "./assets/js/src/features/wishlists/wishlists-reducer.js");
/* harmony import */ var _features_buttons_buttons_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/buttons/buttons-reducer */ "./assets/js/src/features/buttons/buttons-reducer.js");
/* harmony import */ var _features_products_data_invalidate_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/products-data/invalidate-middleware */ "./assets/js/src/features/products-data/invalidate-middleware.js");
/* harmony import */ var _features_wishlists_wishlists_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/wishlists/wishlists-actions */ "./assets/js/src/features/wishlists/wishlists-actions.js");






var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({
  reducer: {
    productsData: _features_products_data_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
    wishlists: _features_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    buttons: _features_buttons_buttons_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat((0,_features_products_data_invalidate_middleware__WEBPACK_IMPORTED_MODULE_3__["default"])());
  }
});
store.dispatch((0,_features_wishlists_wishlists_actions__WEBPACK_IMPORTED_MODULE_4__.fetchWishlists)());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/add-to-wishlist.js":
/*!*********************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/add-to-wishlist.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sub_components_add_to_wishlist_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-components/add-to-wishlist-button */ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var _sub_components_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-components/feedback */ "./assets/js/src/components/add-to-wishlist/sub-components/feedback/index.js");



var AddToWishlist = function AddToWishlist() {
  var BeforeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useComponentsExtension)('beforeAddToWishlistButton');
  var AfterButton = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useComponentsExtension)('afterAddToWishlistButton');
  var ButtonChildren = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useComponentsExtension)('addToWishlistButtonChildren');
  return /*#__PURE__*/React.createElement(React.Fragment, null, BeforeButton && /*#__PURE__*/React.createElement(BeforeButton, null), /*#__PURE__*/React.createElement(_sub_components_add_to_wishlist_button__WEBPACK_IMPORTED_MODULE_0__["default"], null, /*#__PURE__*/React.createElement(ButtonChildren, null)), AfterButton && /*#__PURE__*/React.createElement(AfterButton, null), /*#__PURE__*/React.createElement(_sub_components_feedback__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWishlist);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/hooks/use-feedback.js":
/*!************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/hooks/use-feedback.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_wishlist_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-wishlist-data */ "./assets/js/src/hooks/use-wishlist-data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var _use_product_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-product-data */ "./assets/js/src/components/add-to-wishlist/hooks/use-product-data.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* globals yithWcwlAddToWishlist */





var useFeedback = function useFeedback(productId, attributes, isPerformingAction) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showFeedback = _useState2[0],
    setShowFeedback = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    feedbackAnimation = _useState4[0],
    setFeedbackAnimation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    feedbackMessage = _useState6[0],
    setFeedbackMessage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info'),
    _useState8 = _slicedToArray(_useState7, 2),
    feedbackType = _useState8[0],
    setFeedbackType = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(yithWcwlAddToWishlist.feedback_duration),
    _useState10 = _slicedToArray(_useState9, 2),
    feedbackDuration = _useState10[0],
    setFeedbackDuration = _useState10[1];
  var feedback_type = attributes.feedback_type,
    modal_close_behaviour = attributes.modal_close_behaviour;
  var _useProductData = (0,_use_product_data__WEBPACK_IMPORTED_MODULE_3__["default"])(productId, attributes),
    error = _useProductData.error,
    productData = _useProductData.productData,
    hasDataLoaded = _useProductData.hasDataLoaded;
  var clearFeedback = function clearFeedback() {
    setShowFeedback(false);
    setFeedbackMessage('');
    setFeedbackType('info');
    setFeedbackDuration(yithWcwlAddToWishlist.feedback_duration);
  };
  var addFeedback = function addFeedback(_ref) {
    var message = _ref.message,
      type = _ref.type,
      duration = _ref.duration;
    if (message) {
      type && setFeedbackType(type);
      duration && setFeedbackDuration(duration);
      setFeedbackMessage(message);
      setShowFeedback(true);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (feedbackMessage) {
      setShowFeedback(true);
      if ('modal' !== feedback_type || 'close' === modal_close_behaviour) {
        var FeedbackVisibilityTimer = setTimeout(clearFeedback, feedbackDuration);
        return function () {
          return clearTimeout(FeedbackVisibilityTimer);
        };
      }
    }
  }, [feedbackMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (error) addFeedback({
      message: error,
      type: 'error'
    });
  }, [error]);
  var addedToWishlist = (0,_hooks_use_wishlist_data__WEBPACK_IMPORTED_MODULE_1__.useWishlistData)(productData === null || productData === void 0 ? void 0 : productData.added_to);
  var removedFromWishlist = (0,_hooks_use_wishlist_data__WEBPACK_IMPORTED_MODULE_1__.useWishlistData)(productData === null || productData === void 0 ? void 0 : productData.removed_from);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isPerformingAction && hasDataLoaded && productData !== null && productData !== void 0 && productData.removed_from) {
      var wishlist = removedFromWishlist;
      addFeedback({
        message: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.reactMultipleStringReplace)(yithWcwlAddToWishlist.i18n.feedbacks.removed, [{
          search: '{{product_name}}',
          replace: function replace(match, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
              key: match + i,
              className: 'yith-wcwl-feedback__product-name'
            }, "\"", productData === null || productData === void 0 ? void 0 : productData.name, "\"");
          }
        }, {
          search: '{{wishlist_name}}',
          replace: function replace(match, i) {
            return wishlist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
              key: match + i,
              className: 'yith-wcwl-feedback__wishlist-name'
            }, "\"", wishlist === null || wishlist === void 0 ? void 0 : wishlist.name, "\"") : '';
          }
        }]),
        type: 'product_removed'
      });
    }
  }, [productData === null || productData === void 0 ? void 0 : productData.removed_from]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isPerformingAction && hasDataLoaded && productData !== null && productData !== void 0 && productData.added_to) {
      var wishlist = addedToWishlist;
      addFeedback({
        message: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.reactMultipleStringReplace)(yithWcwlAddToWishlist.i18n.feedbacks.added, [{
          search: '{{product_name}}',
          replace: function replace(match, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
              key: match + i,
              className: 'yith-wcwl-feedback__product-name'
            }, "\"", productData === null || productData === void 0 ? void 0 : productData.name, "\"");
          }
        }, {
          search: '{{wishlist_name}}',
          replace: function replace(match, i) {
            return wishlist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
              key: match + i,
              className: 'yith-wcwl-feedback__wishlist-name'
            }, "\"", wishlist === null || wishlist === void 0 ? void 0 : wishlist.name, "\"") : '';
          }
        }]),
        type: 'product_added'
      });
    }
  }, [productData === null || productData === void 0 ? void 0 : productData.added_to]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!showFeedback) {
      setFeedbackAnimation(true);
    }
  }, [showFeedback]);
  return {
    feedbackType: feedbackType,
    showFeedback: showFeedback,
    feedbackMessage: feedbackMessage,
    feedbackDuration: feedbackDuration,
    feedbackAnimation: feedbackAnimation,
    setFeedbackType: setFeedbackType,
    setShowFeedback: setShowFeedback,
    setFeedbackMessage: setFeedbackMessage,
    setFeedbackDuration: setFeedbackDuration,
    setFeedbackAnimation: setFeedbackAnimation,
    addFeedback: addFeedback,
    clearFeedback: clearFeedback
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFeedback);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/hooks/use-product-data.js":
/*!****************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/hooks/use-product-data.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_products_data_products_data_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/products-data/products-data-actions */ "./assets/js/src/features/products-data/products-data-actions.js");
/* harmony import */ var _features_products_data_products_data_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../features/products-data/products-data-selectors */ "./assets/js/src/features/products-data/products-data-selectors.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var useProductData = function useProductData(productId) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var productData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return (0,_features_products_data_products_data_selectors__WEBPACK_IMPORTED_MODULE_3__.selectProductDataById)(state, productId);
  });
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return (0,_features_products_data_products_data_selectors__WEBPACK_IMPORTED_MODULE_3__.selectError)(state, productId);
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes === null || attributes === void 0 ? void 0 : attributes.exists),
    _useState2 = _slicedToArray(_useState, 2),
    alreadyIn = _useState2[0],
    setAlreadyIn = _useState2[1];
  var hasDataLoaded = undefined !== (productData === null || productData === void 0 ? void 0 : productData.isAdded);
  var isAdded = !!(undefined !== (productData === null || productData === void 0 ? void 0 : productData.isAdded) ? productData === null || productData === void 0 ? void 0 : productData.isAdded : attributes === null || attributes === void 0 ? void 0 : attributes.exists);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!productData) dispatch((0,_features_products_data_products_data_actions__WEBPACK_IMPORTED_MODULE_2__.fetchProductDataAsync)(productId));
  }, [dispatch, productId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (hasDataLoaded && !isAdded) {
      setAlreadyIn(false);
    }
  }, [isAdded]);
  return {
    productData: productData,
    error: error,
    isLoading: productData === null || productData === void 0 ? void 0 : productData.loading,
    count: productData === null || productData === void 0 ? void 0 : productData.count,
    lists: productData === null || productData === void 0 ? void 0 : productData.wishlists,
    isAdded: isAdded,
    alreadyIn: alreadyIn,
    hasDataLoaded: hasDataLoaded
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProductData);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/index.js":
/*!*************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var _variants_add_to_wishlist_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants/add-to-wishlist-icon-button */ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-icon-button.js");
/* harmony import */ var _variants_add_to_wishlist_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variants/add-to-wishlist-button */ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-button/index.js");
/* harmony import */ var _variants_add_to_wishlist_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants/add-to-wishlist-anchor */ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-anchor/index.js");
/* harmony import */ var _utils_button_data_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/button-data-context */ "./assets/js/src/utils/button-data-context.js");





var AddToWishlistButton = function AddToWishlistButton(props) {
  var _Button;
  var style = (0,_utils_button_data_context__WEBPACK_IMPORTED_MODULE_4__.useButtonStyle)();
  var Button = false;
  if (style === 'icon-button') {
    Button = function Button(props) {
      return /*#__PURE__*/React.createElement(_variants_add_to_wishlist_icon_button__WEBPACK_IMPORTED_MODULE_1__["default"], props);
    };
  }
  if (style === 'anchor') {
    Button = function Button(props) {
      return /*#__PURE__*/React.createElement(_variants_add_to_wishlist_anchor__WEBPACK_IMPORTED_MODULE_3__["default"], props);
    };
  }
  if (!Button) {
    Button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonStyle' + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatPascalCaseString)(style));
  }
  if (!Button || (_Button = Button) !== null && _Button !== void 0 && _Button.isEmpty) {
    Button = function Button(props) {
      return /*#__PURE__*/React.createElement(_variants_add_to_wishlist_button__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    };
  }
  return /*#__PURE__*/React.createElement(Button, props);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWishlistButton);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-anchor/add-to-wishlist-anchor.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-anchor/add-to-wishlist-anchor.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../icon */ "./assets/js/src/components/icon/index.js");
/* harmony import */ var _utils_button_data_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utils/button-data-context */ "./assets/js/src/utils/button-data-context.js");



var AddToWishlistAnchor = function AddToWishlistAnchor(_ref) {
  var children = _ref.children;
  var ButtonContentStart = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonContentStart');
  var ButtonContentEnd = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonContentEnd');
  var _useAddToWishlistButt = (0,_utils_button_data_context__WEBPACK_IMPORTED_MODULE_2__.useAddToWishlistButtonData)(),
    ref = _useAddToWishlistButt.ref,
    href = _useAddToWishlistButt.href,
    icon = _useAddToWishlistButt.icon,
    label = _useAddToWishlistButt.label,
    onClick = _useAddToWishlistButt.onClick,
    className = _useAddToWishlistButt.className;
  return /*#__PURE__*/React.createElement("a", {
    className: className,
    onClick: onClick,
    ref: ref,
    href: href
  }, /*#__PURE__*/React.createElement(ButtonContentStart, null), /*#__PURE__*/React.createElement(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: icon,
    className: 'yith-wcwl-add-to-wishlist-button-icon'
  }), /*#__PURE__*/React.createElement("span", {
    className: 'yith-wcwl-add-to-wishlist-button__label'
  }, label), children, /*#__PURE__*/React.createElement(ButtonContentEnd, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWishlistAnchor);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-anchor/index.js":
/*!*********************************************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-anchor/index.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _add_to_wishlist_anchor__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _add_to_wishlist_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-wishlist-anchor */ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-anchor/add-to-wishlist-anchor.js");


/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-button/add-to-wishlist-button.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-button/add-to-wishlist-button.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../icon */ "./assets/js/src/components/icon/index.js");
/* harmony import */ var _utils_button_data_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utils/button-data-context */ "./assets/js/src/utils/button-data-context.js");



var AddToWishlistButton = function AddToWishlistButton(_ref) {
  var children = _ref.children;
  var _useAddToWishlistButt = (0,_utils_button_data_context__WEBPACK_IMPORTED_MODULE_2__.useAddToWishlistButtonData)(),
    ref = _useAddToWishlistButt.ref,
    href = _useAddToWishlistButt.href,
    icon = _useAddToWishlistButt.icon,
    label = _useAddToWishlistButt.label,
    onClick = _useAddToWishlistButt.onClick,
    className = _useAddToWishlistButt.className;
  var ButtonContentStart = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonContentStart');
  var ButtonContentEnd = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonContentEnd');
  var Button = function Button() {
    return /*#__PURE__*/React.createElement("button", {
      className: className,
      onClick: onClick,
      ref: ref
    }, /*#__PURE__*/React.createElement(ButtonContentStart, null), /*#__PURE__*/React.createElement(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      iconName: icon,
      wrapper: 'div',
      className: 'yith-wcwl-add-to-wishlist-button-icon'
    }), /*#__PURE__*/React.createElement("span", {
      className: 'yith-wcwl-add-to-wishlist-button__label'
    }, label), children, /*#__PURE__*/React.createElement(ButtonContentEnd, null));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    className: 'yith-wcwl-add-to-wishlist-button-anchor-wrapper'
  }, /*#__PURE__*/React.createElement(Button, null)) : /*#__PURE__*/React.createElement(Button, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWishlistButton);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-button/index.js":
/*!*********************************************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-button/index.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _add_to_wishlist_button__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _add_to_wishlist_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-wishlist-button */ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-button/add-to-wishlist-button.js");


/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-icon-button.js":
/*!********************************************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/add-to-wishlist-button/variants/add-to-wishlist-icon-button.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icon */ "./assets/js/src/components/icon/index.js");
/* harmony import */ var _utils_button_data_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/button-data-context */ "./assets/js/src/utils/button-data-context.js");



var AddToWishlistIconButton = function AddToWishlistIconButton(_ref) {
  var children = _ref.children;
  var _useAddToWishlistButt = (0,_utils_button_data_context__WEBPACK_IMPORTED_MODULE_2__.useAddToWishlistButtonData)(),
    ref = _useAddToWishlistButt.ref,
    href = _useAddToWishlistButt.href,
    icon = _useAddToWishlistButt.icon,
    onClick = _useAddToWishlistButt.onClick,
    className = _useAddToWishlistButt.className;
  var ButtonContentStart = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonContentStart');
  var ButtonContentEnd = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('buttonContentEnd');
  var IconButton = /*#__PURE__*/React.createElement("button", {
    className: className,
    onClick: onClick,
    ref: ref
  }, /*#__PURE__*/React.createElement(ButtonContentStart, null), /*#__PURE__*/React.createElement(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: icon,
    className: 'yith-wcwl-add-to-wishlist-button-icon'
  }), /*#__PURE__*/React.createElement(ButtonContentEnd, null), children);
  return /*#__PURE__*/React.createElement(React.Fragment, null, href ? /*#__PURE__*/React.createElement("a", {
    href: href
  }, IconButton) : IconButton);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWishlistIconButton);

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/feedback/hooks/use-feedback-data.js":
/*!*****************************************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/feedback/hooks/use-feedback-data.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils */ "./assets/js/src/utils/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useButtonData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useButtonData)(),
    feedbackMessage = _useButtonData.feedbackMessage,
    feedbackType = _useButtonData.feedbackType,
    showFeedback = _useButtonData.showFeedback,
    buttonRef = _useButtonData.buttonRef,
    isOverProductImage = _useButtonData.isOverProductImage,
    feedback_type = _useButtonData.richAttributes.feedback_type,
    feedbackDuration = _useButtonData.feedbackDuration;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    feedbackFadeOut = _useState2[0],
    setFeedbackFadeOut = _useState2[1];
  var container = 'error' !== feedbackType && isOverProductImage && buttonRef !== null && buttonRef !== void 0 && buttonRef.current ? buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current.closest(yithWcwlAddToWishlist.containerSelectors.productContainer.join(', ')).querySelector(yithWcwlAddToWishlist.containerSelectors.thumbnailContainer.join(', ')) : false;
  var feedbacksContainer = document.querySelector('div.yith-wcwl-feedback-messages-container');
  if (!container && !feedbacksContainer) {
    feedbacksContainer = document.body.appendChild(document.createElement('div'));
    feedbacksContainer.classList.add('yith-wcwl-feedback-messages-container');
  }
  var RenderFeedback = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useComponentsExtension)('renderFeedback');
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(['yith-wcwl-add-to-wishlist__feedback', 'yith-wcwl-add-to-wishlist__feedback--' + feedbackType, {
    'yith-wcwl-add-to-wishlist__feedback-on-product-image': !!container,
    'yith-wcwl-fade-out': feedbackFadeOut
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (feedbackMessage && 'modal' !== feedback_type) {
      setFeedbackFadeOut(false);
      var fadeOutTimer = setTimeout(function () {
        setFeedbackFadeOut(true);
      }, feedbackDuration - 500);
      return function () {
        return clearTimeout(fadeOutTimer);
      };
    }
  }, [feedbackMessage]);
  return {
    className: className,
    showFeedback: showFeedback,
    RenderFeedback: RenderFeedback,
    feedbackMessage: feedbackMessage,
    container: container ? container : feedbacksContainer
  };
});

/***/ }),

/***/ "./assets/js/src/components/add-to-wishlist/sub-components/feedback/index.js":
/*!***********************************************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/sub-components/feedback/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lapilli-ui/components */ "@lapilli-ui/components");
/* harmony import */ var _lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_feedback_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/use-feedback-data */ "./assets/js/src/components/add-to-wishlist/sub-components/feedback/hooks/use-feedback-data.js");
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }




var Feedback = function Feedback() {
  _objectDestructuringEmpty((0,_hooks_use_feedback_data__WEBPACK_IMPORTED_MODULE_3__["default"])());
  var _useFeedbackData2 = (0,_hooks_use_feedback_data__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    className = _useFeedbackData2.className,
    showFeedback = _useFeedbackData2.showFeedback,
    RenderFeedback = _useFeedbackData2.RenderFeedback,
    feedbackMessage = _useFeedbackData2.feedbackMessage,
    container = _useFeedbackData2.container;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showFeedback && (RenderFeedback && !(RenderFeedback !== null && RenderFeedback !== void 0 && RenderFeedback.isEmpty) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RenderFeedback, null) : /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_components__WEBPACK_IMPORTED_MODULE_1__.Paper, {
    className: className,
    shadowColor: "secondaryGlow",
    elevation: 4
  }, feedbackMessage), container)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

/***/ }),

/***/ "./assets/js/src/components/icon/index.js":
/*!************************************************!*\
  !*** ./assets/js/src/components/icon/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./assets/js/src/utils/index.js");
var _excluded = ["iconName", "wrapper", "height", "width", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



var ArrowDown = function ArrowDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
};
ArrowDown.defaultProps = {
  fill: "none",
  strokeWidth: "2.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Bookmark = function Bookmark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
  }));
};
Bookmark.defaultProps = {
  id: "yith-wcwl-icon-bookmark",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var BookmarkOutline = function BookmarkOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
  }));
};
BookmarkOutline.defaultProps = {
  id: "yith-wcwl-icon-bookmark-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Calculator = function Calculator(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z"
  }));
};
Calculator.defaultProps = {
  id: "yith-wcwl-icon-calculator",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var CalculatorOutline = function CalculatorOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
  }));
};
CalculatorOutline.defaultProps = {
  id: "yith-wcwl-icon-calculator-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ChatBubbleLeftEllipsis = function ChatBubbleLeftEllipsis(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
  }));
};
ChatBubbleLeftEllipsis.defaultProps = {
  id: "yith-wcwl-icon-chat-bubble-left-ellipsis",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ChatBubbleLeftEllipsisOutline = function ChatBubbleLeftEllipsisOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
  }));
};
ChatBubbleLeftEllipsisOutline.defaultProps = {
  id: "yith-wcwl-icon-chat-bubble-left-ellipsis-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentArrowUp = function DocumentArrowUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
  }));
};
DocumentArrowUp.defaultProps = {
  id: "yith-wcwl-icon-document-arrow-up",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentArrowUpOutline = function DocumentArrowUpOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
};
DocumentArrowUpOutline.defaultProps = {
  id: "yith-wcwl-icon-document-arrow-up-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentChartBar = function DocumentChartBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
  }));
};
DocumentChartBar.defaultProps = {
  id: "yith-wcwl-icon-document-chart-bar",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentChartBarOutline = function DocumentChartBarOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
};
DocumentChartBarOutline.defaultProps = {
  id: "yith-wcwl-icon-document-chart-bar-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentText = function DocumentText(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
  }));
};
DocumentText.defaultProps = {
  id: "yith-wcwl-icon-document-text",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentTextOutline = function DocumentTextOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
};
DocumentTextOutline.defaultProps = {
  id: "yith-wcwl-icon-document-text-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Envelope = function Envelope(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
  }));
};
Envelope.defaultProps = {
  id: "yith-wcwl-icon-envelope",
  className: "yith-wcwl-icon-svg",
  width: "12",
  height: "12",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var EnvelopeOutline = function EnvelopeOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  }));
};
EnvelopeOutline.defaultProps = {
  id: "yith-wcwl-icon-envelope-outline",
  className: "yith-wcwl-icon-svg",
  width: "12",
  height: "12",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Eye = function Eye(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
};
Eye.defaultProps = {
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Facebook = function Facebook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m8.792 6.75.334-2.172H7.042V3.17c0-.594.29-1.173 1.224-1.173h.948V.146S8.354 0 7.532 0C5.816 0 4.694 1.04 4.694 2.923v1.655H2.786V6.75h1.908V12h2.348V6.75h1.75Z",
    fill: "currentColor"
  }));
};
Facebook.defaultProps = {
  id: "yith-wcwl-icon-facebook",
  className: "yith-wcwl-icon-svg",
  width: "12",
  height: "12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Heart = function Heart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
  }));
};
Heart.defaultProps = {
  id: "yith-wcwl-icon-heart",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var HeartArrows = function HeartArrows(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-arrows-A",
    d: "m19.5 6.625 3.042 2.75-.292-3.813c0-.094-2.938-4.625-3.219-4.719S2.938 1.75 2.938 1.75L-.906 9.094l1.438 11.24 8.547 2.697 6.039-2.063.466-1.427-2.291-1.875L19.5 6.625z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "heart-arrows-B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#heart-arrows-A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-arrows-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    d: "M21.375 8.094c0-2.588-2.187-4.688-4.884-4.688-2.016 0-3.747 1.173-4.491 2.847-.745-1.674-2.476-2.847-4.493-2.847-2.695 0-4.882 2.099-4.882 4.688 0 7.521 9.375 12.5 9.375 12.5s9.375-4.98 9.375-12.5z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16.287 11.652h4.999m-1.343-2.277 2.37 2.277-2.37 2.141m-4.817 2.232h5m-3.657-2.277-2.368 2.277 2.368 2.141",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }));
};
HeartArrows.defaultProps = {
  id: "yith-wcwl-icon-heart-arrows",
  className: "yith-wcwl-icon-svg",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
var HeartArrowsLight = function HeartArrowsLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M192.183 23.676h13.066m-5.644-5.904 6.142 5.904-6.142 5.548m-12.597 4.996h14.654m-9.479-5.903-6.14 5.903 6.14 5.549",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-arrow-lightA",
    d: "m204.334 13.5 5.677 6.778L216.333-1 171-4.5h-18.5l-2 56.5c.5 0 27 3.166 28 2.833s10.613-11.5 10.613-11.5l-5.729-3.564L180.333 24l8.871-12.833 15.13 2.333z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "heart-arrow-light-B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#heart-arrow-lightA"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-arrow-light-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "#222",
    strokeWidth: "2",
    strokeLinejoin: "round",
    d: "M158.912 4.946c-5.272 5.261-5.272 13.792 0 19.054l23.047 23 23.045-23c5.272-5.262 5.272-13.792 0-19.054a13.52 13.52 0 0 0-19.092 0l-3.953 3.946-3.955-3.946c-5.273-5.261-13.819-5.261-19.092 0z"
  })));
};
HeartArrowsLight.defaultProps = {
  id: "yith-wcwl-icon-heart-arrows-light",
  className: "yith-wcwl-icon-svg yith-wcwl-icon-svg--light",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "153.958 0 56 48"
};
var HeartCheck = function HeartCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M23 15.197c0 2.84-2.297 5.137-5.136 5.137s-5.136-2.297-5.136-5.137 2.297-5.135 5.136-5.135S23 12.359 23 15.197zm-7.869.356 1.875 1.802 3.175-3.209"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-check-A",
    d: "m20.371 10.714 1.566.755.813-5.906c0-.093-3.188-4.625-3.469-4.719S3.063 1.75 3.063 1.75L-.843 9.094l1.406 11.24 8.531 2.697 6.031-2.063.156-1.063-1.906-1.594 6.996-7.597z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "heart-check-B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#heart-check-A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-check-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    d: "M21.375 8.094c0-2.588-2.187-4.688-4.884-4.688-2.016 0-3.747 1.173-4.491 2.847-.745-1.674-2.476-2.847-4.493-2.847-2.695 0-4.882 2.099-4.882 4.688 0 7.521 9.375 12.5 9.375 12.5s9.375-4.98 9.375-12.5z"
  })));
};
HeartCheck.defaultProps = {
  id: "yith-wcwl-icon-heart-check",
  className: "yith-wcwl-icon-svg",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
var HeartCheckLight = function HeartCheckLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-check-light-A",
    d: "m284.833 11.167 8.764 1.529L297.666-1l-45.333-3.5h-18.5l-2 56.5c.5 0 27 3.166 28 2.833s18.5-18.333 18.5-18.333l-8.833-9-7.834-3.5 8.871-12.833h14.296z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "heart-check-light-B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    href: "#heart-check-light-A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-check-light-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "#222",
    strokeWidth: "2",
    strokeLinejoin: "round",
    d: "M240.245 4.946c-5.272 5.261-5.272 13.792 0 19.054l23.047 23 23.045-23c5.272-5.262 5.272-13.792 0-19.054a13.52 13.52 0 0 0-19.092 0l-3.953 3.946-3.955-3.946c-5.273-5.261-13.819-5.261-19.092 0z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "currentColor",
    d: "m279.486 31.831-7.447-8.148 2.953-2.699 4.604 5.037 10.27-10.425 2.85 2.808z"
  }));
};
HeartCheckLight.defaultProps = {
  id: "yith-wcwl-icon-heart-check-light",
  className: "yith-wcwl-icon-svg yith-wcwl-icon-svg--light",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "235.291 0 58.542 48"
};
var HeartLight = function HeartLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-check-light-A",
    d: "m284.833 11.167 8.764 1.529L297.666-1l-45.333-3.5h-18.5l-2 56.5c.5 0 27 3.166 28 2.833s18.5-18.333 18.5-18.333l-8.833-9-7.834-3.5 8.871-12.833h14.296z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-check-light-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "#222",
    strokeWidth: "2",
    strokeLinejoin: "round",
    d: "M240.245 4.946c-5.272 5.261-5.272 13.792 0 19.054l23.047 23 23.045-23c5.272-5.262 5.272-13.792 0-19.054a13.52 13.52 0 0 0-19.092 0l-3.953 3.946-3.955-3.946c-5.273-5.261-13.819-5.261-19.092 0z"
  })));
};
HeartLight.defaultProps = {
  id: "yith-wcwl-icon-heart-light",
  className: "yith-wcwl-icon-svg yith-wcwl-icon-svg--light",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "234.05 0 58.542 48"
};
var HeartOutline = function HeartOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  }));
};
HeartOutline.defaultProps = {
  id: "yith-wcwl-icon-heart-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var HeartRemove = function HeartRemove(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "m16.577 13.922 2.563 2.563m.011-2.563-2.563 2.563M23 15.197c0 2.84-2.297 5.137-5.136 5.137s-5.136-2.297-5.136-5.137 2.297-5.135 5.136-5.135S23 12.359 23 15.197z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-remove-A",
    d: "m20.371 10.714 1.566.755.813-5.906c0-.093-3.188-4.625-3.469-4.719S3.063 1.75 3.063 1.75L-.843 9.094l1.406 11.24 8.531 2.697 6.031-2.063.156-1.063-1.906-1.594 6.996-7.597z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "heart-remove-B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#heart-remove-A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-remove-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    d: "M21.375 8.094c0-2.588-2.187-4.688-4.884-4.688-2.016 0-3.747 1.173-4.491 2.847-.745-1.674-2.476-2.847-4.493-2.847-2.695 0-4.882 2.099-4.882 4.688 0 7.521 9.375 12.5 9.375 12.5s9.375-4.98 9.375-12.5z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M45.801 10.208h4.573m-1.228-2.083 2.167 2.083-2.167 1.959m-4.407 2.041h4.574m-3.345-2.083-2.167 2.083 2.167 1.958",
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }));
};
HeartRemove.defaultProps = {
  id: "yith-wcwl-icon-heart-remove",
  className: "yith-wcwl-icon-svg",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
var HeartRemoveLight = function HeartRemoveLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m123.109 27.936 7.714 7.715m.032-7.715-7.714 7.715m16.165-3.873a12.32 12.32 0 1 1-24.646 0 12.32 12.32 0 1 1 24.646 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "heart-remove-light-A",
    d: "m136.167 17.772 4.396 4.836 6.771-26.275L99.5-6.833 81.167-4.5c-.167-.167.5 44.999 1 45.333s10.334 19.333 11.167 19 27.833-4.999 27.833-5.666-2.5-8.5-2.5-8.5l-6.5-5.898 24-21.997z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "heart-remove-light-B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#heart-remove-light-A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#heart-remove-light-B)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    stroke: "#222",
    strokeWidth: "2",
    strokeLinejoin: "round",
    d: "M90.287 4.946c-5.272 5.261-5.272 13.792 0 19.054l23.047 23 23.045-23c5.272-5.262 5.272-13.792 0-19.054a13.52 13.52 0 0 0-19.092 0l-3.953 3.946-3.955-3.946c-5.273-5.261-13.819-5.261-19.092 0z"
  })));
};
HeartRemoveLight.defaultProps = {
  id: "yith-wcwl-icon-heart-remove-light",
  className: "yith-wcwl-icon-svg yith-wcwl-icon-svg--light",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "85.333 0 56 48"
};
var Pinterest = function Pinterest(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.289 0C3.822 0 1.384 1.645 1.384 4.306c0 1.693.952 2.654 1.529 2.654.238 0 .375-.663.375-.85 0-.224-.57-.7-.57-1.63 0-1.934 1.472-3.304 3.376-3.304 1.637 0 2.849.93 2.849 2.64 0 1.276-.512 3.671-2.171 3.671-.599 0-1.111-.433-1.111-1.053 0-.909.635-1.789.635-2.727 0-1.591-2.258-1.303-2.258.62 0 .405.05.852.23 1.22-.33 1.428-1.009 3.556-1.009 5.027 0 .454.065.902.108 1.356.082.091.041.082.166.036 1.212-1.659 1.169-1.983 1.717-4.154.296.562 1.06.865 1.666.865 2.553 0 3.7-2.488 3.7-4.732C10.616 1.558 8.553 0 6.29 0Z",
    fill: "currentColor"
  }));
};
Pinterest.defaultProps = {
  id: "yith-wcwl-icon-pinterest",
  className: "yith-wcwl-icon-svg",
  width: "12",
  height: "12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Plus = function Plus(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
  }));
};
Plus.defaultProps = {
  id: "yith-wcwl-icon-plus",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var PlusCircle = function PlusCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
  }));
};
PlusCircle.defaultProps = {
  id: "yith-wcwl-icon-plus-circle",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var PlusCircleOutline = function PlusCircleOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
};
PlusCircleOutline.defaultProps = {
  id: "yith-wcwl-icon-plus-circle-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var QuestionMarkCircle = function QuestionMarkCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502a2.28 2.28 0 0 0 .503-.331c.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
  }));
};
QuestionMarkCircle.defaultProps = {
  id: "yith-wcwl-icon-question-mark-circle",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var QuestionMarkCircleOutline = function QuestionMarkCircleOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
  }));
};
QuestionMarkCircleOutline.defaultProps = {
  id: "yith-wcwl-icon-question-mark-circle-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ReceiptPercent = function ReceiptPercent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
  }));
};
ReceiptPercent.defaultProps = {
  id: "yith-wcwl-icon-receipt-percent",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ReceiptPercentOutline = function ReceiptPercentOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
};
ReceiptPercentOutline.defaultProps = {
  id: "yith-wcwl-icon-receipt-percent-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ShoppingBag = function ShoppingBag(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
  }));
};
ShoppingBag.defaultProps = {
  id: "yith-wcwl-icon-shopping-bag",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ShoppingBagOutline = function ShoppingBagOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
};
ShoppingBagOutline.defaultProps = {
  id: "yith-wcwl-icon-shopping-bag-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ShoppingCart = function ShoppingCart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25Zm1.5 18a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm12.75 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
  }));
};
ShoppingCart.defaultProps = {
  id: "yith-wcwl-icon-shopping-cart",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var ShoppingCartOutline = function ShoppingCartOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  }));
};
ShoppingCartOutline.defaultProps = {
  id: "yith-wcwl-icon-shopping-cart-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Star = function Star(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
  }));
};
Star.defaultProps = {
  id: "yith-wcwl-icon-star",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var StarOutline = function StarOutline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
};
StarOutline.defaultProps = {
  id: "yith-wcwl-icon-star-outline",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var Trash = function Trash(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
};
Trash.defaultProps = {
  id: "yith-wcwl-icon-trash",
  className: "yith-wcwl-icon-svg",
  fill: "none",
  strokeWidth: "1.5",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var WarningTriangle = function WarningTriangle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};
WarningTriangle.defaultProps = {
  id: "yith-wcwl-icon-warning-triangle",
  className: "yith-wcwl-icon-svg",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
};
var Whatsapp = function Whatsapp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#clip0_1126_7618)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10.203 1.744A5.902 5.902 0 0 0 5.997 0 5.954 5.954 0 0 0 .844 8.92L0 12l3.153-.828a5.928 5.928 0 0 0 2.842.723h.002C9.273 11.896 12 9.229 12 5.95c0-1.588-.675-3.08-1.797-4.205Zm-4.206 9.15c-.889 0-1.76-.239-2.518-.689l-.179-.107-1.87.49.499-1.824-.118-.187a4.926 4.926 0 0 1-.756-2.63A4.95 4.95 0 0 1 6 1.003c1.32 0 2.56.515 3.493 1.45.932.934 1.505 2.175 1.502 3.495 0 2.727-2.274 4.945-4.998 4.945Zm2.711-3.702a21.494 21.494 0 0 0-1.015-.482c-.137-.051-.236-.075-.335.075-.1.15-.383.482-.471.584-.086.099-.174.112-.322.037-.873-.436-1.446-.78-2.022-1.768-.153-.262.153-.243.436-.811.049-.1.025-.185-.013-.26-.037-.075-.335-.806-.458-1.104-.12-.289-.244-.249-.335-.254-.085-.005-.185-.005-.284-.005a.55.55 0 0 0-.396.184c-.137.15-.52.51-.52 1.24 0 .732.533 1.439.606 1.538.075.1 1.047 1.6 2.539 2.245.943.407 1.312.442 1.784.372.286-.043.878-.359 1.002-.707.123-.348.123-.646.085-.707-.035-.067-.134-.105-.281-.177Z",
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "clip0_1126_7618"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#fff",
    d: "M0 0h12v12H0z"
  }))));
};
Whatsapp.defaultProps = {
  id: "yith-wcwl-icon-whatsapp",
  className: "yith-wcwl-icon-svg",
  width: "12",
  height: "12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var XTwitter = function XTwitter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.45.576h1.84L7.27 5.171 12 11.424H8.297L5.395 7.632l-3.317 3.792H.235l4.3-4.916L0 .576h3.797l2.62 3.466L9.45.576Zm-.647 9.747h1.02L3.24 1.62H2.146l6.657 8.704Z",
    fill: "currentColor"
  }));
};
XTwitter.defaultProps = {
  id: "yith-wcwl-icon-x-twitter",
  className: "yith-wcwl-icon-svg",
  width: "12",
  height: "12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var iconMap = {
  'arrow-down': ArrowDown,
  'bookmark': Bookmark,
  'bookmark-outline': BookmarkOutline,
  'calculator': Calculator,
  'calculator-outline': CalculatorOutline,
  'chat-bubble-left-ellipsis': ChatBubbleLeftEllipsis,
  'chat-bubble-left-ellipsis-outline': ChatBubbleLeftEllipsisOutline,
  'document-arrow-up': DocumentArrowUp,
  'document-arrow-up-outline': DocumentArrowUpOutline,
  'document-chart-bar': DocumentChartBar,
  'document-chart-bar-outline': DocumentChartBarOutline,
  'document-text': DocumentText,
  'document-text-outline': DocumentTextOutline,
  'envelope': Envelope,
  'envelope-outline': EnvelopeOutline,
  'eye': Eye,
  'facebook': Facebook,
  'heart': Heart,
  'heart-arrows': HeartArrows,
  'heart-arrows-light': HeartArrowsLight,
  'heart-check': HeartCheck,
  'heart-check-light': HeartCheckLight,
  'heart-light': HeartLight,
  'heart-outline': HeartOutline,
  'heart-remove': HeartRemove,
  'heart-remove-light': HeartRemoveLight,
  'pinterest': Pinterest,
  'plus': Plus,
  'plus-circle': PlusCircle,
  'plus-circle-outline': PlusCircleOutline,
  'question-mark-circle': QuestionMarkCircle,
  'question-mark-circle-outline': QuestionMarkCircleOutline,
  'receipt-percent': ReceiptPercent,
  'receipt-percent-outline': ReceiptPercentOutline,
  'shopping-bag': ShoppingBag,
  'shopping-bag-outline': ShoppingBagOutline,
  'shopping-cart': ShoppingCart,
  'shopping-cart-outline': ShoppingCartOutline,
  'star': Star,
  'star-outline': StarOutline,
  'trash': Trash,
  'warning-triangle': WarningTriangle,
  'whatsapp': Whatsapp,
  'x-twitter': XTwitter
};
function Icon(_ref) {
  var iconName = _ref.iconName,
    _ref$wrapper = _ref.wrapper,
    wrapper = _ref$wrapper === void 0 ? 'none' : _ref$wrapper,
    height = _ref.height,
    width = _ref.width,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  if (height || width) {
    if (!(props !== null && props !== void 0 && props.style)) {
      props.style = {};
    }
    height && (props.style.height = height);
    width && (props.style.width = width);
  }
  var SelectedIcon = iconMap[iconName];
  if (!SelectedIcon && !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidHttpUrl)(iconName)) {
    return null;
  }
  props.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('yith-wcwl-icon', {
    'yith-wcwl-icon-svg--light': iconName.endsWith('-light'),
    'yith-wcwl-icon-svg': !!SelectedIcon,
    'yith-wcwl-custom-icon': !SelectedIcon
  }, className);
  var iconElement = SelectedIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedIcon, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", _extends({
    src: iconName,
    alt: "Add to wishlist icon"
  }, props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, wrapper === 'div' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "yith-wcwl-icon-svg__wrapper"
  }, iconElement), wrapper === 'span' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "yith-wcwl-icon-svg__wrapper"
  }, iconElement), wrapper === 'none' && iconElement);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./assets/js/src/features/buttons/buttons-reducer.js":
/*!***********************************************************!*\
  !*** ./assets/js/src/features/buttons/buttons-reducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeAllDropdowns: () => (/* binding */ closeAllDropdowns),
/* harmony export */   closeDropdown: () => (/* binding */ closeDropdown),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openDropdown: () => (/* binding */ openDropdown),
/* harmony export */   toggleDropdown: () => (/* binding */ toggleDropdown)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var initialState = {
  buttons: {}
};
var buttonsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'buttons',
  initialState: initialState,
  reducers: {
    closeDropdown: function closeDropdown(state, action) {
      var id = action.payload.id;
      state.buttons[id] = _objectSpread(_objectSpread({}, state.buttons[id]), {}, {
        isDropdownOpen: false
      });
    },
    openDropdown: function openDropdown(state, action) {
      var id = action.payload.id;
      state.buttons[id] = _objectSpread(_objectSpread({}, state.buttons[id]), {}, {
        isDropdownOpen: true
      });
    },
    toggleDropdown: function toggleDropdown(state, action) {
      var _state$buttons$id;
      var id = action.payload.id;
      state.buttons[id] = _objectSpread(_objectSpread({}, state.buttons[id]), {}, {
        isDropdownOpen: !((_state$buttons$id = state.buttons[id]) !== null && _state$buttons$id !== void 0 && _state$buttons$id.isDropdownOpen)
      });
    },
    closeAllDropdowns: function closeAllDropdowns(state, action) {
      var _action$payload;
      var idToExclude = action === null || action === void 0 || (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.id;
      Object.keys(state.buttons).forEach(function (id) {
        if (idToExclude !== id) {
          state.buttons[id].isDropdownOpen = false;
        }
      });
    }
  }
});
var actions = buttonsSlice.actions,
  reducer = buttonsSlice.reducer;
var openDropdown = actions.openDropdown,
  closeDropdown = actions.closeDropdown,
  toggleDropdown = actions.toggleDropdown,
  closeAllDropdowns = actions.closeAllDropdowns;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./assets/js/src/features/products-data/invalidate-middleware.js":
/*!***********************************************************************!*\
  !*** ./assets/js/src/features/products-data/invalidate-middleware.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_data_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-data-actions */ "./assets/js/src/features/products-data/products-data-actions.js");
/* harmony import */ var _wishlists_wishlists_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlists/wishlists-actions */ "./assets/js/src/features/wishlists/wishlists-actions.js");


var INVALIDATION_INTERVAL = 30000;
var createInvalidateMiddleware = function createInvalidateMiddleware() {
  var lastChecked = Date.now();
  return function (store) {
    return function (next) {
      return function (action) {
        var forceInvalidation = 'FORCE_INVALIDATION' === (action === null || action === void 0 ? void 0 : action.type);
        if (forceInvalidation || Date.now() - lastChecked >= INVALIDATION_INTERVAL) {
          lastChecked = Date.now();
          var state = store.getState();
          var products = state.productsData.products;
          store.dispatch((0,_products_data_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProductsDataAsync)(Object.keys(products)));
          store.dispatch((0,_wishlists_wishlists_actions__WEBPACK_IMPORTED_MODULE_1__.fetchWishlists)());
        }
        return next(action);
      };
    };
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInvalidateMiddleware);

/***/ }),

/***/ "./assets/js/src/features/products-data/products-data-actions.js":
/*!***********************************************************************!*\
  !*** ./assets/js/src/features/products-data/products-data-actions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProductToWishlist: () => (/* binding */ addProductToWishlist),
/* harmony export */   createWishlistAndAddProduct: () => (/* binding */ createWishlistAndAddProduct),
/* harmony export */   fetchProductDataAsync: () => (/* binding */ fetchProductDataAsync),
/* harmony export */   fetchProductsDataAsync: () => (/* binding */ fetchProductsDataAsync),
/* harmony export */   moveProductToAnotherWishlist: () => (/* binding */ moveProductToAnotherWishlist),
/* harmony export */   removeProductFromWishlist: () => (/* binding */ removeProductFromWishlist)
/* harmony export */ });
/* harmony import */ var _products_data_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-data-reducer */ "./assets/js/src/features/products-data/products-data-reducer.js");
/* harmony import */ var _wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlists/wishlists-reducer */ "./assets/js/src/features/wishlists/wishlists-reducer.js");
/* harmony import */ var _utils_add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/add-to-wishlist-api */ "./assets/js/src/utils/add-to-wishlist-api.js");
/* harmony import */ var _utils_wishlist_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/wishlist-api */ "./assets/js/src/utils/wishlist-api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var fetchProductDataAsync = function fetchProductDataAsync(productId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var product;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataStart)({
              productId: productId
            }));
            _context.prev = 1;
            _context.next = 4;
            return _utils_add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_2__["default"].fetchProductDataDebounced(productId);
          case 4:
            product = _context.sent;
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataSuccess)({
              productId: productId,
              data: product
            }));
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataFailure)({
              productId: productId,
              error: _context.t0.message
            }));
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchProductsDataAsync = function fetchProductsDataAsync(productIds) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      var products;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductsDataStart)({
              productIds: productIds
            }));
            _context2.prev = 1;
            _context2.next = 4;
            return _utils_add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_2__["default"].fetchProductsData(productIds);
          case 4:
            products = _context2.sent;
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductsDataSuccess)({
              productIds: productIds,
              data: products
            }));
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductsDataFailure)({
              productIds: productIds,
              error: _context2.t0.message
            }));
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 8]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var addProductToWishlist = function addProductToWishlist(productId) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      var isCreatingWishlist, _yield$addToWishlistA, product_data, wishlist_data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            isCreatingWishlist = 'default' === (args === null || args === void 0 ? void 0 : args.wishlist_id);
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataStart)({
              productId: productId
            }));
            isCreatingWishlist && dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsStart)());
            _context3.prev = 3;
            _context3.next = 6;
            return _utils_add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_2__["default"].addToWishlist(_objectSpread({
              product_id: productId
            }, args));
          case 6:
            _yield$addToWishlistA = _context3.sent;
            product_data = _yield$addToWishlistA.product_data;
            wishlist_data = _yield$addToWishlistA.wishlist_data;
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataSuccess)({
              productId: productId,
              data: product_data
            }));
            isCreatingWishlist && dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsSuccess)({
              data: wishlist_data
            }));
            _context3.next = 17;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](3);
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataFailure)({
              productId: productId,
              error: _context3.t0.message
            }));
            isCreatingWishlist && dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsFailure)());
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 13]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var removeProductFromWishlist = function removeProductFromWishlist(productId, args) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      var _yield$addToWishlistA2, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataStart)({
              productId: productId
            }));
            _context4.prev = 1;
            _context4.next = 4;
            return _utils_add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_2__["default"].removeFromWishlist(_objectSpread({
              product_id: productId
            }, args));
          case 4:
            _yield$addToWishlistA2 = _context4.sent;
            data = _yield$addToWishlistA2.product_data;
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataSuccess)({
              productId: productId,
              data: data
            }));
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataFailure)({
              productId: productId,
              error: _context4.t0.message
            }));
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 9]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var moveProductToAnotherWishlist = function moveProductToAnotherWishlist(productId, args) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch) {
      var isCreatingWishlist, _yield$addToWishlistA3, product_data, destination_wishlist;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataStart)({
              productId: productId
            }));
            isCreatingWishlist = 'new' === (args === null || args === void 0 ? void 0 : args.destination_wishlist);
            isCreatingWishlist && dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsStart)());
            _context5.prev = 3;
            _context5.next = 6;
            return _utils_add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_2__["default"].moveToAnotherWishlist(_objectSpread({
              product_id: productId
            }, args));
          case 6:
            _yield$addToWishlistA3 = _context5.sent;
            product_data = _yield$addToWishlistA3.product_data;
            destination_wishlist = _yield$addToWishlistA3.destination_wishlist;
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataSuccess)({
              productId: productId,
              data: product_data
            }));
            isCreatingWishlist && dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsSuccess)({
              data: destination_wishlist
            }));
            _context5.next = 17;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](3);
            dispatch((0,_products_data_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchProductDataFailure)({
              productId: productId,
              error: _context5.t0.message
            }));
            isCreatingWishlist && dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsFailure)());
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[3, 13]]);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var createWishlistAndAddProduct = function createWishlistAndAddProduct(wishlistData, productId) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dispatch) {
      var _yield$wishlistApi$cr, wishlist_data, wishlistId;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsStart)());
            _context6.prev = 1;
            _context6.next = 4;
            return _utils_wishlist_api__WEBPACK_IMPORTED_MODULE_3__["default"].createWishlists(wishlistData);
          case 4:
            _yield$wishlistApi$cr = _context6.sent;
            wishlist_data = _yield$wishlistApi$cr.wishlist_data;
            wishlistId = _yield$wishlistApi$cr.wishlist_data.id;
            dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsSuccess)({
              data: wishlist_data
            }));
            _context6.next = 10;
            return dispatch(addProductToWishlist(productId, {
              wishlist_id: wishlistId
            }));
          case 10:
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            dispatch((0,_wishlists_wishlists_reducer__WEBPACK_IMPORTED_MODULE_1__.createWishlistsFailure)({
              error: _context6.t0.message
            }));
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 12]]);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};


/***/ }),

/***/ "./assets/js/src/features/products-data/products-data-reducer.js":
/*!***********************************************************************!*\
  !*** ./assets/js/src/features/products-data/products-data-reducer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchProductDataFailure: () => (/* binding */ fetchProductDataFailure),
/* harmony export */   fetchProductDataStart: () => (/* binding */ fetchProductDataStart),
/* harmony export */   fetchProductDataSuccess: () => (/* binding */ fetchProductDataSuccess),
/* harmony export */   fetchProductsDataFailure: () => (/* binding */ fetchProductsDataFailure),
/* harmony export */   fetchProductsDataStart: () => (/* binding */ fetchProductsDataStart),
/* harmony export */   fetchProductsDataSuccess: () => (/* binding */ fetchProductsDataSuccess)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var initialState = {
  products: {}
};
var productsDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'productsData',
  initialState: initialState,
  reducers: {
    fetchProductDataStart: function fetchProductDataStart(state, action) {
      var productId = action.payload.productId;
      state.products[productId] = _objectSpread(_objectSpread({}, state.products[productId]), {}, {
        loading: true,
        error: null,
        added_to: false,
        removed_from: false,
        moved_to: false,
        moved_from: false
      });
    },
    fetchProductDataSuccess: function fetchProductDataSuccess(state, action) {
      var _action$payload = action.payload,
        productId = _action$payload.productId,
        data = _action$payload.data;
      state.products[productId] = _objectSpread(_objectSpread(_objectSpread({}, state.products[productId]), data), {}, {
        loading: false
      });
    },
    fetchProductDataFailure: function fetchProductDataFailure(state, action) {
      var _action$payload2 = action.payload,
        productId = _action$payload2.productId,
        error = _action$payload2.error;
      state.products[productId] = _objectSpread(_objectSpread({}, state.products[productId]), {}, {
        loading: false,
        added_to: false,
        removed_from: false,
        error: error,
        moved_to: false,
        moved_from: false
      });
    },
    fetchProductsDataStart: function fetchProductsDataStart(state, action) {
      var productIds = action.payload.productIds;
      productIds.forEach(function (productId) {
        state.products[productId] = _objectSpread(_objectSpread({}, state.products[productId]), {}, {
          loading: true,
          error: null,
          added_to: false,
          removed_from: false,
          moved_to: false,
          moved_from: false
        });
      });
    },
    fetchProductsDataSuccess: function fetchProductsDataSuccess(state, action) {
      var _action$payload3 = action.payload,
        productIds = _action$payload3.productIds,
        data = _action$payload3.data;
      productIds.forEach(function (productId) {
        var productData = data[productId];
        state.products[productId] = _objectSpread(_objectSpread(_objectSpread({}, state.products[productId]), productData), {}, {
          loading: false
        });
      });
    },
    fetchProductsDataFailure: function fetchProductsDataFailure(state, action) {
      var _action$payload4 = action.payload,
        productIds = _action$payload4.productIds,
        error = _action$payload4.error;
      productIds.forEach(function (productId) {
        state.products[productId] = _objectSpread(_objectSpread({}, state.products[productId]), {}, {
          loading: false,
          added_to: false,
          removed_from: false,
          moved_to: false,
          moved_from: false
        });
      });
    }
  }
});
var actions = productsDataSlice.actions,
  reducer = productsDataSlice.reducer;
var fetchProductDataStart = actions.fetchProductDataStart,
  fetchProductDataSuccess = actions.fetchProductDataSuccess,
  fetchProductDataFailure = actions.fetchProductDataFailure,
  fetchProductsDataStart = actions.fetchProductsDataStart,
  fetchProductsDataSuccess = actions.fetchProductsDataSuccess,
  fetchProductsDataFailure = actions.fetchProductsDataFailure;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./assets/js/src/features/products-data/products-data-selectors.js":
/*!*************************************************************************!*\
  !*** ./assets/js/src/features/products-data/products-data-selectors.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectError: () => (/* binding */ selectError),
/* harmony export */   selectLoading: () => (/* binding */ selectLoading),
/* harmony export */   selectProductDataById: () => (/* binding */ selectProductDataById),
/* harmony export */   selectProductsData: () => (/* binding */ selectProductsData)
/* harmony export */ });
var selectProductsData = function selectProductsData(state) {
  return state.productsData;
};
var selectProductDataById = function selectProductDataById(state, productId) {
  return state.productsData.products[productId];
};
var selectError = function selectError(state, productId) {
  var _state$productsData$p;
  return (_state$productsData$p = state.productsData.products[productId]) === null || _state$productsData$p === void 0 ? void 0 : _state$productsData$p.error;
};
var selectLoading = function selectLoading(state, productId) {
  var _state$productsData$p2;
  return (_state$productsData$p2 = state.productsData.products[productId]) === null || _state$productsData$p2 === void 0 ? void 0 : _state$productsData$p2.loading;
};

/***/ }),

/***/ "./assets/js/src/features/wishlists/wishlists-actions.js":
/*!***************************************************************!*\
  !*** ./assets/js/src/features/wishlists/wishlists-actions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWishlist: () => (/* binding */ createWishlist),
/* harmony export */   fetchWishlists: () => (/* binding */ fetchWishlists)
/* harmony export */ });
/* harmony import */ var _wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlists-reducer */ "./assets/js/src/features/wishlists/wishlists-reducer.js");
/* harmony import */ var _utils_wishlist_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wishlist-api */ "./assets/js/src/utils/wishlist-api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var fetchWishlists = function fetchWishlists() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var _yield$wishlistApi$fe, lists;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch((0,_wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchWishlistsStart)());
            _context.prev = 1;
            _context.next = 4;
            return _utils_wishlist_api__WEBPACK_IMPORTED_MODULE_1__["default"].fetchWishlists();
          case 4:
            _yield$wishlistApi$fe = _context.sent;
            lists = _yield$wishlistApi$fe.lists;
            dispatch((0,_wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchWishlistsSuccess)({
              lists: lists
            }));
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch((0,_wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__.fetchWishlistsFailure)({
              error: _context.t0.message
            }));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var createWishlist = function createWishlist(args) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      var _yield$wishlistApi$cr, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0,_wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__.createWishlistsStart)());
            _context2.prev = 1;
            _context2.next = 4;
            return _utils_wishlist_api__WEBPACK_IMPORTED_MODULE_1__["default"].createWishlists(args);
          case 4:
            _yield$wishlistApi$cr = _context2.sent;
            data = _yield$wishlistApi$cr.wishlist_data;
            dispatch((0,_wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__.createWishlistsSuccess)({
              data: data
            }));
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            dispatch((0,_wishlists_reducer__WEBPACK_IMPORTED_MODULE_0__.createWishlistsFailure)({
              error: _context2.t0.message
            }));
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 9]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./assets/js/src/features/wishlists/wishlists-reducer.js":
/*!***************************************************************!*\
  !*** ./assets/js/src/features/wishlists/wishlists-reducer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWishlistsFailure: () => (/* binding */ createWishlistsFailure),
/* harmony export */   createWishlistsStart: () => (/* binding */ createWishlistsStart),
/* harmony export */   createWishlistsSuccess: () => (/* binding */ createWishlistsSuccess),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchWishlistsFailure: () => (/* binding */ fetchWishlistsFailure),
/* harmony export */   fetchWishlistsStart: () => (/* binding */ fetchWishlistsStart),
/* harmony export */   fetchWishlistsSuccess: () => (/* binding */ fetchWishlistsSuccess)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var initialState = {
  wishlists: {},
  loading: false,
  error: null,
  creation: {
    loading: false,
    error: null
  }
};
var wishlistsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'wishlists',
  initialState: initialState,
  reducers: {
    fetchWishlistsStart: function fetchWishlistsStart(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchWishlistsSuccess: function fetchWishlistsSuccess(state, action) {
      var lists = action.payload.lists;
      state.wishlists = _objectSpread(_objectSpread({}, state.wishlists), lists);
      state.loading = false;
    },
    fetchWishlistsFailure: function fetchWishlistsFailure(state, action) {
      var error = action.payload.error;
      state.loading = false;
      state.error = error;
    },
    createWishlistsStart: function createWishlistsStart(state, action) {
      state.creation.loading = true;
      state.creation.error = null;
    },
    createWishlistsSuccess: function createWishlistsSuccess(state, action) {
      var _action$payload = action.payload,
        data = _action$payload.data,
        id = _action$payload.data.id;
      state.wishlists = _objectSpread(_objectSpread({}, state.wishlists), {}, _defineProperty({}, id, _objectSpread({}, data)));
      state.creation.loading = false;
      state.creation.lastCreatedId = id;
    },
    createWishlistsFailure: function createWishlistsFailure(state, action) {
      var error = action.payload.error;
      state.creation.loading = false;
      state.creation.error = error;
    }
  }
});
var actions = wishlistsSlice.actions,
  reducer = wishlistsSlice.reducer;
var fetchWishlistsStart = actions.fetchWishlistsStart,
  fetchWishlistsSuccess = actions.fetchWishlistsSuccess,
  fetchWishlistsFailure = actions.fetchWishlistsFailure,
  createWishlistsStart = actions.createWishlistsStart,
  createWishlistsSuccess = actions.createWishlistsSuccess,
  createWishlistsFailure = actions.createWishlistsFailure;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./assets/js/src/features/wishlists/wishlists-selectors.js":
/*!*****************************************************************!*\
  !*** ./assets/js/src/features/wishlists/wishlists-selectors.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectWishlistById: () => (/* binding */ selectWishlistById),
/* harmony export */   selectWishlists: () => (/* binding */ selectWishlists),
/* harmony export */   selectWishlistsCreation: () => (/* binding */ selectWishlistsCreation),
/* harmony export */   selectWishlistsCreationError: () => (/* binding */ selectWishlistsCreationError),
/* harmony export */   selectWishlistsCreationLoading: () => (/* binding */ selectWishlistsCreationLoading),
/* harmony export */   selectWishlistsError: () => (/* binding */ selectWishlistsError),
/* harmony export */   selectWishlistsLoading: () => (/* binding */ selectWishlistsLoading)
/* harmony export */ });
var selectWishlists = function selectWishlists(state) {
  return state.wishlists.wishlists;
};
var selectWishlistById = function selectWishlistById(state, id) {
  return state.wishlists.wishlists[id];
};
var selectWishlistsLoading = function selectWishlistsLoading(state) {
  return state.wishlists.loading;
};
var selectWishlistsError = function selectWishlistsError(state) {
  return state.wishlists.error;
};
var selectWishlistsCreation = function selectWishlistsCreation(state) {
  return state.wishlists.creation;
};
var selectWishlistsCreationLoading = function selectWishlistsCreationLoading(state) {
  return state.wishlists.creation.loading;
};
var selectWishlistsCreationError = function selectWishlistsCreationError(state) {
  return state.wishlists.creation.error;
};


/***/ }),

/***/ "./assets/js/src/hooks/use-wishlist-data.js":
/*!**************************************************!*\
  !*** ./assets/js/src/hooks/use-wishlist-data.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWishlistData: () => (/* binding */ useWishlistData)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_wishlists_wishlists_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/wishlists/wishlists-selectors */ "./assets/js/src/features/wishlists/wishlists-selectors.js");


var useWishlistData = function useWishlistData(wishlistId) {
  var wishlistData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return (0,_features_wishlists_wishlists_selectors__WEBPACK_IMPORTED_MODULE_1__.selectWishlistById)(state, wishlistId);
  });
  var _ref = wishlistData ? wishlistData : {},
    name = _ref.name,
    slug = _ref.slug,
    privacy = _ref.privacy,
    token = _ref.token,
    isDefault = _ref.is_default;
  return {
    wishlistData: wishlistData,
    name: name,
    slug: slug,
    token: token,
    privacy: privacy,
    isDefault: isDefault
  };
};

/***/ }),

/***/ "./assets/js/src/utils/add-to-wishlist-api.js":
/*!****************************************************!*\
  !*** ./assets/js/src/utils/add-to-wishlist-api.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var AddToWishlistApiHandler = /*#__PURE__*/function () {
  function AddToWishlistApiHandler() {
    _classCallCheck(this, AddToWishlistApiHandler);
    this.pendingRequests = new Map();
    this.handleDebouncedRequests = this.handleDebouncedRequests.bind(this);
    this.handleDebouncedRequestsDebounced = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(this.handleDebouncedRequests, 200);
  }
  return _createClass(AddToWishlistApiHandler, [{
    key: "handleDebouncedRequests",
    value: function () {
      var _handleDebouncedRequests = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var productIds, productsData, _i, _productIds, productId, resolve;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              productIds = Array.from(this.pendingRequests.keys());
              _context.next = 3;
              return this.fetchProductsData(productIds);
            case 3:
              productsData = _context.sent;
              for (_i = 0, _productIds = productIds; _i < _productIds.length; _i++) {
                productId = _productIds[_i];
                resolve = this.pendingRequests.get(productId);
                resolve && resolve(productsData[productId]);
                this.pendingRequests["delete"](productId);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handleDebouncedRequests() {
        return _handleDebouncedRequests.apply(this, arguments);
      }
      return handleDebouncedRequests;
    }()
  }, {
    key: "fetchProductDataDebounced",
    value: function () {
      var _fetchProductDataDebounced = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productId) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                _this.pendingRequests.set(productId, resolve);
                _this.handleDebouncedRequestsDebounced();
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function fetchProductDataDebounced(_x) {
        return _fetchProductDataDebounced.apply(this, arguments);
      }
      return fetchProductDataDebounced;
    }()
  }, {
    key: "fetchProductsData",
    value: function () {
      var _fetchProductsData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(productIds) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
                path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/yith/wishlist/v1/products/', {
                  product_ids: productIds
                })
              });
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function fetchProductsData(_x2) {
        return _fetchProductsData.apply(this, arguments);
      }
      return fetchProductsData;
    }()
  }, {
    key: "fetchProductData",
    value: function () {
      var _fetchProductData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(productId) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
                path: '/yith/wishlist/v1/products/' + productId
              });
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function fetchProductData(_x3) {
        return _fetchProductData.apply(this, arguments);
      }
      return fetchProductData;
    }()
    /**
     * Add products to wishlist
     *
     *
     * @param data
     * @return {Promise<*>}
     */
  }, {
    key: "addToWishlist",
    value: (function () {
      var _addToWishlist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
                path: 'yith/wishlist/v1/items',
                method: 'POST',
                data: data
              });
            case 2:
              response = _context5.sent;
              if (!(false === (response === null || response === void 0 ? void 0 : response.success))) {
                _context5.next = 5;
                break;
              }
              throw new Error(response === null || response === void 0 ? void 0 : response.message);
            case 5:
              return _context5.abrupt("return", response);
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function addToWishlist(_x4) {
        return _addToWishlist.apply(this, arguments);
      }
      return addToWishlist;
    }()
    /**
     * Remove product from wishlist
     *
     * @param data
     * @return {Promise<*>}
     */
    )
  }, {
    key: "removeFromWishlist",
    value: (function () {
      var _removeFromWishlist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
                path: 'yith/wishlist/v1/items',
                method: 'DELETE',
                data: data
              });
            case 2:
              response = _context6.sent;
              if (!(false === (response === null || response === void 0 ? void 0 : response.success))) {
                _context6.next = 5;
                break;
              }
              throw new Error(response === null || response === void 0 ? void 0 : response.message);
            case 5:
              return _context6.abrupt("return", response);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function removeFromWishlist(_x5) {
        return _removeFromWishlist.apply(this, arguments);
      }
      return removeFromWishlist;
    }()
    /**
     * Move a product from a wishlist to another
     *
     * @param data
     * @return {Promise<*>}
     */
    )
  }, {
    key: "moveToAnotherWishlist",
    value: (function () {
      var _moveToAnotherWishlist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
                path: 'yith/wishlist/v1/items/move',
                method: 'POST',
                data: data
              });
            case 2:
              response = _context7.sent;
              if (!(false === (response === null || response === void 0 ? void 0 : response.success))) {
                _context7.next = 5;
                break;
              }
              throw new Error(response === null || response === void 0 ? void 0 : response.message);
            case 5:
              return _context7.abrupt("return", response);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function moveToAnotherWishlist(_x6) {
        return _moveToAnotherWishlist.apply(this, arguments);
      }
      return moveToAnotherWishlist;
    }())
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddToWishlistApiHandler());

/***/ }),

/***/ "./assets/js/src/utils/button-data-context.js":
/*!****************************************************!*\
  !*** ./assets/js/src/utils/button-data-context.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDataProvider: () => (/* binding */ ButtonDataProvider),
/* harmony export */   useAddToWishlistButtonData: () => (/* binding */ useAddToWishlistButtonData),
/* harmony export */   useButtonAttributes: () => (/* binding */ useButtonAttributes),
/* harmony export */   useButtonData: () => (/* binding */ useButtonData),
/* harmony export */   useButtonDropdownData: () => (/* binding */ useButtonDropdownData),
/* harmony export */   useButtonStyle: () => (/* binding */ useButtonStyle),
/* harmony export */   useButtonTooltipData: () => (/* binding */ useButtonTooltipData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lapilli-ui/styles */ "@lapilli-ui/styles");
/* harmony import */ var _lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_context_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-context-selector */ "./node_modules/use-context-selector/dist/index.js");
/* harmony import */ var _components_add_to_wishlist_hooks_use_product_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/add-to-wishlist/hooks/use-product-data */ "./assets/js/src/components/add-to-wishlist/hooks/use-product-data.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_products_data_products_data_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/products-data/products-data-actions */ "./assets/js/src/features/products-data/products-data-actions.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./assets/js/src/utils/index.js");
/* harmony import */ var _components_add_to_wishlist_hooks_use_feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/add-to-wishlist/hooks/use-feedback */ "./assets/js/src/components/add-to-wishlist/hooks/use-feedback.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* globals yithWcwlAddToWishlist */










var ButtonDataContext = (0,use_context_selector__WEBPACK_IMPORTED_MODULE_8__.createContext)({});
var useButtonAttributes = function useButtonAttributes() {
  var mergeWithGlobalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return mergeWithGlobalOptions ? _objectSpread(_objectSpread({}, yithWcwlAddToWishlist.globalOptions), (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ButtonDataContext).attributes) : (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ButtonDataContext).attributes;
};
var useButtonData = function useButtonData() {
  return (0,use_context_selector__WEBPACK_IMPORTED_MODULE_8__.useContextSelector)(ButtonDataContext, function (v) {
    return v;
  });
};
var useButtonStyle = function useButtonStyle() {
  return (0,use_context_selector__WEBPACK_IMPORTED_MODULE_8__.useContextSelector)(ButtonDataContext, function (v) {
    return v === null || v === void 0 ? void 0 : v.style;
  });
};
var useAddToWishlistButtonData = function useAddToWishlistButtonData() {
  return (0,use_context_selector__WEBPACK_IMPORTED_MODULE_8__.useContextSelector)(ButtonDataContext, function (_ref) {
    var href = _ref.href,
      icon = _ref.icon,
      ref = _ref.buttonRef,
      className = _ref.className,
      onClick = _ref.onButtonClick,
      label = _ref.label;
    return {
      label: label,
      href: href,
      icon: icon,
      ref: ref,
      className: className,
      onClick: onClick
    };
  });
};
var useButtonTooltipData = function useButtonTooltipData() {
  return (0,use_context_selector__WEBPACK_IMPORTED_MODULE_8__.useContextSelector)(ButtonDataContext, function (state) {
    return {
      hasDataLoaded: state === null || state === void 0 ? void 0 : state.hasDataLoaded,
      add_label: state === null || state === void 0 ? void 0 : state.add_label,
      remove_label: state === null || state === void 0 ? void 0 : state.remove_label,
      browse_label: state === null || state === void 0 ? void 0 : state.browse_label,
      move_label: state === null || state === void 0 ? void 0 : state.move_label,
      isAdded: state === null || state === void 0 ? void 0 : state.isAdded,
      behaviour: state === null || state === void 0 ? void 0 : state.behaviour,
      buttonRef: state === null || state === void 0 ? void 0 : state.buttonRef,
      isDropdownOpen: state === null || state === void 0 ? void 0 : state.isDropdownOpen,
      tooltipEnabled: state === null || state === void 0 ? void 0 : state.tooltipEnabled
    };
  });
};
var useButtonDropdownData = function useButtonDropdownData() {
  return (0,use_context_selector__WEBPACK_IMPORTED_MODULE_8__.useContextSelector)(ButtonDataContext, function (state) {
    return {
      buttonRef: state === null || state === void 0 ? void 0 : state.buttonRef,
      availableLists: state === null || state === void 0 ? void 0 : state.availableLists,
      isDropdownOpen: state === null || state === void 0 ? void 0 : state.isDropdownOpen,
      handleCloseDropdown: state === null || state === void 0 ? void 0 : state.handleCloseDropdown,
      wishlists: state === null || state === void 0 ? void 0 : state.wishlists
    };
  });
};
var ButtonDataProvider = function ButtonDataProvider(_ref2) {
  var children = _ref2.children,
    attributes = _ref2.attributes,
    dataExtensions = _ref2.dataExtensions,
    componentsExtensions = _ref2.componentsExtensions;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPerformingAction = _useState2[0],
    setIsPerformingAction = _useState2[1];
  var richAttributes = _objectSpread(_objectSpread({}, yithWcwlAddToWishlist.globalOptions), attributes);
  var buttonId = richAttributes.buttonId,
    productIdAttribute = richAttributes.productId,
    style = richAttributes.style,
    isOverProductImage = richAttributes.isOverProductImage,
    add_label = richAttributes.add_label,
    added_label = richAttributes.added_label,
    remove_label = richAttributes.remove_label,
    browse_label = richAttributes.browse_label,
    icon = richAttributes.icon,
    icon_type = richAttributes.icon_type,
    custom_icon = richAttributes.custom_icon,
    added_icon_attribute = richAttributes.added_icon,
    added_icon_type = richAttributes.added_icon_type,
    custom_added_icon = richAttributes.custom_added_icon,
    is_single = richAttributes.is_single,
    loop_position = richAttributes.loop_position,
    button_over_image_style = richAttributes.button_over_image_style,
    position_over_image_in_loop = richAttributes.position_over_image_in_loop,
    attribute_behaviour = richAttributes.behaviour;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(productIdAttribute),
    _useState4 = _slicedToArray(_useState3, 2),
    productId = _useState4[0],
    setProductId = _useState4[1];
  var _useProductData = (0,_components_add_to_wishlist_hooks_use_product_data__WEBPACK_IMPORTED_MODULE_2__["default"])(productId, attributes),
    isAdded = _useProductData.isAdded,
    isLoading = _useProductData.isLoading,
    alreadyIn = _useProductData.alreadyIn,
    productData = _useProductData.productData,
    hasDataLoaded = _useProductData.hasDataLoaded;
  var _useFeedback = (0,_components_add_to_wishlist_hooks_use_feedback__WEBPACK_IMPORTED_MODULE_7__["default"])(productId, richAttributes, isPerformingAction),
    feedbackType = _useFeedback.feedbackType,
    showFeedback = _useFeedback.showFeedback,
    feedbackMessage = _useFeedback.feedbackMessage,
    feedbackDuration = _useFeedback.feedbackDuration,
    setFeedbackType = _useFeedback.setFeedbackType,
    setShowFeedback = _useFeedback.setShowFeedback,
    setFeedbackMessage = _useFeedback.setFeedbackMessage,
    setFeedbackDuration = _useFeedback.setFeedbackDuration,
    addFeedback = _useFeedback.addFeedback,
    clearFeedback = _useFeedback.clearFeedback,
    feedbackAnimation = _useFeedback.feedbackAnimation,
    setFeedbackAnimation = _useFeedback.setFeedbackAnimation;
  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var add_icon = function () {
    if ('custom' === icon_type) {
      return custom_icon;
    }
    return icon;
  }();
  var added_icon = function () {
    if (added_icon_type === 'same') {
      return add_icon;
    }
    if ('custom' === added_icon_type) {
      return custom_added_icon;
    }
    return added_icon_attribute;
  }();
  var iconToDisplay = isAdded ? added_icon : add_icon;
  var behaviour = function () {
    if (!yithWcwlAddToWishlist.isUserLoggedIn && 'yes' === yithWcwlAddToWishlist.globalOptions.wishlist_disabled_for_unauthenticated_users) {
      return 'view';
    }
    return ['add', 'remove'].includes(attribute_behaviour) ? attribute_behaviour : 'view';
  }();
  var href = function () {
    if (!yithWcwlAddToWishlist.isUserLoggedIn && 'yes' === yithWcwlAddToWishlist.globalOptions.wishlist_disabled_for_unauthenticated_users) {
      return yithWcwlAddToWishlist.login_wishlist_url.replace('%product_id%', productId);
    }
    return 'view' === behaviour && isAdded ? yithWcwlAddToWishlist.wishlist_url : null;
  }();
  var handleActionCallback = function handleActionCallback(callback) {
    return function () {
      setIsPerformingAction(false);
      jQuery(document).trigger('yith_wcwl_reload_fragments', {
        firstLoad: false,
        avoidDataInvalidation: true
      });
      'function' === typeof callback && callback();
    };
  };
  var handleButtonAction = function handleButtonAction(action, callback) {
    if ('function' === typeof action) {
      setIsPerformingAction(true);
      action().then(handleActionCallback(callback));
    }
  };
  var handleAddToWishlist = function handleAddToWishlist(callback) {
    return handleButtonAction(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return dispatch((0,_features_products_data_products_data_actions__WEBPACK_IMPORTED_MODULE_4__.addProductToWishlist)(productId));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), callback);
  };
  var handleRemoveFromWishlist = function handleRemoveFromWishlist(callback) {
    return handleButtonAction(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return dispatch((0,_features_products_data_products_data_actions__WEBPACK_IMPORTED_MODULE_4__.removeProductFromWishlist)(productId));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })), callback);
  };
  var onButtonClick = function onButtonClick(event) {
    if (href) return false;
    event === null || event === void 0 || event.preventDefault();
    event === null || event === void 0 || event.stopPropagation();
    if (!hasDataLoaded || isLoading) return false;
    if (isAdded && behaviour !== 'add') {
      if (behaviour === 'remove') {
        handleRemoveFromWishlist();
      } else {
        window.location = yithWcwlAddToWishlist.wishlist_url;
      }
    } else {
      handleAddToWishlist();
    }
  };
  var getStyle = function getStyle() {
    if (!is_single && loop_position === 'before_image' && isOverProductImage) return 'icon-button';
    if (style === 'link') return 'anchor';
    return style === 'button_default' ? 'themed-button' : 'custom-button';
  };
  var getLabel = function getLabel() {
    if (isAdded) {
      if (behaviour === 'add' && !alreadyIn) return added_label;
      if (behaviour === 'remove') return remove_label;
      if (behaviour === 'view') return browse_label;
    }
    return add_label;
  };
  var getClasses = function getClasses() {
    var _yithWcwlAddToWishlis;
    return classnames__WEBPACK_IMPORTED_MODULE_5___default()(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      'yith-wcwl-add-to-wishlist-button': true
    }, "yith-wcwl-add-to-wishlist-button--".concat(getStyle()), true), 'yith-wcwl-add-to-wishlist-button--loading', isLoading), 'yith-wcwl-add-to-wishlist-button--first-loading', isLoading && (productData === null || productData === void 0 ? void 0 : productData.isAdded) === undefined), 'yith-wcwl-add-to-wishlist-button--added', isAdded), 'yith-wcwl-add-to-wishlist-button--single', is_single), 'yith-wcwl-add-to-wishlist-button-over-image', isOverProductImage), "yith-wcwl-add-to-wishlist-button-over-image--".concat(position_over_image_in_loop || 'top-left'), isOverProductImage && loop_position === 'before_image'), 'yith-wcwl-add-to-wishlist-button-over-image--hover', isOverProductImage && loop_position === 'before_image' && button_over_image_style === 'hover' && !isAdded), ((_yithWcwlAddToWishlis = yithWcwlAddToWishlist) === null || _yithWcwlAddToWishlis === void 0 ? void 0 : _yithWcwlAddToWishlis.buttonClasses) + ' yith-wcwl-theme-button-style', getStyle() === 'themed-button'));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (is_single) {
      var handleFoundVariation = function handleFoundVariation(e, variation) {
        var form = e.target;
        var parentId = form === null || form === void 0 ? void 0 : form.getAttribute('data-product_id');
        if (parentId === (attributes === null || attributes === void 0 ? void 0 : attributes.productId)) {
          setProductId(variation.variation_id);
        }
      };
      var handleResetVariation = function handleResetVariation() {
        return setProductId(productIdAttribute);
      };
      jQuery(document).on('found_variation', handleFoundVariation);
      jQuery(document).on('reset_data', handleResetVariation);
      return function () {
        jQuery(document).off('found_variation', handleFoundVariation);
        jQuery(document).off('reset_data', handleResetVariation);
      };
    }
  }, []);
  var value = {
    buttonId: buttonId,
    productId: productId,
    attributes: attributes,
    productData: productData,
    hasDataLoaded: hasDataLoaded,
    richAttributes: richAttributes,
    isOverProductImage: isOverProductImage,
    isPerformingAction: isPerformingAction,
    setIsPerformingAction: setIsPerformingAction,
    icon: iconToDisplay,
    added_icon: added_icon,
    add_icon: add_icon,
    add_label: add_label,
    added_label: added_label,
    remove_label: remove_label,
    browse_label: browse_label,
    href: href,
    isAdded: isAdded,
    is_single: is_single,
    isLoading: isLoading,
    buttonRef: buttonRef,
    behaviour: behaviour,
    style: getStyle(),
    label: getLabel(),
    className: getClasses(),
    feedbackType: feedbackType,
    showFeedback: showFeedback,
    feedbackMessage: feedbackMessage,
    feedbackDuration: feedbackDuration,
    feedbackAnimation: feedbackAnimation,
    setFeedbackType: setFeedbackType,
    setShowFeedback: setShowFeedback,
    setFeedbackMessage: setFeedbackMessage,
    setFeedbackDuration: setFeedbackDuration,
    setFeedbackAnimation: setFeedbackAnimation,
    addFeedback: addFeedback,
    clearFeedback: clearFeedback,
    onButtonClick: onButtonClick,
    handleButtonAction: handleButtonAction,
    handleAddToWishlist: handleAddToWishlist,
    handleRemoveFromWishlist: handleRemoveFromWishlist
  };
  if ('function' === typeof dataExtensions) {
    value = _objectSpread(_objectSpread({}, value), dataExtensions(value));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonDataContext.Provider, {
    value: value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_6__.ComponentsExtensionProvider, {
    extensions: componentsExtensions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lapilli_ui_styles__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, null, children)));
};

/***/ }),

/***/ "./assets/js/src/utils/components-extension-context.js":
/*!*************************************************************!*\
  !*** ./assets/js/src/utils/components-extension-context.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsExtensionProvider: () => (/* binding */ ComponentsExtensionProvider),
/* harmony export */   useComponentExtensionsContext: () => (/* binding */ useComponentExtensionsContext),
/* harmony export */   useComponentsExtension: () => (/* binding */ useComponentsExtension)
/* harmony export */ });
/* harmony import */ var use_context_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-context-selector */ "./node_modules/use-context-selector/dist/index.js");

var ComponentsExtensionContext = (0,use_context_selector__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var useComponentExtensionsContext = function useComponentExtensionsContext() {
  return (0,use_context_selector__WEBPACK_IMPORTED_MODULE_0__.useContextSelector)(ComponentsExtensionContext, function (state) {
    return state;
  });
};
var useComponentsExtension = function useComponentsExtension(hookName) {
  var extensions = useComponentExtensionsContext();
  if (!extensions || !(extensions[hookName] || null)) {
    var EmptyFragment = function EmptyFragment() {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    };
    EmptyFragment.isEmpty = true;
    return EmptyFragment;
  }
  return extensions[hookName];
};
var ComponentsExtensionProvider = function ComponentsExtensionProvider(_ref) {
  var children = _ref.children,
    extensions = _ref.extensions;
  return /*#__PURE__*/React.createElement(ComponentsExtensionContext.Provider, {
    value: extensions
  }, children);
};

/***/ }),

/***/ "./assets/js/src/utils/index.js":
/*!**************************************!*\
  !*** ./assets/js/src/utils/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDataProvider: () => (/* reexport safe */ _button_data_context__WEBPACK_IMPORTED_MODULE_2__.ButtonDataProvider),
/* harmony export */   ComponentsExtensionProvider: () => (/* reexport safe */ _components_extension_context__WEBPACK_IMPORTED_MODULE_3__.ComponentsExtensionProvider),
/* harmony export */   addToWishlistApi: () => (/* reexport safe */ _add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   formatOptions: () => (/* binding */ formatOptions),
/* harmony export */   formatPascalCaseString: () => (/* binding */ formatPascalCaseString),
/* harmony export */   getPrivacyOptions: () => (/* binding */ getPrivacyOptions),
/* harmony export */   getProductFreeListsOptions: () => (/* binding */ getProductFreeListsOptions),
/* harmony export */   isValidHttpUrl: () => (/* binding */ isValidHttpUrl),
/* harmony export */   reactMultipleStringReplace: () => (/* binding */ reactMultipleStringReplace),
/* harmony export */   useButtonAttributes: () => (/* reexport safe */ _button_data_context__WEBPACK_IMPORTED_MODULE_2__.useButtonAttributes),
/* harmony export */   useButtonData: () => (/* reexport safe */ _button_data_context__WEBPACK_IMPORTED_MODULE_2__.useButtonData),
/* harmony export */   useComponentsExtension: () => (/* reexport safe */ _components_extension_context__WEBPACK_IMPORTED_MODULE_3__.useComponentsExtension),
/* harmony export */   wishlistApi: () => (/* reexport safe */ _wishlist_api__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _wishlist_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist-api */ "./assets/js/src/utils/wishlist-api.js");
/* harmony import */ var _add_to_wishlist_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-wishlist-api */ "./assets/js/src/utils/add-to-wishlist-api.js");
/* harmony import */ var _button_data_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-data-context */ "./assets/js/src/utils/button-data-context.js");
/* harmony import */ var _components_extension_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-extension-context */ "./assets/js/src/utils/components-extension-context.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* globals yithWcwlAddToWishlist */







var formatOptions = function formatOptions(list, labelKey) {
  var options = [];
  Object.keys(list).forEach(function (key) {
    var label = labelKey ? list[key][labelKey] : list[key];
    options.push({
      value: isNaN(key) ? key : Number(key),
      label: label
    });
  });
  return options;
};
var formatPascalCaseString = function formatPascalCaseString(str) {
  return str.split('-').map(function (substr) {
    return substr[0].toUpperCase() + substr.slice(1);
  }).join('');
};
var getPrivacyOptions = function getPrivacyOptions(withDescription) {
  var options = formatOptions(yithWcwlAddToWishlist.privacy_options);
  withDescription && options.forEach(function (option) {
    return options[option.value]['label'] = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, options[option.value]['label']), " - ", yithWcwlAddToWishlist.privacy_options_descriptions[option.value]);
  });
  return options;
};
var isValidHttpUrl = function isValidHttpUrl(string) {
  var url;
  try {
    url = new URL(string);
  } catch (e) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
};
var getProductFreeListsOptions = function getProductFreeListsOptions(addCreateOption) {
  var _useButtonData = (0,_button_data_context__WEBPACK_IMPORTED_MODULE_2__.useButtonData)(),
    availableLists = _useButtonData.availableLists,
    wishlists = _useButtonData.wishlists;
  if (!Object.keys(wishlists).length) {
    var _yithWcwlAddToWishlis;
    wishlists = {
      "default": {
        id: 'default',
        name: (_yithWcwlAddToWishlis = yithWcwlAddToWishlist) === null || _yithWcwlAddToWishlis === void 0 ? void 0 : _yithWcwlAddToWishlis.default_wishlist_name
      }
    };
    availableLists.push('default');
  }
  var options = formatOptions(Object.keys(wishlists).filter(function (key) {
    return availableLists.includes(key);
  }).reduce(function (obj, key) {
    obj[key] = wishlists[key];
    return obj;
  }, {}), 'name');
  if (addCreateOption) {
    options.push({
      value: 'create',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Create a new list', 'yith-woocommerce-wishlist'),
      className: 'yith-wcwl-modal__wishlist-select__create-option'
    });
  }
  return options;
};
var reactMultipleStringReplace = function reactMultipleStringReplace(string, replacements) {
  replacements.forEach(function (_ref) {
    var search = _ref.search,
      replace = _ref.replace;
    return string = react_string_replace__WEBPACK_IMPORTED_MODULE_5___default()(string, search, replace);
  });
  return string;
};


/***/ }),

/***/ "./assets/js/src/utils/wishlist-api.js":
/*!*********************************************!*\
  !*** ./assets/js/src/utils/wishlist-api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var WishlistApiHandler = /*#__PURE__*/function () {
  function WishlistApiHandler() {
    _classCallCheck(this, WishlistApiHandler);
  }
  return _createClass(WishlistApiHandler, [{
    key: "fetchWishlists",
    value: function () {
      var _fetchWishlists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
                path: '/yith/wishlist/v1/lists/'
              });
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fetchWishlists() {
        return _fetchWishlists.apply(this, arguments);
      }
      return fetchWishlists;
    }()
  }, {
    key: "createWishlists",
    value: function () {
      var _createWishlists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
                path: '/yith/wishlist/v1/lists/',
                method: 'POST',
                data: data
              });
            case 2:
              response = _context2.sent;
              if (!(false === (response === null || response === void 0 ? void 0 : response.success))) {
                _context2.next = 5;
                break;
              }
              throw new Error(response === null || response === void 0 ? void 0 : response.message);
            case 5:
              return _context2.abrupt("return", response);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function createWishlists(_x) {
        return _createWishlists.apply(this, arguments);
      }
      return createWishlists;
    }()
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new WishlistApiHandler());

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis :
/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
{};

function getContext() {
  var _gT$ContextKey;

  if (!react__WEBPACK_IMPORTED_MODULE_0__.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
  let realContext = contextMap.get(react__WEBPACK_IMPORTED_MODULE_0__.createContext);

  if (!realContext) {
    realContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

    if (true) {
      realContext.displayName = 'ReactRedux';
    }

    contextMap.set(react__WEBPACK_IMPORTED_MODULE_0__.createContext, realContext);
  }

  return realContext;
}

const ReactReduxContext = /*#__PURE__*/getContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");





function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = 'once',
  noopCheck = 'once'
}) {
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => store.getState(), [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connect.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/connect.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initializeConnect: () => (/* binding */ initializeConnect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var _connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connect/selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");
/* harmony import */ var _connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connect/mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connect/mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connect/mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");


const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__.notInitialized;
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areStatePropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areMergedPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = _Context__WEBPACK_IMPORTED_MODULE_13__.ReactReduxContext
} = {}) {
  if (true) {
    if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_12__["default"])('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
    }
  }

  const Context = context;
  const initMapStateToProps = (0,_connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__.mapStateToPropsFactory)(mapStateToProps);
  const initMapDispatchToProps = (0,_connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__.mapDispatchToPropsFactory)(mapDispatchToProps);
  const initMergeProps = (0,_connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__.mergePropsFactory)(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = react__WEBPACK_IMPORTED_MODULE_3__.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
      } // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return (0,_connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__["default"])(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_9__.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
      const lastWrapperProps = react__WEBPACK_IMPORTED_MODULE_3__.useRef(wrapperProps);
      const childPropsFromStoreUpdate = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
      const renderIsScheduled = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
      const isProcessingDispatch = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
      const isMounted = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
      const latestSubscriptionCallbackError = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          react__WEBPACK_IMPORTED_MODULE_3__.createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = react__WEBPACK_IMPORTED_MODULE_3__.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/invalidArgFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/invalidArgFactory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidArgFactory: () => (/* binding */ createInvalidArgFactory)
/* harmony export */ });
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapDispatchToPropsFactory: () => (/* binding */ mapDispatchToPropsFactory)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapStateToPropsFactory: () => (/* binding */ mapStateToPropsFactory)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");


function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMergeProps: () => (/* binding */ defaultMergeProps),
/* harmony export */   mergePropsFactory: () => (/* binding */ mergePropsFactory),
/* harmony export */   wrapMergePropsFunc: () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   pureFinalPropsSelectorFactory: () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps);
  }

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, 'mapStateToProps');
  verify(mapDispatchToProps, 'mapDispatchToProps');
  verify(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDependsOnOwnProps: () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   wrapMapToPropsConstant: () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   wrapMapToPropsFunc: () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   connect: () => (/* reexport safe */ _components_connect__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   useDispatch: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/react-redux/es/types.js");










/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReduxContextHook: () => (/* binding */ createReduxContextHook),
/* harmony export */   useReduxContext: () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");



/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);

    if ( true && !contextValue) {
      throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
    }

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

const useReduxContext = /*#__PURE__*/createReduxContextHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   initializeUseSelector: () => (/* binding */ initializeUseSelector),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");




let useSyncExternalStoreWithSelector = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__.notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext) {
  const useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : (0,_useReduxContext__WEBPACK_IMPORTED_MODULE_1__.createReduxContextHook)(context);
  return function useSelector(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined
    } = typeof equalityFnOrOptions === 'function' ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;

    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }

      if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }

      if (typeof equalityFn !== 'function') {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext();
    const firstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    const wrappedSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)({
      [selector.name](state) {
        const selected = selector(state);

        if (true) {
          const finalStabilityCheck = typeof stabilityCheck === 'undefined' ? globalStabilityCheck : stabilityCheck;

          if (finalStabilityCheck === 'always' || finalStabilityCheck === 'once' && firstRun.current) {
            const toCompare = selector(state);

            if (!equalityFn(selected, toCompare)) {
              let stack = undefined;

              try {
                throw new Error();
              } catch (e) {
                ;
                ({
                  stack
                } = e);
              }

              console.warn('Selector ' + (selector.name || 'unknown') + ' returned a different result when called with the same parameters. This can lead to unnecessary rerenders.' + '\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization', {
                state,
                selected,
                selected2: toCompare,
                stack
              });
            }
          }

          const finalNoopCheck = typeof noopCheck === 'undefined' ? globalNoopCheck : noopCheck;

          if (finalNoopCheck === 'always' || finalNoopCheck === 'once' && firstRun.current) {
            // @ts-ignore
            if (selected === state) {
              let stack = undefined;

              try {
                throw new Error();
              } catch (e) {
                ;
                ({
                  stack
                } = e);
              }

              console.warn('Selector ' + (selector.name || 'unknown') + ' returned the root state when called. This can lead to unnecessary rerenders.' + '\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.', {
                stack
              });
            }
          }

          if (firstRun.current) firstRun.current = false;
        }

        return selected;
      }

    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");


/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : // @ts-ignore
  (0,_useReduxContext__WEBPACK_IMPORTED_MODULE_1__.createReduxContextHook)(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.Provider),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.ReactReduxContext),
/* harmony export */   batch: () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates),
/* harmony export */   connect: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.connect),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.shallowEqual),
/* harmony export */   useDispatch: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");
/* harmony import */ var use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector */ "./node_modules/use-sync-external-store/shim/with-selector.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exports */ "./node_modules/react-redux/es/exports.js");
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






(0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.initializeUseSelector)(use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
(0,_components_connect__WEBPACK_IMPORTED_MODULE_5__.initializeConnect)(use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_3__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates);



/***/ }),

/***/ "./node_modules/react-redux/es/types.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/types.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSubscription: () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners; // Reasons to keep the subscription active

  let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

  let selfSubscribed = false;

  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return selfSubscribed;
  }

  function trySubscribe() {
    subscriptionsAmount++;

    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    subscriptionsAmount--;

    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }

  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBatch: () => (/* binding */ getBatch),
/* harmony export */   setBatch: () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useSyncExternalStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useSyncExternalStore.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notInitialized: () => (/* binding */ notInitialized)
/* harmony export */ });
const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}
function isSuspenseList(object) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.SuspenseList = SuspenseList;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isSuspenseList = isSuspenseList;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-string-replace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-string-replace/index.js ***!
  \****************************************************/
/***/ ((module) => {

/* eslint-disable vars-on-top, no-var, prefer-template */
var isRegExp = function (re) { 
  return re instanceof RegExp;
};
var escapeRegExp = function escapeRegExp(string) {
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
};
var isString = function (value) {
  return typeof value === 'string';
};
var flatten = function (array) {
  var newArray = [];

  array.forEach(function (item) {
    if (Array.isArray(item)) {
      newArray = newArray.concat(item);
    } else {
      newArray.push(item);
    }
  });

  return newArray;
};

/**
 * Given a string, replace every substring that is matched by the `match` regex
 * with the result of calling `fn` on matched substring. The result will be an
 * array with all odd indexed elements containing the replacements. The primary
 * use case is similar to using String.prototype.replace except for React.
 *
 * React will happily render an array as children of a react element, which
 * makes this approach very useful for tasks like surrounding certain text
 * within a string with react elements.
 *
 * Example:
 * matchReplace(
 *   'Emphasize all phone numbers like 884-555-4443.',
 *   /([\d|-]+)/g,
 *   (number, i) => <strong key={i}>{number}</strong>
 * );
 * // => ['Emphasize all phone numbers like ', <strong>884-555-4443</strong>, '.'
 *
 * @param {string} str
 * @param {RegExp|str} match Must contain a matching group
 * @param {function} fn
 * @return {array}
 */
function replaceString(str, match, fn) {
  var curCharStart = 0;
  var curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  var re = match;

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi');
  }

  var result = str.split(re);

  // Apply fn to all odd elements
  for (var i = 1, length = result.length; i < length; i += 2) {
    /** @see {@link https://github.com/iansinnott/react-string-replace/issues/74} */
    if (result[i] === undefined || result[i - 1] === undefined) {
      console.warn('reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.');
      continue;
    }

    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
}

module.exports = function reactStringReplace(source, match, fn) {
  if (!Array.isArray(source)) source = [source];

  return flatten(source.map(function(x) {
    return isString(x) ? replaceString(x, match, fn) : x;
  }));
};


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ ActionTypes),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/reselect/es/defaultMemoize.js":
/*!****************************************************!*\
  !*** ./node_modules/reselect/es/defaultMemoize.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKeyComparator: () => (/* binding */ createCacheKeyComparator),
/* harmony export */   defaultEqualityCheck: () => (/* binding */ defaultEqualityCheck),
/* harmony export */   defaultMemoize: () => (/* binding */ defaultMemoize)
/* harmony export */ });
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelector: () => (/* binding */ createSelector),
/* harmony export */   createSelectorCreator: () => (/* binding */ createSelectorCreator),
/* harmony export */   createStructuredSelector: () => (/* binding */ createStructuredSelector),
/* harmony export */   defaultEqualityCheck: () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultEqualityCheck),
/* harmony export */   defaultMemoize: () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize)
/* harmony export */ });
/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultMemoize */ "./node_modules/reselect/es/defaultMemoize.js");



function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var enableSchedulerDebugging = false;
var enableProfiling = false;
var frameYieldMs = 5;

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  return heap.length === 0 ? null : heap[0];
}
function pop(heap) {
  if (heap.length === 0) {
    return null;
  }

  var first = heap[0];
  var last = heap.pop();

  if (last !== first) {
    heap[0] = last;
    siftDown(heap, last, 0);
  }

  return first;
}

function siftUp(heap, node, i) {
  var index = i;

  while (index > 0) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;
  var halfLength = length >>> 1;

  while (index < halfLength) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (compare(left, node) < 0) {
      if (rightIndex < length && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (rightIndex < length && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */

var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
} // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111


var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.

var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom

var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
      } else {

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var isMessageLoopRunning = false;
var scheduledHostCallback = null;
var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
// thread, like user events. By default, it yields multiple times per frame.
// It does not attempt to align with frame boundaries, since most tasks don't
// need to be frame aligned; for those that do, use requestAnimationFrame.

var frameInterval = frameYieldMs;
var startTime = -1;

function shouldYieldToHost() {
  var timeElapsed = exports.unstable_now() - startTime;

  if (timeElapsed < frameInterval) {
    // The main thread has only been blocked for a really short amount of time;
    // smaller than a single frame. Don't yield yet.
    return false;
  } // The main thread has been blocked for a non-negligible amount of time. We


  return true;
}

function requestPaint() {

}

function forceFrameRate(fps) {
  if (fps < 0 || fps > 125) {
    // Using console['error'] to evade Babel and ESLint
    console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
    return;
  }

  if (fps > 0) {
    frameInterval = Math.floor(1000 / fps);
  } else {
    // reset the framerate
    frameInterval = frameYieldMs;
  }
}

var performWorkUntilDeadline = function () {
  if (scheduledHostCallback !== null) {
    var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
    // has been blocked.

    startTime = currentTime;
    var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
    // error can be observed.
    //
    // Intentionally not using a try-catch, since that makes some debugging
    // techniques harder. Instead, if `scheduledHostCallback` errors, then
    // `hasMoreWork` will remain true, and we'll continue the work loop.

    var hasMoreWork = true;

    try {
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        // If there's more work, schedule the next message event at the end
        // of the preceding one.
        schedulePerformWorkUntilDeadline();
      } else {
        isMessageLoopRunning = false;
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  } // Yielding to the browser will give it a chance to paint, so we can
};

var schedulePerformWorkUntilDeadline;

if (typeof localSetImmediate === 'function') {
  // Node.js and old IE.
  // There's a few reasons for why we prefer setImmediate.
  //
  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
  // (Even though this is a DOM fork of the Scheduler, you could get here
  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
  // https://github.com/facebook/react/issues/20756
  //
  // But also, it runs earlier which is the semantic we want.
  // If other browsers ever implement it, it's better to use it.
  // Although both of these would be inferior to native scheduling.
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
} else if (typeof MessageChannel !== 'undefined') {
  // DOM and Worker environments.
  // We prefer MessageChannel because of the 4ms setTimeout clamping.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else {
  // We should only fallback here in non-browser environments.
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
}

function requestHostCallback(callback) {
  scheduledHostCallback = callback;

  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;
    schedulePerformWorkUntilDeadline();
  }
}

function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}

function cancelHostTimeout() {
  localClearTimeout(taskTimeoutID);
  taskTimeoutID = -1;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_forceFrameRate = forceFrameRate;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = unstable_wrapCallback;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");
var shim = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js");
}


/***/ }),

/***/ "react-dom/client":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@lapilli-ui/components":
/*!*******************************************!*\
  !*** external ["lapilliUI","components"] ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["lapilliUI"]["components"];

/***/ }),

/***/ "@lapilli-ui/styles":
/*!***************************************!*\
  !*** external ["lapilliUI","styles"] ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = window["lapilliUI"]["styles"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.mjs":
/*!***********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ un),
/* harmony export */   applyPatches: () => (/* binding */ pn),
/* harmony export */   castDraft: () => (/* binding */ K),
/* harmony export */   castImmutable: () => (/* binding */ $),
/* harmony export */   createDraft: () => (/* binding */ ln),
/* harmony export */   current: () => (/* binding */ R),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enableAllPlugins: () => (/* binding */ J),
/* harmony export */   enableES5: () => (/* binding */ F),
/* harmony export */   enableMapSet: () => (/* binding */ C),
/* harmony export */   enablePatches: () => (/* binding */ T),
/* harmony export */   finishDraft: () => (/* binding */ dn),
/* harmony export */   freeze: () => (/* binding */ d),
/* harmony export */   immerable: () => (/* binding */ L),
/* harmony export */   isDraft: () => (/* binding */ r),
/* harmony export */   isDraftable: () => (/* binding */ t),
/* harmony export */   nothing: () => (/* binding */ H),
/* harmony export */   original: () => (/* binding */ e),
/* harmony export */   produce: () => (/* binding */ fn),
/* harmony export */   produceWithPatches: () => (/* binding */ cn),
/* harmony export */   setAutoFreeze: () => (/* binding */ sn),
/* harmony export */   setUseProxies: () => (/* binding */ vn)
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s,v){if( true&&c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];"string"!=typeof p&&"number"!=typeof p&&(p=""+p),0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/use-context-selector/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-context-selector/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BridgeProvider: () => (/* binding */ BridgeProvider),
/* harmony export */   createContext: () => (/* binding */ createContext),
/* harmony export */   useBridgeValue: () => (/* binding */ useBridgeValue),
/* harmony export */   useContext: () => (/* binding */ useContext),
/* harmony export */   useContextSelector: () => (/* binding */ useContextSelector),
/* harmony export */   useContextUpdate: () => (/* binding */ useContextUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");


const CONTEXT_VALUE = Symbol();
const ORIGINAL_PROVIDER = Symbol();
const isSSR = typeof window === 'undefined' ||
    /ServerSideRendering/.test(window.navigator && window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
// for preact that doesn't have runWithPriority
const runWithNormalPriority = scheduler__WEBPACK_IMPORTED_MODULE_1__.unstable_runWithPriority
    ? (fn) => {
        try {
            (0,scheduler__WEBPACK_IMPORTED_MODULE_1__.unstable_runWithPriority)(scheduler__WEBPACK_IMPORTED_MODULE_1__.unstable_NormalPriority, fn);
        }
        catch (e) {
            if (e.message === 'Not implemented.') {
                fn();
            }
            else {
                throw e;
            }
        }
    }
    : (fn) => fn();
const createProvider = (ProviderOrig) => {
    const ContextProvider = ({ value, children, }) => {
        const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
        const versionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
        const [resolve, setResolve] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        if (resolve) {
            resolve(value);
            setResolve(null);
        }
        const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
        if (!contextValue.current) {
            const listeners = new Set();
            const update = (fn, options) => {
                versionRef.current += 1;
                const action = {
                    n: versionRef.current,
                };
                if (options === null || options === void 0 ? void 0 : options.suspense) {
                    action.n *= -1; // this is intentional to make it temporary version
                    action.p = new Promise((r) => {
                        setResolve(() => (v) => {
                            action.v = v;
                            delete action.p;
                            r(v);
                        });
                    });
                }
                listeners.forEach((listener) => listener(action));
                fn();
            };
            contextValue.current = {
                [CONTEXT_VALUE]: {
                    /* "v"alue     */ v: valueRef,
                    /* versio"n"   */ n: versionRef,
                    /* "l"isteners */ l: listeners,
                    /* "u"pdate    */ u: update,
                },
            };
        }
        useIsomorphicLayoutEffect(() => {
            valueRef.current = value;
            versionRef.current += 1;
            runWithNormalPriority(() => {
                contextValue.current[CONTEXT_VALUE].l.forEach((listener) => {
                    listener({ n: versionRef.current, v: value });
                });
            });
        }, [value]);
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProviderOrig, { value: contextValue.current }, children);
    };
    return ContextProvider;
};
const identity = (x) => x;
/**
 * This creates a special context for `useContextSelector`.
 *
 * @example
 * import { createContext } from 'use-context-selector';
 *
 * const PersonContext = createContext({ firstName: '', familyName: '' });
 */
function createContext(defaultValue) {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
        [CONTEXT_VALUE]: {
            /* "v"alue     */ v: { current: defaultValue },
            /* versio"n"   */ n: { current: -1 },
            /* "l"isteners */ l: new Set(),
            /* "u"pdate    */ u: (f) => f(),
        },
    });
    context[ORIGINAL_PROVIDER] = context.Provider;
    context.Provider = createProvider(context.Provider);
    delete context.Consumer; // no support for Consumer
    return context;
}
/**
 * This hook returns context selected value by selector.
 *
 * It will only accept context created by `createContext`.
 * It will trigger re-render if only the selected value is referentially changed.
 *
 * The selector should return referentially equal result for same input for better performance.
 *
 * @example
 * import { useContextSelector } from 'use-context-selector';
 *
 * const firstName = useContextSelector(PersonContext, (state) => state.firstName);
 */
function useContextSelector(context, selector) {
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context)[CONTEXT_VALUE];
    if (typeof process === 'object' && "development" !== 'production') {
        if (!contextValue) {
            throw new Error('useContextSelector requires special context');
        }
    }
    const { 
    /* "v"alue     */ v: { current: value }, 
    /* versio"n"   */ n: { current: version }, 
    /* "l"isteners */ l: listeners, } = contextValue;
    const selected = selector(value);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((prev, action) => {
        if (!action) {
            // case for `dispatch()` below
            return [value, selected];
        }
        if ('p' in action) {
            throw action.p;
        }
        if (action.n === version) {
            if (Object.is(prev[1], selected)) {
                return prev; // bail out
            }
            return [value, selected];
        }
        try {
            if ('v' in action) {
                if (Object.is(prev[0], action.v)) {
                    return prev; // do not update
                }
                const nextSelected = selector(action.v);
                if (Object.is(prev[1], nextSelected)) {
                    return prev; // do not update
                }
                return [action.v, nextSelected];
            }
        }
        catch (_e) {
            // ignored (stale props or some other reason)
        }
        return [...prev]; // schedule update
    }, [value, selected]);
    if (!Object.is(state[1], selected)) {
        // schedule re-render
        // this is safe because it's self contained
        dispatch();
    }
    useIsomorphicLayoutEffect(() => {
        listeners.add(dispatch);
        return () => {
            listeners.delete(dispatch);
        };
    }, [listeners]);
    return state[1];
}
/**
 * This hook returns the entire context value.
 * Use this instead of React.useContext for consistent behavior.
 *
 * @example
 * import { useContext } from 'use-context-selector';
 *
 * const person = useContext(PersonContext);
 */
function useContext(context) {
    return useContextSelector(context, identity);
}
/**
 * This hook returns an update function to wrap an updating function
 *
 * Use this for a function that will change a value in
 * concurrent rendering in React 18.
 * Otherwise, there's no need to use this hook.
 *
 * @example
 * import { useContextUpdate } from 'use-context-selector';
 *
 * const update = useContextUpdate();
 *
 * // Wrap set state function
 * update(() => setState(...));
 *
 * // Experimental suspense mode
 * update(() => setState(...), { suspense: true });
 */
function useContextUpdate(context) {
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context)[CONTEXT_VALUE];
    if (typeof process === 'object' && "development" !== 'production') {
        if (!contextValue) {
            throw new Error('useContextUpdate requires special context');
        }
    }
    const { u: update } = contextValue;
    return update;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This is a Provider component for bridging multiple react roots
 *
 * @example
 * const valueToBridge = useBridgeValue(PersonContext);
 * return (
 *   <Renderer>
 *     <BridgeProvider context={PersonContext} value={valueToBridge}>
 *       {children}
 *     </BridgeProvider>
 *   </Renderer>
 * );
 */
const BridgeProvider = ({ context, value, children, }) => {
    const { [ORIGINAL_PROVIDER]: ProviderOrig } = context;
    if (typeof process === 'object' && "development" !== 'production') {
        if (!ProviderOrig) {
            throw new Error('BridgeProvider requires special context');
        }
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProviderOrig, { value }, children);
};
/**
 * This hook return a value for BridgeProvider
 */
const useBridgeValue = (context) => {
    const bridgeValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
    if (typeof process === 'object' && "development" !== 'production') {
        if (!bridgeValue[CONTEXT_VALUE]) {
            throw new Error('useBridgeValue requires special context');
        }
    }
    return bridgeValue;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************************!*\
  !*** ./assets/js/src/components/add-to-wishlist/index.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/store */ "./assets/js/src/app/store.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ */ "./assets/js/src/utils/index.js");
/* harmony import */ var _add_to_wishlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-to-wishlist */ "./assets/js/src/components/add-to-wishlist/add-to-wishlist.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* globals yithWcwlAddToWishlist */









var initApp = function initApp() {
  jQuery(document).on('yith_wcwl_fragments_replaced', function (event, _ref) {
    var data = _ref.data;
    if (!(data !== null && data !== void 0 && data.avoidDataInvalidation)) {
      _app_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch({
        type: 'FORCE_INVALIDATION'
      });
    }
  });
  initAddToWishlistButtons();
};
var initAddToWishlistButtons = function initAddToWishlistButtons() {
  var buttons = document.querySelectorAll('.yith-add-to-wishlist-button-block:not(.yith-add-to-wishlist-button-block--initialized)');
  if (buttons) {
    buttons.forEach(initAddToWishlistButton);
  }
};
var initAddToWishlistButton = function initAddToWishlistButton(container) {
  var _yithWcwlAddToWishlis;
  var productId = container.getAttribute('data-product-id');
  var buttonId = Date.now() + '' + productId;
  var attributes = _objectSpread({
    productId: productId,
    buttonId: buttonId
  }, JSON.parse(container.getAttribute('data-attributes')));
  var portalContainer = false;
  if ('before_image' === ((_yithWcwlAddToWishlis = yithWcwlAddToWishlist.globalOptions) === null || _yithWcwlAddToWishlis === void 0 ? void 0 : _yithWcwlAddToWishlis.loop_position)) {
    var _container$closest;
    portalContainer = (_container$closest = container.closest(yithWcwlAddToWishlist.containerSelectors.productContainer.join(', '))) === null || _container$closest === void 0 ? void 0 : _container$closest.querySelector(yithWcwlAddToWishlist.containerSelectors.thumbnailContainer.join(', '));
    if (portalContainer) {
      attributes.isOverProductImage = true;
    }
  }
  var appComponent = /*#__PURE__*/React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _app_store__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_utils___WEBPACK_IMPORTED_MODULE_6__.ButtonDataProvider, {
    attributes: attributes
  }, /*#__PURE__*/React.createElement(_add_to_wishlist__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
  if (portalContainer) {
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container).render(/*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(appComponent, portalContainer));
  } else {
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container).render(appComponent);
  }
  container.classList.add('yith-add-to-wishlist-button-block--initialized');
};
document.addEventListener('DOMContentLoaded', initApp);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addAction)('yith_wcwl_init_add_to_wishlist_components', 'yith-woocommerce-wishlist', initAddToWishlistButtons);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map