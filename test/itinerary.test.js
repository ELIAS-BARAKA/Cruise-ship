const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");

describe("Itinerary", () => {
    it("verify if the object was created", () => {
        expect(new Itinerary("")).toBeInstanceOf(Object);
    });
    it("verfify if itinerary can have ports", () => {
        const dover = new Port("dover");
        const itinerary = new Itinerary([dover]);
        
        expect(itinerary.ports).toEqual([dover]);
    })
    it("create an itinerary and verifies it", () => {
        const dover = new Port("dover");
        const calais = new Port("calais");

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});