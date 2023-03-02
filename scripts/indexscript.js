function blur() {
	const bg = document.getElementsByTagName("body")[0]
	bg.classList.remove("unblurred");
	for(var i = 0; i < bg.classList.length; i++) {
		if(bg.classList[i] != "blurred") {
			bg.classList.add("blurred");
		}
	}
}

function unblur() {
	const bg = document.getElementsByTagName("body")[0]
	bg.classList.remove("unblurred");
	for(var i = 0; i < bg.classList.length; i++) {
		if(bg.classList[i] != "blurred") {
			bg.classList.add("blurred");
		}
	}
}