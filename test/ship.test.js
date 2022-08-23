const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");


describe ("ship", () => {
    xit("verify if the object creation is created", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("verify if the ship has a starting port", () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });
    it("can the ship set sail?", () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
    });
    it("test if the ship can be docked", () => {
        const port = new Port("venise");
        const ship = new Ship(port); 
        ship.dock();
        expect(ship.currentPort).toBeInstanceOf(Object);
    });
});