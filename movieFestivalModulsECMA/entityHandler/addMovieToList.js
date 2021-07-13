
import {selectMovieToAdd, selectProgramList, festival} from '../entities/variables.js';


function addMovieToProgram() {

    var programListElements = document.querySelectorAll('.program-list-ul li');
    var programSelectorOptions = document.querySelectorAll('#program-list option');
  
    var movieValue = selectMovieToAdd.value;
    var programValue = selectProgramList.value;
    
    var movie = festival.listOfCreatedMovies[movieValue];
    var program = festival.listOfCreatedPrograms[programValue]
    
    var oldData = program.getData();
    program.addMovie(movie);
    //updating li list
    programListElements.forEach(function(li){
        if (li.textContent === oldData){
            li.textContent = program.getData()
        }
    });
    //updating selector option lists
    programSelectorOptions.forEach(function (option) {
        if (option.textContent === oldData) {
          option.textContent = program.getData();
        }
      });
        //reseting input
      selectProgramList.value = '-'
      selectMovieToAdd.value = '-'
   
  
}
export default addMovieToProgram