const tecnologias = ['HTML','CSS','Javascript','React.js','Node.js']

//tecnologias[5] = 'Nest.js'
//tecnologias.push('Nest.js')
console.log(`tecnologias:`)
console.table(tecnologias)

//si vamos al navegador consola y desplegamos el [[prototype]] vemos todos los métodos disponibles para ese array. Cada tipo de datos tiene sus métodos
//¡¡¡¡IMPORTANTE!!!! --> En React siempre hemos de escribir nuestro código con funciones que no modifiquen directamente los valores de lo que se conoce como el "state"
//En esta página https://doesitmutate.xyz/ podemos consultar si los métdos que nos aparecen en [[prototype]] de la consola del navegador  modifican o no nuestro arreglo. 
// Como vemos si buscamos ahí por ejemplo el método "push()", sí modifica (mutates) nuestro arreglo por lo que no se recomienda utilizar push() con react. 

//Alternativa a push
const nuevoArreglo = [...tecnologias, 'Nest.js'] // básicamente esos "..." copian tecnologías y a continuación indicamos optro valor más que es  'Nest.js'
//si lo quisiéramos al inicio --> const nuevoArreglo = ['Nest.js', ...tecnologias]
console.log(`nuevoArreglo: alternativa a push() ${nuevoArreglo}`)


//método shift() elimina el primer elemento de un array
const tecnologias2 = ['HTML','CSS','Javascript','React.js','Node.js']
tecnologias2.shift();
console.table(`tecnologias2: usamos shift para eliminar primer valor ${tecnologias2}`)


//como también modifica nuestro arreglo vemos la alternativa a  shift() --> usamos filter() que no modifica nuestro arreglo
console.log(`tecnologias3: alternativa a shift, uso de filter()`)
const tecnologias3 = tecnologias.filter(function(tech){
    //console.log(tech)
    if(tech!=='HTML'){ 
        return tech 
    }
})
console.table(tecnologias3)

//veamos como modificar un valor sin cambiar el array original, por ejemplo tecnologias[5] = 'Nest.js'. 
// Usamos map() que itera sobre TODOS los elementos de nu8estra colección
console.log(`tecnologias4: uso de map()`)
const tecnologias4 = tecnologias.map(function(tech){
    //console.log(tech)
    //Queremos buscar el valor 'Node.js' para modificarlo por 'Nest.js' pero queremos mantener el resto
    if(tech === 'Node.js'){
        return 'Nest.js'
    } else { // si no ponemos este else, vemos en consola que cuando no se cumple la condición devuelve undefined
        return tech
    }
})
console.table(tecnologias4)

