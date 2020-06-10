var menuShown = false;
var subMenuShown = false;

function showMenu() {
	if (menuShown) {
		document.querySelector("menu").style.display = "none";
		menuShown = false;
	}
	else {
		document.querySelector("menu").style.display = "grid";
		document.getElementById("submenu").style.display = "none";
		menuShown = true;
		subMenuShown = false;
	}
}
function showSubMenu() {
	if (subMenuShown) {
		document.getElementById("submenu").style.display = "none";
		subMenuShown = false;
	}
	else {
		document.getElementById("submenu").style.display = "grid";
		document.querySelector("menu").style.display = "none";
		menuShown = false;
		subMenuShown = true;
	}
}