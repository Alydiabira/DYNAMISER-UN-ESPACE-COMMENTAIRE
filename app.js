// // Créer un nouveau éléments div
// var newDiv = document.createAttribute("div");

// //Créer un text
// var newContent = document.createTextNode('text');

// //Intégter le texte newContent au sein de la balise newDiv
// newDiv.appendChild(newContent);

// // Récupérer  la balise qui a pour id div1
// var currentDiv = document.getElementById( 'div' );

// // newDiv sera placé dans l'HTML avant la balise div1
// document.body.insertBefore(newDiv); 

// // Récuperer mon bontton
// var b = document.querySelector("button");

// // créer un attribut avec type name et comme valeur helloButton
// // <button name="helloButton
// b.setAttribute("name", "helloButton");

// // créer un attribut avec type disabled et comme valeur ""
// // <button name="helloButton
// b.setAttribute("disabled", "");


// // Récupére mon élément div ayant pour id div_02
// const element = document.getElementById('div-02');

// //
// element.remove();

// function addListValue() {
//     let input = document.getElementById("listValue");
//     let list = document.getElementById("list");
    
//     let newItemList = document.createElement("li");
    
//     let newItemListContent = document.createTextNode(input.value);
    
//     nexItemList.appendChild(nexItemListContent);
    
//     list.appendChild(newItemList);
// }

import { alertElement } from "./function/alert.js"
import { fetchJSON } from "./function/api.js"


class InfinitePagination {

    /** @type {string} */
    #endpoint
     /** @type {HTMLElement} */
    #template
     /** @type {HTMLElement} */
    #target
     /** @type {object} */
    #loader
     /** @type {object} */
    #elements
     /** @type {IntersectionObserver} */
    #observer
         /** @type {boolean} */
    #loading = false
      /** @type {number} */
    #page = 1

/** 
* @param {HTMLElement} element
*/
    constructor (element) {
        this.#loader = element
        this.#endpoint = element.dataset.endpoint
        this.#template = document.querySelector(element.dataset.template)
        this.#target = document.querySelector(element.dataset.target)
        this.#elements  = JSON.parse(element.dataset.elements)
        this.#observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    this.#loadMore()
                } 
            }
        })
        this.#observer.observe(element)
    }
    async #loadMore() {
        if (this.#loading) {
            return
        }
        try {
        this.#loading = true
        const url = new URL(this.#endpoint)
        url.searchParams.set('_page', this.#page)
        const comments = await fetchJSON(url.toString())
        if (comments.length === 0) {
            this.#observer.disconnect()
            this.#loader.remove()
            return
        }
        for (const comment of comments) {
            const commentElement = this.#template.content.cloneNode(true)
            for (const [key, selector] of Object.entries(this.this.#elements)) {
                commentElement.querySelector(selector).innerText = comment[key]
                console.log({key, selector})
        }
        this.#target.append(commentElement)
    }
    this.#page++
    this.#loading = false

    } catch (e) {
        this.#target.append(
            alertElement('Impossible de charger les contenus')
        )

        this.#observer.disconnect()
        this.#loader.remove()
    }
        
    }
}
document
.querySelectorAll('.js-infinite-pagination')
.forEach(el => InfinitePagination.add(el)) //