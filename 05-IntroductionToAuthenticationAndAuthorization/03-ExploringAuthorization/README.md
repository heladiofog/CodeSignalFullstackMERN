# Course 6 - Lesson 4 - Exploring the Galaxy of Authorization: Setting Up RBAC, Managing User Roles, and Creating Authorization Middleware
Strap in! We're about to embark on an exciting journey into the world of Authorization and Role-Based Access Control! 🚀 Your progress is terrific, let's continue our exploration into these fascinating domains.

## Introduction to Authorization
Greetings! Today, we'll unlock the world of Authorization, with a focus on user roles, Role-Based Access Control (RBAC), and authorization middleware.

To illustrate Authorization simply—it's like a space mission, where only authorized astronauts can enter restricted areas. Now that we understand Authorization, let's implement it in our applications!

## Understanding Authorization and Role-Based Access Control (RBAC)
Authorization comes into play post-authentication, deciding what actions authenticated users can perform. To break it down, Authentication is a spaceship's identity check, while Authorization is the spacesuit that guides users to access the various compartments of the spaceship.

Imagine a space facility with scientists and engineers, each having defined roles and access levels. Similarly, the Role-Based Access Control (RBAC) system assigns permissions based on roles.

Take an e-commerce system as an example:

- `Buyer` views products.
- `Seller` manages their products.
- `Admin` controls the complete system.
RBAC is essential for managing large system!

## Managing User Roles
In an authorization system, user roles dictate their system access. With MongoDB and Mongoose, we can manage user roles.

1. **Creating User Roles**: Consider 'User' and 'Admin' roles. To oversee our system, we design a user schema with `role` as a property.
```JavaScript
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        default: 'User',
    },
});
```
2. Assigning Permissions to Roles: Each role is given permissions. For instance, the '`User`' role only allows the '`Read`' operation, while the '`Admin`' role can '`Read`', '`Write`', and '`Delete`'.
3. Assigning Users to Roles: Users are assigned roles upon signing up.

## Establishing Authorization Middleware
Middleware in Express.js are vital functions that have access to the request and response objects, as well as the next middleware function in the application’s request-response cycle.

In the context of authorization, middleware come in particularly handy to check and verify the roles of users, in order to manage access rights to certain routes. Let's build an authorization middleware that will only allow '`Admin`' role users to access a specific route.

```JavaScript
const users = [
  { username: 'Alice', role: 'Admin' },
  { username: 'Bob', role: 'User' }
]; // An imaginary list of users for demonstration purpose

function checkifLoggedin(req) {
  return users[0];  // For the simplicity of this demo, we return the first user from our list, assuming they are logged in
} // Fake function just for the demonstration

function checkUserRole(req, res, next) {
  const user = checkifLoggedin(req);
  if (user.role !== 'Admin') {
    return res.status(403).send('You are not authorized to access this resource');
  }
  req.user = user; 
  return next(); 
}; // Middleware function to validate user roles

app.use('/admin', checkUserRole); // only apply this middleware to '/admin' route
app.get('/admin', function (req, res) {
  res.send(`Welcome ${req.user.username}! You are inside the Admin route`);
});
```
The `checkUserRole` middleware function checks if the logged-in user's role is 'Admin'. If so, it then transfers control to the next middleware function in the queue, which in this case is the route handler for '`/admin`'. If the user role isn't 'Admin', the server responds with a '403 Forbidden' status message.

Now, if you navigate to the `/admin` endpoint, only 'Admin' users will be able to access it. Anyone else will get a '403 Forbidden' message. As you continue building more complex applications, this mechanism of using middleware for role-based access control will become an essential aspect of maintaining application security. Welcome to an essential part of managing authorization in your web applications!

## Utilizing MongoDB in Authorization Middleware
We have already set up an authorization middleware earlier. However, in real life applications, user data including roles are typically stored in a database. For this, we can use MongoDB and Mongoose.

1. **Creating User Roles in MongoDB**: First, let's create a user model with Mongoose which includes user roles.
```JavaScript
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: 'User'
  },
});

const User = mongoose.model('User', UserSchema);
```
2. **Setting up Authorization Middleware with MongoDB models**: Then, let's set up a middleware to authorize different user roles. The middleware will retrieve user information from the database and verify before granting the access:
```JavaScript
import express from 'express';
const app = express();

// Middleware function to authorize user roles
function verifyUserRole(req, res, next) {
  User.findById(req.user._id)
    .then(user => {
      // Check if user role is 'Admin'
      if (user.role === 'Admin') {
        next();
      } else {
        res.status(403).send('You are not authorized to access this resource');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

app.use(verifyUserRole);
```
In the provided example, `verifyUserRole` is a middleware function that checks the role of the authenticated user stored in the MongoDB database. If the user's role is 'Admin', the middleware calls `next()`, which passes control to the `next` middleware function. Otherwise, it sends the `403` status code (representing '`Forbidden`'). Additionally, if there is an error during this process, such as a failure to connect with the database, it handles the error gracefully by returning a `500 Internal Server Error` response.

As a result, our Express.js application, armed with MongoDB and Mongoose, becomes more adept at authorizing different user roles based on database data. This empowers us to manage user permissions more diversely and effectively.

## Lesson Summary and Next Steps
Our journey into the Authorization galaxy was thrilling. We explored the concepts of authorization, role-based access control systems, managing user roles, and creating authorization middleware.

Looking ahead, we're preparing to delve into error handling. Filled with hands-on practice, our journey continues to impart 
