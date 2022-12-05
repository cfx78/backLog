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

class Shoe {
	constructor(company) {
		this.company = company;
	}
}

class Model extends Shoe {
	constructor(company, make, size, color) {
		super(company);
		this.make = make;
		this.size = size;
		this.color = color;
	}
	getOrder = () => this.company + this.make + this.size + this.color;
}

let myShoe = new Model('Converse ', 'Chuck Taylor All-Star ', 11, ' orange');
console.log(myShoe.getOrder());
