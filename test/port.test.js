const Port = require("../src/port.js");

describe("port", () => {
  let port;
  let titanic;
  let queenMary;

  beforeEach(() =>{
    port = new Port("Dover");
    titanic = {};
    queenMary = {};
  })
  it("verify if the object creation", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("can add ship", () => {
    port.addShip(titanic);
    expect(port.ships).toContain(titanic);
  });
  it("can remove a chip", () => {
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
