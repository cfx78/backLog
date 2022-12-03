import chalk from 'chalk';

export default function newUser(userName, email, password) {
	return {
		userName,
		email,
		password,
		cnslMsg() {
			console.log(
				chalk.bgYellowBright(
					userName,
					email,
					password,
					'\nThanks for signing up!',
				),
			);
		},
	};
}
