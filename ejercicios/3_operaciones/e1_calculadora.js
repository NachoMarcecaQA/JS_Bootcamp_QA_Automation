/*
Ejercicio 1: Calculadora
Crea un programa en javascript que muestre el resultado de la suma, la resta, la multiplicación y la división de los números 10 y 4.
*/

// Declaro variables con los valores de los números
let primerNum = 10;
let segundoNum = 4;

// Declaro variables con los 
let suma = primerNum + segundoNum;
let resta = primerNum - segundoNum;
let multiplicar = primerNum * segundoNum;
let dividir = primerNum / segundoNum;

//Creo función para realizar lso cálculos y mostrar los datos
function calculadora() {
    document.write(`<br>
    ${primerNum} + ${segundoNum} = ${suma} <br>
    ${primerNum} - ${segundoNum} = ${resta} <br>
    ${primerNum} * ${segundoNum} = ${multiplicar} <br>
    ${primerNum} / ${segundoNum} = ${dividir} <br>
    `)
    }

//Muestro los datos 
calculadora();

