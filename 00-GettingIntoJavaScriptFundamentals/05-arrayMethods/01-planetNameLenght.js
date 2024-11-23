const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
const longNamedPlanets = planets.filter((planet) => planet.length > 5);

console.log(longNamedPlanets); // should print planets with names longer than 5 characters
