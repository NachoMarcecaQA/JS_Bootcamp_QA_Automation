/*
Ejercicio 3: Lista de la compra
Crea un programa que almacene una lista de la compra en una cadena separadas por comas. Luego realiza lo siguiente:

Muestra la longitud de la cadena que contiene la compra.

Muestra la lista de la compra en mayúsculas.

Muestra la lista de la compra en minúsculas.

Muestra true si la lista contiene la palabra "manzana"

Reemplaza un artículo de la compra por “lechuga”
*/

// declaro la frase
let listaDeLaCompra = "Manzana , Tomate, Banana, Aguacate"

//Aplico las funciones de cadena
document.write(`<br>
    La lista: ${listaDeLaCompra} <br>
    Longit&uacuted de la lista de compra: ${listaDeLaCompra.length} caracteres.<br>
    En may&uacutesculas: ${listaDeLaCompra.toUpperCase()}<br>
    En min&uacutesculas: ${listaDeLaCompra.toLocaleLowerCase()}<br>
    Tiene manzana?: ${listaDeLaCompra.includes("Manzana")}<br>
    Incluyo Lechuga y quito Banana: ${listaDeLaCompra.replace("Banana", "Lechuga"),  listaDeLaCompra}
`);