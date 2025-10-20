// Definicion de una variable con let
let nombre = "Elias";

// Modificacion de una variable que ya existe
nombre = "jose";


const PI = 3.14;

let numero = 12;
let numeroString = "20";

let booleano = true;

console.log("Resultado de numero + numeroString: ", numero + numeroString);

console.log("Resultado de numero + parseInt(numeroString): ", numero - parseInt(numeroString)
);

console.log("Resultado de numero - numeroString: ", numero - numeroString);

/* ------------------------------------------------- */


let entradaInput = prompt("Ingrese su nombre: ");

console.log("Ingresaste: ", entradaInput);

// isNaN para comprobar que no sea un numero devuelve false
// console.log(isNaN(entradaInput));

//Simil f-strings para interpolar variables
alert(`Ingresaste: ${entradaInput} - Bienvenido!`);

//prueba 2