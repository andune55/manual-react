/* Objetos 
    La parte más importante en Javascript y una de las características que más vamos a trabajar sea con React, Node, Vue.js...
    Los Arrays=Arreglos también terminan siendo objetos

    - Un objeto es una colección de propiedades
    - Una propiedad es una asociación entre un nombre=clave(key) y un valor(value)
    - Sintaxis con llaves --> let producto = {  } // const producto = {} / 
    
    Por tanto siempre que veamos sintaxis con ""= y llaves": es un objeto, una colección de propiedades(asociaciones key+value)
    -Los obJetos pueden tener múltiples propiedades SEPARADAS POR ","
*/

// GENERAR OBJETOS:
const producto = {
    nombre : "Tablet",   // Esto es una propiedad. nombre es "key" "Tablet" es el "value". las propiedades van separadas por comas
    precio : 300,
    disponible : false
}

console.log(producto); //veamos en la consola como se ven los objetos. dandole al triangulito expandimos y vemos las propiedades del mismo
console.log(typeof producto)
console.table(producto) //para objetos muy grandes y también para arrays podemos usar console-table para verlos formateados en la consola

/* ACCEDER A ELLOS:
    Una de las características de los objetos es que podemos acceder a cada una de sus propiedades. Usamos la sintaxis de "." en los objetos y vemos como nos aparece
    el autocompletado de VSCode y podemos elegir la propiedad (asociación key/value) que queramos
*/
// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.autenticado) // si tratamos de acceder a una propiedad que no existe nos devuelve Undefined

// DESTRUCTURING --> PENSADO PARA REDUCIR CÓDIGO USARLO SIEMPRE QUE PODAMOS
//  Antes, en versiones anteriores de JS era muy común crear una variable y asignarle la propiedad de un objeto, por ejemplo
// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(nombre)
// console.log(precio)
// console.log(disponible)
//console.log(autenticado)

//pero en versiones recientes de JS desde ECMAS6 agregaron "Destructuring" lo que nos permite extraer y generar una variable en una sola línea de código
//const = {} --> esto va a ser el objeto sobre el cual queremos aplicar destructuring, extraer un valor
// const { nombre2 } = producto
// console.log(nombre)

//La sintaxis del Destructuring
const { nombre, precio, disponible } = producto // aquí lo estamos haciendo en una sola línea, extrayendo el valor y generando las variables 
console.log(nombre)
console.log(precio)
console.log(disponible)


//OBJECT LITERAL ENHACEMENT --> PENSADO PARA REDUCIR CÓDIGO USARLO SIEMPRE QUE PODAMOS
//sirve para colocar dentro de un objeto. Supongamos que tenemos las dos variables siguientes:
const autenticado2 = true
const usuario = "Juan"

// const nuevoObjeto = {
//     autenticado2 : autenticado2,
//     usuario: usuario
// }

//si el key y el value se llaman igual puedo hacer esto
const nuevoObjeto = {
    autenticado2 
    usuario
}

console.log(nuevoObjeto)

//¿en qué casos es util? cuando tenemos una función que realiza ciertas operaciones y en lugar de devolver un monton de variables, devuelves un objeto con todo agrupado