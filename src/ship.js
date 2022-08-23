const Port = require("./port.js");


function Ship(currentPort) {
    this.previousPort = null;
    this.currentPort = currentPort;
    console.log(this.currentPort);
}

Ship.prototype = {
    setSail(){
        this.previousPort = this.currentPort;
        this.currentPort = null;
    },
    dock(){
        this.currentPort = Port;
    },
}


module.exports = Ship;