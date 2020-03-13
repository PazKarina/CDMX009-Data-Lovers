import data from './data/rickandmorty/rickandmorty.js';

//funcion para encontrar desde la data a los 5 personajes principales
export const principalCharacters = data.results.filter(char =>
(char.id==1||char.id==2||char.id==3||char.id==4||char.id==5))
 
//exportar todos los personajes
export const allCharacters = data.results

//exportar todos los Ricsk´s
export const allRicks = data.results.filter(value =>(value.name.includes ("Rick"))) 

//exportar todos los Morty´s
export const allMortys = data.results.filter(value =>(value.name.includes ("Morty"))) 
