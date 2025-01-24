const tecnologias = ['HTML','CSS','Javascript','React.js','Node.js']

//variable con la posicion 3 del array

const react = tecnologias[3]
console.log(react)

// El destructuring de arrays los va a ir extrayendo en base a la posición
const [html, estilos, script] = tecnologias
console.log(html) //--> HTML
console.log(estilos) // --> CSS
//si quisiéramos sacar el valor de una única posición, por ej 'React.js' usando esta sintaxis de destructuring hemos de usar comas dejando los espacios
//(contar como en las tablas de colaboradores!!!! :D)

const [ , , , reactjs] = tecnologias
console.log(reactjs)


