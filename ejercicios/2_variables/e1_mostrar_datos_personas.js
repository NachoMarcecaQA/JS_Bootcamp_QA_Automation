/*
Ejercicio 1: Mostrar datos de personas 
Crea variables que contenga la siguiente información sobre ti, y muestralo en tu pagina.

Nombre
Apellidos
Edad
Altura
Ciudad
Te gusta la playa (verdadero o falso)
Te gusta la montaña (verdadero o falso)
Te gusta el chocolate (verdadero o falso)
Tienes mascota (verdadero o falso)

A continuación cambia los valores con información de alguien que conozcas y muestralo en tu página.
*/

//Declaro variables y asigno valores.
let nombre = "Nacho"
let apellidos = "Marceca"
let edad = 37
let alturaCentimetros = 178
let ciudadResidencia = "Barcelona"
let gustaPlaya = true
let gustaMontana = true
let gustaChocolate = true
let tieneMascota = true

//Creo función para mostrar datos (utilizando plantillas literales para simplificar)
function mostrarDatos() {
    document.write(`<br>
    Nombre: ${nombre} <br>
    Apellidos: ${apellidos} <br>
    Edad: ${edad} <br>
    Altura (cent&iacutemetros): ${alturaCentimetros} <br>
    Ciudad de residencia: ${ciudadResidencia} <br>
    Le gusta la playa: ${gustaPlaya} <br>
    Le gusta la monta&ntildea: ${gustaMontana} <br>
    Le gusta el chocolate: ${gustaChocolate} <br>
    Tiene mascota: ${tieneMascota} <br>
    `)
    }

//Muestro los datos 
mostrarDatos();

//Modifico los datos
 nombre = "Federico"
 apellidos = "Chingotto"
 edad = 27
 alturaCentimetros = 170
 ciudadResidencia = "Olavarr&iacutea"
 gustaPlaya = false
 gustaMontana = true
 gustaChocolate = true
 tieneMascota = false

//Muestro los datos modificados
mostrarDatos();
