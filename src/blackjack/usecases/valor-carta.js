/**
 * Obtener el valor de la carta
 * @param {string} carta 
 * @returns {number} Devuelve el valor de la carta
 */

export const valorCarta = ( carta ) => {
    
    validarCarta(carta);

    // extrae del estring carta, todo menos el ultimo caracter
    const valor = carta.substring(0, carta.length - 1);

    //calcula el valor de la carta
    return ( isNaN( valor ) ) ?     // si no es un numero 
            ( valor === 'A' ) ? 11  // si es A devuelve 11
            : 10                    // si es J, Q, K devuelve 10
            : valor * 1;            // si es un numero lo devuelve como numero
}

function validarCarta(carta) {
    // Si la carta no es un string
    if ( !carta || typeof carta !== 'string' || carta === '') {
        throw new Error('La carta no es un string o esta vacia');
    }

    return true;
}