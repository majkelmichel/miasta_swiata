let menuShown = false;
let subMenuShown = false;

function showMenu() {
	if (menuShown) {
		document.getElementById("menu").style.display = "none";
		menuShown = false;
	}
	else {
		document.getElementById("menu").style.display = "grid";
		document.getElementById("submenu").style.height = "0";
		menuShown = true;
		subMenuShown = false;
	}
}
function showSubMenu() {
	const style = document.getElementById("submenu").style;
	if (subMenuShown) {
		style.height = "0";
		subMenuShown = false;
	}
	else {
		style.height = "8vh";
		document.getElementById("menu").style.display = "none";
		menuShown = false;
		subMenuShown = true;
	}
}