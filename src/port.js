(function exportPorts() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype = {
    addShip(ship) {
      this.ships.push(ship);
    },

    removeShip(ship) {
      let indexOfShip = this.ships.indexOf(ship);
      this.ships.splice(indexOfShip, 1);
    },
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
