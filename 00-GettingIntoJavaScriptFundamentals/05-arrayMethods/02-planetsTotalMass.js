var planets = [
  { name: "Earth", mass: 5.97 },
  { name: "Mars", mass: 0.642 },
  { name: "Jupiter", mass: 1898 },
  { name: "Neptune", mass: 102 },
];
var totalMass = planets.reduce((total, planet) => {
  return total + planet.mass;
});
console.log(totalMass); // It’s supposed to print a number (total mass), but it's printing an object
