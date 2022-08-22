const Port = require("../src/port.js");

describe("port", () => {
  it("verify if the object creation is created", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

});
