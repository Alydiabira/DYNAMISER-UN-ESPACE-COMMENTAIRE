// Créer un nouveau éléments div
var newDiv = document.createAttribute('div');

//Créer un text
var newContent = document.createTextNode('text');

//Intégter le texte newContent
newDiv.appendChild(newContent);

//
var currentDiv = document.getElementById( 'div' );
document.body.insertBefore(newDiv); 

var b = document.querySelector("button");