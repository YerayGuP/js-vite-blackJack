import { pedirCarta, valorCarta, crearCarta, mensajeGanador } from "./";

/**
 *  Esta función simula el turno de la computadora 
 * @param {Number} puntosMinimos requiere un número para comparar con los puntos de la computadora
 * @param {HTMLElement} puntosHTML  requiere un elemento HTML para mostrar los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora requiere un elemento HTML para mostrar las cartas de la computadora
 * @param {Array<string>} deck requiere un array de cartas para poder pedir una carta
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck, puntosComputadora ) => {

    validarTurnoComputadora(puntosMinimos, puntosHTML, divCartasComputadora, deck, puntosComputadora);

    do {

        const carta = pedirCarta( deck );
        console.log(puntosComputadora);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        let msg = '';
        if( puntosComputadora === puntosMinimos ) {
            msg = 'Nadie Gana';
            mensajeGanador(msg)
        } else if ( puntosMinimos > 21 ) {
            msg = 'Computadora Gana';
            mensajeGanador(msg)
        } else if( puntosComputadora > 21 ) {
            msg = 'Jugador Gana';
            mensajeGanador(msg)
        } else {
            msg = 'Computadora Gana';
            mensajeGanador(msg)
        }
    }, 100 );
}

/**
 * Valida los argumentos de la función turnoComputadora
 * @param {Number} puntosMinimos valida si existe el argumento puntosMinimos
 * @param {HTMLElement} puntosHTML valida si existe el argumento puntosHTML
 * @param {HTMLElement} divCartasComputadora valida si existe el argumento divCartasComputadora
 * @param {Array<string>} deck valida si existe el argumento deck
 * @returns {Boolean} retorna true si los argumentos existen
 */
function validarTurnoComputadora(puntosMinimos, puntosHTML, divCartasComputadora, deck) {
    if ( !puntosMinimos ) {
        throw new Error('puntosMinimos es requerido');
    }

    if ( !puntosHTML ) {
        throw new Error('puntosHTML es requerido');
    }

    if ( !divCartasComputadora ) {
        throw new Error('divCartasComputadora es requerido');
    }

    if ( !deck ) {
        throw new Error('deck es requerido');
    }

    return true;
} 