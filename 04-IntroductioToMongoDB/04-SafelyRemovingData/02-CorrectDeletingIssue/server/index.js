const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');

// Create a new express app
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1/myDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('connected');
    // initialize DB
    await initialDBSetup();
  });

const planetSchema = new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String
});

const Planet = mongoose.model('Planet', planetSchema, 'planets');

app.post('/api/delete-planets', async (req, res) => {
  try {
    const result = await Planet.deleteMany({ mass: { $lt: 1 } });
    // Solution: use greater than instead of less than operator
    // const result = await Planet.deleteMany({ mass: { $gt: 1 } });
    res.status(200).json({ message: `Deleted ${result.deletedCount} planets.` });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting planets', error: error });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));