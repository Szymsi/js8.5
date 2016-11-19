var a = 5;
var b = 9;
var value = (a*a) + (2 * a * b) - (b*b);

if(+value>0) {
	console.log("Wynik jest dodatni");
}
else {
	console.log("Wynik jest ujemny");
}
else if (+value === 0) {
	console.log("Wynik równa się 0")
}