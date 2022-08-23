const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");



describe ("ship", () => {
    describe ("with ports and an itinerary", () => {
        it("can be instantiate", () => {
                const dover = new Port('Dover');
                const itinerary = new Itinerary([dover]);
                const ship = new Ship(itinerary);
                expect(ship).toBeInstanceOf(Object);
        });
        it("verify if the ship has a starting port", () => {
                const dover = new Port('Dover');
                const itinerary = new Itinerary([dover]);
                const ship = new Ship(itinerary);
                expect(ship.currentPort).toBe(dover);
        });    
        it("can set sail", () => {
                const port2 = new Port("Dover2");
                const dover = new Port('Dover');
                const itinerary = new Itinerary([dover, port2]);
                const ship = new Ship(itinerary);

                ship.setSail();

                expect(ship.currentPort).toBeFalsy();
                expect(dover.ships).not.toContain(ship);
        });
        it("can dock at a different port", () => {
            const calais = new Port("Calais");
            const dover = new Port("Dover");
            const itinerary = new Itinerary([dover, calais])
            const ship = new Ship(itinerary); 

            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(calais);
            expect(calais.ships).toContain(ship);
        });
        it("can't sail further than its itinerary", () => {
            const calais = new Port("Calais");
            const dover = new Port("Dover");        
            const itinerary = new Itinerary([dover, calais]);
            const ship = new Ship(itinerary);

            ship.setSail();
            ship.dock();

            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
        it('gets added to port on instantiation', () => {
            const dover = new Port("Dover");
            const itinerary = new Itinerary([dover]);
            const ship = new Ship(itinerary);

            expect(dover.ships).toContain(ship);
        });
    });
    
    
    

});