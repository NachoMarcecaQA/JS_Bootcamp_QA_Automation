/*
Ejercicio 5: Datos sobre Clima
Crea un pequeño programa en JavaScript que registre la información del clima de tu ciudad. Declara variables que almacenen lo siguiente:

Temperatura actual 

Humedad 

Probabilidad de lluvia 

¿Es de día? (verdadero o falso) 

Velocidad del viento

Después, actualiza los valores de las variables con la información del clima en la ciudad de Londres.
*/

//Declaro variables y asigno valores.
let temperaturaActual = 9
let humedad = 83
let probabilidadLluvia = 25
let esDia = true
let velocidadViento = 13

//Creo la función para mostrar datos
function mostrarDatos() {
    document.write(` <br>
    Temperatura: ${temperaturaActual}&degC <br>
    Humedad: ${humedad}% <br>
    Probabilidad de lluvia: ${probabilidadLluvia}% <br>
    Es de d&iacutea: ${esDia} <br>
    Velocidad del viento: ${velocidadViento}km/h <br>
    `)
}

//Muestro los valores
mostrarDatos();

//Modifico los datos
temperaturaActual = 7
humedad = 78
probabilidadLluvia = 10
esDia = true
velocidadViento = 11

//Muestro valores modificados
mostrarDatos();