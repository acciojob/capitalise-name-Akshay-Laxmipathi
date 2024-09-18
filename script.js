//your JS code here. If required.
let inp = document.getElementById("fname");
inp.addEventListener("blur", upperCase);

function upperCase() {
	document.getElementById("fname").innerText.toUpperCase();
}