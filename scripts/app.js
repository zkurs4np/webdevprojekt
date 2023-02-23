function checkPasswort() {
	const inputBox = document.getElementById("pwbox");
	const enteredpassword = inputBox.value;

	const correctpassword = "NeoxTron321";
	const correctpassword2 = "KimiBimi321";

	if(enteredpassword===correctpassword || enteredpassword===correctpassword2) {
		alert("Richtiges Passwort!");
	} else {
		alert("Falsches Passwort!");
	}
}