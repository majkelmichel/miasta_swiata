var menuShown = false;

function showMenu() {
	if (menuShown) {
		document.querySelector("menu").style.display = "none";
		menuShown = false;
	}
	else {
		document.querySelector("menu").style.display = "grid";
		menuShown = true;
	}
}