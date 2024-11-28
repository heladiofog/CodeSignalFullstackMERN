const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');

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

const { Schema } = mongoose;

// TODO: Define a schema for books with title as a String, author as a String, and isbn as a Number.
const bookSchema = new Schema({
  title: String,
  author: String,
  isbn: Number
});

// TODO: Create a model from the schema
const Book = mongoose.model('Book', bookSchema);

app.get('/api/some-endpoint', async (req, res) => {
  try {
    // TODO: Write a MongoDB query to find books by the author 'Marijn Haverbeke'
    Book.find({ author: 'Marijn Haverbeke' })
      .exec() // some error is thrown at codesignal sandbox when it's missing: Error: socket hang up
      .then((books) => res.json({ message: JSON.stringify(books) }))
      .catch((err) => console.error('Error finding books:', err));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
