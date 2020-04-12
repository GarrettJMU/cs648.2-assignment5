"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */

/* eslint "react/no-multi-comp": "off" */
// eslint-disable-next-line react/prefer-stateless-function
var ProductList = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductList, _React$Component);

  var _super = _createSuper(ProductList);

  function ProductList(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
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
              return graphQLFetch(query);

            case 3:
              data = _context.sent;
              data && this.setState({
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
              return graphQLFetch(query, {
                product: product
              });

            case 3:
              data = _context2.sent;
              data && this.loadData();

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

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement(ProductAdd, {
      addProduct: function addProduct(product) {
        return _this2.addProduct(product);
      }
    }));
  };

  return ProductList;
}(React.Component);

function ProductTable(_ref) {
  var products = _ref.products;
  var selectOptions = ["Product Name", "Price", "Category", "Image"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("h2", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectOptions.map(function (option, index) {
    return /*#__PURE__*/React.createElement("th", {
      key: index
    }, option);
  }))), /*#__PURE__*/React.createElement("tbody", null, products.map(function (product, index) {
    return /*#__PURE__*/React.createElement(ProductRow, {
      product: product,
      index: index,
      key: index
    });
  }))));
}

function ProductRow(_ref2) {
  var index = _ref2.index,
      product = _ref2.product;
  console.log(product);
  return /*#__PURE__*/React.createElement("tr", {
    key: index
  }, /*#__PURE__*/React.createElement("th", null, product.Name), /*#__PURE__*/React.createElement("th", null, "$", product.Price), /*#__PURE__*/React.createElement("th", null, product.Category), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("a", {
    href: product.Image,
    target: "_blank"
  }, "View")));
}

var ProductAdd = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(ProductAdd, _React$Component2);

  var _super2 = _createSuper(ProductAdd);

  function ProductAdd(props) {
    var _this3;

    _this3 = _React$Component2.call(this, props) || this;
    _this3.state = {
      price: '',
      category: '',
      name: '',
      image: ''
    };
    return _this3;
  }

  var _proto2 = ProductAdd.prototype;

  _proto2.onSubmit = function onSubmit(e) {
    e.preventDefault();
    var product = {
      Name: this.state.name,
      Price: parseInt(this.state.price),
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

  _proto2.render = function render() {
    var _this4 = this;

    var categoryValues = ["", "Shirts", "Jeans", "Jackets", "Sweaters", "Accessories"];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Add a new product to Inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("form", null, "Category ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      name: "category",
      value: this.state.category,
      onChange: function onChange(e) {
        return _this4.setState({
          category: e.target.value
        });
      }
    }, categoryValues.map(function (value, index) {
      return /*#__PURE__*/React.createElement("option", {
        value: value,
        key: index
      }, value);
    })), /*#__PURE__*/React.createElement("br", null), "Product Name ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: this.state.name,
      name: "name",
      onChange: function onChange(e) {
        return _this4.setState({
          name: e.target.value
        });
      }
    }), /*#__PURE__*/React.createElement("br", null), "Price Per Unit ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "price",
      value: "$" + this.state.price,
      onChange: function onChange(e) {
        return _this4.setState({
          price: e.target.value.replace(/\$/g, '')
        });
      }
    }), /*#__PURE__*/React.createElement("br", null), "Image URL ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "image",
      value: this.state.image,
      onChange: function onChange(e) {
        return _this4.setState({
          image: e.target.value
        });
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Add Product",
      onClick: function onClick(e) {
        return _this4.onSubmit(e);
      }
    })));
  };

  return ProductAdd;
}(React.Component);

function graphQLFetch(_x2, _x3) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query, variables) {
    var response, body, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (variables === void 0) {
              variables = {};
            }

            _context3.next = 3;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.text();

          case 6:
            body = _context3.sent;
            result = JSON.parse(body);
            return _context3.abrupt("return", result.data);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('root'));