function checkPasswort() {
	const inputBox = document.getElementById("pwbox");
	const enteredpassword = inputBox.value;

	const correctpassword = "NeonTest";
	const correctpassword2 = "KimiTest";

	if(enteredpassword===correctpassword || enteredpassword===correctpassword2) {
		alert("Richtiges Passwort!");
	} else {
		alert("Falsches Passwort!");
	}
}