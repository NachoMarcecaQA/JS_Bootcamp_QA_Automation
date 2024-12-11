/*
Ejercicio 1: Frases
Crea un programa que almacene una frase en una variable. Luego realiza lo siguiente:

Muestra la longitud de la frase.

Muestra la frase en mayúsculas.

Muestra la frase en minúsculas.

Reemplaza una palabra en la frase por otra y muestra el resultado.
*/

// declaro la frase

let frase = "Un robot no puede danar a un ser humano ni, por inaccion, permitir que un ser humano sufra dano."

//Aplico las funciones de cadena
document.write(`<br>
    La primera ley de la rob&oacutetica: ${frase}<br>
    Longit&uacuted: ${frase.length} caracteres.<br>
    En may&uacutesculas: ${frase.toUpperCase()}<br>
    En min&uacutesculas: ${frase.toLocaleLowerCase()}<br>
    La ley de Zeroth: ${frase.replaceAll("un ser humano", "la humanidad")}
`);