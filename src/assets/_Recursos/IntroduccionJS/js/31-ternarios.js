//Ternarios --> un if en una versión mas corta. En React se usa mucho porque en los templates no podemos escribir un if en la poarte que se muestra en pantalla
//pero sí un ternario

const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = false

// if (auth){
//     console.log('User autenticado..')
// } else {
//     console.log('No auntenticado, ir a Login')
// }

//con un operador ternario vamos a poder tener todo lo anterior en una línea. Sintaxis algo compleja

auth ? 
    console.log('User autenticado..') : 
    console.log('No auntenticado, ir a Login')

//otra manera combinando operadores que vimos antes

saldo > pagar ?
    console.log('sí puedes pagar') :
    console.log('no, no puedes pagar')

//ternario anidado (al igual que los if se ejecuta la primera condición que se cumpla). 
saldo > pagar ?
    console.log('sí puedes pagar') :
    tarjeta ?
        console.log('puedes pagar con tarjeta') :
        console.log('no, no puedes pagar')

//PERO MEJOR QUE TERNARIOS ANIDADOS ES HACER USO DE OPERADORES PARA MEJOR MANTENIMIENTO DE CÓDIGO
saldo > pagar || tarjeta ?
    console.log('sí puedes pagar') :    
    console.log('no, no puedes pagar')