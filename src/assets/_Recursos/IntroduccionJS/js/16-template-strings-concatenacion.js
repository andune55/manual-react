//Template Strings y Concatenación

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

//como se hacía antes en js este tipo de concatenación (con + o ,)
console.log('El producto es: ' + producto) 
console.log(producto + "$" + precio + " Dolares, marca " + marca) 

//hagamos este mismo código con los Template Strings como se hace ahora (con ``)
console.log(`El producto es ${producto}`)
console.log(`${producto} $${precio} Dolares, marca ${marca} `)

//En React se utiliza básicamente así. Algo muy similar: "jsx" que nos permite mezclar html con js en React