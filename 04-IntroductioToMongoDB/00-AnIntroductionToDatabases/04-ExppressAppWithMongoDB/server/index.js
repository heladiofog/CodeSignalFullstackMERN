const express = require('express');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');
const cors = require('cors');

const port = 5000;
const app = express();

app.use(express.json());
app.use(cors());

// TODO: Connect to the MongoDB database 'myDB' using mongoose's connect method with URI: 'mongodb://127.0.0.1/myDB'.
// Add 'await initialDBSetup();' after the connection establishes to add data into DB.
// TODO: Define a GET route on '/api/some-endpoint' to respond with the list of planets.
// Use async-await inside the route handler for error handling.
// TODO: Make your Express application listen on port 5000, and log a message to the
// console stating that the server is running. Implement proper error handling during the
// server setup.

// Solution:
// TODO: Connect to the MongoDB database 'myDB' using mongoose's connect method with URI: 'mongodb://127.0.0.1/myDB'.
mongoose
  .connect('mongodb://127.0.0.1/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    // Add 'await initialDBSetup();' after the connection establishes to add data into DB.
    console.log('connected');
    // initialize DB, we will discuss this in further lessons
    await initialDBSetup();
  });

const db = mongoose.connection;

// TODO: Define a GET route on '/api/some-endpoint' to respond with the list of planets.
// Use async-await inside the route handler for error handling.
app.get('/api/some-endpoint', async (req, res) => {
  try {
    const planets = await db.collection('planets').find().toArray();
    console.log(planets.map((p) => p.name).join(', '));
    const message = planets.map((p) => p.name).join(', ');
    res.json({ message });
  } catch (error) {
    console.log(`Error fetching planets: ${error.message}`);
    res.status(500).json({
      message: 'Something went wrong retrieving planets.'
    })
  }
});
// TODO: Make your Express application listen on port 5000, and log a message to the
// console stating that the server is running. Implement proper error handling during the
// server setup.
app
  .listen(port, (err) => {
    if (err) console.log('Error in server setup:', err.message);
    console.log(`Server running on port ${port}`);
  });
