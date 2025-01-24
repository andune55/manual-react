//recorriendo/iterar arrays

const tecnologias = ['HTML','CSS','Javascript','React.js','Node.js']

// console.log(tecnologias[0])
// console.log(tecnologias[1])
// console.log(tecnologias[2])
// console.log(tecnologias[3])
// console.log(tecnologias[4])

//igual que map() para iterar un array o filter() para sacar o mantener elementos de un arreglo existen métodos/funciones para iterar una array fácilmente
    // for(let i = 0; i < 5; i++) { 
    //     //console.log(i) 
    //     console.log(tecnologias[i]) 
    // }

/*si añadiéramos un nuevo valor al array sin modificar el bucle, por ejemplo al final vemos que no nos sale.
un arreglo va a crecer o ser mas pequeño en fcn de lo que el usuario haga en nuestra App. por ejemplo un carrito de compras, que se inicia con un arreglo vacío,
en función de lo que haga un usuario u otro se han podido añadir 3 elementos, 8, ninguno...
por tanto SIEMPRE TENEMOS QUE ESCRIBIR NUESTRO CÓDIGO DE FORMA DINÁMICA, QUE SE ADPATE A TODOS LOS ESCENARIOS*/

//revisemos cuántos elementos hay en el arreglo para que el iterador se ejecute esa cantidad de veces

    // for(let i = 0; i < tecnologias.length; i++) { 
    //     //console.log(i) 
    //     console.log(tecnologias[i]) 
    // }

//aunque un for (que se usa en C#, php, Java) no tiene nada de malo, js ha hecho 3 iteradores que son mas sencillos y claros de usar

//forEach()  --> MÉTODO QUE EJECUTA UNA FUNCIÓN INDICADA POR CADA ELEMENTO DEL ARREGLO

    // tecnologias.forEach(function(){
    //     console.log('Desde la función')
    // })

    //dentro de ese function podemos pasarle lo que queramos como parámetro, antes usamos 'tech' but podemos ponerle por ejemplo la letra 'a' y veremos que aparecen cada uno de esos valores
    // tecnologias.forEach(function(a){
    //     console.log(a)
    // })

    //normalmente el nombre del parámetro ha de ser descriptivo de los valores que contenga el array, por ejemplo array de automóviles-->parámetro 'automovil'. 
    // Así que en este caso lo dejamos en 'tech'. Como vemos es mas sencillo que el bucle loop. Ya sabe cuantas veces ejecutarse porqeu ya sabe la extensión del
    //array sobre el que se está ejecutando
    // tecnologias.forEach(function(tech){
    //     console.log(tech)
    // })

//map() --> sirve para iterar pero su característica ppal es que CREA UN NUEVO ARREGLO, en base a las condiciones de la fcn. 

    // tecnologias.map(function(tech){
    //     console.log(tech)
    // })

    //Veamos esta característica diferencial con el siguiente código. El primer console.log (en el que intentamos return tech usandi forEach) nos dará un undefined
    const arrayforEach = tecnologias.forEach(function(tech){
        //return tech
        console.log(tech)
    })
    const arrayMap = tecnologias.map(function(tech){
        return tech
    })

    console.log(arrayforEach)
    console.log(arrayMap)

    // map() es el más utilizado con React. Por tanto DIFERENCIA:
    /*
    forEach() ejecuta una función dada tantas veces como valores  tiene un arreglo
    map() genera un array nuevo en base a la condicion/fcn que le estás pasando
    */

// for ... of --> EJECUTA UN BLOQUE DE CÓDIGO POR CADA ELEMENTO DE UN ARREGLO. Se parece mucho al for y tiene algo del forEach

for(let tech of tecnologias){
    console.log(tech)
}
// for(let i = 0; i < tecnologias.length; i++) { 
//     console.log(tecnologias[i]) 
// }

//tecnologias.forEach(function(){
//     console.log('Desde la función')
// })