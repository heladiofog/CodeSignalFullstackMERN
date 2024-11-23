/**
 * Galactic Code Master, we have a new mission for you. We have a Console class 
 * with brand and model properties. Your mission is to create a HandheldConsole subclass of our Console class. This subclass should add a batteryLife property 
 * and a getDescription method that outputs a description of the game console, 
 * including brand, model, and battery life. Remember to use your understanding 
 * of inheritance to achieve this. Good luck!
 */
class Console {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class HandheldConsole extends Console {
  // TODO: Add a constructor function that sets the brand, model, and batteryLife properties
  // TODO: Implement the getDescription function that prints out "This is a [brand] [model] with a battery life of [batteryLife] hours."
}

let myConsole = new HandheldConsole("Nintendo", "Switch", 5);
myConsole.getDescription();

// Solution
/**
class Console {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class HandheldConsole extends Console {
    // TODO: Add a constructor function that sets the brand, model, and batteryLife properties
    constructor(brand, model, batteryLife) {
        super(brand, model);
        this.batteryLife = batteryLife;
    }

    // TODO: Implement the getDescription function that prints out "This is a [brand] [model] with a battery life of [batteryLife] hours."
    getDescription() {
        console.log(`This is a ${this.brand} ${this.model} with a battery life of ${this.batteryLife} hours.`);
    }
}

let myConsole = new HandheldConsole('Nintendo', 'Switch', 5);
myConsole.getDescription();
 */