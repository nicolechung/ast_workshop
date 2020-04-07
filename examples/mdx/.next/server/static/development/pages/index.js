module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js') // The require function
  /******/
  /******/ /******/ function __webpack_require__ (moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ var threw = true
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId]
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault () {
            return module['default']
          }
        : /******/ function getModuleExports () {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './pages/index.md':
      /*!************************!*\
  !*** ./pages/index.md ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return MDXContent
          }
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @mdx-js/react */ '@mdx-js/react'
        )
        /* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
        )
        var _jsxFileName =
          '/Users/nchung/side_projects/ast_workshop/examples/mdx/pages/index.md'
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement

        function _objectWithoutProperties (source, excluded) {
          if (source == null) return {}
          var target = _objectWithoutPropertiesLoose(source, excluded)
          var key, i
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i]
              if (excluded.indexOf(key) >= 0) continue
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue
              target[key] = source[key]
            }
          }
          return target
        }

        function _objectWithoutPropertiesLoose (source, excluded) {
          if (source == null) return {}
          var target = {}
          var sourceKeys = Object.keys(source)
          var key, i
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i]
            if (excluded.indexOf(key) >= 0) continue
            target[key] = source[key]
          }
          return target
        }

        function _extends () {
          _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
          return _extends.apply(this, arguments)
        }

        /* @jsx mdx */

        const makeShortcode = name =>
          function MDXDefaultShortcode (props) {
            console.warn(
              'Component ' +
                name +
                ' was not imported, exported, or provided by MDXProvider as global scope'
            )
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__['mdx'])(
              'div',
              _extends({}, props, {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 10
                }
              })
            )
          }

        const layoutProps = {}
        const MDXLayout = 'wrapper'
        function MDXContent (_ref) {
          let { components } = _ref,
            props = _objectWithoutProperties(_ref, ['components'])

          return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__['mdx'])(
            MDXLayout,
            _extends({}, layoutProps, props, {
              components: components,
              mdxType: 'MDXLayout',
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 10
              }
            }),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__['mdx'])(
              'h1',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 5
                }
              },
              `👋 Hello, world!`
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__['mdx'])(
              'p',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 5
                }
              },
              `This is MDX!`
            )
          )
        }
        MDXContent.isMDXComponent = true

        /***/
      },

    /***/ 3:
      /*!******************************!*\
  !*** multi ./pages/index.md ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/nchung/side_projects/ast_workshop/examples/mdx/pages/index.md */ './pages/index.md'
        )

        /***/
      },

    /***/ '@mdx-js/react':
      /*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('@mdx-js/react')

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('react')

        /***/
      }

    /******/
  }
)
//# sourceMappingURL=index.js.map
