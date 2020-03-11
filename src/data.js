import data from './data/rickandmorty/rickandmorty.js';

//funcion para encontrar desde la data a los 5 personajes principales
export const principalCharacters = data.results.filter(char =>
(char.id==1||char.id==2||char.id==3||char.id==4||char.id==5))


export const allCharacters = data.results





// export const principalCharacters = data.results.filter(char => {

//     if (char.id === e.target.id){
//             console.log(char)
//         return char.id
//     }
// })

