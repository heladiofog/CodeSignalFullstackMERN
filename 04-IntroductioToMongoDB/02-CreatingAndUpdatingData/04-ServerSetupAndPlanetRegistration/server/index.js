const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');

// Create a new express app
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('connected');
    // initialize DB
    await initialDBSetup();
  });

// Define the schema for planets
// TODO: Define a mongoose schema for planets with properties: name(string), size(string), mass(number), distanceFromSun(string)

// TODO: Compile the planet schema into a model

// Set up the POST route for adding a new planet
// TODO: Create an asynchronous POST route handler for '/api/add-planet' that will add a new planet to the database and return the newly created object. Take the name, size, mass, and distance from the request body.

// Start the Express server
// TODO: Define the server port (use environment variable with default), and have the app listen on that port

// Solution:
/*
// Define the schema for planets
// TODO: Define a mongoose schema for planets with properties: name(string), size(string), mass(number), distanceFromSun(string)
const planetSchema = new mongoose.Schema(
  {
    name: String,
    size: String,
    mass: Number,
    distanceFromSun: String,
  },
  { versionKey: false }
);

// TODO: Compile the planet schema into a model
const Planet = mongoose.model('Planet', planetSchema);

// Set up the POST route for adding a new planet
// TODO: Create an asynchronous POST route handler for '/api/add-planet' that will add a new planet to the database and return the newly created object. Take the name, size, mass, and distance from the request body.
app.post('/api/add-planet', async (req, res) => {
  try {
    // Save the new planet and return 200 status code with the newly created object
    const newPlanet = new Planet({
      name: req.body.name,
      size: req.body.size,
      mass: req.body.mass,
      distanceFromSun: req.body.distanceFromSun,
    });
    await newPlanet.save();
    res.status(200).json(newPlanet);
  } catch (error) {
    // Return 500 status code with relevant error message in case of failure
    console.log(`Error saving a new planet: ${error.message}`);
    res.status(500).json({ message: 'Error saving a new planet.' });
  }
});

// Start the Express server
// TODO: Define the server port (use environment variable with default), and have the app listen on that port
const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/