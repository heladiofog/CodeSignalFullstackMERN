/*
Great job, Space Voyager! Are you ready to see how a video game object behaves in action? The given code creates a VideoGame class with a method that displays its information. Let's observe what information about our SpeedRacer game gets logged when we run the displayInfo method.
*/
// Define a class to represent a VideoGame
class VideoGame {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }
  displayInfo() {
    console.log(`${this.title} is a ${this.genre} game.`);
  }
}

// Create an instance of the VideoGame class with constants
let racingGame = new VideoGame("SpeedRacer", "racing");
racingGame.displayInfo(); // Outputs: SpeedRacer is a racing game.
