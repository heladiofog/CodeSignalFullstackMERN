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

const planetSchema = new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String,
});

const Planet = mongoose.model('Planet', planetSchema);

app.get('/api/some-endpoint', async (req, res) => {
  const newPlanet = new Planet({
    name: 'Pluto',
    size: 'Dwarf',
    mass: 0.0022,
    distanceFromSun: '5.9 billion km',
  });

  try {
    await newPlanet.savePlanet();
    // Solution:
    // await newPlanet.save();
    const result = await Planet.find({ name: 'Pluto' });
    res
      .status(200)
      .json({ message: 'Planet added: ' + result.toString(), data: result });
  } catch (error) {
    res.status(500).json({ message: 'Error adding planet' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
