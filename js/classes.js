import chalk from 'chalk';
import User from './objcons.js';

//Extends = class inheritance
export default class Person extends User {
	displayUserName() {
		console.log(chalk.magentaBright(this.userName));
		return this;
	}
	displayUserEmail() {
		console.log(chalk.blackBright(this.email));
		return this;
	}
	displayPassword() {
		console.log(chalk.whiteBright(this.password));
		return this;
	}
}
