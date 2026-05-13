let num1 = Number(prompt("Primer número:"));
let num2 = Number(prompt("Segundo número:"));

if (num1 > num2) {
    console.log(num1 + " es mayor");
} else if (num2 > num1) {
    console.log(num2 + " es mayor");
} else {
    console.log("Son iguales");
}