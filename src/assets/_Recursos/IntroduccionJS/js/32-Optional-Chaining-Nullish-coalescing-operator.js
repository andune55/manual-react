//un par de características de las más nuevas que han añadido a js
//Optional chaining (?) 
    // --> permite llamar las propiedades de un objeto o llamar métodos sin tener que verificar si existen o no
    // --> además de ahorrarnos código, se usa mucho en respuestas rest API o repsuestas de BBDD en las uqe mkuchas veces no está todo relleno como esperamos
    const alumno = {
        nombre: 'Juan',
        clase: 'Programación 1',
        aprobado: true,
        examenes: {
            examen1: 9
        }
    }
    console.log(alumno)
    console.log('Despues de ALUMNO')

    //si hiciera esto me daría error porque esa propiedad examen1 no está definida, y el resto de mi js deja de funcionar (no saca lo de 'después de ALUMNO'):
        //console.log(alumno.examenes.examen1)
    
    //para esto utilizamos el optional chaining, para ver si existe la propiedad examenes y entonces que nos imprima examen1 (evitamos usar ifs y más código)
        console.log(alumno.examenes?.examen1)
        console.log('Despues de ALUMNO')


//Nullish coolescing operator (??) --> operador lógico que devuelve el valor del lado dcho cuando el vloar izdo es nulo o undefined
    // por ejemplo se usa mucho cuadno se trabaja con un paginador desde la url. Cuando en la urlpage no tenemos esto: "?page=1"
    const pagina = null ?? 1
    // si tuviéramos este ejemplo "?page=10" 
    // const pagina = 10 ?? 1 --> este nos devolveria 10
    console.log(pagina)