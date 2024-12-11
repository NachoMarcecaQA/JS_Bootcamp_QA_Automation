/*
Ejercicio 3: Material de Obras
Crea un programa en javascript que calcule el material necesario para una obra. Teniendo en cuenta las siguientes medidas sobre la vivienda:

Habitacion 1: 5.5 metros de largo, 5 metros de ancho. 

Habitación 2: 4.5 metros de largo, 6 metros de ancho. 

Salón: 4 metros de largo, 5 metros ancho.

Cocina: 5 metros largo, 3.5 metros ancho.

Baño: 3 metros largo, 2.5 metros ancho.

Muestra el area de cada una de las habitaciones (largo por ancho)

Muestra el area total de la casa (suma de todas las areas)

Muestra el numero de laminas de parquet necesarias para la casa. Teniendo en cuenta que se pondra solo en las 2 habitaciones y el salón y cada lamina tiene una superficie de 0.5 metros cuadrados. (suma las areas de las 2 habitaciones y el salón y dividelo por la superficie de cada lamina).

Muestra el numero de lozas de granito necesarias para la casa, teniendo en cuenta que se pondra solo en la cocina y el baño y que tiene una superficie de 0.4 metros cuadrados. (suma las areas de la cocina y el baño y dividelo por la superficie de la loza de granito).
*/

// Declaro variables con los valores 
let largoHabitacion1 = 5.5
let anchoHabitacion1 = 5
let largoHabitacion2 = 4.5
let anchoHabitacion2 = 6
let largoSalon = 4
let anchoSalon = 5
let largoCocina = 5
let anchoCocina = 3.5
let largoBano = 3
let anchoBano = 2.5


// 1_Resultados Áreas
document.write(`<br>
    &Aacuterea Habitaci&oacuten 1: ${largoHabitacion1 * anchoHabitacion1} m2<br>
    &Aacuterea Habitaci&oacuten 2: ${largoHabitacion2 * anchoHabitacion2} m2<br>
    &Aacuterea Sal&oacuten: ${largoSalon * anchoSalon} m2<br>
    &Aacuterea Cocina: ${largoCocina * anchoCocina} m2<br>
    &Aacuterea Ba&ntildeo : ${largoBano * anchoBano} m2<br>
`);

// 2_Total Área
document.write(`<br>
    El &Aacuterea total de la casa es de: ${largoHabitacion1 * anchoHabitacion1 + largoHabitacion2 * anchoHabitacion2 + largoSalon * anchoSalon + largoCocina * anchoCocina + largoBano * anchoBano} m2<br>
`);
// 3_Láminas de parquet
document.write(`<br>
    Ser&aacuten necesarias ${(largoHabitacion1 * anchoHabitacion1 + largoHabitacion2 * anchoHabitacion2 + largoSalon * anchoSalon) / 0.5 } l&aacuteminas de parquet para cubrir las habitaciones y el sal&oacuten<br>
`);
// 4_Número de lozas de granito
document.write(`<br>
    Ser&aacuten necesarias ${(largoCocina * anchoCocina + largoBano * anchoBano)/ 0.4} lozas de granito para cubrir la cocina y el ba&ntildeo<br>
`);