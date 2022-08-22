const Ship = require("../src/ship.js");

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
});