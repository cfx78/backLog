import logo from '../src/images/logo2.png';
import '../src/scss/style.scss';
import User from './objcons.js';
import Person from './classes.js';
import greetUser from './factfunc';
import { p1, p2, p3 } from './arrproms.js';

const logoImg = document.getElementById('logoImg');
logoImg.src = logo;
//* Import
let user01 = new User('ivo04', 'ivo@yahoo.com', 'password');

console.log(user01);

//* Prototype
User.prototype.log = function () {
	return this.userName + '\n' + this.email + '\n' + this.password;
};

let user02 = new User('j.lee', 'miles@yahoo.com', 'password');
console.log(user02.log());

//* Method Chaining
let user03 = new Person('hokage07', 'cjb@yahoo.com', 'password');

user03.displayUserName().displayUserEmail().displayPassword();

//* Prototype Inheritance
function Mod(...args) {
	User.apply(this, args);
	this.access = this.userName + ' is a mod';
}

Mod.prototype = Object.create(User.prototype);

Mod.prototype.message = function () {
	return this.access;
};
let user04 = new Mod('cfx789', 'cfx@yahoo.com', 'password');

console.log(user04);
console.log(user04.message());

//* Factory Function

let user05 = greetUser('buckXP', 'bxp@yahoo.com', 'password');
console.log(user05.cnslMsg());

//* Array of promises
Promise.all([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
