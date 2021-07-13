export function Program (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.addMovie = function(movie) {
        return this.listOfMovies.push(movie)
    };
    this.numberOfMovies = function() {
        return this.listOfMovies.length;
    };
    
    this.getDateOfFestival = function() {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var completeDate = day + '.' + month + '.' + year;
        return completeDate;
    }
    this.getData = function() {
        var allMovieLength = 0;
        this.listOfMovies.forEach(function (movieElement) {
            allMovieLength += parseInt (movieElement.length);
        });
       
        return this.getDateOfFestival() + ', ' + this.listOfMovies.length + ' movies, program duration ' + allMovieLength;
        
    };
    
}
