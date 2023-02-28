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
	optionen.style.display = "none";
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
		listingliste[i].children[1].classList.remove("inaktiv");
		listingliste[i].children[2].classList.add("inaktiv");
		listingliste[i].style.backgroundColor = "grey";
		listingliste[i].style.color = "white";
	}
	element.children[1].classList.toggle("inaktiv");
	element.children[2].classList.toggle("inaktiv");
	element.style.backgroundColor = "lightgrey";
	element.style.color = "rgb(23,23,23)";
	let emailnummer = getindex(element);
	let betreffnummer = emailnummer*2;
	let betreffschrift = document.getElementsByClassName("betreff")[betreffnummer];
	let betreffuhrzeit = document.getElementsByClassName("betreff")[betreffnummer+1];
	const emailliste = document.getElementById("e-mails");
	const optionen = document.getElementsByClassName("optionen")[0];
	for(var i = 0; i<document.getElementsByClassName("e-mail").length; i++) {
		document.getElementsByClassName("e-mail")[i].style.display = "none";
	}
	for(var i = 0; i<document.getElementsByClassName("betreff").length; i++) {
		document.getElementsByClassName("betreff")[i].style.color = "white";
	}
	betreffschrift.style.color = "rgb(23,23,23)";
	betreffuhrzeit.style.color = "rgb(23,23,23)";
	document.getElementsByClassName("e-mail")[emailnummer].style.display = "block";
	emailliste.style.display = "block";
	optionen.style.display = "block"
}

function getindex(element) {
	switch(element.getAttribute("id")) {
		case "eins":
		    return 0;
		    	break;
		case "zwei":
		    return 1;
		    	break;
	   	case "drei":
		    return 2;
		    	break;
		case "vier":
		    return 3;
		    	break;
		case "fuenf":
		    return 4;
		    	break;
		case "sechs":
		    return 5;
		    	break;
		case "sieben":
		    return 6;
		    	break;
		case "acht":
		    return 7;
		    	break;
		case "neun":
		    return 8;
		    	break;
		case "zehn":
		    return 9;
		    	break;
		case "elf":
		    return 10;
		    	break;
		case "zwoelf":
		    return 11;
		    	break;
		case "dreizehn":
		    return 12;
		    	break;
		case "vierzehn":
		    return 13;
		    	break;
		case "fuenfzehn":
		    return 14;
		    	break;
		case "sechszehn":
		    return 15;
		    	break;
	}
}

function toggleansicht(){
	const emails = document.getElementById("e-mails");
	const ansicht = document.getElementById("ansicht");
	emails.style.display = "none";
	ansicht.style.display = "block";
}

function kalenderhinten(pfeil) {
	kalendereins = document.getElementById("kalendereins");
	kalenderzwei = document.getElementById("kalenderzwei");
	linkerpfeil = document.getElementById("linkerpfeil");
	rechterpfeil = document.getElementById("rechterpfeil");
	if(pfeil.classList.contains("hoverable")) {
		kalendereins.style.display = "none";
		kalenderzwei.style.display = "block";
		linkerpfeil.classList.toggle("hoverable");
		rechterpfeil.classList.toggle("hoverable");
		datumwechsel();
	}
}

function kalendervorne(pfeil) {
	kalendereins = document.getElementById("kalendereins");
	kalenderzwei = document.getElementById("kalenderzwei");
	linkerpfeil = document.getElementById("linkerpfeil");
	rechterpfeil = document.getElementById("rechterpfeil");
	if(pfeil.classList.contains("hoverable")) {
		kalendereins.style.display = "block";
		kalenderzwei.style.display = "none";
		linkerpfeil.classList.toggle("hoverable");
		rechterpfeil.classList.toggle("hoverable");
		datumwechsel();
	}

}

function datumwechsel() {
	datum = document.getElementById("datum");
	if(datum.innerHTML === "27.02.2023 - 03.03.2023") {
		datum.innerHTML = "06.03.2023 - 10.03.2023"
	} else if(datum.innerHTML === "06.03.2023 - 10.03.2023") {
		datum.innerHTML = "27.02.2023 - 03.03.2023"
	}
}

