const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/myDB', { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
  console.log('connected');
  // initialize DB
  await initialDBSetup();
});

const Planet = mongoose.model('Planet', new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String
}));

app.use(cors());
app.use(express.json());

app.delete('/api/delete-giant-planets', (req, res) => {
  Planet.deleteMany({ mass: { $gt: 10 } })
    .then(result => res.send({ deletedCount: result.deletedCount }))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});