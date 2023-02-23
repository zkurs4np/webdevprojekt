function aendern(myElement) {
	// Speichern des Titels in eine Variable
	// Verändern des Inhalts von h3 "Hallo" in den gespeicherten Titel

	//Erfassen des aufrufenden Elements
	let tag = document.getElementById("veraenderbar");
	let kopierinhalt = myElement.innerHTML;
	tag.innerHTML = kopierinhalt;
}