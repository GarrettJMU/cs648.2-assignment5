"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ProductRow = _interopRequireDefault(require("./ProductRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProductTable(_ref) {
  var products = _ref.products;
  var selectOptions = ['Product Name', 'Price', 'Category', 'Image'];
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/_react.default.createElement("h2", null, "Showing all available products"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, selectOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: option
    }, option);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, products.map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(_ProductRow.default, {
      product: product,
      index: index,
      key: product.id
    });
  }))));
}

var _default = ProductTable;
exports.default = _default;