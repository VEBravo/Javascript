// ---------------------------------------------- VECTORES -----------------------------------------------------------------------------
// Sintaxis:    
let vacio = [];
let vector = [3];

console.log(vacio);
console.log(vector);

vector[3] = 6;

console.log(vector);

// Nota: Es posible modificar el tamaño del arreglo durante el programa
//       Se crea un arreglo sin definir la cantidad de posiciones que tiene

let arregloDefinido = ["Hola","Juan","Pepe"];
console.log(arregloDefinido);

arregloDefinido [3] = "Jaime";
console.log(arregloDefinido);

// Nota: Se puede iterar el arreglo con for
// Los tipos de datos tienen atributos, en el caso de los vectores algunos son:
/*
    - push, map, foreach, length, join
    - concat, copywithin, find
*/

// EJEMPLO: atributo length
let numeros = [4,2,3,11,9,26,45,1,10];
for (let j = 0; j < numeros.length; j++)
{
    console.log(`Arreglo [${j}] = ` + numeros[j]);
}

// ---------------------------------------------- MATRICES -----------------------------------------------------------------------------
// Sintaxis:    
let matriz = [[],[]];
/*
    Es un vector de vectores. Pero es necesario aclarar la cantidad de filas que tiene.
    En este caso tiene 2 filas (0 y 1), si se intenta acceder a la fila 2 dirá que no está definida
*/

// Renglón 0
matriz[0][0] = 0;
matriz[0][6] = 0;

// Renglón 1
matriz [1][7] = 7;
matriz [1][3] = 3;

matriz = [[],[],[]]; 
// A partir de este punto se utilizará una matriz de 3 renglones, ahora es posible:
matriz[2][7] = 14;
matriz[2][8] = 16;


// Matriz definida:
let matriz2 = [[0,0,0,0,0],[1,2,3],[2,4,6,8,10]];

// EJEMPLO: atributo length
console.log(matriz2.length);    // Filas:               
console.log(matriz2[2].length); // Columnas de fila 2:  
console.log(matriz2[1].length); // Columnas de fila 1:  

// Nota: se pueden recorrer, por ejemplo, con 2 ciclos for.
// Nota: para diferentes filas se pueden tener diferentes cantidades de elementos


