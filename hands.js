(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(function () {
   return "yo";
}());

var Hands = exports.Hands = function () {
   function Hands() {
      _classCallCheck(this, Hands);

      this.hands = [];
   }

   // default generator method


   _createClass(Hands, [{
      key: Symbol.iterator,
      value: regeneratorRuntime.mark(function value() {
         var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, hand;

         return regeneratorRuntime.wrap(function value$(_context) {
            while (1) {
               switch (_context.prev = _context.next) {
                  case 0:
                     _iteratorNormalCompletion = true;
                     _didIteratorError = false;
                     _iteratorError = undefined;
                     _context.prev = 3;
                     _iterator = this.hands[Symbol.iterator]();

                  case 5:
                     if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context.next = 12;
                        break;
                     }

                     hand = _step.value;
                     _context.next = 9;
                     return hand;

                  case 9:
                     _iteratorNormalCompletion = true;
                     _context.next = 5;
                     break;

                  case 12:
                     _context.next = 18;
                     break;

                  case 14:
                     _context.prev = 14;
                     _context.t0 = _context["catch"](3);
                     _didIteratorError = true;
                     _iteratorError = _context.t0;

                  case 18:
                     _context.prev = 18;
                     _context.prev = 19;

                     if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                     }

                  case 21:
                     _context.prev = 21;

                     if (!_didIteratorError) {
                        _context.next = 24;
                        break;
                     }

                     throw _iteratorError;

                  case 24:
                     return _context.finish(21);

                  case 25:
                     return _context.finish(18);

                  case 26:
                  case "end":
                     return _context.stop();
               }
            }
         }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      })
   }]);

   return Hands;
}();
},{}]},{},[1]);
