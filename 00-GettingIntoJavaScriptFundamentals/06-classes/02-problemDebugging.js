/**
 * Galactic Pioneer, we're preparing a video game release announcement and need 
 * to ensure that our method for displaying information accurately presents the 
 * game's title and genre. There appears to be an issue with the VideoGame class
 *  code that is affecting our promotional materials. Can you identify and 
 * rectify the problem that's causing the discrepancy?
 */

class VideoGame {
  constructor(title, genre) {
    this.title = title;
    this.genre = 0;
  }

  displayInfo(title, genre) {
    console.log(`${title} is a ${genre} game.`);
  }
}

let myGame = new VideoGame("Super Mario", "Platformer");
myGame.displayInfo(); // Should output: "Super Mario is a Platformer game."

// Solution
/*
class VideoGame {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }

    displayInfo() {  
        console.log(`${this.title} is a ${this.genre} game.`);
    }
}

let myGame = new VideoGame("Super Mario", "Platformer");
myGame.displayInfo(); // Should output: "Super Mario is a Platformer game."
*/