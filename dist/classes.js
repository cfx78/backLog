'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _objcons = require('./objcons.js');

var _objcons2 = _interopRequireDefault(_objcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Extends = class inheritance
var Person = function (_User) {
	_inherits(Person, _User);

	function Person() {
		_classCallCheck(this, Person);

		return _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).apply(this, arguments));
	}

	_createClass(Person, [{
		key: 'displayUserName',
		value: function displayUserName() {
			console.log(_chalk2.default.magentaBright(this.userName));
			return this;
		}
	}, {
		key: 'displayUserEmail',
		value: function displayUserEmail() {
			console.log(_chalk2.default.blackBright(this.email));
			return this;
		}
	}, {
		key: 'displayPassword',
		value: function displayPassword() {
			console.log(_chalk2.default.whiteBright(this.password));
			return this;
		}
	}]);

	return Person;
}(_objcons2.default);

exports.default = Person;