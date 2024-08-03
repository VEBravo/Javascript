// Herencia: Utilizar una clase existente para crear una nueva que posea los atributos de la clase padre y los extras que necesite
// Una clase hija hereda las características de la clase padre

class Personaje{
    
    static contadorDePersonajes = 0; // Atributo estático de la clase

    // Falsa constante, llamada a un método estático. No se puede modificar.
    static get MAX_OBJ(){return 25};

    bioma = 'Valor default';         // Atributo de los objetos, no de la clase
    constructor(nombre,altura,nivel){//Constructor para inicializar atributos
        this._nombre = nombre;
        this._altura = altura;
        this._nivel = nivel;
        if (Personaje.contadorDePersonajes < Personaje.MAX_OBJ){
            this._idPersonaje = ++Personaje.contadorDePersonajes;
            console.log ('Se incrementa contadorDePersonajes: ' + Personaje.contadorDePersonajes);
        }
        else{
            console.log('Se han superado el máximo de objetos permitidos');
        }
        
    }
    get nivel(){
        return this._nivel;
    }
    set nivel(nivel){
        this._nivel = nivel;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get altura(){
        return this._altura;
    }
    set altura(altura){
        this._altura = altura;
    }
    presentar(){
        return 'Soy ' + this._nombre + ' mi nivel actual es: ' + this._nivel;
    }
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecucion), el método
        // que se ejecuta depende si es una referencia de tipo padre o de tipo hijo.
        return 'Soy ' + this._nombre + ' mi nivel actual es: ' + this._nivel;
    }
    // Define métodos que se asocian con la clase y no con los objetos que se creen de esta clase
    static saludar(){
        console.log('Hola desde static');
    }
    // Pero a un método static sí le podemos pasar como parámetro un objeto
    static saludar2(personaje){
        console.log('Hola ' + personaje.nombre);
    }
}//Cuerpo de la clase

// Utilizamos la palabra reservada EXTENDS
class Mago extends Personaje{

    constructor(nombre,altura,nivel,elemento){
        super(nombre,altura,nivel); 
        this._elemento = elemento;
    }
    get elemento(){
        return this._elemento;
    }
    set elemento(elemento){
        this._elemento = elemento;
    }
// SOBREESCRITURA: Consiste en modificar desde la clase hija el método creado para la clase padre. Si el nombre fuera distinto
//                 estaríamos creando un nuevo método, no sobreescribiendolo.
    presentar(){
        return super.presentar() + '. Soy un mago de ' + this._elemento;
    }
    hechizar(){
        return this.nivel * 5;
    }
}

// NOTA: Es necesario, para inicializar la clase hija, darle como parámetros al constructor,
// los valores y utilizar la palabra reservada SUPER, para llamar al constructor de la clase padre

let personaje1 = new Mago('Gandalf',2,2000,'tierra');
console.log(personaje1._idPersonaje);
let personaje2 = new Mago('Saruman',1.80,1500,'fuego');
console.log(personaje2._idPersonaje);

console.log(personaje1);

console.log(personaje1.nombre);
// Se ve que aunque no está le método get para Mago, sí está para Personaje, por lo que es posible llamarlo desde Mago.

// Es posible acceder un método de la clase padre desde la clase hija
// Como también tener métodos solo de la clase hija.
console.log(personaje1.presentar());
console.log(personaje1.hechizar());
// personaje1.saludar(); No es posible llamar a un metodo static desde un objeto pero sí desde una clase

// Los métodos estáticos se asocian a la clase, no al objeto. Por lo que es posible utilizarlos en la clase hija
Personaje.saludar();
Personaje.saludar2(personaje1);
Mago.saludar();
Mago.saludar2(personaje1);

console.log(Personaje.contadorDePersonajes);
console.log(Mago.contadorDePersonajes); // Las clases hijas heredan el atributo estático

console.log(personaje1.bioma);
personaje1.bioma = 'Bosque gris';
console.log(personaje1.bioma);
Personaje.malos = 0; // Estoy creando un atributo estático dentro de la clase

// ----------------------------------------------------------------------- CLASE OBJECT -----------------------------------------------------------------------
// Es la clase padre de todas las clsaes, tiene sus propios métodos.
// Al crear una clase lo que se está haciendo es extender la clase object.

// Al imprimir el objeto, dentro del entorno se ven los valores que tiene cada atributo del objeto, sin embargo, en una página no se verá esto, se verá algo
// al estilo de object object. Entonces, es una buena práctica sobreescribir el método toString de la clase padre (object) y crear uno propio qu emuestr el objeto creado

