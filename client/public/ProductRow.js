"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductRow(_ref) {
  var index = _ref.index,
      product = _ref.product;
  return /*#__PURE__*/_react.default.createElement("tr", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("th", null, product.Name), /*#__PURE__*/_react.default.createElement("th", null, "$", product.Price), /*#__PURE__*/_react.default.createElement("th", null, product.Category), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement("a", {
    href: product.Image,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "View")));
}

var _default = ProductRow;
exports.default = _default;