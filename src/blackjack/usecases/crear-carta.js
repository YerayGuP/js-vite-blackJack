/**
 * Esta función crea una carta en base a un string
 * @param {string} carta 
 * @returns {HTMLImageElement} imgCarta 
 */
export function crearCarta( carta ) {
    validarCrearCarta( carta );
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}

/**
 * Esta función valida los argumentos de la función crearCarta
 * @param {string} carta 
 * @returns {boolean} retorna true si los argumentos existen
 */
function validarCrearCarta( carta ) {
    if ( !carta ) {
        throw new Error('carta es requerido');
    }

    return true;
}