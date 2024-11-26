# Lesson 1: Embarking on the MongoDB Voyage: An Introduction to Databases
Blast off on a cosmic journey through the realm of data! You're doing an amazing 
job launching into the world of databases and MongoDB. 🚀 Keep up the great 
adventure!

## Overview and Introduction
In the world of computing, the need to store and manage information arises often. Each day we interact with various applications, each of which manages numerous data points behind the scenes. From the posts we see on social media, the products we browse on online shopping sites, to the high scores we earn on our favorite games—these pieces of information need to be stored and managed.

But where and how is all this data stored?

That's where databases come in! A database functions like the warehouse of an application, storing all the necessary data and making it accessible when required. Just as our school has a library where all books are stored and available for borrowing when needed, an application has a database where it stores all its data.

Just as the librarian categorizes books, keeps them organized, ensures they are accessible, and supervises the borrow and return process, a Database Management System (DBMS) manages databases. It simplifies the tasks of storing, retrieving, and updating data, just as the librarian makes it easy for us to find and borrow books, while also keeping track of what's been borrowed, returned, or is overdue.

One of the popular systems for managing databases is MongoDB. Picture MongoDB as a superhero librarian in the universe of databases, capable of handling loads of information quickly and flexibly.

By the end of this lesson, you will grasp the basics of databases and understand why we choose MongoDB as our superhero librarian. Prepare for some practice exercises at the end to solidify your understanding. Let's commence our journey to explore the cosmos of MongoDB!

## Types of Databases
Essentially, we have two types of databases - `SQL` (Structured Query Language) and `NoSQL` (Not Only SQL) databases.

`SQL` databases, also known as Relational Databases, store data in a structured, organized manner with well-defined patterns, similar to how our Legos are sorted in a box based on their type and color. On the other hand, `NoSQL` databases, such as MongoDB, lack a formal structure and can deal with all kinds of data, akin to a large box containing assorted types of Lego pieces.

Our choice between `SQL` and `NoSQL` depends on the needs of our application. For example, if we are building an application where the data has no fixed structure and keeps changing, a `NoSQL` database like MongoDB might be the better fit.

## Introduction to MongoDB Setup
Now, let's discuss setting up MongoDB. To connect MongoDB to an application, we typically use tools like Mongoose when we're working with Node.js. Let's consider a simple Node.js application:

JavaScript
Copy to clipboard
Play
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
In this simple application, we start by requiring the mongoose module. Then, we connect to a MongoDB database located at mongodb://localhost/myDB. useNewUrlParser and useUnifiedTopology are optional parameters that ensure our database uses the most up to date and efficient mongoose methods.

After you've connected your application with MongoDB, you can now interact with your database and retrieve data from it. Let's suppose we have a collection named myCollection in our database. Here is how to fetch data from the collection:

JavaScript
Copy to clipboard
Play
db.once("open", function () {
  console.log("we're connected to the database!");
});

app.get("/api/some-endpoint", async (req, res) => {
  try {
    const documents = await db.collection("myCollection").find().toArray();
    res.json({message: JSON.stringify(documents)});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
db.once("open", function() {...}) is an event listener that listens only once for the “open” event, which is triggered after mongoose.connection; establishes a connection to the database.

Next, when a client sends a get request to /api/some-endpoint, we fetch the relevant data via db.collection("myCollection").find().toArray(). Notice how we use async/await because we must wait for the database to send us back the requested data. Lastly, we send the fetched data back to the client through res.json({message: JSON.stringify(documents)});

## Understanding MongoDB's Data Model
Let's demystify the key components of MongoDB: database, collections, and documents. MongoDB structures data similar to a bookshelf where the bookshelf is your database, genres are collections, and the books are documents. Here's how it works:

Database: A database is a container for everything, and each MongoDB server can have multiple databases. In our example, we've connected to a database named myDB.

Collections: Inside each database, we have collections. A collection is a group of MongoDB documents. It is the equivalent of a table in databases. In our example, we're working with a collection named myCollection.

Documents: A document is a set of key-value pairs and is the basic unit of data in MongoDB. MongoDB stores these documents using BSON (Binary JSON). Documents within a collection can have different fields.

## Lesson Summary
Congratulations! We've taken our first ride over the cosmic waves of MongoDB and touched upon a few key points. We now understand what databases are and have a sneak peek at MongoDB as a NoSQL database system.

Understanding databases and how MongoDB fits into the mix is an essential skill in the world of programming. This precedes our upcoming sessions where we'll learn to set up a MongoDB database, create collections and documents, and perform database operations. Stay curious, keep exploring! See you soon, fellow space traveler!

```
```