import fetch from 'node-fetch';
import User from './objcons.js';
import Person from './classes.js';
import newUser from './factfunc.js';
import { requestOptions, p1, options, p2 } from './arrproms.js';
import chalk from '../node_modules/chalk/source/index.js';
//Import
let user01 = new User('ivo04', 'ivo@yahoo.com', 'password');

console.log(user01);

//Prototype
User.prototype.log = function () {
	console.log(chalk.bgBlueBright(this.userName, this.email, this.password));
};

let user02 = new User('j.lee', 'miles@yahoo.com', 'password');
user02.log();

//Method Chaining
let user03 = new Person('hokage07', 'cjb@yahoo.com', 'password');

user03.displayUserName().displayUserEmail().displayPassword();

//Prototype Inheritance
function Mod(...args) {
	User.apply(this, args);
	this.access = this.userName + ' is a mod';
}

Mod.prototype = Object.create(User.prototype);

Mod.prototype.message = function () {
	console.log(chalk.bold(this.access));
	return this;
};
let user04 = new Mod('cfx789', 'cfx@yahoo.com', 'password');

user04.log();
user04.message();

//Factory Function

let user05 = newUser('buckXP', 'bxp@yahoo.com', 'password');
user05.cnslMsg();

//Array of promises
Promise.all([p1, p2])
	.then((res) => {
		console.log(chalk.underline(res));
	})
	.catch((err) => {
		console.log(err);
	});
