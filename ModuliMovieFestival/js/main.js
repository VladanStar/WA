import addMovieToList from '../constructor/addMovie.js'
import createProgram from '../constructor/createProgram.js'
import addMovieToProgram from '../constructor/addMovieToList.js'
import {createMovieButton, createProgramButtons, addMovieBtnElement } from '../entities/variables.js'

createMovieButton.addEventListener('click', addMovieToList);
createProgramButtons.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click', addMovieToProgram);
