const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const initialDBSetup = require('./initialDBSetup');

app.use(cors());

const starSchema = new mongoose.Schema({
  name: String,
  constellation: String,
  magnitude: Number,
});

const Star = mongoose.model('Star', starSchema);

// Connect to MongoDB
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

// Adding Orionis
app.get('/api/add-star-orionis', async (req, res) => {
  const orionis = new Star({
    name: 'Orionis',
    constellation: 'Orion',
    magnitude: 3.5,
  });
  await orionis.save();
  res.send('Orionis has been added to the stars collection.');
});

// Adding Polaris
app.get('/api/add-star-polaris', async (req, res) => {
  const polaris = new Star({
    name: 'Polaris',
    constellation: 'Ursa Minor',
    magnitude: 2.0,
  });
  await polaris.save();
  res.send('Polaris has been added to the stars collection.');
});

// Updating Polaris Magnitude
app.get('/api/update-polaris-magnitude', async (req, res) => {
  await Star.updateOne({ name: 'Polaris' }, { $set: { magnitude: 2.02 } });
  res.send('Polaris magnitude updated to 2.02.');
});

// Start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
