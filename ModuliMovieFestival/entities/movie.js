function Movie (title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.upperCase = function() {
        return (this.genre[0] + this.genre[this.genre.length -1]).toUpperCase();
    }
    this.getData = function() {
        return this.title + ', ' + this.length +  ' min, ' + this.upperCase();
    };
}
export default Movie