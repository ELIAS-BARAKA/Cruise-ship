let Port = require("./port.js");

function Ship(name, startingPort) {
    this.name = name;
    this.startingPort = startingPort;
}

Ship.prototype = {
    setSail(){
        this.startingPort = false;
    },
    dock(){
        this.curremtPort = Port;
    },
}


module.exports = Ship;