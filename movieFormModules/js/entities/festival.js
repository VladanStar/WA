import Program from "./js/entities/program"
import Movie from "./js/entities/movie"

 export class Festival {
    constructor() {  
    this.listOfPrograms = [];
    this.listOfMovies = [];
}
    addProgram(program) {
        if (!program || !(program instanceof Program)) {
            console.log("Invalid input");
            return false;
        }
        return this.listOfPrograms.push(program) - 1;
}
    addMovie(movie) {
        if (!movie || !(movie instanceof Movie)) {
            console.log("Invalid input");
            return false;
        }
        return this.listOfMovies.push(movie) - 1;
    }
}
module.exports =  {Festival}