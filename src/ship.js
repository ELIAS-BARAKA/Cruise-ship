(function exportShip() {

  function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  Ship.prototype = {
    setSail() {
      const itinerary = this.itinerary;
      const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

      if (currentPortIndex === itinerary.ports.length - 1) {
        throw new Error("End of itinerary reached");
      }
      this.previousPort = this.currentPort;
      this.currentPort.removeShip(this);
      this.currentPort = null;
    },
    dock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

      this.currentPort = itinerary.ports[previousPortIndex + 1];

      this.currentPort.addShip(this);
  
      this.renderMessage(`Docking at ${this.currentPort.name}`);
    },
    renderMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = message;

      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 1500);
    },
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();
