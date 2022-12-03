'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _objcons = require('./objcons.js');

var _objcons2 = _interopRequireDefault(_objcons);

var _classes = require('./classes.js');

var _classes2 = _interopRequireDefault(_classes);

var _factfunc = require('./factfunc.js');

var _factfunc2 = _interopRequireDefault(_factfunc);

var _arrproms = require('./arrproms.js');

var _index = require('../node_modules/chalk/source/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Import
var user01 = new _objcons2.default('ivo04', 'ivo@yahoo.com', 'password');

console.log(user01);

//Prototype
_objcons2.default.prototype.log = function () {
	console.log(_index2.default.bgBlueBright(this.userName, this.email, this.password));
};

var user02 = new _objcons2.default('j.lee', 'miles@yahoo.com', 'password');
user02.log();

//Method Chaining
var user03 = new _classes2.default('hokage07', 'cjb@yahoo.com', 'password');

user03.displayUserName().displayUserEmail().displayPassword();

//Prototype Inheritance
function Mod() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	_objcons2.default.apply(this, args);
	this.access = this.userName + ' is a mod';
}

Mod.prototype = Object.create(_objcons2.default.prototype);

Mod.prototype.message = function () {
	console.log(_index2.default.bold(this.access));
	return this;
};
var user04 = new Mod('cfx789', 'cfx@yahoo.com', 'password');

user04.log();
user04.message();

//Factory Function

var user05 = (0, _factfunc2.default)('buckXP', 'bxp@yahoo.com', 'password');
user05.cnslMsg();

//Array of promises
Promise.all([_arrproms.p1, _arrproms.p2]).then(function (res) {
	console.log(_index2.default.underline(res));
}).catch(function (err) {
	console.log(err);
});