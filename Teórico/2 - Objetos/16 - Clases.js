// Una clase es una "plantilla" para poder crear objetos. En esta definimos
// los atributos y los métodos que tiene, a partir de esta plantilla se crean
// instancias (objetos).

// Ejemplo: Clase persona -> Karla (objeto), Carlos(objeto)

/* Partes de una clase
    • Nombre (Persona)
    • Atributos (Nombre,genero,ocupacion)
    • Métodos (obtenerNombre,obtenerGenero)
*/
// SINTAXIS (Con mayúscula)
class Persona{
    constructor(nombre,genero,ocupacion){//Constructor para inicializar atributos
        this._nombre = nombre;
        this._genero = genero;
        this._ocupacion = ocupacion;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}//Cuerpo de la clase

let persona1 = new Persona ('Valentin','hombre','Ingeniero');
console.log(persona1);

console.log(persona1.nombre);
persona1.nombre = 'Carlos';
console.log(persona1.nombre);


let persona2 = new Persona ('Esteban','hombre','Arquitecto');
console.log(persona1);

// En clases no existe el hoisting, es necesario primero definir la clase antes de utilizarla.

