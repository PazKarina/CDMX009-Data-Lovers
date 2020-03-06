import {principalCharacters} from './data.js';

//funcion recorriendo (swicht)
var principalBtn = document.querySelectorAll('btnPrincipal').addEventListener('click', );

switch(principalBtn) {
    case btnRick:
    document.querySelector('#rickPrincipal').addEventListener("click", btnRick);
break;
}

//ésta funcion me presneta los datos del personaje 1 que se encuentra en la posición [0]
function btnRick(){
    document.querySelector("#idName").innerHTML += 
    `<li>Nombre: ${(principalCharacters[0].name)}</li><br>
    <li>Status: ${(principalCharacters[0].status)}</li><br>
    <li>Especie: ${(principalCharacters[0].species)}</li><br>
    <li>Genero: ${(principalCharacters[0].gender)}</li>`
};