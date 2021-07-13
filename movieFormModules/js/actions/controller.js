import Festival from './js/entities/festival'
import Movie from "./js/entities/movie"
import Program from "./js/entities/program"


let festival = new Festival();

let createMovieBtn = document.querySelector("#create-movie");
let createProgramBtn = document.querySelector("#create-program");
let addMovieToProgramBtn = document.querySelector("#add-movie");
let inputTitleEle = document.querySelector("#title");
let inputLengthEle = document.querySelector("#length");
let selectGenreEle = document.querySelector("#genre");
let movieErrorEle = document.querySelector("#movie-error");
let movieSelectEle = document.querySelector("#movie-select");
let ulMovieListEle = document.querySelector("#movie-list");
let inputDateEle = document.querySelector("#date");
let programErrorEle = document.querySelector("#program-error");
let ulProgramListEle = document.querySelector("#program-list");
let programSelectEle = document.querySelector("#program-select");
let selectMovieEle = document.querySelector("#movie-select");
let selectProgramEle = document.querySelector("#program-select");
let ulProgramSetlist = document.querySelector("#program-setlist");
let programSetlistError = document.querySelector("#program-setlist-error");


export const addMovie = (title, len, genre) => {

    let errors = [];
    movieErrorEle.innerHTML = "";

    if (!title) {
        errors.push("Title is required.");
    }
    if (!len) {
        errors.push("Length is required.");
    }
    if (!genre) {
        errors.push("Genre is required.");
    }

    if(errors.length) {
        movieErrorEle.innerHTML = errors.join("<br />");
        return false;
    }

    let movie = new Movie(title, len, genre);
    let index = festival.addMovie(movie);

    let movieDataLi = document.createElement("li");
    movieDataLi.innerHTML = movie.getData();
    ulMovieListEle.appendChild(movieDataLi);

    let movieOption = document.createElement("option");
    movieOption.innerHTML = movie.title;
    movieOption.setAttribute("value", index);
    movieSelectEle.appendChild(movieOption);

    inputTitleEle.value = "";
    inputLengthEle.value = "";
    selectGenreEle.value = "";

    return true;
}


export const addProgram = (date) => {

    let errors = [];
    programErrorEle.innerHTML = "";
    if (!date) {
        errors.push("Date required.");
    }
    let dateObj = new Date(date);

    if (dateObj.getTime() < Date.now) {
        errors.push("Invalid date.");
    }
    hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
        return dateObj.getTime() === program.date.getTime();
      });

    if (hasProgramWithSameDate) {
        errors.push("Program for same date already exists");
    }
    if(errors.length) {
        programErrorEle.innerHTML = errors.join("<br />");
        return false;
    }
    
    let program = new Program(date);
    let index = festival.addProgram(program);    

    let li = document.createElement('li');
    li.innerHTML = program.getData();
    ulProgramListEle.appendChild(li);

    let option = document.createElement('option');
    option.setAttribute('value', index);
    option.innerHTML = program.getData();
    programSelectEle.appendChild(option);

    return true;
}
export const addMovieToProgram = () => {
    let programListElements = document.querySelectorAll("#program-list li");
    let programSelectOptions = document.querySelectorAll("#program-select option");
    
    let movieValue = parseInt(selectMovieEle.value);
    let programValue = parseInt(selectProgramEle.value);

    let movie = festival.listOfMovies[movieValue];
    let program = festival.listOfPrograms[programValue];

    programSetlistError.innerHTML = "";

    let errors = [];
    if(!(movie instanceof Movie))
        errors.push("Please select movie from the list.");
    if(!(program instanceof Program))
        errors.push("Please select program from the list.");

    if(errors.length) {
        programSetlistError.innerHTML = errors.join("<br />");
        return false;
    }
    program.addMovie(movie);

    programListElements[programValue].innerHTML = program.getData();
    programSelectOptions[programValue + 1].innerHTML = program.getData();
    return true;
}



