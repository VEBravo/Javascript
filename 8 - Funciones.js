// --------------------------------------------- FUNCIONES DEFINIDAS -----------------------------------------------------------------------------

// Declarar:

// PROCEDIMIENTO (no devuelve un valor)
function imprimir(algo)
{
    console.log(algo);
}
// FUNCION (devuelve un valor)
function sumar(a, b)
{
    return a+b;
}
 
// Llamar:

imprimir("Hola!");
let c = sumar(2,3);
imprimir (c);

// --------------------------------------------- FUNCIONES INCORPORADAS ------------------------------------------------------------------------------
// Para utilizarlas solo es necesario conocer el nombre de la clase y su función
/* EJEMPLO: console (clase)
            console.log, console.error, console.warn
            
            array.length, array.map, array.filter
*/

// ---------------------------------------------  PARAMETROS POR VALOR -------------------------------------------------------------------------
// Reciben una copia de los valores, por lo que las modificaciones sobre la copia no afecta el valor de la variable externa
let d = 5, e = 6;
let f = sumar(5,6);
imprimir(f);

// ---------------------------------------------  PARAMETROS POR VALOR -------------------------------------------------------------------------
// Reciben una referencia al espacio de memoria de la variable, por lo que modifican su valor
function cambiarVectorPosicionN (vector, n, valor)
{
    vector[n]=valor;
}
let vector = [0,1,2,3];

cambiarVectorPosicionN (vector, 2 ,33);
console.log(vector);

// Los arrays y los objetos son los únicos que se pueden pasar como parámetro por referencia, en Javascript no existen los punteros.

