# Lesson 2: Schematics of the Cosmos: MongoDB Schemas and Data Operations
You're doing stellar work navigating through the fundamentals of MongoDB! Keep going, and don't hesitate to reach out if you need a boost! 🚀


## Topic Overview and Actualization
Today, we're embarking on a journey into MongoDB. We'll be unveiling Schemas, Models, and Data Read Operations. In simpler terms, Schemas form the database structure, Models generate data, and Data Read Operations fetch it. So, let's go!

## Introduction to Schemas in MongoDB
A Schema in MongoDB is akin to an architectural blueprint. In our analogy, it functions as the layout for organizing books in a library. A Schema consists of:

- **Fields** (individual pieces of data)
- **Types** (the kind of data for each field)
- **Validators** (functions that ensure the data meets certain criteria)

## Creating a Simple Schema in MongoDB
Let's create a Schema in which the fields represent different book categories.

```JavaScript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title:  String,
  author: String,
  isbn:   Number
});

module.exports = mongoose.model('Book', bookSchema);
```

We've generated a Book Schema with `title`, `author`, and `isbn`. MongoDB comes packed with built-in validation options to maintain data consistency.

We then export the `bookSchema`, which other files can access via "Book".

## Understanding MongoDB Data Models
A Model in MongoDB represents a schema — the individual books in our library, to be precise.

```JavaScript
const mongoose = require('mongoose');
const Book = require('./bookSchema');
let newBook = new Book({
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isbn: 9781593279509
});
```
We've created a `Book` model, similar to placing a book on a library shelf.

We first import the `bookSchema` via `const Book = require('./bookSchema');` We can now create a new instance of `Book`, that follows the requirements of `bookSchema`.

You may have noticed that `initialDBSetup();` is called in the practices. This function creates the schema and populates the collections of our database.

## Introduction to Data Read Operations
Reading data yields matches — much like finding a book in our library. MongoDB offers methods such as `find()` and `findOne()` for this purpose.

## Perform Basic Data Read Operations
Let's fetch our books:

```JavaScript
async function findBooksByAuthor(name) {
  try {
    return await Book.find({ author: name });
  } catch (err) {
    console.error("Error finding book by author:", err);
  }
}

async function findBookByTitle(title) {
  try {
    return await Book.findOne({ title: title });
  } catch (err) {
    console.error("Error finding book by title:", err);
  }
}
```
The first function finds all the books written by the specified author. The second function locates the specific book by title.

## Lesson Summary
Great job! You have learned about MongoDB's Schemas and Models and performed data read operations. Remember, Schemas constitute blueprints, Models represent data instances, and read operations equate to retrieving data. Now, let's proceed to some hands-on exercises to consolidate our knowledge. Happy coding!

```
```
