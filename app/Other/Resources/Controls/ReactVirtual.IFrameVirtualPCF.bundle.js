/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./IFrameVirtualPCF/components/IFrameControl.tsx":
/*!*******************************************************!*\
  !*** ./IFrameVirtualPCF/components/IFrameControl.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.IFrameControl = void 0;\n\nvar react_1 = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar defaultSrc = \"https://bing.com\";\nexports.IFrameControl = React.memo(function (props) {\n  var _a;\n\n  var width = props.width,\n      height = props.height,\n      onFullScreen = props.onFullScreen,\n      isFullScreen = props.isFullScreen,\n      showFullScreenBtn = props.showFullScreenBtn; // Set default src to bing (or whatever)\n\n  var src = (_a = props.src) !== null && _a !== void 0 ? _a : defaultSrc;\n  var containerSize = React.useMemo(function () {\n    return {\n      height: height,\n      width: width\n    };\n  }, [height]);\n  var rootContainerStyle = React.useMemo(function () {\n    return {\n      height: height,\n      width: width\n    };\n  }, [width, height]);\n  return React.createElement(react_1.ThemeProvider, {\n    style: containerSize\n  }, React.createElement(react_1.Stack, {\n    verticalFill: true,\n    grow: true,\n    style: rootContainerStyle\n  }, React.createElement(react_1.Stack.Item, {\n    grow: true,\n    style: {\n      position: \"relative\",\n      backgroundColor: \"white\"\n    }\n  }, React.createElement(\"iframe\", {\n    src: src,\n    width: width,\n    height: height\n  }))), React.createElement(react_1.Stack, null, showFullScreenBtn && React.createElement(react_1.Stack.Item, {\n    grow: true,\n    align: \"end\"\n  }, !isFullScreen && React.createElement(react_1.DefaultButton, {\n    onClick: onFullScreen\n  }, \"Full screen\"))));\n});\nexports.IFrameControl.displayName = \"IFrameControl\";\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./IFrameVirtualPCF/components/IFrameControl.tsx?");

/***/ }),

/***/ "./IFrameVirtualPCF/index.ts":
/*!***********************************!*\
  !*** ./IFrameVirtualPCF/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.IFrameVirtualPCF = void 0;\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar IFrameControl_1 = __webpack_require__(/*! ./components/IFrameControl */ \"./IFrameVirtualPCF/components/IFrameControl.tsx\");\n\nvar IFrameVirtualPCF =\n/** @class */\nfunction () {\n  function IFrameVirtualPCF() {\n    var _this = this;\n\n    this.isFullScreen = false;\n\n    this.onFullScreen = function () {\n      _this.context.mode.setFullScreen(true);\n    };\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   */\n\n\n  IFrameVirtualPCF.prototype.init = function (context, notifyOutputChanged) {\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.context = context;\n    context.mode.trackContainerResize(true);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n\n\n  IFrameVirtualPCF.prototype.updateView = function (context) {\n    if (context.updatedProperties.indexOf(\"fullscreen_close\") > -1) {\n      this.isFullScreen = false;\n    }\n\n    if (context.updatedProperties.indexOf(\"fullscreen_open\") > -1) {\n      this.isFullScreen = true;\n    }\n\n    this.notifyOutputChanged();\n    return React.createElement(IFrameControl_1.IFrameControl, this.getIframeProps(context));\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  IFrameVirtualPCF.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  IFrameVirtualPCF.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  IFrameVirtualPCF.prototype.getIframeProps = function (context) {\n    var allocatedWidth = parseInt(context.mode.allocatedWidth);\n    var allocatedHeight = parseInt(context.mode.allocatedHeight);\n    return {\n      src: undefinedIfEmpty(context.parameters.src),\n      width: allocatedWidth,\n      height: allocatedHeight,\n      isFullScreen: this.isFullScreen,\n      onFullScreen: this.onFullScreen,\n      showFullScreenBtn: context.parameters.FullscreenButton.raw\n    };\n  };\n\n  return IFrameVirtualPCF;\n}();\n\nexports.IFrameVirtualPCF = IFrameVirtualPCF;\n\nfunction undefinedIfEmpty(property) {\n  return defaultIfEmpty(property, undefined);\n}\n\nfunction defaultIfEmpty(property, defaultValue) {\n  return property.raw ? property.raw : defaultValue;\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./IFrameVirtualPCF/index.ts?");

/***/ }),

/***/ "@fluentui/react":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./IFrameVirtualPCF/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('ReactVirtual.IFrameVirtualPCF', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.IFrameVirtualPCF);
} else {
	var ReactVirtual = ReactVirtual || {};
	ReactVirtual.IFrameVirtualPCF = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.IFrameVirtualPCF;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}