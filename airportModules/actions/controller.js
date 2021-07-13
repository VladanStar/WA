const Person = require("../entities/person");
const Seat = require("../entities/seat");

const Flight = require ("../entities/flight");
const Passenger = require ("../entities/passenger");

const createFlight = (relation, date) => {
    return new Flight(relation, date)
}
const createPassenger = (firstName, lastName, seatNumber, category) => {
    let person = new Person(firstName, lastName)
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
}
module.exports = {createFlight, createPassenger};