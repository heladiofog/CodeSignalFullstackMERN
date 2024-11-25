const express = require('express');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');
const app = express();
const PORT = 5000;

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

app.get('/api/some-endpoint', async (req, res) => {
  try {
    // Can you analyze the database call to see why the data doesn't reach us?
    const planets = db.collection('planets').find().toArray();
    // Solution: missing await
    // const planets = await db.collection('planets').find().toArray();
    res.json({ message: JSON.stringify(planets) });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching planets' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
