// -----------------------------------------------------------------------  CONSTRUCTORES -----------------------------------------------------------------------
// Función especial llamada con la palabra reservada new
// new: reserva espacio en memoria para ese objeto
// Los constructores se nombran con MAYUSCULA
function Auto(marca,modelo,patente,anioCreacion){ // Se podría decir marca = 'Chevrolet' para setearlo como valor por default
    this.marca = marca; //Crear la propiedad y asignarle valor recibido como parámetro
    this.modelo = modelo;
    this.patente = patente;
    this.anioCreacion = anioCreacion;
    this.kilometros = function(){
        return this.anioCreacion*37;
    }
}

let auto1 = new Auto('Chevrolet','Camaro','AAA 456',2010);
let auto2 = new Auto('Chevrolet','Spin','KLJ 498',2017);

console.log(auto1);
console.log(auto2);

console.log(auto1.kilometros());

// FORMA SIMPLIFICADA Y MÁS UTILIZADA PARA CREAR OBJETOS
let auto3 = {};

//NOTA: Si se hacen modifiaciones sobre un objeto; como quitarle o agregarle una propiedad solo se modificará para esa variable

// ¿Cómo agregar propiedades a los constructores?, es decir, a todos los objetos que se creen con ese constructor -> PROTOTYPE
// Antes de esta línea el atributo no existe
Auto.prototype.anios = function(){
    return 2024-this.anioCreacion;
}
console.log(auto1.anios());