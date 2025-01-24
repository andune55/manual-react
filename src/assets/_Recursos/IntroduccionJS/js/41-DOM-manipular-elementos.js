//Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')
//console.log(heading.textContent)

heading.textContent = 'Un nuevo Heading'
// heading.id = 'Un nuevo id'
// heading.removeAttribute('id')
// heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre')

//normalmente los atributos de los tags HTML se llaman igual los atributos de JS
inputNombre.value = 'Un nuevo valor'
//aunque no siempre, por ejemplo las clases o los atrubutos personalizados data-nombre="input"
console.log(inputNombre.classList)
inputNombre.dataset.nombre = "input"

//Veamos como manipular colecciones. hemos de pasarle la posición o iterar sobre los elementos
console.log(enlaces)
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')
