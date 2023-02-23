function checkPasswort() {
	const inputBox = document.getElementById("pwbox");
	const enteredpassword = inputBox.value;

	const correctpassword = "NeonTest";
	const correctpassword2 = "KimiTest";

	if(enteredpassword===correctpassword || enteredpassword===correctpassword2) {
		console.log("Richtiges Passwort!");
	} else {
		console.log("Falsches Passwort!");
	}
}