/**
 * Renvoi un élément HTML représentant une alert 
 * @param {*} message 
 */
export function alertElemnt( message) { 
    const el = document.querySelector('#alert').content.cloneNode(true)
    el.querySelector('.js-text').innerHTML = message
}