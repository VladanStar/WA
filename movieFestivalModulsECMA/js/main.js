import Festival from './fetival.js';
import addMovieToList from '../entityHandler/addMovie.js'
import createProgram from '../entityHandler/createProgram.js'
import addMovieToProgram from '../entityHandler/addMovieToList.js'
import {createMovieButton, createProgramButtons, addMovieBtnElement } from '../entities/variables.js'
export var festival = new Festival()

createMovieButton.addEventListener('click', addMovieToList);
createProgramButtons.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click', addMovieToProgram);
