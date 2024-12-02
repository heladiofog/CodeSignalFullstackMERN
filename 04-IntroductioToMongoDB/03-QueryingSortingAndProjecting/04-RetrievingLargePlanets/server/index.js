const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');

const app = express();
app.use(cors());
app.use(express.json());
// Solution port definition:
// const port = 5000;

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

// Define the Planet schema with properties: name (string), size (string), mass (number), distanceFromSun (string)

// TODO: Create the Mongoose Model for 'planets' collection using the defined schema

// TODO: Set up endpoint to handle GET request for '/api/planets'
// It should fetch and respond with all large planets sorted by distance from the Sun

// TODO: Have the express app listen on port 5000

// Solution:
const port = 5000;
// Define the Planet schema with properties: name (string), size (string), mass (number), distanceFromSun (string)
const planetSchema = new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String,
});
// TODO: Create the Mongoose Model for 'planets' collection using the defined schema
const Planet = mongoose.model('planets', planetSchema);

// TODO: Set up endpoint to handle GET request for '/api/planets'
// It should fetch and respond with all large planets sorted by distance from the Sun
app.get('/api/planets', async (req, res) => {
  try {
    const planets = await Planet.find()
      .sort({ distanceFromSun: 1 })
      .select('name size mass -_id');
    res.json(planets);
  } catch (error) {
    console.log(`Error retrieving planets: ${error.message}`);
    res.status(500).send('Error fetching planets');
  }
});
// TODO: Have the express app listen on port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
