class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){return 5};

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(producto){
        if(this._contadorProductosAgregados+1 <= Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            this._contadorProductosAgregados++;
            console.log('Producto: ' +producto.nombre+ ' agregado a la orden');
        }
        else{
            console.log('Se alcanzó el límite de productos, no fue posible agregar el producto');
        }
    }
    
    calcularTotal(){
        let total = 0;
        for (let producto of this._productos){
            total += producto._precio;
        }
        return total;
    }

    mostrarOrden(){
        let orden = '';
        for (let producto of this._productos){
            orden +=`\n{ ${producto.toString()} } `;
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${orden}`);
    }

    toString(){ // Template literal
        return `Orden: ${this._idOrden} Productos: ${this._productos} Cantidad: ${this._contadorProductosAgregados}`;
    }
}

class Producto{
    static contadorProductos = 0;
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `ID: ${this._idProducto} - Producto: ${this._nombre} - Precio: $${this._precio}`;
    }
}

let prod1 = new Producto('Pantalon', 200);
let prod2 = new Producto('Camisa', 100);
let prod3 = new Producto('Zapatos', 400);
let prod4 = new Producto('Saco', 500);

console.log(prod1.toString());
console.log(prod2.toString());

let orden1 = new Orden();
orden1.agregarProducto(prod1);
orden1.agregarProducto(prod2);
orden1.agregarProducto(prod3);
orden1.agregarProducto(prod4);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(prod1);
orden2.agregarProducto(prod2);
orden2.agregarProducto(prod3);
orden2.agregarProducto(prod4);
orden2.agregarProducto(prod1);
orden2.agregarProducto(prod1);
orden2.mostrarOrden();