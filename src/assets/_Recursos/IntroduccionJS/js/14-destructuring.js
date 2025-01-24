/* Objetos 
    La parte más importante en Javascript y una de las características que más vamos a trabajar sea con React, Node, Vue.js...
    Los Arrays=Arreglos también terminan siendo objetos

    - Un objeto es una colección de propiedades
    - Una propiedad es una asociación entre un nombre=clave(key) y un valor(value)
    - Sintaxis con llaves --> let producto = {  } // const producto = {} / 
    
    Por tanto siempre que veamos sintaxis con ""= y llaves": es un objeto, una colección de propiedades(asociaciones key+value)
    -Los obJetos pueden tener múltiples propiedades SEPARADAS POR ","
*/

// OBJETOS Destructuring de dos o más objetos:
const producto = {
    nombre : "Tablet",   // Esto es una propiedad. nombre es "key" "Tablet" es el "value". las propiedades van separadas por comas
    precio : 300,
    disponible : false
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        calle: "Calle Nuevo Mexico"
    }
}

const { nombre } = producto
//const { nombre } = cliente //-->esto nos daba error. veamos a continuación como renombramos ese valor para evitar colisión de nombres
//const { nombre: nombreCliente, direccion: calle } = cliente
const { nombre: nombreCliente, direccion: { calle } } = cliente

/*analizando la notación anterior:

    nombre: nombreCliente --> renombra la variable
    direccion: { calle } --> entra a ese objeto y entra a calle
*/


console.log(nombre)
console.log(nombreCliente)
console.log(calle)

// Muchas veces instalaremos varias dependencias y cuando devuelven valores, resulta que las variables se llaman igual. Para evitar colisión de nombres 
// Viene bien saber como poder renombrarlas de esta manera.
