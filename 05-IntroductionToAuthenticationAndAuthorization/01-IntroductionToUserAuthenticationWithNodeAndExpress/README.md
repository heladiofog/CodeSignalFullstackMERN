# Course 6 - Lesson 2 - Introduction to User Authentication with Node.js and Express.js
Way to go! Today we're navigating the universe of User Authentication. With a bit of Node.js, Express.js, MongoDB, and Mongoose magic, your web applications are about to get a whole lot more secure! Ready to blast off? 🚀

## Topic Overview and Introduction
Hello! Today, we're unraveling a cornerstone of web application security - User Authentication. **User Authentication** involves verifying user identities during login attempts. By correctly implementing User Authentication, you can significantly protect your applications from unauthorized access and potential security threats. Our toolkit for today includes `Node.js` and `Express.js` for crafting our server-side application, and `MongoDB` with `Mongoose` for managing our users' data.

## Creating User Models with MongoDB and Mongoose
Next, we'll delve into `MongoDB`, a powerful NoSQL database, and `Mongoose`, a MongoDB object modeling tool designed to work in an asynchronous environment. They'll assist us in storing and managing user data in a structured manner.

Let's dive straight in and create a `User` Model, comprising username and password attributes:

```JavaScript
var mongoose = require('mongoose'); // Importing the Mongoose library
var Schema = mongoose.Schema; // Retrieving the Schema object from Mongoose
var UserSchema = new Schema({
  username: String, // Setting the username attribute as a string
  password: String, // Setting the password attribute as a string
});
var User = mongoose.model('User', UserSchema); // Creating a User model with the above schema
```
Here, `mongoose.model` is used to create a `User` model in our `MongoDB` database. Each `User` document in our database will have a `username` and `password` field.

## Implementing Authentication Middleware with Express.js
Now, let's apply the final touches and create our **authentication middleware**. Middleware in Express provides a way to work with request and response objects in your application. Middleware functions can perform tasks such as modifying these objects, ending the request-response cycle, or invoking the next middleware function in the stack.

Here's a basic authentication middleware function:

```JavaScript
var authMiddleware = function (req, res, next) {
  if (req.query.username === "admin" && req.query.password === "admin") {
   // If the user is authenticated, the next function is invoked
    console.log("User authenticated");
    next();
  } else {
   // If credentials are invalid, we respond with 'Invalid credentials'
    res.send("Invalid credentials");
  }
};
```
This `authMiddleware` checks whether the submitted `username` and `password` match the known credentials. If they match, the next function in the middleware stack is invoked; otherwise, the response `'Invalid credentials'` is sent.

## Improving Middleware Authenticaton with MongoDB and Mongoose
We can further improve our authentication middleware by using MongoDB to store and retrieve user credentials, making our method more robust and practical.

Instead of hardcoding a `username` and `password` into our middleware function, we can query the user’s data from the MongoDB database using Mongoose. A successful database query will mean the user details are valid, and the user is authenticated.

To handle the asynchronous query calls in an efficient, readable way, we'll use JavaScript's native **`async/await` syntax**. This approach leads to cleaner and more structured code, avoiding the potential pitfalls of callback functions.

Let's see how the authentication middleware looks when we use MongoDB and Mongoose:

```JavaScript
var authMiddleware = async function (req, res, next) {
  // Search for the user credentials in the MongoDB database
  var user = await User.findOne({ username: req.query.username, password: req.query.password });

  // If the query returned a user, proceed with the next function
  if (user) {
    console.log("User authenticated");
    next();
  } else {
    // If no user returned from the query, authentication fails 
    res.send("Invalid credentials");
  }
};
```
In this updated version of `authMiddleware`, we fetch the user data with a Mongoose query inside an `async function`, and then await the results. The query returns the user's document if the `username` and `password` in the request match a document in the MongoDB database. Otherwise, it returns `null`.

If the user exists, `next()` is called to proceed with the route handlers. If no user is returned (indicating the credentials don't match any document in the database), a response with `'Invalid credentials'` is sent instead.

## Lesson Summary and Practice
Fantastic work! We've explored User Authentication, constructed a user model in `MongoDB` using `Mongoose`, and established an **authentication middleware** using `Express.js`.

It's now time to put our learning into practice! This will not only reinforce your understanding of the new concepts but also demonstrate them in action by simulating real-world web development scenarios. Remember, practice is the cornerstone of mastering any new concept. Best of luck!

```
```
