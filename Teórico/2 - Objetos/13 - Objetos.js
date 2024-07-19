/*
OBJETOS
- Atributos: definen al objeto
- Métodos: acciones que hace el objeto. Siempre contiene al constructor

Clase: Plantilla donde se definen atributos y métodos. Con estas plantillas se dan valores a los atributos.
Un constructor es el método que se encarga de inicializar el objeto.

• Abstracción: Añadir solo las características más importantes para el contexto.
• Encapsulación: Cada clase debe tener control sobre lo que sucede dentro de ella y tener los métodos adecuados para utilizarla desde fuera
                 De esos métodos se eligen cuáles son privados (encapsulamiento).
• Herencia: Utilizar una clase existente para crear una nueva que posea los atributos de la clase padre y los extras que necesite
• Polimorfismo: Para los objetos que comparte métodos, estos operan de distinta forma dependiendo del objeto que los llame.
*/

// ----------------------------------------------------------------------- Sintaxis (simplificada) más usada -----------------------------------------------------------------------
// Objeto con atributos y métodos
let persona = {
    nombre: 'Valentin',
    apellido: 'Ennio',
    edad: 19,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },
    anioNacimiento: function(){
        return 2024 - this.edad;
    }
}
// NOTA: this sirve para hacer referencia al objeto actual, es necesario utilizarlo
//       sino no se puede acceder
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Con el . se accede, es posible imprimirlo completo
console.log(persona.edad);
console.log(persona);

console.log(persona.nombreCompleto());
console.log(persona.anioNacimiento());

// new: Reserva espacio en memoria, sirve para crear objetos

// -----------------------------------------------------------------------  Sintaxis menos usada -----------------------------------------------------------------------
// let persona2 = new Object();
// Gracias a esto se pueden agregar propiedades al objeto de la siguiente forma:
// persona2.nombre = 'Pepe';
// persona2.mascota = 'Perro';
// persona2.edad = 26;
// console.log(persona2.edad);
// console.log(persona2.mascota);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Otra forma de acceder
console.log(persona['apellido']);
console.log(persona['edad']);
console.log(persona['nombre']);

// Se pueden recorrer las propiedades con un ciclo for especial: FOR IN
// for in
for (nombrePropiedad in persona)
{
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

// -----------------------------------------------------------------------  Agregar y eliminar propiedades -----------------------------------------------------------------------
// Agregar
persona.numeroFav = 69;
persona.alturaCM = 180;
console.log(persona);
// NOTA: Es como acceder, pero se acceden a propiedades que "no existen"

// Eliminar
delete persona.numeroFav;
delete persona.alturaCM;
console.log(persona);

// -----------------------------------------------------------------------  Imprimir objetos -----------------------------------------------------------------------
// Otras formas de imprimir para navegadores web:

//  1)   Concatenar los valores

//  2)   Iterar con for in

//  3)   Object.values(); -> Método que devuelve el objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

//  4)   JSON.stringify(); -> Método que devuelve el objeto como un string
let personaString = JSON.stringify(persona);
console.log(personaString);

// -----------------------------------------------------------------------  GET & SET -----------------------------------------------------------------------
let persona2 = {
    nombre: 'Valentin',
    apellido: 'Ennio',
    edad: 19,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set languaje(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get anioNacimiento(){
        return 2024 - this.edad;
    }
}
// NOTA: Al anteponer get simplificamos la sintaxis para acceder a métodos y declararlos. Permite acceder a los metodos como si fuesen atributos:
// ANTES: console.log(persona.nombreCompleto());
// AHORA:
          console.log(persona2.nombreCompleto);
          console.log(persona2.anioNacimiento);

// NOTA: Set es un método que modifica los atributos del objeto
console.log(persona2.lang);
persona2.languaje = 'us'; // Se llama directamente a SET por el igual.
console.log(persona2.lang);
console.log(persona2.idioma); // Corroboramos que se guardo correctamente, en mayúscula.



