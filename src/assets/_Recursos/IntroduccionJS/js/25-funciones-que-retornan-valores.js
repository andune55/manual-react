// Funciones que devuelven valores. Veámoslo con los 3 tipos de funciones

    // const sumar = function (numero1 = 0, numero2 = 0){   
    //     //console.log(numero1 + numero2)
    //     return numero1 + numero2
    // }

    // function sumar(numero1 = 0, numero2 = 0){ 
    //     //console.log(numero1+numero2)
    //     retirn numero1 + numero2
    // }

    //const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2)
    const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2 //cuando solo tienen una línea no hace falta que usemos "return"

    /* si tenemos múltiples líneas en la arrow function usamos return 
    
    const sumar = (numero1 = 0, numero2 = 0) => {
        return numero1 + numero2
    }
    
    */


const resultado = sumar(10, 20)
console.log(resultado)

