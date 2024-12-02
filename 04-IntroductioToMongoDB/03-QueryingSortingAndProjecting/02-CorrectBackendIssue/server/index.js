const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');

const app = express();
const port = 5000;

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

const Planet = mongoose.model(
  'Planets',
  new mongoose.Schema({
    name: String,
    size: String,
    mass: Number,
    distanceFromSun: String,
  })
);

app.get('/api/planets', (req, res) => {
  Planet.find('distanceFromSun')
    .sort()
    .select('name distanceFromSun -_id')
    // Solution
    // Planet.find()
    //   .sort({ distanceFromSun: 1 })
    //   .select('name distanceFromSun -_id')
    .then((planets) => res.json(planets))
    .catch((err) => res.status(500).send('Error retrieving planets.'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
