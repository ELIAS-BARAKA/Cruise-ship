const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

describe ("ship", () => {
    it("verify if the object creation is created", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("verify if the ship has a starting port", () => {
        const ship = new Ship("", "Dover");
        expect(ship.startingPort).toBe("Dover");
    });
    it("can the ship set sail?", () => {
        const ship = new Ship("The-Ship", "Dover");
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
    it("test if the ship can be docked", () => {
        const ship = new Ship("titanic", "Dover");
        const port = new Port("venise");
        ship.dock();
        expect(ship.currentPort).toBeInstanceOf(Object);
    });
});