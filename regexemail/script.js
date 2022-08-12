const email = 'godswilludoh@gmail.com';

alert('Welcome Client!');
let emailInput = prompt('Please input your email');

if (emailInput == email) {
	const replaceEmail = email.replace(
		/(\w{3})[\w.-]+@([\w.]+\w)/,
		'*************'
	);
	console.log(replaceEmail);
}
