/**
 * Stellar Navigator, it's time to put your skills to the test! Create a
 * GameConsole class with a constructor that sets the brand and model, followed
 * by a describe method that logs a message. Ensure that the method reveals the
 * brand and model of the game console.
 */
// TODO: Create a class named 'GameConsole'
// TODO: Add a constructor that takes 'brand' and 'model' as parameters
// TODO: Create a method named 'describe' that outputs the brand and model in a console log
let myConsole = new GameConsole("YourBrand", "YourModel");
myConsole.describe(); // Should output: This console is a YourBrand YourModel.

// Solution
/**
// TODO: Create a class named 'GameConsole'
class GameConsole {
// TODO: Add a constructor that takes 'brand' and 'model' as parameters
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
// TODO: Create a method named 'describe' that outputs the brand and model in a console log
  describe() {
    console.log(`This console is a ${this.brand} ${this.model}.`);
  }
}
let myConsole = new GameConsole('iSony', 'PlayUniverse 1');
myConsole.describe(); // Should output: This console is a YourBrand YourModel.
 */
