const Ship = require('../src/ship.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

// eslint-disable-next-line no-undef
describe('with ports and an itinerary', () => {
   let ship;
   let dover;
   let calais;
   let itinerary;

  beforeEach(() => {
    calais = new Port('Calais')
    dover = new Port('Dover')
    itinerary = new Itinerary([dover, calais])
    ship = new Ship(itinerary)
  })

  it('can be instantiate', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('verify if the ship has a starting port', () => {
    expect(ship.currentPort).toBe(dover);
  });
  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
  it("can't sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
  it('gets added to port on instantiation', () => {
    expect(dover.ships).toContain(ship);
  });
});
