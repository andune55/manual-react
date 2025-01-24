// Eventos del DOM - Submit. Validando formularios y mostrando alertas
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', e => {
        e.preventDefault

        const nombre = document.querySelector('#nombre').value
        const password = document.querySelector('#password').value

        //Prevenir nuevas alertas
        const alertaPrevia = document.querySelector('.alerta')
        /*if (alertaPrevia){
            alertaPrevia.remove();
        }*/
        alertaPrevia?.remove(); //comprobamos si existe con el optional chaining

        const alerta = document.createElement('DIV')
        //alerta.textContent = 'contenido de alerta'
        //alerta.classList = 'clase-1 clase-2' //se pueden añadir así clases de estilo pero se recomienda hacerlo usando .add()
        //alerta.classList.add('clase-1','clase-2','clase-3')
        //añadamos clases de Tailwind css
        alerta.classList.add('alerta','text-white','uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')   

        if(nombre === '' || password === ''){
            alerta.textContent = 'Todos los campos son obligatorios'
            alerta.classList.add('bg-red-500')
        } else {
            alerta.textContent = 'Todo bien, iniciando sesión'
            alerta.classList.add('bg-green-500')
        }
        formulario.appendChild(alerta)
        //para eliminar la alerta pasados 2sg
        setTimeout(() => {
            alerta.remove()
        }, 2000);
        //console.log(alerta)
        // console.log('Enviando formulario')
        // console.log(nombre)
        // console.log(password)    
    })

//js por sí solo no puede consultar una base de datos para iniciar sesión pero lo podemos hacer con nodejs
