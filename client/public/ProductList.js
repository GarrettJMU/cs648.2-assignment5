"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _query = require("./query");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductList = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(ProductList, _PureComponent);

  function ProductList(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      products: []
    };
    return _this;
  }

  var _proto = ProductList.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.loadData();
  };

  _proto.loadData = /*#__PURE__*/function () {
    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = "query {\n      productList {\n        id Category Name Price Image\n      }\n    }";
              _context.next = 3;
              return (0, _query.graphQLFetch)(query);

            case 3:
              data = _context.sent;
              if (data) this.setState({
                products: data.productList
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadData() {
      return _loadData.apply(this, arguments);
    }

    return loadData;
  }();

  _proto.addProduct = /*#__PURE__*/function () {
    var _addProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {
      var query, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = "mutation productAdd($product: ProductInputs!) {\n      productAdd(product: $product) {\n        id\n      }\n    }";
              _context2.next = 3;
              return (0, _query.graphQLFetch)(query, {
                product: product
              });

            case 3:
              data = _context2.sent;
              if (data) this.loadData();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function addProduct(_x) {
      return _addProduct.apply(this, arguments);
    }

    return addProduct;
  }();

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/_react.default.createElement(ProductAdd, {
      addProduct: function addProduct(product) {
        return _this2.addProduct(product);
      }
    }));
  };

  return ProductList;
}(_react.PureComponent);

var _default = ProductList;
exports.default = _default;