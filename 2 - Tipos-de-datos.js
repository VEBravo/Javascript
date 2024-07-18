// Podemos definir una variable con var, pero ya no se utiliza
// Las variables se crean con let 
let entero = 10;
let float = 2.5;
let otroString = 'Arbol';
otroString = 'Avión';
let booleano = true;
let unEntero = 7, unString = "Hola"; 

/*
Number: Engloba todo tipo de numeros
String: "Hola" , 'Hola' , `Hola`
Bool
Null: Ausencia de referencia
Undefined: Ausencia de valor
*/

// Ejemplos de concatenaciones
console.log(entero+float);

console.log(15);98
console.log();
console.log(undefined);
console.log(_);

// Buena practica
// Definir las variables con camelCase

//Operador typeof
console.log(typeof unChar + " " + typeof entero + " " + typeof booleano);


// Constantes: no se puede cambiar el valor
const GRAVEDAD = 9.8;
console.log(GRAVEDAD);
console.log(Math.PI);

// Nota: las variables de tipo string son inmutables, no podemos acceder a una posicion
//       y cambiar su valor. Pero si podemos acceder a ellos para imprimirlos