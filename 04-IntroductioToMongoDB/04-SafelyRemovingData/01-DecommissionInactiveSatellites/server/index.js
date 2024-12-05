const express = require('express');
const mongoose = require('mongoose');
const SatelliteSchema = new mongoose.Schema({ name: String, isActive: Boolean }, { versionKey: false });
const Satellite = mongoose.model('Satellite', SatelliteSchema);

const app = express();

mongoose.connect('mongodb://127.0.0.1/myDB', { useNewUrlParser: true, useUnifiedTopology: true }).then( async () => {
  console.log('Connected to MongoDB');
  
  Satellite.deleteMany({}).then(async () => {
    // Insert some initial satellites on first connection
    await Satellite.insertMany([
      { name: 'Hubble',  isActive: false },
      { name: 'Voyager1',isActive: false },
      { name: 'Juno', isActive: true }
    ]);
  });
});

app.use(express.json());

app.get('/api/satellites', async (req, res) => {
  try {
    const satellites = await Satellite.find();
    res.status(200).json(satellites);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve satellites.' });
  }
});

app.delete('/api/delete-satellites/:name', async (req, res) => {
  try {
    const result = await Satellite.deleteMany({ isActive: false });
    // Solution: delete by name instead of isActive property
    // const result = await Satellite.deleteMany({ name: req.params.name });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: `Successfully decommissioned satellite: ${req.params.name}` });
    } else {
      res.status(404).json({ message: 'Satellite not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to decommission satellite.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));