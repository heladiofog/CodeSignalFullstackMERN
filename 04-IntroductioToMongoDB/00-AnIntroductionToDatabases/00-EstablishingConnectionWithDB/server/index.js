const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');

// Create a new express app
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

mongoose
  .connect('mongodb://127.0.0.1/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('connected');
    // initialize DB, we will discuss this in further lessons
    await initialDBSetup();
  });

const db = mongoose.connection;

db.once('open', async () => {
  app.get('/api/some-endpoint', async (req, res) => {
    const planets = await db.collection('planets').find().toArray();
    const names = planets.map((planet) => planet.name);
    res.json({ message: names.join(', ') });
  });

  app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });
});
