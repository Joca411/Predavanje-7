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

// Funkcija za proveru unosa broja
function validanBroj(vrednost) {
	var broj = parseInt(vrednost);
	return !isNaN(broj) && broj >= 50;
}

// Unos visine
var visina = prompt("Unesite visinu dugmeta (minimalno 50px):");
if (!validanBroj(visina)) {
	alert("Uneli ste pogrešnu vrednost za visinu!");
} else {
	dugme.style.height = visina + "px";
}

// Unos širine
var sirina = prompt("Unesite širinu dugmeta (minimalno 50px):");
if (!validanBroj(sirina)) {
	alert("Uneli ste pogrešnu vrednost za širinu!");
} else {
	dugme.style.width = sirina + "px";
}
