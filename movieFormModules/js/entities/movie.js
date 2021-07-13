export class Movie {
    constructor (title, length, genre) {  
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;
    }
    getGenreData() {
        let first = this.genre[0].toUpperCase();
        let last = this.genre[this.genre.length-1].toUpperCase();
    return "" + first + last;
    }
    getData() {
    return this.title + ", " + this.length + "min, " + this.getGenreData();
    }
}
module.exports = {Movie}