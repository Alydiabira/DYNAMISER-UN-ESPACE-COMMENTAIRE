/**
 * Renvoi un élément HTML représentant une alert 
 * @param {*} message 
 * @param {HTMLElement} 
 */
export function alertElemnt( message) { 
    const el = document.querySelector('#alert').content.cloneNode(true)
    el.querySelector('.js-text').innerHTML = message
    el.querySelector('button').addEvenListener('click', e => {
        e.preventDefault()
        el.remove()
    }) = message
return el

}