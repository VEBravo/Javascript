// ---------------------------------------------- CALL -----------------------------------------------------------------------------
// Permite llamar a los atributos de un objeto con los datos de otro
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Perez',
}

// Uso
console.log(persona1.nombreCompleto('Arquitecto','11547862'));
console.log(persona1.nombreCompleto.call(persona2,'Ingeniero','1145869512'));

// NOTA: Entonces, utilizando .call estamos accediendo al atributo nombreCompleto de persona 1 pero
//       enviandolé como parámetro el objeto persona2.

// ---------------------------------------------- APPLY -----------------------------------------------------------------------------
// Permite llamar un método en un objeto que no tiene ese método. Pasamos un arreglo con los parámetros

let arreglo = ['Arquitecto','4455668899']
console.log(persona1.nombreCompleto.apply(persona2,arreglo));

// NOTA: Termina siendo similar al método call pero se pasan los argumentos como arreglo.

