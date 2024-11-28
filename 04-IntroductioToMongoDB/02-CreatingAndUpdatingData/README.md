# Lesson 3: Shaping the Stars: Creating and Updating Data in MongoDB
Astronomical job reaching this point in your MongoDB journey! Keep soaring through the data cosmos with the same enthusiasm! 🚀

## Introduction to Creating and Updating Data in MongoDB
Welcome, stargazers! Today, we're venturing into the realms of creating and updating data in MongoDB. It bears a resemblance to a space diary, where you log observations of new celestial objects and note changes in their properties over time.

## How to Insert Documents into a Collection
Our data logbooks in MongoDB are referred to as `documents`. Have you discovered a new star? Let's create a log entry, or `document`, for it:

```JavaScript
const mongoose = require('mongoose');
const starSchema = new mongoose.Schema({
  name: String, 
  constellation: String, 
  magnitude: Number
});
const Star = mongoose.model('Star', starSchema);

async function insertStar() {
  await mongoose.connect('mongodb://127.0.0.1/myDB');
  const star = new Star({
    name: "Polaris",
    constellation: "Ursa Minor",
    magnitude: 2.0
  });
  const result = await star.save();
  console.log(result);
  mongoose.connection.close();
}

insertStar();
```
Here, we created a `star` object instance from the `Star` model using the `new Star` call and saved it into the database with the `save()` async method. Simple, isn't it?

At the end of the function, we called `mongoose.connection.close();`. This line closes the current connection to the MongoDB server. This helps in freeing up system resources that our application was using during the connection. It's a good practice to close unnecessary connections especially when the DB operations are no longer required or when all the tasks are finished. This maintains optimal application performance and prevents memory and connection leaks.

For multiple discoveries, we can log them all at once using `insertMany()`:

```JavaScript
async function insertStars() {
  await mongoose.connect('mongodb://127.0.0.1/myDB');
  const stars = [{
    name: "Sirius",
    constellation: "Canis Major",
    magnitude: -1.46
  },{
    name: "Canopus",
    constellation: "Carina",
    magnitude: -0.74
  },{
    name: "Arcturus",
    constellation: "Boötes",
    magnitude: -0.04
  }];
  const result = await Star.insertMany(stars);
  console.log(result);
  mongoose.connection.close();
}

insertStars();
```
After each insert operation, MongoDB provides a response, acknowledging the operation's successful completion.

## Updating Documents in a Collection
Data logging isn't limited to discovery; data needs to be updated based on new observations. For this, Mongoose provides the `findOne()` and `save()`.

Assuming the magnitude of Polaris has been updated from `2.0` to `2.02`, we can reflect this new observation in our MongoDB database:

```JavaScript
async function updateStar() {
  await mongoose.connect('mongodb://127.0.0.1/myDB');
  const star = await Star.findOne({ name: "Polaris" });
  if (!star) {
    console.log('Star not found.');
    return;
  }
  star.magnitude = 2.02;
  const result = await star.save();
  console.log(result);
  mongoose.connection.close();
}

updateStar();
```
We fetch the document using `findOne()`, modify the magnitude, and save back to the database.

## Lesson Summary
Congratulations, stargazers! We now understand how to add new documents to our MongoDB collection and modify the existing ones using `save()` and `insertMany()`. What's the next stage? Engaging practice exercises. Remember, practice makes perfect and solidifies these concepts in our memory. Keep exploring, keep learning, and most importantly, enjoy the journey! Happy coding!

```
```
