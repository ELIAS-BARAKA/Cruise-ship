const Port = require("../src/port.js");

describe("port", () => {
  it("verify if the object creation is created", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("can add ship", () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
  it("can remove a chip", () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
