// Funciones - arrow functions

//al igual que las function expressions si intentamos llamarla antes de declararla nos da error
//la sintaxis es como las function expressions sin la palabra "function" y añadiendo "=>" entre el ")" y la "{""
//const sumar = function(numero1 = 0, numero2 = 0) {

    // const sumar = (numero1 = 0, numero2 = 0) => {
    //     console.log(numero1 + numero2)
    // }

sumar(10, 20)
sumar(300, 1)
sumar(100)

//1ª característica: si nuestras funciones solo tienen una línea, podemos eliminar las llaves
    const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2)

//A continuación veremos la otra característica que tienen las arrow functions y funciones que devuelven valores

/* Todas las fcnes que hemos visto devuelven valores*/
