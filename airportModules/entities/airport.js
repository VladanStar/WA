const Flight = require ("./flight");

function Airport() {
    this.name = "Nikola Tesla"
    this.listOfFlights = []
    this.addFlight = function(flight) {
        if (!flight || !(flight instanceof Flight)) {
            throw new Error('Invalid flight data')
        }
        this.listOfFlights.push(flight);
    }
    this.getPassengersNumber = function() {
        let count = 0;
        this.listOfFlights.forEach(function(flight) {
            count += flight.listOfPassengers.length
        })
        return count;
    }
    this.getData = function() {
        let result = `Airport: ${this.name}, total passengers: ${this.getPassengersNumber()} 
`
        
        this.listOfFlights.forEach(function(flight) {
            result += flight.getData();
        })
        return result
    }
}


module.exports = Airport;