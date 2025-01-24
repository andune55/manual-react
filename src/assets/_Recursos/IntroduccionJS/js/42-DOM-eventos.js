// Eventos del DOM - Clicks
    const heading = document.querySelector('.heading')
    //vimos como podemos cambiar por ejemplo el contenido del tag por un nuevo título
    heading.textContent = 'nuevo título'

    //quiero expresar que alguien presione en el titulo para modificarle. Una vez que seleccionas un elemento tienes acceso a registrarle un evento con el evento addEventListener. Veamos el siguiente link https://developer.mozilla.org/es/docs/Web/API/Element, en la parte derecha podemos ver los eventos. Los hay de todo tipo, del mouse, de animaciones, eventos cuando copias algo con el teclado,

    heading.addEventListener('click', () => {
        heading.textContent = 'Al dar click'
    })
    heading.addEventListener('dblclick', () => {
        heading.textContent = 'Al dar doble click'
    })
    heading.addEventListener('mouseenter', () => {
        heading.textContent = 'Al entrar'
    })
    heading.addEventListener('mouseleave', () => {
        heading.textContent = 'Al salir'
    })

    const enlaces = document.querySelectorAll('.navegacion a')
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            console.log(e.target)
            console.log('diste click en un enlace')
            e.target.textContent="diste click"            
        })
    })