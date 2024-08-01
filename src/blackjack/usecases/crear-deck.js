import _ from 'underscore';

/**
 * Esta funcion crea un deck de cartas
 * @param {Array<string>} deck Ejemplo: array vacio
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Devuelve un deck de cartas mezclado
 */

export const crearDeck = (deck, tiposDeCarta, tiposEspeciales) => {

    // Validar que los parametros sean correctos
    validacionCrearDeck(deck, tiposDeCarta, tiposEspeciales);

    // Añadir cartas numericas: 
    // este for recorre del 2 al 10 y por cada numero recorre los tipos de carta
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    // Añadir cartas especiales:
    // este for recorre los tipos especiales y por cada tipo recorre los tipos de carta
    for (let esp of tiposEspeciales) {
        for (let tipo of tiposDeCarta) {
            deck.push(esp + tipo);
        }
    }

    // Mezclar el deck con la libreria underscore
    return _.shuffle(deck);

}

function validacionCrearDeck(deck, tiposDeCarta, tiposEspeciales) {

    // Si el tipo de carta no esta definido, el tipo no es un array o el array esta vacio
    if (!tiposDeCarta || !Array.isArray(tiposDeCarta) || tiposDeCarta.length === 0) {
        throw new Error('Tipo de carta no definido, no es un array o esta vacio');
    }

    // Si el tipo de carta especial no esta definido, el tipo no es un array o el array esta vacio
    if (!tiposEspeciales || !Array.isArray(tiposEspeciales) || tiposEspeciales.length === 0) {
        throw new Error('Tipo de carta especial no definido, no es un array o esta vacio');
    }

    // Si el deck no esta definido, el tipo no es un array o el array NO esta vacio
    if (!deck || !Array.isArray(deck) || deck.length !== 0) {
        throw new Error('No se ha definido el deck correctamente, no es un array o NO esta vacio');
    }

    return true;

}