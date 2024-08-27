let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;

let listaNumerosSorteado = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;  
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        console.log(numeroSecreto);
            //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}

function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

        console.log(numeroGenerado);
        console.log(listaNumerosSorteado);

    if (listaNumerosSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {

        if (listaNumerosSorteado.includes(numeroGenerado)) {
             return generaNumeroSecreto();
        } else {
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al 100 ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(params) {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

 condicionesIniciales();