const mongoose = require('mongoose');

async function initialDBSetup() {
  mongoose.connect('mongodb://127.0.0.1/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clearing the database
  await mongoose.connection.db.dropDatabase();
  console.log('Database cleared.');

  try {
    // Get default connection
    const db = mongoose.connection;

    // Perform insert operations
    await db.collection('myCollection').insertMany([
      { name: 'John', age: 30 },
      { name: 'Jane', age: 28 },
      { name: 'Alice', age: 23 },
      { name: 'Bob', age: 35 },
    ]);

    await db.collection('planets').insertMany([
      {
        name: 'Mercury',
        size: 'Small',
        mass: 0.055,
        distanceFromSun: '0057.9 million km',
      },
      {
        name: 'Venus',
        size: 'Similar to Earth',
        mass: 0.815,
        distanceFromSun: '0108.2 million km',
      },
      {
        name: 'Earth',
        size: 'Medium',
        mass: 1,
        distanceFromSun: '0149.6 million km',
      },
      {
        name: 'Mars',
        size: 'Just over half the size of Earth',
        mass: 0.107,
        distanceFromSun: '0227.9 million km',
      },
      {
        name: 'Jupiter',
        size: 'Largest Planet',
        mass: 317.8,
        distanceFromSun: '0778.5 million km',
      },
      {
        name: 'Saturn',
        size: 'Large',
        mass: 95.2,
        distanceFromSun: '1400 million km',
      },
      {
        name: 'Uranus',
        size: 'Large',
        mass: 14.6,
        distanceFromSun: '2900 million km',
      },
      {
        name: 'Neptune',
        size: 'Large',
        mass: 17.2,
        distanceFromSun: '4500 million km',
      },
    ]);

    await db.collection('books').insertMany([
      {
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        isbn: 9781593279509,
      },
      {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        isbn: 9780596517748,
      },
      {
        title: 'Learn JavaScript Visually',
        author: 'Ivelin Demirov',
        isbn: 9781495233005,
      },
    ]);

    console.log('Insert operation successful.');
  } catch (err) {
    console.error(err);
  }
}

module.exports = initialDBSetup;
