const express = require('express');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');
const app = express();
const port = 5000;

mongoose
  .connect('mongodb://127.0.0.1/space')
  // Solution:
  // .connect('mongodb://127.0.0.1/myDB')
  .then(async () => {
    console.log('connected');
    // initialize DB, we will discuss this in further lessons
    await initialDBSetup();

    app.get('/api/some-endpoint', async (req, res) => {
      const planets = await mongoose.connection.db
        .collection('planets')
        .find()
        .toArray();
      res.json(planets);
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error('Connection error:', err));
