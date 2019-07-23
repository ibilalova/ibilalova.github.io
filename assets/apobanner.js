(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["adblock_detection_banner"] = factory();
	else
		root["adblock_detection_banner"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/banner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/banner.js":
/*!**********************!*\
  !*** ./js/banner.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\n/* harmony import */ var adblock_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! adblock-detector */ \"./node_modules/adblock-detector/detector.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\n \n\nclass Banner {\n    constructor(config = {}) {\n        this.config = config;\n        this.detectionResult = null;\n    }\n\n    show(isDetected) {\n        document.readyState !== \"loading\" \n            ?  _drawBanner(isDetected, this.config) \n            : document.addEventListener(\"DOMContentLoaded\", () => _drawBanner(isDetected, this.config));\n    }\n\n    detectAdblocker() {\n        return !!this.detectionResult\n            ? Promise.resolve(this.detectionResult)\n            : Object(adblock_detector__WEBPACK_IMPORTED_MODULE_0__[\"detect\"])().then(isDetected => this.detectionResult = isDetected);\n    }\n\n    showIfAdblockerDetected() {\n        this.detectAdblocker().then(adblock => this.show(adblock));\n    }\n\n    isShown() {\n        return !!document.getElementById(\"apomaya_banner_cb\");\n    }\n}\n\nconst defaultFonts = \"'Lucida Sans Unicode', 'Arial', 'Verdana', 'Trebuchet MS'\";\n/**\n * @param {bool} isDetected if adblocker detected the value is `true`\n * @param {object} config config with custom options\n */\nfunction _drawBanner(isDetected, config) {\n    if (isDetected === undefined || isDetected) {\n        let withLogo = !!config.logo;\n        let _config = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getFullConfig\"])(config);\n\n        if (_config.type === \"banner\") {\n            return _attachBanner(_config, withLogo);\n        }\n        if (_config.type === \"modal\") {\n            return _attachModal(_config, withLogo);\n        }\n        if (_config.type === \"innerBlock\") {\n            return _attachInnerBlock(_config, withLogo);\n        }\n    }\n}\n\nfunction _attachInnerBlock(config, withLogo) {\n    let { content, closeButton, logo } = config;\n    let { background, containerStyle, contentStyle, id, text } = content;\n\n    let destContainer = document.getElementById(dest);\n    if (!destContainer) {\n        console.error('destination container not found');\n        return undefined;\n    }\n    destContainer.style.position = 'relative';\n    let container = document.createElement(\"div\");\n    if (id) {\n        container.id = id;\n    }\n    container.style = `\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        top: 0;\n        right: 0;\n        color: #243342;\n        background: rgb(17, 188, 207);\n        background: ${background}; \n        width: 100%; \n        height: 100%;\n        z-index: 1000000; \n        border: 0.5px solid #44444457;\n        justify-content: center;\n        display: flex;\n        padding: 15px;\n        box-sizing: border-box;\n        ${containerStyle}`;\n    \n    let blockContent = `\n        ${_getCloseButton(closeButton)}\n        <div style=\"font-size: 20px; font-family: ${defaultFonts}; align-self: center; ${contentStyle}\">\n            ${withLogo && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getLogo\"])(logo)}\n            ${text}\n        </div>\n    `;\n\n    container.innerHTML = blockContent;\n    destContainer.appendChild(container);\n}\n\nfunction _attachBanner(config, withLogo) {\n    let { content, closeButton, position, logo } = config;\n    let { background, containerStyle, contentStyle, id, text } = content;\n\n    let container = document.createElement(\"div\");\n    if (id) {\n        container.id = id;\n    }\n    container.style = `\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        ${position}: 0;\n        color: #243342;\n        background: #11bccfc7;\n        background: ${background}; \n        width: 100%; \n        z-index: 1000000; \n        border: 0.5px solid #44444457;\n        height: fit-content;\n        justify-content: center;\n        display: flex;\n        min-height: 40px;\n        padding: 15px;\n        box-sizing: border-box;\n        ${containerStyle}`;\n\n    let blockContent = `\n        ${_getCloseButton(closeButton)}\n        <div style=\"font-size: 20px; font-family: ${defaultFonts}; align-self: center; ${contentStyle}\">\n            ${withLogo && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getLogo\"])(logo)}\n            ${text}\n        </div>\n    `;\n\n    container.innerHTML = blockContent;\n    document.body.appendChild(container);\n}\n\nfunction _attachModal(config, withLogo) {\n    let { content, closeButton, logo } = config;\n    let { background, contentStyle, id, text } = content;\n\n    let container = document.createElement(\"div\");\n    if (id) {\n        container.id = id;\n    }\n    container.style = `\n        position: fixed;\n        z-index: 1000000;\n        top: 0;\n        left: 0;\n        top: 0;\n        right: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100vw;\n        height: 100vh;`;\n\n    const wrapperStyle = `\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(255, 255, 255, 0.8);\n        background: ${background};`;\n    const bodyStyle = `\n        box-sizing: border-box;\n        font-family: ${defaultFonts};\n        font-size: 20px;\n        min-width: 400px;\n        text-align: center;\n        min-height: 10px;\n        max-height: 100vh;\n        background-color: #fff;\n        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.12);\n        padding: 35px 25px;\n        overflow-y: auto;\n        position: relative;\n        max-width: 65%;`;\n    const isModal = true;\n    let blockContent = `\n        <div style=\"${wrapperStyle}\"></div>\n        <div style=\"${bodyStyle}${contentStyle}\">\n            ${_getCloseButton(closeButton, isModal)}\n            ${withLogo && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getLogo\"])(logo)}\n            ${text}\n        </div>\n    `;\n\n    container.innerHTML = blockContent;\n    document.body.appendChild(container);\n}\n\nfunction _getCloseButton(config, isModal) {\n    let { color, size, show, style } = config;\n\n    const cbStyle = `width: ${size}; position:absolute; right: 13px; top: 6px; cursor: pointer;${style}`;\n    return show \n        ? ` <div id=\"apomaya_banner_cb\" style=\"${cbStyle}\" onclick=\"${isModal ? 'this.parentElement.parentElement.remove()' : 'this.parentElement.remove()'}\">\n                <svg viewBox=\"0 0 13.83 13.83\" width=\"100%\" height=\"100%\">\n                    <path stroke=${color} d=\"M13.48.35L.35 13.48M.35.35l13.13 13.13\"></path>\n                </svg>\n        </div>`\n        : '';\n}\n\nwindow.banner = Banner;\n\n//# sourceURL=webpack://adblock_detection_banner/./js/banner.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: getFullConfig, getLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFullConfig\", function() { return getFullConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLogo\", function() { return getLogo; });\nfunction getFullConfig(config = {}) {\n    let {\n        closeButton = {},\n        content = {}, \n        logo = {},\n        id = '',\n        position = 'bottom',\n        type = 'banner',\n    } = config;\n    let {\n        background = '',\n        containerStyle = '',\n        contentStyle = '',\n        dest = '',\n        text = 'We notice that you are using an ad blocker. We use advertising to fund content creation for this site.  Please whitelist us.',\n    } = content;\n    let {\n        color = '#444c',\n        show = true,\n        size = '14px',\n        style = '',\n    } = closeButton;\n\n    let logoStyle = logo.style || '';\n    let logoImage = logo.image || '';\n    let logoWidth = logo.width || '';\n    return {\n        type,\n        position,\n        content: {\n            background, containerStyle, contentStyle, dest, id, text\n        },\n        closeButton: {\n            color, size, show, style\n        },\n        logo: {\n            image: logoImage,\n            style: logoStyle,\n            width: logoWidth,\n        }\n    };\n}\n\nfunction getLogo(logo) {\n    const style = `\n        display: block;\n        text-align: center;\n        margin: 0 auto;\n        margin-bottom: 15px;\n        ${logo.style};\n        width: ${logo.width};\n    `;\n\n    return `<img src=${logo.image} style='${style}' />`;\n}\n\n//# sourceURL=webpack://adblock_detection_banner/./js/utils.js?");

/***/ }),

