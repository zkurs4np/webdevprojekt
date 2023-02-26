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
	const optionen = document.getElementsByClassName("optionen")[0];
	const ansicht = document.getElementById("ansicht");
	emails.style.display = "none";
	kalender.style.display = "none";
	organigramm.style.display = "none";
	taskliste.style.display = "none";
	optionen.style.display = "block";
	ansicht.style.display = "none";
	let newdiv = toggledDiv.innerHTML.toLowerCase();
	let selectdiv = document.getElementById(newdiv);
	selectdiv.style.display = "block";
}

function togglelist() {
	const emails = document.getElementById("e-mails");
	const kalender = document.getElementById("kalender");
	const organigramm = document.getElementById("organigramm");
	const taskliste = document.getElementById("taskliste");
	const optionen = document.getElementsByClassName("optionen")[0];
	const ansicht = document.getElementById("ansicht");
	emails.style.display = "none";
	kalender.style.display = "none";
	organigramm.style.display = "none";
	taskliste.style.display = "none";
	optionen.style.display = "none";
	ansicht.style.display = "block";
}

function openmail(element) {
	let listingliste = document.getElementsByClassName("listing");
	for(var i = 0; i < listingliste.length; i++) {
		listingliste[i].children[0].classList.remove("inaktiv");
		listingliste[i].children[1].classList.add("inaktiv");
		listingliste[i].style.backgroundColor = "grey";
	}
	element.children[0].classList.toggle("inaktiv");
	element.children[1].classList.toggle("inaktiv");
	element.style.backgroundColor = "lightgrey";
}