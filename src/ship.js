function Ship(name, startingPort) {
    this.name = name;
    this.startingPort = startingPort;
}

Ship.prototype = {
    setSail(){
        this.startingPort = false;
    },
}


module.exports = Ship;