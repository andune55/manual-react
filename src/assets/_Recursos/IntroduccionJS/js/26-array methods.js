//Array methods
const tecnologias = ['HTML','CSS','Javascript','React.js','Node.js']
const numeros = [10, 20, 30]

//Filter
    const nuevoArray = tecnologias.filter(function(tec) {
        console.log(tec)
    })

    // const nuevoArray2 = numeros.filter(function (nume) {
    //     console.log(nume)
    // })

    //también podríamos hacerlo así (sacando la función que va entre "()" fuera):

    // function ejemploFilter(nume) {
    //     console.log(nume)
    // }

    //esta sintaxis normalmente no se usa, no se crean funciones aparte
    // const ejemploFilter = (nume) => console.log(nume)    
    // const nuevoArray2 = numeros.filter(ejemploFilter)

    //Estos array methods se utilizan mucho y lo que hacen es iterar sobre cada uno de los elementos del array. 
    //En base a ciertas condiciones podemos hacer algunas operaciones con ellos

    //IMPORTANTE --> ventajas de uso de arrow function:
    // (no usamos "function", como es una línea quitamos "{}", no usamos "return" porque se da por implícito que es return en base a la condición indicada

        // const nuevoArray2 = tecnologias.filter((tech) => tech === 'HTML' )
        const nuevoArray2 = tecnologias.filter((tech) => tech !== 'HTML' )
        console.log(nuevoArray2)

        //recuperando el ejemplo que vimos en 18.js, vemos que hacíamos lo miosmo sin arrow functions
        const tecnologias2 = tecnologias.filter(function(tech){
            //console.log(tech)
            if(tech!=='HTML'){ 
                return tech 
            }
        })
        console.log(tecnologias2)

    //Otra característica de los arrow functions es que si solo es un parámetro podemos eliminar los "()"
    const nuevoArray3 = tecnologias.filter(tech => tech === 'HTML')
    console.log(nuevoArray3)
    //Filter también se puede usar para arrays de tipo numérico
    const resultado = numeros.filter( num => num !== 10 )
    console.log(resultado)

//Includes --> va a revisar si existe un elemento en un arreglo. En este caso como vemos la implementación es más sencilla, y en consola vemos que devuelve true
const resultado2 = tecnologias.includes('CSS')
console.log(resultado2)

    //Podemos ver todos los que hay tanto en la documentación https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
    //como en el prototype de la consola

    //Veamos más array methods. Algunos de ellos tienen un "callback" (una función de order superior=higher order function)

    //Some --> devuelve si cumple la condición
    const resultado3 = numeros.some( num => num > 15 ) //revisa si al menos uno de los valores del array numeros cumple la condición. Tengo dos de hecho. decuelve true
    console.log(resultado3)

    /*usando este método reducimos código si por ejemplo quisiéamos mostrar un texto cuando se cumple condición, frente a por ejemplo el código a usar si tiramos del método filter
            if(resultado.length>0){ 
                console.log('Si hay elementos')
        
            if(resultado3){ 
                console.log('Si hay elementos')
            }
    */

//Find --> devuelve el primer elemento que cumple una condición
    const resultado4 = numeros.find( num => num > 15 )
    console.log(resultado4)
    
//Every --> devuelve true o false si todos cumplen la condición
    const resultado5 = numeros.every( num => num > 8 )
    const resultado6 = numeros.every( num => num > 15 )
    console.log(resultado5)
    console.log(resultado6)

//Reduce --> devuelve un acumulado del total. Es de los mas complejos. Toma 2 parámetros.
    //nos va a permitir hacer el cálculo en carritos de la compra de manera muy simple
   const resultado7 = numeros.reduce( (total, numero) => { // total y numero(numero actual). El total va a servir como un acumulado
        console.log('total iteracion: '+total) // solo con esta línea, en consola nos sale 0 y 2 undefined, porque tras el valor inicial no sabe que hacer la vez siguiente
        console.log('numero iteracion: '+numero) // añadiendo esta línea ya aparecen los números del array alternados con un undefined

        //console.log(total) funciona como un acumulado. Hagamos por ejemplo que sume el primer valor del array a mi valor inicial 0, y a ese resultado le sume el siguiente valor....
        //útil si construimos un carrito de compra, para mostrarle al usuario cual es el total a pagar de todos los elementos que tiene en el carrito
        return total+numero // en 'total' va acumulando y 'numero' es el valor numérico actual del elemento del array numérico en cada iteración 
   }, 0) //entre las llaves y el paréntesis ponemos un valor inicial de 0

   //También podríamos escribirla así: 
   const resultado8 = numeros.reduce( (total, numero) => total + numero, 0 )

   console.log('resultado7: '+resultado7)     
   console.log('resultado8: '+resultado8)  
