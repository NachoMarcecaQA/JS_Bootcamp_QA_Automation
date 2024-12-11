/*
Ejercicio 3: Mostrar datos de canciones
Declara variables para guardar la siguiente información sobre tu canción favorita y muestrala en tu página. 

Título de la canción
Artista
Álbum
Año de lanzamiento
Duración
¿Tiene videoclip? (verdadero o falso)

A continuación cambia el valor de las variables con información sobre la canción que menos te gusta y muéstrala en tu página.
*/

//Declaro variables y asigno valores.
let tituloCancion = "Just my imagination"
let artista = "The Cranberries"
let album = "Bury The Hatchet"
let anoLanzamiento = 1999
let duracion = 221
let tieneVideoclip = true

//Creo la función para mostrar datos
function mostrarDatos() {
    document.write(` <br>
    T&iacutetulo: ${tituloCancion} <br>
    Artista: ${artista} <br>
    &Agravelbum: ${album} <br>
    A&ntildeo de lanzamiento: ${anoLanzamiento} <br>
    Duraci&oacuten (minutos): ${duracion} <br>
    Tiene videoclip: ${tieneVideoclip} <br>
    `)
}

//Muestro los valores
mostrarDatos();

//Modifico los datos
tituloCancion = "Bzrp Music Sessions, Vol. 53"
artista = "Bizarrap y Shakira"
album = "Single: Bzrp Music Sessions, Vol. 53"
anoLanzamiento = 2023
duracion = 214
tieneVideoclip = true

//Muestro valores modificados
mostrarDatos();