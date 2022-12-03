'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = newUser;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newUser(userName, email, password) {
	return {
		userName: userName,
		email: email,
		password: password,
		cnslMsg: function cnslMsg() {
			console.log(_chalk2.default.bgYellowBright(userName, email, password, '\nThanks for signing up!'));
		}
	};
}