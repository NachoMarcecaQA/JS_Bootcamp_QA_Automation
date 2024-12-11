/*
Ejercicio 2: Correo Electrónico
Crea un programa que almacene una dirección de correo electrónico. Luego realiza lo siguiente:

Muestra la longitud de la dirección de correo.

Muestra la dirección de correo en mayúsculas.

Muestra la dirección de correo en minúsculas.

Reemplaza el dominio del correo por "email.es" y muestra el nuevo correo.
*/

// declaro la frase
let correElectronico = "Isaac_Asimov@Imperio_Galactico.org"

//Aplico las funciones de cadena
document.write(`<br>
    Longit&uacuted del correo: ${correElectronico.length} caracteres.<br>
    En may&uacutesculas: ${correElectronico.toUpperCase()}<br>
    En min&uacutesculas: ${correElectronico.toLocaleLowerCase()}<br>
    Cambio de email: ${correElectronico.replace("Imperio_Galactico.org", "email.es")
}
`);
