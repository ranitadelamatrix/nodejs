const read = require('readline-sync')
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza')

const juegoAdivinanza = () =>{
    const numeroRandom = generarNumeroAleatorio()
    let usuario = (0)
    while (parseInt(numeroRandom) !== parseInt(usuario)){
        usuario = read.question("ingrese  numero")
        verificarAdivinanza(numeroRandom, usuario)
    }
}
juegoAdivinanza()