export default function newUser(userName, email, password) {
	return {
		userName,
		email,
		password,
		cnslMsg() {
			console.log(userName, email, password, '\nThanks for signing up!');
		},
	};
}
