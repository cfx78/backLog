import User from './objcons.js';

//Extends = class inheritance
export default class Person extends User {
	displayUserName() {
		console.log(this.userName);
		return this;
	}
	displayUserEmail() {
		console.log(this.email);
		return this;
	}
	displayPassword() {
		console.log(this.password);
		return this;
	}
}
