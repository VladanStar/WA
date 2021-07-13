const Flight = require('../entities/flight')

function createFlight(relation, date) {
    return new Flight(relation, date);
}

module.exports.createFlight = createFlight