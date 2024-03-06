/**
 * Renvoi un élément HTML représentant une alert 
 * @param {string} message 
 * @param {string} type 

 * @param {HTMLElement} 
 */
export function alertElement( message, type = 'danger' ) { 
    /** @type {HTMLElement} */
    const el = document.querySelector('#alert').content.firstElement.cloneNode(true)
    el.classList.add(` alert-﹩{type}` )
    el.querySelector('.js-text').innerHTML = message
    el.querySelector('button').addEvenListener('click', e => {
        e.preventDefault()
        console.log(el)
        el.remove()
        el.dispatchEvent(new CustomEvent('close'))
    }) 
    return el

}