/*
Se utilizan mucho en React y en el desarrollo web hoy en día ya que normalmente cuando instalas una dependencia/librería, esa dep. te permite importar ciertas funciones
el mismo React te permite importar sus funciones para que puedas utilizarlas en tu código
Supongamos que estamos creando un proyecto y vamos teniendo cada vez más y más funciones (pone el ejemplo de los tropecientos .js en nuestro html) --> eso se soluciona con los 
módulos de ECMAScript, que nos permiten separar nuestro código.

creamos un nuevo "funciones.js" donde metemos nuestras funciones y en nuestro html le indicamos al js que es de type module, y ello nos va a habilitar el poder importar.
dentro de nuestro .js de funciones le añadimos un "export" antes de cada función. En el .js donde queramos usar las funciones usamos un import

export function sumar (n1, n2){
    return n1 + n2
}
export function restar (n1, n2){
    return n1 - n2
}
//también podriamos exportarlas de esta manera, sin usar la palabra export antes de la función y usando a continuación un objeto
function multiplicar (n1, n2){
    return n1 * n2
}
function dividr (n1, n2){
    return n1 / n2
}
export { 
    multiplicar,
    dividir
}

Ambos tipos de export requieren que al importarlos se llamen entre llaves y con el mismo nombre (salvo que usemos un alias)
Como vamos a importar muchas funciones, variables... de muchas librerias ¿como hacemos para evitar la colisión de nombres? utilizamo "alias" --> import {sumar as funcionSumar} 

Existe otro export que es el export default: solo puede haber uno por archivo. Lo importas sin llaves y nombras como queramos

export default function multiplicar (n1, n2){
    return n1 * n2
}

ESTOS MODULOS ESTAN PRESENTES EN TODAS LAS TECNOLOGÍAS DE JS VUE, NODE, REACT... NOS PERMITEN SEPARAR NUESTRO CÓDIGO Y UN MEJOR MANTENIMIENTO
*/

import agusmultiplica, { sumar, restar, dividir } from './funciones.js' // esta es la mejor manera de importar las funciones que nos ofrecen las dependencias/librerías

const resultadoSumar = sumar(25, 30)
const resultadoRestar = restar(25, 30)
const resultadoMultiplicar = agusmultiplica(25, 30)
const resultadoDividir = dividir(100, 10)
console.log(resultadoSumar + '\n' + resultadoRestar + '\n' + resultadoMultiplicar + '\n' + resultadoDividir);
