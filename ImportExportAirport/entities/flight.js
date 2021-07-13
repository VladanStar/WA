const Passenger = require('./passenger');

function Flight(relation, date, passengers){
    if (!relation || !date) {
        throw new Error('Field name and surname are required');
    };
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassenger = function(passanger){
        if (!passanger || !(passanger instanceof Passenger)){
            throw new Error('Invalid passenger data');
        };
        this.listOfPassengers.push(passanger);
    }
    this.getData = function(){
        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();
        //let rezult = '\t' + day + '.' + month + '.' + year + ',' + ' ' + this.relation + '\n' + '\t\t';
        let rezult = `${day}.${month}.${year}, ${this.relation}
        `;
        this.listOfPassengers.forEach(function(passanger){
           // rezult += '\t\t' + passanger.getData() + '\n';
           rezult += `\t\t${passanger.getData()}
        `;
        })
        return rezult;
    }
}

module.exports = Flight