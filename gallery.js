var imgArr = new Array();

imgArr[0] = document.getElementById("img1");
imgArr[1] = document.getElementById("img2");
imgArr[2] = document.getElementById("img3");
imgArr[3] = document.getElementById("img4");

var currentImg = 0;

function switchLeft() {
	if (currentImg == 0) {
		imgArr[currentImg].style.display = "none";
		imgArr[imgArr.length - 1].style.display = "inline";
		currentImg = imgArr.length - 1;
	}
	else {
		imgArr[currentImg].style.display = "none";
		imgArr[--currentImg].style.display = "inline";
	}
}

function switchRight() {
	if (currentImg == imgArr.length - 1) {
		imgArr[currentImg].style.display = "none";
		imgArr[0].style.display = "inline";
		currentImg = 0;
	}
	else {
		imgArr[currentImg].style.display = "none";
		currentImg++;
		imgArr[currentImg].style.display = "inline";
	}
}