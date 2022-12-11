export default function greetUser(userName, email, password) {
	return {
		userName,
		email,
		password,
		getName() {
			return userName;
		},
		getEmail() {
			return email;
		},
		getPassword() {
			return password;
		},
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
