
function Seat(number, category = 'e') {
    
    number = number || Math.floor(Math.random() * 90 + 10);
    if (!['b', 'e'].includes(category)){
        throw new Error('Invalid category input');
    };
    this.number = number;
    this.category = category;
    this.getData = function(){
        return `${this.number}  ${this.category.toUpperCase()}`;
    }
}

module.exports = Seat;