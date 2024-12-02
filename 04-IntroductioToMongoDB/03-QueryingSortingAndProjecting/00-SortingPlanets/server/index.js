const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');

const app = express();
const port = 5000;

// Set up a simple Planet model
const planetSchema = new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String,
});
const Planet = mongoose.model('Planet', planetSchema);

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

app.use(cors());
app.use(express.json());

// Endpoint to retrieve planets sorted by distance from the Sun in ascending order
app.get('/api/planets', async (req, res) => {
  try {
    const planets = await Planet.find()
      .sort({ distanceFromSun: 1 })
      .select('name distanceFromSun -_id');
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
