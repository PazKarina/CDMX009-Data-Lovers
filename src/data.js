import data from './data/rickandmorty/rickandmorty.js';

//funcion para encontrar desde la data a los 5 personajes principales
export const principalCharacters = data.results.filter(char =>
(char.id==1||char.id==2||char.id==3||char.id==4||char.id==5))
console.log(principalCharacters)

export const allCharacters = data.results
console.log(allCharacters)

// const getId(i) =>{
//     let char = 
// }



export const ricks = data.results.filter(value => (value.name.includes("Rick")))
console.log(ricks)

export const mortys = data.results.filter(value => (value.name.includes("Morty")))
