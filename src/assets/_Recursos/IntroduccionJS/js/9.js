console.log('Hola Mundo')
console.log(2+2)

let cliente = 30
cliente="Juan"

let calzado

console.log(cliente)
console.log(calzado)
console.log(cantidad)

/*
9. variables con let

var (versiones anteriores, ya no se usan)
let
const

- nombres descriptivos que no pueden iniciar con * ni números ni caracteres especiales.

las variables creadas con let:
	- Podemos inicializarlas con un valor y después reasignarlo variables con const no se puede hacer eso
	  (con otros lenguages no podríamos hacer esto pero Javascript es un lenguage de tipo dinámico donde el tipo de dato se asigna por su valor y no por la variable)
		let cliente ="Juan"
		cliente=30
		
	- Podemos inicializarlas sin valor y asignarlo después
		let precio
		precio = 200
		
	- Si la inicializamos y no le asignamos valor y hacemos un console.log vemos que sale "Undefined" es un tipo de dato en Javascript que nos indica 
	que la variable fue inicializada pero nunca tuvo ningún valor 
	
	si hacemos un console.log de una variable "cantidad" que no hemos definido nos da el error "cantidad is not defined"
*/