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