/***/ "./node_modules/adblock-detector/detector.js":
/*!***************************************************!*\
  !*** ./node_modules/adblock-detector/detector.js ***!
  \***************************************************/
/*! exports provided: detect, getAdblockerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detect\", function() { return detect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAdblockerType\", function() { return getAdblockerType; });\nconst honeypotStyle = \"width: 1px !important; height: 1px !important; position: absolute !important; left: -2px !important; top: -2px !important;\";\n\nfunction detect(options = {}) {\n    let {\n        version = '1',\n        cosmetic = { enabled: true, timeout: 100 },\n        network = { enabled: true },\n        silent = { enabled: false, ttl: 0 }\n    } = options;\n\n    let detectionList = [];\n    let detectionOptions = [\n        { shouldCheck: cosmetic.enabled, methods: [ () => cosmeticDetection(cosmetic.timeout) ] },\n        { shouldCheck: network.enabled, methods: [ networkDetection, detectionWithFrame ] },\n        { shouldCheck: silent.enabled, methods: [ () => isDetectedBySlots() ] },\n    ];\n    detectionOptions.forEach(opt => {\n        if (opt.shouldCheck) {\n            opt.methods.forEach(method => detectionList.push(method()))\n        }\n    });\n\n    return new Promise((resolve) => {\n        resolve(Promise.all(detectionList).then((res) => {\n            let method = res.find((d) => d.detected);\n\n            if (!method && silent.enabled) {\n                let result = startDetectionBySlots(silent);\n                if (!result.delayed && result.detected) {\n                    method = { method: 'silent', detected: true };\n                }\n            }\n\n            if (version === '1') {\n                //\n                // BC: has to return boolean value\n                //\n                return method ? method.detected : false;\n            } else {\n                return method ? method : { method: 'all', detected: false };\n            }\n        }));\n    });\n}\n\nfunction networkDetection() {\n    const url = \"https://reveal.apxy.io/js/advert.js\";\n    return new Promise((resolve) => {\n        fetchRemoteScript(url).then((result) => {\n            resolve({ method: 'network', detected: result });\n        });\n    });\n}\n\nfunction cosmeticDetection(wait) {\n    let container = document.documentElement;\n    let honeypot = document.createElement(\"div\");\n    honeypot.setAttribute(\"id\", \"AD-300x250\");\n    honeypot.setAttribute(\"style\", honeypotStyle);\n    container.appendChild(honeypot);\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            let isDetected = window.getComputedStyle(honeypot).display === \"none\";\n            container.removeChild(honeypot);\n            resolve({method: 'cosmetic', detected: isDetected});\n        }, wait);\n    });\n}\n\nfunction detectionWithFrame() {\n    let container = document.documentElement;\n    let frame = document.createElement(\"iframe\");\n    frame.srcdoc = \"<script src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>\";\n    frame.setAttribute(\"style\", honeypotStyle);\n    container.appendChild(frame);\n    return new Promise((resolve) => {\n        frame.onload = () => {\n            let adsbygoogle = frame.contentWindow.adsbygoogle;\n            let hasProperty = false;\n            if (adsbygoogle) {\n                // duckduckgo substitutes the object and adds the length property\n                hasProperty = adsbygoogle.hasOwnProperty('length');\n            }\n            let result = !adsbygoogle || hasProperty;\n            container.removeChild(frame);\n            resolve({method: 'network', detected: result});\n        }\n    });\n}\n\nfunction isDetectedBySlots() {\n    return new Promise((resolve) => {\n        resolve({ method: 'silent', detected: getDetectedBySlots() });\n    });\n}\n\nfunction startDetectionBySlots(opts) {\n    if (window.document.readyState === 'complete') {\n        return { delayed: false, detected: detectBySlots(opts) };\n    } else {\n        window.addEventListener('load', () => detectBySlots(opts));\n        return { delayed: true, detected: false };\n    }\n}\n\nfunction detectBySlots(opts) {\n    let result = detectByGoogleTagSlots();\n    setDetectedBySlots(opts.ttl, result);\n    return result;\n}\n\nfunction getDetectedBySlots() {\n    let stateStr = localStorage.getItem('apd');\n    if (!stateStr) {\n        return false;\n    }\n    try {\n        let state = JSON.parse(stateStr);\n        if (Date.now() > state.expires) {\n            return false;\n        }\n        return state.value;\n    } catch (e) {\n        return false;\n    }\n}\n\nfunction setDetectedBySlots(ttl, value) {\n    let expires = Date.now() + ttl;\n    let state = JSON.stringify({value, expires});\n    localStorage.setItem('apd', state);\n}\n\nfunction detectByGoogleTagSlots() {\n    let isBlocked = false;\n    if (!window.googletag) {\n        isBlocked = true;\n        return isBlocked;\n    }\n    if (window.googletag && !window.googletag.apiReady) {\n        isBlocked = true;\n        return isBlocked;\n    }\n    // detect ublock or brave\n    if (!window.googletag.pubads || !window.googletag.pubads().getSlots().length) {\n        isBlocked = true;\n    } else {\n        isBlocked = true;\n        let slots = window.googletag.pubads().getSlots();\n        for (let i = 0; i < slots.length; i++) {\n            let id = slots[i].getSlotElementId();\n            let slot = document.getElementById(id);\n            if (slot.offsetHeight > 0) {\n                isBlocked = false;\n                break;\n            }\n        }\n    }\n    return isBlocked;\n}\n\nfunction getAdblockerType() {\n    return fetchScripts().then(res => detectAdblocker(res));\n}\n\nfunction fetchScripts() {\n    let promises = [\n        { url: \"https://apomaya.tech/js/advert.js\" },\n        { url: \"https://connect.facebook.net/en_US/fbevents.js\" },\n        { url: \"https://tag.digitaltarget.ru/adcm.js\" },\n        { url: \"https://mc.yandex.ru/metrika/watch.js\" }\n    ].map(el => fetchRemoteScript(el.url));\n    return Promise.all(promises);\n}\n\nfunction fetchRemoteScript(url) {\n    return fetch(url, {mode: \"no-cors\", method: \"GET\"})\n            .then(response => response.body)\n            .then(() => { return false; })\n            .catch(() => { return true; });\n}\n\nfunction detectAdblocker(flags) {\n    if (document.body) {\n        return ublockEnabled().then(isUblock => getAdblocker(flags, true, isUblock));\n    }\n    return getAdblocker(flags, false);\n}\n\nfunction getAdblocker(detectionResult, isFullDetection, isUblock) {\n    let [isBlockerEnabled, isFbBlocked, isTagBlocked, isYaBlocked] = detectionResult;\n\n    if (!isBlockerEnabled) {\n        return getDetectionResult(\"not detected\", \"no\", false);\n    }\n    if (isUblock || isYaBlocked) {\n        return getDetectionResult(\"uBlock\", \"ublock\", true);\n    }\n    if (isFbBlocked) {\n        return getDetectionResult(\"AdBlock\", \"adblock\", true);\n    }\n    if (isTagBlocked) {\n        return getDetectionResult(\"AdBlock Plus\", \"adblockplus\", true);\n    }\n    if (isFullDetection) {\n        return isGhosteryEnabled()\n            ? getDetectionResult(\"Ghostery\", \"ghostery\", true)\n            : getDetectionResult(\"unknown\", \"unknown\", true);\n    }\n    return getDetectionResult(\"unknown\", \"unknown\", true);\n}\n\nfunction getDetectionResult(title, name, isDetected) {\n    return { title, name, isDetected };\n}\n\n// Ghostery injects css styles for its widget.\n// So we are trying to detect if these styles exist.\nfunction isGhosteryEnabled() {\n    if (!window.getComputedStyle) {\n        return false;\n    }\n    let element = document.createElement(\"div\");\n    document.body.appendChild(element);\n    element.id = \"ghostery-purple-box\";\n    element.className = \"ghostery-top\";\n    let styles = window.getComputedStyle(element);\n    let detected = styles.position === \"fixed\" && styles.top.match(/^\\d+px$/);\n    element.remove();\n    return detected;\n}\n\n// uBlock sets \"display: none !important\" property dynamically\n// This fact is used to check if it is enabled. It makes the function async.\nfunction  ublockEnabled() {\n    return new Promise(function(resolve) {\n        let bait = document.createElement(\"div\");\n        bait.setAttribute(\"class\", \"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links\");\n        bait.setAttribute(\"style\", honeypotStyle);\n        document.body.appendChild(bait);\n        setTimeout(function() {\n            resolve(bait.style.display === \"none\");\n        }, 0);\n    });\n}\n\n\n//# sourceURL=webpack://adblock_detection_banner/./node_modules/adblock-detector/detector.js?");

/***/ })

/******/ })["default"];
});