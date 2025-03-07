var boja = prompt("Unesite boju?");
boja = boja.toLowerCase();

var dugme = document.getElementById("dugme");

if (boja == "plava") {
	dugme.style.backgroundColor = "blue";
} else if (boja == "crvena") {
	dugme.style.backgroundColor = "red";
} else {
	dugme.style.backgroundColor = "green";
}

var bojaTexta = prompt("Unesti boju teksta?");
bojaTexta = bojaTexta.toLowerCase();

if (bojaTexta == "plava") {
	dugme.style.color = "blue";
} else if (bojaTexta == "crvena") {
	dugme.style.color = "red";
} else {
	dugme.style.color = "white";
}

// Unos visine
var visina = prompt("Unesite visinu dugmeta (minimalno 50px):");
visina = visina.toLowerCase();

if (visina > 50) {
	dugme.style.height = visina + "px";
}

// Unos širine
var sirina = prompt("Unesite širinu dugmeta (minimalno 50px):");
sirina = sirina.toLowerCase();
if (sirina > 50) {
	dugme.style.width = sirina + "px";
}
