import {principalCharacters, allCharacters} from './data.js';
console.log(allCharacters)

document.querySelector('#rickPrincipal').addEventListener("click", btnRick)
function btnRick (){
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(principalCharacters[0].name)}</li><br>
    <li>Status: ${(principalCharacters[0].status)}</li><br>
    <li>Especie: ${(principalCharacters[0].species)}</li><br>
    <li>Genero: ${(principalCharacters[0].gender)}</li>`
};

document.querySelector('#mortyPrincipal').addEventListener("click", btnMorty)

function btnMorty (){
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(principalCharacters[1].name)}</li><br>
    <li>Status: ${(principalCharacters[1].status)}</li><br>
    <li>Especie: ${(principalCharacters[1].species)}</li><br>
    <li>Genero: ${(principalCharacters[1].gender)}</li>`
};

document.querySelector('#summerPrincipal').addEventListener("click", btnSummer)

function btnSummer (){
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(principalCharacters[2].name)}</li><br>
    <li>Status: ${(principalCharacters[2].status)}</li><br>
    <li>Especie: ${(principalCharacters[2].species)}</li><br>
    <li>Genero: ${(principalCharacters[2].gender)}</li>`
};

document.querySelector('#jerryPrincipal').addEventListener("click", btnJerry)

function btnJerry (){
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(principalCharacters[4].name)}</li><br>
    <li>Status: ${(principalCharacters[4].status)}</li><br>
    <li>Especie: ${(principalCharacters[4].species)}</li><br>
    <li>Genero: ${(principalCharacters[4].gender)}</li>`
};

document.querySelector('#bethPrincipal').addEventListener("click", btnBeth)

function btnBeth (){
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(principalCharacters[3].name)}</li><br>
    <li>Status: ${(principalCharacters[3].status)}</li><br>
    <li>Especie: ${(principalCharacters[3].species)}</li><br>
    <li>Genero: ${(principalCharacters[3].gender)}</li>`
};

//aqui empieza la seccion de todos los personajes
//oculta pantalla principal y muestra la segunda seccion
function screenCharacters () {
    let screen = document.querySelector(".principalScreen")
    screen.style = "display:none";
    document.querySelector(".screenCharacters").style.display="block";
}
document.querySelector(".btnAllCharacters").addEventListener("click", screenCharacters)

    //mostrar sólo imagen y nombre de los personajes
const showCharacters = ()=> {
 allCharacters.forEach((item) => {
    let boxCharacters=item.image; 
    let nameCharacter= item.name;
    let container= document.createElement('div')
    let name= document.createElement('p');
    let img= document.createElement('img');
    let btn= document.createElement('button');
    let node=btn;
    container.appendChild(name);
    container.appendChild(img);
    btn.appendChild(container);
    name.innerHTML = nameCharacter;
    img.src=boxCharacters;
    name.style.fontFamily = "kindergarten";
    name.style.fontSize = "20px";
    name.style.color = "white";
    btn.style.border ="none";
    btn.style.background="0,0,0,0.0"
    container.style.background = "0,0,0,0.0";
    container.style.width= "20em";
    container.style.height= "20em";
    img.style.width = "14em";
    img.style.height = "14em";
    document.querySelector(".appendchild").appendChild(node);
 })
}
document.querySelector(".btnAllCharacters"). addEventListener("click", showCharacters)