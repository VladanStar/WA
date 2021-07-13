const {createFlight} = require('./constructor/createFlight');
const {createPassenger} = require('./constructor/createPassenger');
const Airport = require('./entities/airport');

let nikolaTesla = new Airport();
let belgradeNewYork = createFlight('Belgrade - New York', 'Oct 25 2017');
let barcelonaBelgrade = createFlight('Barcelona - Belgrade', 'Nov 11 2017');
let passanger1 = createPassenger('Jonh', 'Snow', 1, 'b');
let passanger2 = createPassenger('Cersei', 'Lanister', 2, 'b');
let passanger3 = createPassenger('Daenerys', 'Targaryen', 14, );
let passanger4 = createPassenger('Tyron', 'Lannister',);
belgradeNewYork.addPassenger(passanger1);
belgradeNewYork.addPassenger(passanger2);
barcelonaBelgrade.addPassenger(passanger3);
barcelonaBelgrade.addPassenger(passanger4);
nikolaTesla.addFlight(belgradeNewYork);
nikolaTesla.addFlight(barcelonaBelgrade);
console.log(nikolaTesla.getData());