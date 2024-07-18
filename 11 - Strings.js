// ------------------------------------------ cadena.length ----------------------------------------------
let cadena = 'Hola, buenas';

// Convierte la cadena a un objeto, ahora tiene atributos
console.log(cadena.length);

for(let i = 0; i<cadena.length; i++)
{
    console.log(cadena[i]);
}

// ------------------------------------------ cadena.substring(inicio,fin) ----------------------------------------------
let subCadena = cadena.substring(0,4); // No incluye indice fin
console.log(subCadena);

// ------------------------------------------ concatenación ----------------------------------------------
let cadena1 = 'Hola', cadena2 = 'Mundo';
console.log(cadena1 + ' ' + cadena2);

// String interpolation
let cadena3 = `${cadena1} ${cadena2}`;
console.log(cadena3);

// ------------------------------------------ string a number ----------------------------------------------
let numString1 = '10', numString2 = '20.4';

// Conversion
let suma = parseInt(numString1) + parseFloat(numString2);
console.log(suma);

// ------------------------------------------ number a string ----------------------------------------------
let num1 = 10, num2 = 20.4;
let concatenacion = num1.toString() + num2.toString();
console.log(concatenacion);

// Nota: toString es un método de la variable number, por eso tiene (). Toma como "parametro" la variable, sin
//       sin necesidad de incluirla en los parentesis.

