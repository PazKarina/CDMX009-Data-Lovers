import data from './data/rickandmorty/rickandmorty.js';

//funcion para encontrar desde la data a los 5 personajes principales
export const principalCharacters = data.results.filter(char =>
(char.id==1||char.id==2||char.id==3||char.id==4||char.id==5))

export const allCharacters = data.results


//funcion para traer de la data las caracteristicas de todos los persanejes