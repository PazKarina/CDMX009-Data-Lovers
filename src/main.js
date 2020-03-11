import {principalCharacters, allCharacters} from './data.js';
document.querySelector(".screenCharacters").style.display="none";
const a = principalCharacters
function btnRick (e){
const b = e.target.id
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(a[b].name)}</li><br>
    <li>Status: ${(a[b].status)}</li><br>
    <li>Especie: ${(a[b].species)}</li><br>
    <li>Genero: ${(a[b].gender)}</li>
    <li>Origin: ${(a[b].origin.name)}</li>`
};
const btns = document.querySelectorAll('.btn')
btns.forEach(el=>{el.addEventListener("click", btnRick)})






//habilitar Pantallas
function screenCharacters () {
    let screen = document.querySelector(".principalScreen")
    screen.style = "display:none";
    document.querySelector(".screenCharacters").style.display="block";
}
document.querySelector(".btnAllCharacters").addEventListener("click", screenCharacters)

function screenRicks () {

}

    //mostrar sólo imagen y nombre de los personajes
const showCharacters = ()=> {
 allCharacters.forEach((item, i) => {
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

    container.id = i

    document.querySelector(".appendchild").appendChild(node);
 })
}
document.querySelector(".btnAllCharacters"). addEventListener("click", showCharacters)