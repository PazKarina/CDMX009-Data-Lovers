import { principalCharacters, allCharacters, allRicks, allMortys } from './data.js'
console.log(principalCharacters)
console.log(allCharacters)
console.log(allRicks)
console.log(allMortys)

// probando ciclo para personajes principales

const a = principalCharacters
function btnPrincipal(e) {
    const b = e.target.id
    document.querySelector("#idName").innerHTML =
        `<li>Nombre: ${(a[b].name)}</li><br>
    <li>Status: ${(a[b].status)}</li><br>
    <li>Especie: ${(a[b].species)}</li><br>
    <li>Genero: ${(a[b].gender)}</li><br>
    <li>Origin: ${(a[b].origin.name)}</li>`
};
const btns = document.querySelectorAll('.btn')
btns.forEach(el => { el.addEventListener("click", btnPrincipal) })



//aqui empieza la seccion de todos los personajes
      //oculta pantalla principal y muestra la segunda seccion
function screenCharacters () {
    let screen = document.querySelector(".principalScreen")
    screen.style = "display:none";
    document.querySelector(".screenCharacters").style.display="block";
}
document.querySelector(".btnAllCharacters").addEventListener("click", screenCharacters)

  
    //mostrar sólo imagen y nombre de los personajes
const showCharacters = () => {
    allCharacters.forEach((item) => {
        let boxCharacters = item.image;
        let nameCharacter = item.name;
        let name = document.createElement('p');
        let img = document.createElement('img');
        let btn = document.createElement('button');
        btn.className = ('btn')
        let node = btn;
        btn.appendChild(name);
        btn.appendChild(img);
        name.innerHTML = nameCharacter;
        img.src = boxCharacters;
        name.style.fontFamily = "kindergarten";
        name.style.fontSize = "20px";
        name.style.color = "white";
        btn.style.border = "none";
        btn.style.background = "0,0,0,0.0"
        btn.style.width = "20em";
        btn.style.height = "20em";
        img.style.width = "14em";
        img.style.height = "14em";

        document.querySelector(".screenCharacters").appendChild(node);
    })
    EventTarget
}
document.querySelector(".btnAllCharacters").addEventListener("click", showCharacters)
