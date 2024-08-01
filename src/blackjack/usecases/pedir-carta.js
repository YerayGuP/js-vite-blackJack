
/**
 * Esta funcion recoge un array de cartas y devuelve la ultima carta del array
 * @param {Array<string>} deck  Array de cartas 
 * @returns {string} Devuelve una carta del deck
 */
export const pedirCarta = (deck) => {

    validarPedirCarta(deck);
    const carta = deck.pop();
    return carta;
}

/**
 * Esta función me permite validar si el deck es valido para pedir una carta
 * @param {Array<string>} deck  Array de cartas
 * @returns {boolean} Devuelve true si el deck es valido
 */
function validarPedirCarta(deck) {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return true;
}