/* Objetos 
    La parte más importante en Javascript y una de las características que más vamos a trabajar sea con React, Node, Vue.js...
    Los Arrays=Arreglos también terminan siendo objetos

    - Un objeto es una colección de propiedades
    - Una propiedad es una asociación entre un nombre=clave(key) y un valor(value)
    - Sintaxis con llaves --> let producto = {  } // const producto = {} / 
    
    Por tanto siempre que veamos sintaxis con ""= y llaves": es un objeto, una colección de propiedades(asociaciones key+value)
    -Los obJetos pueden tener múltiples propiedades SEPARADAS POR ","
*/

// OBJETOS unir dos o mas objetos, técnicas y sintaxis que marca diferencia. Le dedica mucho tiempo a losobjetos porque es lo que más se utiliza en React:
const producto = {
    nombre : "Tablet",   // Esto es una propiedad. nombre es "key" "Tablet" es el "value". las propiedades van separadas por comas
    precio : 300,
    disponible : false
}

const cliente = {
    nombre: "Juan",
    premium: true    
}

//supongamos que añadimos el objeto producto a un carrito
const carrito = {
    cantidad: 1,
    //si lo hacemos así nos agrega el objeto producto DENTRO de este objeto carrito, pero queremos unirlo
    //producto 
    // para que las key del objeto producto sean key de este objeto carrito (que el objeto carrito sea plano) Usamos para ello el "spread operator":
    ...producto 
}
console.log(carrito)

//este código tiene 2 objetos dentro (obtiene una copia)
const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente},
}
console.log(nuevoObjeto)

//podríamos obtener exactamente lo mismo que antes simplificando la sintaxis usando el 'object literal enhancement' diciendo:
// 'genérame un key de producto con el objeto producto y un key de cliente con el objeto cliente':
const nuevoObjeto2 = {
    producto,
    cliente
}
console.log(nuevoObjeto2)

//si hago esto va a ser completamente diferente, un objeto plano pero ¡OJO! el key nombre del objeto producto no está!!!! porque el key nombre del objeto cliente reescribe el anterior
const nuevoObjeto3 = {
    ...producto,
    ...cliente
}
console.log(nuevoObjeto3)

//lo anterior lo podemos hacer con menos código usando el Object.assign
const nuevoObjeto4 = Object.assign(producto, cliente)
console.log(nuevoObjeto4)

//En react existe el término "inmutabilidad" es decir, no modificas directamente un objeto sino en base a ciertas funciones.
//Es importante entender las diferentes funciones que nos ofrece para poder cambiar algunos valores. Eso nos va a quedar más claro con los proyectos de React.
