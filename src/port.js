function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype = {
  addShip(ship){
    this.ships.push(ship);
  },

  removeShip(ship){
    let indexOfShip = this.ships.indexOf(ship);

    this.ships.splice(indexOfShip, 1);
  },
};

module.exports = Port;
