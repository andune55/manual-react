//Condicionales
const disponible = 4000
const retirar = 200

const auth = true

if (auth){
    //se cumple la condición
    console.log('Acceso al sistema..')
} else {
    //no se cumple la condición
    console.log('No tienes permiso, inicia sesión')
}

/*
> mayor, < menor, >= mayor o igual, <= menor o igual, == igual, === igual estricto, !==diferente a 
*/

if (disponible > retirar){
    //se cumple la condición
    console.log('Puedes sacar dinero')
} else {
    //no se cumple la condición
    console.log('No puedes sacar dinero')
}

const numero1 = 20
const numero2 = 20
const numero3 = "20"

console.log(typeof numero1,typeof numero2)
if (numero1 == numero2){
    console.log('Son iguales')
} else {
    console.log('No son iguales')
}

console.log(typeof numero1,typeof numero3)
if (numero1 == numero3){
    console.log('Son iguales')
} else {
    console.log('No son iguales')
}

//SIEMPRE VAMOS A QUERER UTILIZAR EL OPERADOR TRIPLE --> el operador estricto revisa tanto el valor como el tipo de dato. 
//Como vemos en ambos casos devuelve que sí se cumple porque el operador que no es estricto revisa el valor 20 y 20
console.log(typeof numero1,typeof numero3)
if (numero1 === numero3){
    console.log('Son iguales')
} else {
    console.log('No son iguales')
}

//Logical Or '||' y Logical And '&&'
const saldo = 1000
const pagar = 500
const tarjeta = false

// if( saldo > pagar){ //si mi saldo es mayor
//     console.log('Puedes pagar')
// } else if (tarjeta) { //si llevo mi tarjeta
//     console.log('Puedes pagar')
// } else {
//     console.log('No puedes pagar')
// }
/*se ejecuta la primera que se cumpla*/

if( saldo > pagar || tarjeta){ //si se cumple una de las dos
    console.log('Puedes pagar')
} else {
    console.log('No, no puedes pagar')
}

