var ime = prompt("Upiste vase ime");
ime = ime.toLowerCase();
console.log(ime);

if (ime == "jovan") {
	console.log("Dobro dosao " + ime);
} else if (ime == "petar") console.log("Dobro dosao " + ime);
else {
	console.log("Uneli ste pogresno ime");
}
