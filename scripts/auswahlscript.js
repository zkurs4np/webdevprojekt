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