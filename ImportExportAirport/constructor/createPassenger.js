 const Person = require('../entities/person');
 const Seat = require('../entities/seat');
const Passenger = require('../entities/passenger');

function createPassenger(firstName, lastName, seatNumber, category) {
    let person = new Person(firstName, lastName);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
}
module.exports.createPassenger = createPassenger;