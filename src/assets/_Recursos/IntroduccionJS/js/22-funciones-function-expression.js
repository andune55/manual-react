//Funciones - Function Expression --> Sintaxis similar, hacen lo mismo, but en este caso si intentamos llamar a la función antes de declararla nos devuelve error

// sumar(10, 20)
// sumar(300, 1)
// sumar(100)

const sumar = function (numero1 = 0, numero2 = 0){   
    console.log(numero1+numero2)
}

// En este caso podemos llamar antes de declararla a la función. No están ni mucho menos deprecadas y se siguen utilizando mucho
// function sumar(numero1 = 0, numero2 = 0){ 
//     console.log(numero1+numero2)
// }

sumar(10, 20)
sumar(300, 1)
sumar(100)

