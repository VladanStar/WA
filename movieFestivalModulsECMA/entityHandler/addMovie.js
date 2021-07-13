import Movie from '../entities/movie.js';

import {nameOfMovie, lengthOfMovie, generOfMovie, festival, listOfAddedMovies, selectMovieToAdd} from '../entities/variables.js'

function addMovieToList() {
    if (!nameOfMovie.value) {
     
     return alert('Title is empty')
    }
    if (!lengthOfMovie.value) {
    
      return alert('Length of movie is empty')
    };
    if (generOfMovie.value === '-') {
    
      return alert('Gener of movie is empty')
    };
    var movie = new Movie (nameOfMovie.value, lengthOfMovie.value, generOfMovie.value);
    var index = festival.listOfCreatedMovies.push(movie) - 1;
    //creating li and adding to ul
    var movieDataLi = document.createElement('li');
    movieDataLi.textContent = movie.getData();
    listOfAddedMovies.appendChild(movieDataLi);
  
    
    var movieOption = document.createElement('option');
    movieOption.textContent = movie.getData();
    movieOption.setAttribute('value', index);
    selectMovieToAdd.appendChild(movieOption);
    //reseting input
    nameOfMovie.value = '';
    lengthOfMovie.value = '';
    generOfMovie.value = '-';
    
}
export default addMovieToList