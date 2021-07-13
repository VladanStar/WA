import {addMovie, addProgram, addMovieToProgram } from './js/actions/controller'

let createMovieBtn = document.querySelector("#create-movie");
let createProgramBtn = document.querySelector("#create-program");
let addMovieToProgramBtn = document.querySelector("#add-movie");
let inputDateEle = document.querySelector("#date");

createMovieBtn.addEventListener('click', function(e) {

    let titleValue = inputTitleEle.value;
    let lengthValue = inputLengthEle.value;
    let genreValue = selectGenreEle.value;

    addMovie(titleValue, lengthValue, genreValue);
});

createProgramBtn.addEventListener("click", function(e) {
    addProgram(inputDateEle.value);
});
addMovieToProgramBtn.addEventListener("click", addMovieToProgram);
