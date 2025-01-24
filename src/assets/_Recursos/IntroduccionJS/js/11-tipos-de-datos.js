/* Tipos de dato

Javascript tiene pocos tipos de datos:
string, number, 

para saber el tipo de dato de una variable, operador typeof antes de la variable
console.log (typeof cliente)

si nos ponemos encima de esta variable let alumno = "Juan" herramienta de Visual Studio si te pones encima de la variable te dice el tipo de dato --> string 
(con let, con const no rula esto en Visual Studio code pero usamos el typeof)
El Undefined lo marca como any (que es específico de Typescript. Lo veremos y veremos por que´hayh que evitarlo)

podemos usar comillas dobles o simples para asignar valor string a una variable (no mezclar tipo de comillas, nos da error)*/

//Undefined
let cliente
console.log (cliente)
console.log (typeof cliente)

//Strings o cadenas de texto. Sirven para representar el nombre de un producto, categoría, reviews....
let alumno = "Juan"
const producto = 'Monitor 49 pulgadas'
console.log(alumno)
console.log(typeof alumno)
console.log(producto)

//Numbers
const numero = 40
const numero2= 40.40
const numero3 = -100
console.log(numero)
console.log(numero2)
console.log(numero3)
console.log(typeof numero3)

//BigInt
const numeroGrande = BigInt(1263472832934827342938427348274)
console.log(numeroGrande)

//Boolean (true o false) --> El usuario está bloqueado o no / autenticado o no / producto agotado o no....
const descuento = true;
console.log(typeof descuento)

//Null
const descuento2 = null 
console.log(descuento2) //lo estoy asignando pero no existe no es nada. Es probable que queramos asignar null a una variable

let precio
console.log(precio)     //--> variable declarada pero no tiene valor


//Symbol --> son buenos para librerias. normlamente no los usaremos. Cada Symbol es distinto a otro no hay dos iguales. Son únicos, aunque los comparemos y tengamos el mismo valor, siem,pre son diferentes
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol)
console.log(primerSymbol == segundoSymbol)


//Objetos --> veremos en su propio vídeo. La parte más importante en Javascript y una de las características que más vamos a trabajar sea con React, Node, Vue.js...
//Arrays o Arreglos también terminan siendo objetos