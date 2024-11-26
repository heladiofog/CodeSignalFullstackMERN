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

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: Number,
});
const Book = mongoose.model('Book', bookSchema);

// TODO: Use the correct MongoDB data read operation to find books by 'Marijn Haverbeke'.
// Solution: a function to retrieve books by author
/*async function findBooksByAuthor(name) {
  try {
    const books = await Book.find({author: name});
    return books;
  } catch (error) {
    console.log('Error finding books:', error);
  }
}
*/
app.get('/api/some-endpoint', (req, res) => {
  // TODO: Retrieve the books using Book model and respond with the JSON list of books as a message using the JSON.stringify() method
  // TODO: Return 500 status code with an appropriate message in case of any error
  // Solution:
  /*
  // TODO: Retrieve the books using Book model and respond with the JSON list of books as a message using the JSON.stringify() method
  try {
    findBooksByAuthor('Marijn Haverbeke')
      .then((books) => res.json({ message: JSON.stringify(books) }))
      .catch((err) => console.error(err));
  } catch (error) {
    // TODO: Return 500 status code with an appropriate message in case of any error
    res.status(500).send(error.message);
  }
  */
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
