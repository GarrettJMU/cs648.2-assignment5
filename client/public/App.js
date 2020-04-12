"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ProductList = _interopRequireDefault(require("./ProductList"));

var _NotFound = _interopRequireDefault(require("./NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
  exact: true,
  from: "/",
  to: "/products"
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/products",
  component: _ProductList.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  component: _NotFound.default
})));

_reactDom.default.render(element, document.getElementById('root'));