const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');

// Create a new express app
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const planetSchema = new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String,
});

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

const Planet = mongoose.model('Planet', planetSchema);

async function updatePlanetMass() {
  const planet = await Planet.findOne({ name: 'Jupiter' });
  if (planet) {
    // TODO: Change the 'mass' of the planet to 318
    // TODO: Don't forget to save the updated planet
    // // Solution:
    // planet.mass = 318;
    // await planet.save();
    return `Updated Jupiter mass to ${planet.mass}`;
  } else {
    return 'Jupiter not found.';
  }
}

app.get('/api/some-endpoint', async (req, res) => {
  const message = await updatePlanetMass();
  res.json({ message });
});

// Start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
