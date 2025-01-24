//Evaluación de cortocircuito

//un Truthy en js es un valor que es considerado true cuando se evalúa en un contexto de boolean
// ver https://developer.mozilla.org/en-US/docs/Glossary/Truthy. Por defecto TODOS son Truthy a no ser que se definan como falsy, excepto
//false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

if(40){
    console.log('Truthy')
} else{
    console.log('Falsy')
}

if(false){
    console.log('Truthy')
} else{
    console.log('Falsy')
}
//Hay que tener mucho cuidado al utilizar esta evaluación de cortocircuito porque por ejemplo si tenemos el siguiente objeto vacío
//y usamos la Evaluación de cortocircuito, vemos que nos devuelve 'usuario autenticado'
const user = {}
user && console.log('usuario autenticado')


//es una buena forma de revisar una condición y ejecutar inmediatamente un código. Si el primer operador es Truthy, el operador lógico && devuelve el seundo operador
const auth = true
auth && console.log('Usuario autenticado')
auth ? console.log('Usuario autenticado') : '' 
//podríamos hacerlo también con un ternario, pero como no estamos haciendo nada en caso de uqe no se cumpla, recurrrimos mejor a Evaluación de cortocircuito