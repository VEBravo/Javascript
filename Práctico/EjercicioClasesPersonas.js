class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    toString(){ // Template string
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = new Date();
    }
    get idCliente(){
        return this.idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

let persona1 = new Persona('Ramiro','Chapparo',22);
let persona2 = new Empleado('Martin','Cancerbero',22,300000);
let persona3 = new Empleado('Franco','Castor',15,400000);
let persona4 = new Empleado('Capichanga','Zapata',18,500000);
let persona5 = new Cliente('Juan','Dominguez',22,);


console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
console.log(persona4.toString());
console.log(persona5.toString());

