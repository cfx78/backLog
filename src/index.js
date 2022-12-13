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
document.querySelector('.grid-item2').innerHTML =
	'<ul><li>' +
	user01.userName +
	'</li><li>' +
	user01.email +
	'</li><li>' +
	user01.password +
	'</li></ul>';

//* Prototype
User.prototype.log = function () {
	return (
		'<ul><li>' +
		this.userName +
		'</li><li>' +
		this.email +
		'</li><li>' +
		this.password +
		'</li></ul>'
	);
};

let user02 = new User('j.lee', 'miles@yahoo.com', 'password');
console.log(user02.log());
document.querySelector('.grid-item3').innerHTML = user02.log();

//* Method Chaining
let user03 = new Person('hokage07', 'cjb@yahoo.com', 'password');

user03.displayUserName().displayUserEmail().displayPassword();
document.querySelector('.grid-item4').innerHTML =
	'<ul><li>' +
	user03.userName +
	'</li><li>' +
	user03.email +
	'</li><li>' +
	user03.password +
	'</li></ul>';

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

console.log(user04.userName, user04.email, user04.password);
console.log(user04.message());
document.querySelector('.grid-item5').innerHTML =
	'<ul><li>' +
	user04.userName +
	'</li><li>' +
	user04.email +
	'</li><li>' +
	user04.password +
	'</li><li>' +
	user04.message() +
	'</li></ul>';

//* Factory Function

let user05 = greetUser('buckXP', 'bxp@yahoo.com', 'password');
console.log(user05.cnslMsg());
document.querySelector('.grid-item6').innerHTML =
	'<p>' + user05.cnslMsg() + '</p>';

//* Array of promises
Promise.all([p1, p2, p3])
	.then((res) => {
		console.log(res);
		document.querySelector('.grid-item7').innerHTML =
			'<ul><li>' +
			'</li><li>' +
			res[0] +
			'</li><li>' +
			res[1] +
			'</li><li>' +
			res[2] +
			'</li></ul>';
	})
	.catch((err) => {
		console.log(err);
	});
