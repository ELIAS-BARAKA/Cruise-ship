const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");



describe ("ship", () => {
    it("verify if the object creation", () => {

        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    });
    it("verify if the ship has a starting port", () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });
    it("can the ship set sail?", () => {
        const port = new Port('Dover');
        const port2 = new Port("Dover2");
        const itinerary = new Itinerary([port, port2]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
    });
    it("test if the ship can be docked", () => {
        const dover = new Port("Dover");
        const calais = new Port("Calais");
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary); 

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
    });
    it("can't sail further than its itinerary", () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});