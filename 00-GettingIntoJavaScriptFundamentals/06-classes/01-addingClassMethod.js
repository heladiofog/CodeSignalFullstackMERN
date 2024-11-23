/**
 * Update the Console class's showGames method in the starter code to log the 
 * list of games that are available on the console.
 */
class Game {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }
}

class Console {
  constructor(name, releaseYear) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.games = [];
  }
  addGame(game) {
    this.games.push(game);
  }
  showGames() {
    // Display the list of games on the console
    console.log("List of games coming soon!");
    // solution
    this.games.forEach(({title}) => console.log(`${title} is in the console.`));
  }
}

let myConsole = new Console("GameStation", 2020);
myConsole.addGame(new Game("Space Adventure", "Action"));
myConsole.showGames();
