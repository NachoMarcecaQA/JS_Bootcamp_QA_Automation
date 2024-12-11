/*
Ejercicio 2: Tienda de Ropa
Crea un programa en javascript para una tienda de ropa. La tienda tiene los siguientes productos:

Camiseta: 10 euros

Sudadera: 20.5 euros

Gorra: 5.5 euros.

Muestra el total de la compra del cliente 1 que ha comprado 2 camisetas y una gorra.

Muestra el total de la compra del cliente 2 que ha comprado 1 camiseta y 5 gorras. Aplica un descuento del 20% al cliente, y muestra también el precio total de la compra con el descuento.

Muestra el total de la compra del cliente 3, que ha comprado 1 camiseta, 2 sudaderas y 3 gorras.
*/

// Declaro variables con los valores de los números
let precioCamiseta = 10;
let precioSudadera = 20.5;
let precioGorra = 5.5;

let cliente, cantidadCamiseta, cantidadSudadera, cantidadGorra;
let descuento = 0.2;

//Funciones para calcular las operaciones
function totalCompra() {
    return cantidadCamiseta * precioCamiseta + cantidadSudadera * precioSudadera + cantidadGorra * precioGorra;
} 

function totalDescuento() {
    return totalCompra() - totalCompra() * descuento;
}
// Modifico los datos para el cliente y los muestro
cliente = 1;
cantidadCamiseta = 2;
cantidadSudadera = 0;
cantidadGorra = 1;

//Muestro los datos 
document.write(`<br>
    Cliente ${cliente}: Total Compra: ${totalCompra()}&#x20AC
`);


// Modifico los datos para el cliente y los muestro
cliente = 2;
cantidadCamiseta = 1;
cantidadSudadera = 0;
cantidadGorra = 5;

//Muestro los datos 
document.write(`<br>
    Cliente ${cliente}: Total Compra: ${totalCompra()}&#x20AC
    Total Compra con descuento:${totalDescuento()}
`);

// Modifico los datos para el cliente y los muestro
cliente = 3;
cantidadCamiseta = 1;
cantidadSudadera = 2;
cantidadGorra = 3;

//Muestro los datos 
document.write(`<br>
    Cliente ${cliente}: Total Compra: ${totalCompra()}&#x20AC
`);