function eintragen(index) {
	// Formular speichern
	let formular = document.getElementsByClassName("formular")[index];

	// Datum prüfen
	let datumfeld = formular.children[3]
	let datum = datumfeld.value;

	// Uhrzeit prüfen
	let uhrzeitfeld = formular.children[6];
	let uhrzeit = uhrzeitfeld.value;

	// Inhalt prüfen
	let inhaltfeld = formular.children[9];
	let inhalt = inhaltfeld.value;

	// Ermittlung des Eintragedivs
	let ersterkalender = true;
	if(datum === "27.02. - Montag" || datum === "28.02. - Dienstag" || datum === "01.03. - Mittwoch" || datum === "02.03. - Donnerstag" || datum === "03.03. - Freitag")
	{
		ersterkalender = true;
	}
	else
	{
		ersterkalender = false;
	}
	let indexkalender = 79;

	if(ersterkalender == true) {
		indexkalender = 39;
	}

	switch(uhrzeit) {
		case "08:00":
			indexkalender -= 35;
				break;
		case "09:00":
			indexkalender -= 30;
				break;
		case "10:00":
			indexkalender -= 25;
				break;
		case "11:00":
			indexkalender -= 20;
				break;
		case "12:00":
			indexkalender -= 15;
				break;
		case "13:00":
			indexkalender -= 10;
				break;
		case "14:00":
			indexkalender -= 5;
				break;
		case "15:00":
			indexkalender -= 0;
				break;
	}

	switch(datum) {
		case "03.03. - Freitag":
		case "10.03. - Freitag":
			indexkalender -= 0;
				break;
		case "02.03. - Donnerstag":
		case "09.03. - Donnerstag":
			indexkalender -= 1;
				break;
		case "01.03. - Mittwoch":
		case "08.03. - Mittwoch":
			indexkalender -= 2;
				break;
		case "28.02. - Dienstag":
		case "07.03. - Dienstag":
			indexkalender -= 3;
				break;
		case "27.02. - Montag":
		case "06.03. - Montag":
			indexkalender -= 4;
				break;
	}

	let eintragediv = document.getElementsByClassName("kalenderkasten")[indexkalender];

	// Hinzufügen
	eintragediv.innerHTML += "<p class='kalendereintrag'>"+inhalt+"</p>  ";
}

function austragen(index) {
	// Formular speichern
	let formular = document.getElementsByClassName("formular")[index];

	// Datum prüfen
	let datumfeld = formular.children[3]
	let datum = datumfeld.value;

	// Uhrzeit prüfen
	let uhrzeitfeld = formular.children[6];
	let uhrzeit = uhrzeitfeld.value;

	// Inhalt prüfen
	let inhaltfeld = formular.children[9];
	let inhalt = inhaltfeld.value;

	// Ermittlung des Eintragedivs
	let ersterkalender = true;
	if(datum === "27.02. - Montag" || datum === "28.02. - Dienstag" || datum === "01.03. - Mittwoch" || datum === "02.03. - Donnerstag" || datum === "03.03. - Freitag")
	{
		ersterkalender = true;
	}
	else
	{
		ersterkalender = false;
	}
	let indexkalender = 79;

	if(ersterkalender == true) {
		indexkalender = 39;
	}

	switch(uhrzeit) {
		case "08:00":
			indexkalender -= 35;
				break;
		case "09:00":
			indexkalender -= 30;
				break;
		case "10:00":
			indexkalender -= 25;
				break;
		case "11:00":
			indexkalender -= 20;
				break;
		case "12:00":
			indexkalender -= 15;
				break;
		case "13:00":
			indexkalender -= 10;
				break;
		case "14:00":
			indexkalender -= 5;
				break;
		case "15:00":
			indexkalender -= 0;
				break;
	}

	switch(datum) {
		case "03.03. - Freitag":
		case "10.03. - Freitag":
			indexkalender -= 0;
				break;
		case "02.03. - Donnerstag":
		case "09.03. - Donnerstag":
			indexkalender -= 1;
				break;
		case "01.03. - Mittwoch":
		case "08.03. - Mittwoch":
			indexkalender -= 2;
				break;
		case "28.02. - Dienstag":
		case "07.03. - Dienstag":
			indexkalender -= 3;
				break;
		case "27.02. - Montag":
		case "06.03. - Montag":
			indexkalender -= 4;
				break;
	}

	let austragediv = document.getElementsByClassName("kalenderkasten")[indexkalender];

	// Checken, ob String enthalten ist
	let altereintrag = austragediv.innerHTML;
	austragediv.innerHTML = "";
	// String aufteilen
	let eintraege = altereintrag.split("  ");
	for(var i = 0; i < eintraege.length; i++) {
		if(eintraege[i].includes(inhalt)) {
			eintraege[i] = "";
		}
		austragediv.innerHTML += eintraege[i];
	}


}

function alarmieren() {
	alert("Test");
}

function auswaehlen(element) {
	element.classList.toggle("rot");
}