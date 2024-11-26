const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const initialDBSetup = require('./initialDBSetup');
const Book = require('./bookModel');

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

// TODO: Update this function based on the instructions provided in the task description
async function findBookByTitle(title) {
  try {
    return await Book.findOne({ title: title });
  } catch (err) {
    console.error('Error finding book by title:', err);
  }
}

// Solution: findBookByAuthor function
// TODO: Update this function based on the instructions provided in the task description
async function findBooksByAuthor(name) {
  try {
    return await Book.find({ author: name }); // Returns an array!!
  } catch (err) {
    console.error('Error finding book by author:', err);
  }
}

app.get('/api/some-endpoint', async (req, res) => {
  try {
    // TODO: Don't forget to update the DB call too to take the author name 'Marijn Haverbeke'.
    findBookByTitle('Eloquent JavaScript')
      .then((book) => res.json({ message: JSON.stringify(book) }))
      .catch((err) => console.error(err));
    // Solution: call to findBooksByAuthor method:
    // findBooksByAuthor('Marijn Haverbeke')
    //   .then((book) => res.json({ message: JSON.stringify(book) }))
    //   .catch((err) => console.error(err));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
