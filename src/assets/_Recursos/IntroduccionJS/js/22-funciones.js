//FUNCIONES --> nos van a permitir escribir código reutilizable en js y en cualquier lenguage de programación. Vamos a separar el código en pequeñas funciones con su proposito

//Function declaration. ojo con los nombres (mismas restricciones que nombres de variables, no empezar por números, guiones...)

// function sumar(){
//     console.log(1+1)
// }

//llamamos a la fcn, y además como son reutilizables, tantas veces como queramos
// sumar()
// sumar()

// function sumar(){
//     console.log(1+1)
// }

//hemos de escribir fcns "inteligentes" que manejen parámetros: es una variable especial que se utiliza en una función y cuyo valor se refiere a valores que vienen del exterior

function sumar(numero1, numero2){   
//    console.log(numero1)
//    console.log(numero2)
   console.log(numero1+numero2)
}
sumar(10, 20)
sumar(100, 131)

//'numero' es un parámetro mientras que '10' es un argumento
// Hemos de saber qué tipo y cuantos argumentos mandarle a nuestra función (tanto conociendo la librería que importemos como haciedo uso del helper de Visual Studio)
// por ejemplo si a la fcn anterior le mandamos un único argumento numérico, como espera 2 números trata de sumar un número con NADA y devuelve 'NaN' (Not a Number). 
// Para estos casos podríamos utilizar los parámetros por default, cuando un valor no está presente utiliar esos valores. function sumar(numero1 = 0, numero2 = 0){   }