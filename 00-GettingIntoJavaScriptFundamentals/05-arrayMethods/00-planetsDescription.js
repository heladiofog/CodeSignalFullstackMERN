// Creating an array of planets and their distance from the Sun in millions of kilometers
const planets = [
  { name: "Mercury", distance: 57.9 },
  { name: "Venus", distance: 108.2 },
  { name: "Earth", distance: 149.6 },
  { name: "Mars", distance: 227.9 },
  { name: "Jupiter", distance: 778.3 },
];

// Use map() to create an array of strings that describe each planet's distance
const descriptions = planets.map((planet) => {
  return planet.name + " is " + planet.distance + " million km from the Sun!";
});

console.log(descriptions);
