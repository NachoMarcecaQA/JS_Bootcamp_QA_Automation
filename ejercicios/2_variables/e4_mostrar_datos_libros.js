/*
Ejercicio 4: Mostrar datos sobre Libros
Declara variables para guardar la siguiente información tu libro favorito y muéstrala en tu página. 

Título del libro
Autor
Género literario
Año de publicación
Número de páginas
¿Tiene película? (verdadero o falso)

A continuación cambia los valores de las variables por la información sobre el libro Harry Potter.
*/

//Declaro variables y asigno valores.
let tituloLibro = "Berserk"
let autor = "Kentaro Miura"
let generoLiterario = "Manga, Seinen"
let anoPublicacion = 1989
let numeroPaginas = 9600
let tienePelicula = false

//Creo la función para mostrar datos
function mostrarDatos() {
    document.write(` <br>
    T&iacutetulo: ${tituloLibro} <br>
    Autor: ${autor} <br>
    G&eacutenero literario: ${generoLiterario} <br>
    A&ntildeo de publicaci&oacuten: ${anoPublicacion} <br>
    Tiene pel&iacutecula: ${tienePelicula}<br>
    `)
}

//Muestro los valores
mostrarDatos();

//Modifico los datos
tituloLibro = "Harry Potter y la piedra filosofal"
autor = "J. K. Rowling"
generoLiterario = "Aventura"
anoPublicacion = 1997
numeroPaginas = 223
tienePelicula = true

//Muestro valores modificados
mostrarDatos();