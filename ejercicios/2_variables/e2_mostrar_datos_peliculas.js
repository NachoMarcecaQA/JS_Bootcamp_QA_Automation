/*
Ejercicio 2: Mostrar datos de películas
Declara variables para guardar la siguiente información sobre tu película favorita y muéstrala en tu página. 

Título de la película

Director de la película

Año de lanzamiento

Género

Duración en minutos

¿Tiene premios? (verdadero o falso)

A continuación cambia el valor de las variables a inglés y muestrala en tu página.
*/

//Declaro variables y asigno valores.
let tituloPelicula = "Matrix"
let directorPelicula = "Lilly y Lana Wachowski"
let anoLanzamiento = 1999
let generoPelicula = "Acc&iacuteon"
let duracionMinutos = 136
let tienePremios = true

//Creo la función para mostrar datos
function mostrarDatosEsp() {
    document.write(` <br>
    Título: ${tituloPelicula} <br>
    Director: ${tituloPelicula} <br>
    Año de lanzamiento: ${anoLanzamiento} <br>
    Género: ${generoPelicula} <br>
    Duración en minutos: ${duracionMinutos} <br>
    Tiene premios: ${tienePremios} <br>
    `)
}

function mostrarDatosEng() {
    document.write(` <br>
    Title: ${tituloPelicula} <br>
    Directors: ${tituloPelicula} <br>
    Year of release: ${anoLanzamiento} <br>
    Film Genre: ${generoPelicula} <br>
    Running time (minutes): ${duracionMinutos} <br>
    Has awards: ${tienePremios} <br>
    `)
}

//Muestro los valores
mostrarDatosEsp();

//Modifico los datos
tituloPelicula = "The Matrix"
directorPelicula = "Lilly & Lana Wachowski"
anoLanzamiento = 1999
generoPelicula = "Action"
duracionMinutos = 136
tienePremios = true

//Muestro valores modificados (inglés)
mostrarDatosEng();