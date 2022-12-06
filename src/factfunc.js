export default function greetUser(userName, email, password) {
	return {
		userName,
		email,
		password,
		cnslMsg() {
			return (
				'Hi ' +
				userName +
				'! Please check ' +
				email +
				' for your ' +
				password +
				'\nThanks for signing up!'
			);
		},
	};
}
