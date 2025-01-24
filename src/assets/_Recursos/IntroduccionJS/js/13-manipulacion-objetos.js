/* Objetos 
    La parte más importante en Javascript y una de las características que más vamos a trabajar sea con React, Node, Vue.js...
    Los Arrays=Arreglos también terminan siendo objetos

    - Un objeto es una colección de propiedades
    - Una propiedad es una asociación entre un nombre=clave(key) y un valor(value)
    - Sintaxis con llaves --> let producto = {  } // const producto = {} / 
    
    Por tanto siempre que veamos sintaxis con ""= y llaves": es un objeto, una colección de propiedades(asociaciones key+value)
    -Los obJetos pueden tener múltiples propiedades SEPARADAS POR ","
*/

// OBJETOS Manipulación:
const producto = {
    nombre : "Tablet",   // Esto es una propiedad. nombre es "key" "Tablet" es el "value". las propiedades van separadas por comas
    precio : 300,
    disponible : false
}

//¿Como evitamos que se pueda manipular un objeto? Con TS es fácil, con JS usemos un par de métodos
//Object.freeze(producto) //Evita que se manipule ninguna propiedad del objeto (ni niguna existente, ni añadir una nueva ni eliminar ninguna)
Object.seal(producto) // Permite modificar las exiustentes en el objeto pero ni añadir ni eliminar ninguna propiedad


//Reescribir un valor
producto.disponible = true

//Si no existe la propiedad la va a añadir
producto.imagen = 'image.jpg'

//Eliminamos propiedad
delete producto.precio



//El object de JS es muy grande y si abrimos la documentación de MDN vemos todos los métodos que podemos usar con el constructor de object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


console.log(producto)