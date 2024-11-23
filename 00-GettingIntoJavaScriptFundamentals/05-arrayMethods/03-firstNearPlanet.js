
// Array of discovered planets and their distance from Earth in light years
const planets = [
    { name: 'Proxima Centauri b', distance: 4.24 },
    { name: 'Kepler-452b', distance: 1400 },
    { name: 'Kepler-22b', distance: 620 },
    { name: 'Gliese 667 Cc', distance: 23.62 }
];

// TODO: Use find to locate the first planet within 30 light years from Earth
const firstClosePlanet = planets.find( ({ distance }) => {
  /* Add code to check if planet is within 30 light years */
    return distance < 30;
});

console.log(firstClosePlanet); // Should print the first planet closer than 30 light years