import Movie from "./js/entities/movie"
export class Program {
    constructor (date) { 
    this.date = new Date(date);
    this.listOfMovies = [];
}

getData () {
    let day = this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
    let date = day + "." + month + "." + year;

    if(this.listOfMovies.length < 1) {
        return date + ", To be announced";
    }

    let movies_str = this.listOfMovies.length > 1 ? "movies" : "movie";

    return date + ", " + this.listOfMovies.length + " " + movies_str + ", " + this.lengthOfAllMovies() + "min";
}
lengthOfAllMovies() {
    let total = 0;
    this.listOfMovies.forEach(function(item) {
        total += item.length;
        
    })
    return total;
}
addMovie(movie) {
    if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input");
        return false;
    }
    return this.listOfMovies.push(movie) - 1;
}
}
module.exports = {Program}