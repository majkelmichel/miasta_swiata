var menuShown = false;

function showMenu() {
	if (menuShown) {
		document.getElementById("menu").style.display = "none";
		menuShown = false;
	}
	else {
		document.getElementById("menu").style.display = "grid";
		menuShown = true;
	}
}