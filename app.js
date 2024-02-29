// Créer un nouveau éléments div
var newDiv = document.createAttribute("div");

//Créer un text
var newContent = document.createTextNode('text');

//Intégter le texte newContent au sein de la balise newDiv
newDiv.appendChild(newContent);

// Récupérer  la balise qui a pour id div1
var currentDiv = document.getElementById( 'div' );

// newDiv sera placé dans l'HTML avant la balise div1
document.body.insertBefore(newDiv); 

// Récuperer mon bontton
var b = document.querySelector("button");

// créer un attribut avec type name et comme valeur helloButton
// <button name="helloButton
b.setAttribute("name", "helloButton");

// créer un attribut avec type disabled et comme valeur ""
// <button name="helloButton
b.setAttribute("disabled", "");


// Récupére mon élément div ayant pour id div_02
const element = document.getElementById('div-02');

//
element.remove();

function addListValue() {
    let input = document.getElementById("listValue");
    let list = document.getElementById("list");
    
    let newItemList = document.createElement("li");
    
    let newItemListContent = document.createTextNode(input.value);
    
    nexItemList.appendChild(nexItemListContent);
    
    list.appendChild(newItemList);
}


