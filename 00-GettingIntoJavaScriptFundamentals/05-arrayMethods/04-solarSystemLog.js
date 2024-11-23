// Create an array of planets in the solar system
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

// Create a corresponding array of distances from the Sun in Astronomical Units (AU)
const distances = [0.39, 0.72, 1, 1.52, 5.2];

// TODO: Use forEach to log each planet with its distance from the Sun
// Example output: Mercury is 0.39 AU from the Sun.
planets.forEach((planet, index) => {
  console.log(`${planet} is ${distances[index]} AU from the sun.`);
});


// WRONG solution with map:
// TODO: Use forEach to log each planet with its distance from the Sun
// Example output: Mercury is 0.39 AU from the Sun.
const planetDistances = planets.map((planet, index) => {
    return `${planet} is ${distances[index]} AU from the sun.`;
});

