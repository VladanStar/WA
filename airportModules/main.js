const Airport = require("./entities/airport");
const controller = require("./actions/controller")

try {
		
    let nikolaTesla = new Airport()
    let belgradeParis = controller.createFlight("Belgrade - Paris", "Oct 25 2017")
    let barcelonaBelgrade = controller.createFlight("Barcelona - Belgrade", "Nov 11 2017")
    let passenger1 = controller.createPassenger("Vladan", "Cupric", 67, "b")
    let passenger2 = controller.createPassenger("Aleksandar", "Pljakic", 62, "b")
    let passenger3 = controller.createPassenger("Daenerys", "Targaryen", 14)
    let passenger4 = controller.createPassenger("Zoran", "Burovic")
    belgradeParis.addPassenger(passenger1)
    belgradeParis.addPassenger(passenger2)
    barcelonaBelgrade.addPassenger(passenger3)
    barcelonaBelgrade.addPassenger(passenger4)
    nikolaTesla.addFlight(belgradeParis)
    nikolaTesla.addFlight(barcelonaBelgrade)
    console.log(nikolaTesla.getData());
} catch (error) {
    console.log(`Error message: ${error.message}`);
}