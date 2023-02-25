function aendern(myElement) {
	let tag = document.getElementById("veraenderbar");
	let kopierinhalt = myElement.innerHTML;
	tag.innerHTML = kopierinhalt;
}

function togglediv(toggledDiv) {
	let activediv = null;
	let newdiv = toggledDiv.innerHTML.toLowerCase();
	if(document.getElementsByClassName("e-mails")[0].style.display !== "none")
		{
			activediv = document.getElementsByClassName("e-mails");
			alert("Email")
		}
	else if(document.getElementByClass("kalender")[0].style.display !== "none")
		{
			activediv = document.getElementsByClassName("kalender");
		}
	else if(document.getElementByClass("organigramm")[0].style.display !== "none")
		{
			activediv = document.getElementsByClassName("organigramm");
		}
	else if(document.getElementByClass("taskliste")[0].style.display !== "none")
		{
			activediv = document.getElementsByClassName("taskliste");
		}
	activediv.display = "none";
	newdiv.display = "block";
}