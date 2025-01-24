// Eventos del DOM - Inputs
const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log('escribiendo')
    console.log(e.target)
    console.log(e.target.value)
    console.log(e.target.value.length)
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)
function functionPassword() {
    inputPassword.type = "text"
    setTimeout(() => {
        inputPassword.type = "password"
    }, 300)
}