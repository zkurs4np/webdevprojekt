function aendern(myElement) {
	let tag = document.getElementById("veraenderbar");
	let kopierinhalt = myElement.innerHTML;
	tag.innerHTML = kopierinhalt;
}

function togglediv(toggledDiv) {
	const emails = document.getElementById("e-mails");
	const kalender = document.getElementById("kalender");
	const organigramm = document.getElementById("organigramm");
	const taskliste = document.getElementById("taskliste");
	emails.style.display = "none";
	kalender.style.display = "none";
	organigramm.style.display = "none";
	taskliste.style.display = "none";
	let newdiv = toggledDiv.innerHTML.toLowerCase();
	let selectdiv = document.getElementById(newdiv);
	selectdiv.style.display = "block";
}