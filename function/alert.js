/**
 * Renvoi un élément HTML représentant une alert 
 * @param {*} message 
 * @param {HTMLElement} 
 */
export function alertElement( message) { 
    /** @type {HTMLElement} */
    const el = document.querySelector('#alert').content.firstElement.cloneNode(true)
    el.querySelector('.js-text').innerHTML = message
    el.querySelector('button').addEvenListener('click', e => {
        e.preventDefault()
        console.log(el)
        el.remove()
        el.dispatchEvent(new CustomEvent('close'))
    }) 
    return el

}