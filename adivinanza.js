
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };
    const verificarAdivinanza = (a, b) => {
    if (a == b) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    }else if (b > a) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    }else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
    };
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };
    
