const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
mongoose.connect('mongodb://127.0.0.1/myDB');

const planetSchema = new mongoose.Schema(
  {
    name: String,
    size: String,
    mass: Number,
    distanceFromSun: String,
  },
  { versionKey: false }
);

const Planet = mongoose.model('Planet', planetSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/planets', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send('Name is required');
  }
  // TODO: Create a new planet with the given name req.body.name using Mongoose Model
  try {
    // Save the new planet and return 200 status code with the newly created object
    const newPlanet = new Planet({ name: req.body.name});
    await newPlanet.save();
    res.status(200).json(newPlanet);
  } catch (error) {
    console.log(`Error saving a new pplanet: ${error.message}`);
    res.status(500).json({ message: 'Error saving a new planet.' });
  }
  // Return 500 status code with relevant error message in case of failure
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
