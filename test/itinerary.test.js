const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");

describe("Itinerary", () => {
    let dover;
    let calais;
    let itinerary;
    beforeEach(() => {
        dover = new Port('dover');
        calais = new Port("calais");
    })
    it("verify if the object was created", () => {
        expect(new Itinerary("")).toBeInstanceOf(Object);
    });
    it("verfify if itinerary can have ports", () => {
        itinerary = new Itinerary([dover]);
        expect(itinerary.ports).toEqual([dover]);
    })
    it("create an itinerary and verifies it", () => {
        itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
    });
});