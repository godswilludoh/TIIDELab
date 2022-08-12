/** Regex Validate Mail */

function validateEmail() {
	alert('Welcome Client!');

	let email = prompt('Please input a valid email address');
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		const replaceEmail = email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, '$1***@$2');
		alert(replaceEmail);
	} else if (email == '') {
		alert('Please input your email address');
	} else {
		alert('You have entered an invalid email address!');
	}
}
validateEmail();
