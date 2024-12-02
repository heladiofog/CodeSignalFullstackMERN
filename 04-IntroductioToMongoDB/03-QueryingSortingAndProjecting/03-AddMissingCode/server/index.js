const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

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
const Planet = mongoose.model('planets', planetSchema);

app.get('/api/planets', async (req, res) => {
  try {
    // TODO: Get the list of planets ordered by their mass and exclude the '_id' field.
    // Solution:
    // const planets = await Planet.find().sort({ mass : 1 }).select('name mass -_id');
    res.json(planets);
  } catch (error) {
    res.status(500).send('Error fetching planets');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
