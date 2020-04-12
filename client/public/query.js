"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphQLFetch = graphQLFetch;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function graphQLFetch(_x, _x2) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables) {
    var response, body, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (variables === void 0) {
              variables = {};
            }

            _context.next = 3;
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
            response = _context.sent;
            _context.next = 6;
            return response.text();

          case 6:
            body = _context.sent;
            result = JSON.parse(body);
            return _context.abrupt("return", result.data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _graphQLFetch.apply(this, arguments);
}