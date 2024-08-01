/**
 * Esta función se encarga de mostrar un mensaje de ganador en la pantalla
 * @param {string} message 
 */

export function mensajeGanador(message) {
    const msgGanador = document.createElement('div');
    msgGanador.classList.add('alerta', 'container-fluid');
    msgGanador.innerText = `${message}`
    //pondremos este mensaje al final del body
    document.body.append(msgGanador);
    //borraremos el mensaje despues de 2 segundos
    setTimeout(() => {
        msgGanador.remove();
    }, 10000);
}