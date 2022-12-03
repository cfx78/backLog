"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = User;
function User(userName, email, password) {
	this.userName = userName;
	this.email = email;
	this.password = password;
}