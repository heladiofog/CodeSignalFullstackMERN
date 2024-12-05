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

const Planet = mongoose.model('Planet', new mongoose.Schema({ name: String, size: String }));

app.use(express.json());

// TODO: Implement the DELETE route named '/api/decommission-planet' to decommission planets that have 'Small' size

// TODO: Delete the small planets from the database and respond with the number decommissioned

// TODO: Catch possible errors and return error message with 500 status code

// Solution:
// TODO: Implement the DELETE route named '/api/decommission-planet' to decommission planets that have 'Small' size
app.delete('/api/decommission-planet', async (req, res) => {
  try {
    // TODO: Delete the small planets from the database and respond with the number decommissioned
    const result = await Planet.deleteMany({ size: 'Small' });
    res.status(200).send(`Decommissioned ${result.deletedCount} planets.`);
  } catch (error) {
    // TODO: Catch possible errors and return error message with 500 status code
    res.status(500).json({ message: 'Error decommissioning planets', error: error });
  }
});



const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));