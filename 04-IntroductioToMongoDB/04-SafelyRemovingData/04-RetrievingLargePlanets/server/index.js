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

// TODO: Create the schema and model for planets with the following fields name(String), size(String), mass(String) and distanceFromSun(String)

// TODO: Define a DELETE endpoint '/api/planets/delete/:name' to remove a planet by its name and return an object with success message

// TODO: Have the app listen on the defined port '5000' and log a message confirming the server is running

// Solution:
/*
const port = 5000;

// TODO: Create the schema and model for planets with the following fields name(String), size(String), mass(String) and distanceFromSun(String)
const planetSchema = new mongoose.Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String,
});
// TODO: Create the Mongoose Model for 'planets' collection using the defined schema
const Planet = mongoose.model('planets', planetSchema);

// TODO: Define a DELETE endpoint '/api/planets/delete/:name' to remove a planet by its name and return an object with success message
app.delete('/api/planets/delete/:name', async (req, res) => {
  try {
    const result = await Planet.deleteMany({ name: req.params.name });
    res.status(200).json({ message: `Decommissioned planet ${req.params.name}.` });
  } catch (error) {
    // TODO: Catch possible errors and return error message with 500 status code
    res.status(500).json({ message: 'Error decommissioning requested planet.', error: error });
  }
});

// TODO: Have the app listen on the defined port '5000' and log a message confirming the server is running
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/