import {principalCharacters, allCharacters, ricks, mortys} from './data.js';


//AllCharacters
function screenCharacters () {
    let screen = document.querySelector(".principalScreen");
    screen.style = "display:none";
    document.querySelector("#screenCharacters").style.display="block";
}
document.querySelector("#screenCharacters").style.display="none";
document.querySelector(".btnAllCharacters").addEventListener("click", screenCharacters)

//Ricks
function screenMultiRicks (){
    let screen = document.querySelector(".principalScreen");
    screen.style = "display:none";
    document.querySelector("#screenRicks").style.display = "block";
}
document.querySelector(".btnRicks").addEventListener("click",screenMultiRicks)
document.querySelector("#screenRicks").style.display = "none";

//Mortys
function screenMultiMortys (){
    let screen = document.querySelector(".principalScreen");
    screen.style = "display:none";
    document.querySelector("#screenMortys").style.display = "block";
}
document.querySelector(".btnMortys").addEventListener("click",screenMultiMortys)
document.querySelector("#screenMortys").style.display = "none";

//close
function close(){
    let close = document.querySelector("#screenCharacters");
    close.style = "display:none"
    document.querySelector(".principalScreen").style.display = "block";
}
document.querySelector("#close1").addEventListener("click", close)

function close2(){
    let close = document.querySelector("#screenRicks");
    close.style = "display:none"
    document.querySelector(".principalScreen").style.display = "block";
}
document.querySelector("#close2").addEventListener("click", close2)

function close3(){
    let close = document.querySelector("#screenMortys");
    close.style = "display:none"
    document.querySelector(".principalScreen").style.display = "block";
}
document.querySelector("#close3").addEventListener("click", close3)

//Intergalactic ID

function idCard (e){
    document.querySelector("#idName").innerHTML = 
    `<li>Nombre: ${(principalCharacters[e.target.id].name)}</li><br>
    <li>Status: ${(principalCharacters[e.target.id].status)}</li><br>
    <li>Especie: ${(principalCharacters[e.target.id].species)}</li><br>
    <li>Genero: ${(principalCharacters[e.target.id].gender)}</li><br>
    <li>Origen: ${(principalCharacters[e.target.id].origin.name)}</li>`
};
const btns = document.querySelectorAll('.principalButton')
btns.forEach(el=>{el.addEventListener("click",idCard)})
 

//mostrar todos los personajes
const showCharacters = ()=> {
 allCharacters.forEach((item, i) => {
    let boxCharacters=item.image; 
    let nameCharacter= item.name;
    let name= document.createElement('p');
    let img= document.createElement('img');
    let btn= document.createElement('button');
    let node=btn;
    btn.appendChild(name);
    btn.appendChild(img);
    name.innerHTML = nameCharacter;
    img.src=boxCharacters;
    name.style.fontFamily = "kindergarten";
    name.style.fontSize = "20px";
    name.style.color = "white";
    btn.style.border ="none";
    btn.style.background="0,0,0,0.0"
    btn.style.width= "20em";
    btn.style.height= "20em";
    img.style.width = "14em";
    img.style.height = "14em";

    allCharacters.id = i
    btn.className= "allbtn"
    document.querySelector("#appendchild1").appendChild(node);
 })
}
document.querySelector(".btnAllCharacters").addEventListener("click", showCharacters)

// mostrar todos los Ricks
const showRicks = ()=> {
    ricks.forEach((item) => {
       let boxCharacters=item.image; 
       let nameCharacter= item.name;
       let name= document.createElement('p');
       let img= document.createElement('img');
       let btn= document.createElement('button');
       let node=btn;
       btn.appendChild(name);
       btn.appendChild(img);
       name.innerHTML = nameCharacter;
       img.src=boxCharacters;
       name.style.fontFamily = "kindergarten";
       name.style.fontSize = "20px";
       name.style.color = "white";
       btn.style.border ="none";
       btn.style.background="0,0,0,0.0"
       btn.style.width= "20em";
       btn.style.height= "20em";
       img.style.width = "14em";
       img.style.height = "14em";
   
       btn.className= "allbtn"
       document.querySelector("#appendchild2").appendChild(node);
    })
}
document.querySelector(".btnRicks").addEventListener("click", showRicks)

// mostrar todos los Mortys
const showMortys = ()=> {
    mortys.forEach((item) => {
       let boxCharacters=item.image; 
       let nameCharacter= item.name;
       let name= document.createElement('p');
       let img= document.createElement('img');
       let btn= document.createElement('button');
       let node=btn;
       btn.appendChild(name);
       btn.appendChild(img);
       name.innerHTML = nameCharacter;
       img.src=boxCharacters;
       name.style.fontFamily = "kindergarten";
       name.style.fontSize = "20px";
       name.style.color = "white";
       btn.style.border ="none";
       btn.style.background="0,0,0,0.0"
       btn.style.width= "20em";
       btn.style.height= "20em";
       img.style.width = "14em";
       img.style.height = "14em";
   
       btn.className= "allbtn"
       document.querySelector("#appendchild3").appendChild(node);
    })
}
document.querySelector(".btnMortys").addEventListener("click", showMortys)
