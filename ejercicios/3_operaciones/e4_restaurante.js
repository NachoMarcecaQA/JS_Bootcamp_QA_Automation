/*
Ejercicio 4: Restaurante

Crea un programa en Javascript para gestionar un restaurante que tiene lo siguiente:

10 Bocadillos de jamon. Precio 3,5 euros.

20 Bocadillos de tortilla. Precio 2,5 euros.

30 Bocadillos de aceite y tomate. Precio 1,75 euros.

Por la mañana se vendieron 4 bocadillos de jamon, 10 de tortilla y 15 de tomate y aceite. Muestra las ganancias totales de la mañana y cuantos bocadillos quedan de cada tipo.

Al mediodía se vendieron  3 bocadillos de jamon, 5 de tortilla y 3 de tomate y aceite. Muestra las ganancias totales del mediodia y cuantos bocadillos quedan de cada tipo.

A la tarde se vendieron 2 bocadillos de jamón, 4 de tortilla y 8 de tomate y aceite.Muestra las ganancias totales de la tarde y cuantos bocadillos quedan de cada tipo.

Por la noche se venden todos los bocadillos que quedan con un descuento del 50%. Muestra las ganancias totales de la noche.

Muestra las ganancia total del restaurante al final del dia (suma mañana, mediodia, tarde y noche).
*/

// Declaro variables con los valores 
let cantidadJamon = 10
let precioJamon = 3.5

let cantidadTortilla =20
let precioTortilla = 2.5

let cantidadAceiteTomate = 30
let precioAceiteTomate = 1.75

//variables para las ventas
let vendidoJamon = 0
let vendidoTortilla = 0
let vendidoAceiteTomate = 0

function actualizarCantidad(){
    cantidadJamon -= vendidoJamon
    cantidadTortilla -= vendidoTortilla
    cantidadAceiteTomate -= vendidoAceiteTomate
}


//cálculo de totales
 function vendidoManana() {
    return (vendidoJamon * precioJamon) + (vendidoTortilla * precioTortilla) + (vendidoAceiteTomate * precioAceiteTomate);
 } 

function vendidoTarde(){
    return (vendidoJamon * precioJamon) + (vendidoTortilla * precioTortilla) + (vendidoAceiteTomate * precioAceiteTomate);
} 

function vendidoNoche(){
    return (vendidoJamon * precioJamon) + (vendidoTortilla * precioTortilla) + (vendidoAceiteTomate * precioAceiteTomate) *0.5;

} 


// 1_Mañana
//actualizo variables
vendidoJamon = 4
vendidoTortilla = 10
vendidoAceiteTomate = 15

actualizarCantidad()
//Muestro datos
document.write(`<br>
    Ganancias ma&ntildeana: ${vendidoManana()} &#8364<br>
    Bocadillos de Jam&oacuten restantes: ${cantidadJamon} <br>
    Bocadillos de Tortilla restantes: ${cantidadTortilla}<br>
    Bocadillos de Aceite y Tomate restantes: ${cantidadAceiteTomate}<br>
`);
let totalManana = vendidoManana();

// 2_Tarde
//actualizo variables
vendidoJamon = 3
vendidoTortilla = 5
vendidoAceiteTomate = 15
actualizarCantidad()

//Muestro datos
document.write(`<br>
    Ganancias ma&ntildeana: ${vendidoTarde()} &#8364<br>
    Bocadillos de Jam&oacuten restantes: ${cantidadJamon} <br>
    Bocadillos de Tortilla restantes: ${cantidadTortilla}<br>
    Bocadillos de Aceite y Tomate restantes: ${cantidadAceiteTomate}<br>
`);
let totalTarde = vendidoTarde();

// 3_Noche
//actualizo variables
vendidoJamon = cantidadJamon
vendidoTortilla = cantidadTortilla
vendidoAceiteTomate = cantidadAceiteTomate

//Muestro datos
actualizarCantidad()
document.write(`<br>
    Ganancias ma&ntildeana: ${vendidoNoche()} &#8364<br>
    Bocadillos de Jam&oacuten restantes: ${cantidadJamon} <br>
    Bocadillos de Tortilla restantes: ${cantidadTortilla}<br>
    Bocadillos de Aceite y Tomate restantes: ${cantidadAceiteTomate}<br>
`);
let totalNoche = vendidoNoche();

// 4_Total día
document.write(`<br>
    Ganancias del d&iacutea: ${totalManana + totalTarde + totalNoche} &#8364<br>
`);