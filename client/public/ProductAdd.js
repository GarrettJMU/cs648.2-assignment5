"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductAdd = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(ProductAdd, _PureComponent);

  function ProductAdd(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      price: '',
      category: '',
      name: '',
      image: ''
    };
    return _this;
  }

  var _proto = ProductAdd.prototype;

  _proto.onSubmit = function onSubmit(e) {
    e.preventDefault();
    var product = {
      Name: this.state.name,
      Price: parseInt(this.state.price, 10),
      Category: this.state.category,
      Image: this.state.image
    };
    this.props.addProduct(product);
    this.setState({
      name: '',
      price: '',
      category: '',
      image: ''
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var categoryValues = ['', 'Shirts', 'Jeans', 'Jackets', 'Sweaters', 'Accessories'];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "Add a new product to Inventory"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("form", null, "Category", ' ', /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("select", {
      name: "category",
      value: this.state.category,
      onChange: function onChange(e) {
        return _this2.setState({
          category: e.target.value
        });
      }
    }, categoryValues.map(function (value) {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: value,
        key: value
      }, value);
    })), /*#__PURE__*/_react.default.createElement("br", null), "Product Name", ' ', /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      value: this.state.name,
      name: "name",
      onChange: function onChange(e) {
        return _this2.setState({
          name: e.target.value
        });
      }
    }), /*#__PURE__*/_react.default.createElement("br", null), "Price Per Unit", ' ', /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "price",
      value: "$" + this.state.price,
      onChange: function onChange(e) {
        return _this2.setState({
          price: e.target.value.replace(/\$/g, '')
        });
      }
    }), /*#__PURE__*/_react.default.createElement("br", null), "Image URL", ' ', /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "image",
      value: this.state.image,
      onChange: function onChange(e) {
        return _this2.setState({
          image: e.target.value
        });
      }
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "submit",
      value: "Add Product",
      onClick: function onClick(e) {
        return _this2.onSubmit(e);
      }
    })));
  };

  return ProductAdd;
}(_react.PureComponent);

var _default = ProductAdd;
exports.default = _default;