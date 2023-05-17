
alert("Bienvenido(a) a Años Dorados, donde tu abue consigue lo que necesita")

class Producto {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let producto1 = new Producto ("Pañales (docena)", 15000, 1);
let producto2 = new Producto ("Pack articulos higiene", 5000, 1);
let producto3 = new Producto ("Leche Multivitaminica", 3000, 1);


const arrayLista = [producto1, producto2, producto3,];
let opcion;

function menu() {
    do {
    let opcion = parseInt(prompt(`Ingresa: \n
    1) Ver mi lista \n
    2) Agregar un producto \n
    3) Eliminar un producto \n
    4) Valor total \n
    5) Salir`));
    return opcion;
    }
    while (opcion >=5 || opcion < 0 || isNaN(opcion));
}

function verLista() {
    console.log("\n Tu lista de compras es: ");
    console.table(arrayLista);
}

function validar(numero){
    if (numero <= 0 || isNaN(numero)){
        do{
        numero = parseInt(prompt("No ingresaste un valor válido, ingresa un monto en numeros") );
        } while (numero <= 0 || isNaN(numero));
    }
    return numero;
    }



function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = validar(parseInt(prompt("Ingrese el valor del producto: ")));
    let cantidad = validar(parseInt(prompt("Ingrese cantidad del producto: ")));

    const productoNuevo = new Producto (nombre, precio, cantidad);
    arrayLista.push(productoNuevo);
    console.log ("\n Se añadió a tu lista de compras: ")
    console.table(productoNuevo);
}

function eliminarProducto() {
    let nombreComparar = prompt ("Ingrese el nombre del producto que desea eliminar: ");
    let index = arrayLista.findIndex((producto) => producto.nombre === nombreComparar);
    
    if (index != -1){
            
            arrayLista.splice(index,1);
            console.log("\n Se eliminó de tu lista de compras: ");
            console.table(nombreComparar);
    } else {
            console.log ("El producto indicado no esta en la lista")
    }
    
}

function calcularTotal(){
    
    const arrayValorTotal = arrayLista.map ((multi) => multi.cantidad * multi.precio);
    let valorTotal = arrayValorTotal.reduce ((acumulador, elemento) => acumulador + elemento, 0);
    console.log ("\n Precio final: ");
    console.log (" " + valorTotal + " pesos")

}

function salir() {
    alert("Hasta luego que tenga buenas compras.");
}

do {
    opcion = menu();
switch (opcion){
    case 1: 
        verLista();
        break;
    case 2: 
        agregarProducto();
        break;
    case 3:
        eliminarProducto();
        break;
    case 4:
        calcularTotal();
        break
    case 4:
        salir();
        break;
}
} while (opcion != 5)