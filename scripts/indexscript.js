function zaehlen() {
	count = document.getElementById("counter");
	aktzahl = count.innerHTML;
	aktzahl++;
	count.innerHTML = aktzahl;
}

function togglen() {
	bodydiv = document.getElementsByClassName("nullmargin")[0];
	bodydiv.classList.toggle("unblurred");
	bodydiv.classList.toggle("blurred");
}