# Lesson (unit) 4: Navigating the Cosmos: Implementing Routes and Middlewares in Express.js

## Course Introduction and Goal
Hello, future full-stack developer! Let's learn server-side programming. Today, 
we're going to focus on routes and middlewares in `Express.js`. Our goal is to 
help you design efficient servers that can process complex web requests. We'll 
apply the lessons we learned to a full-stack application using `React` for our 
client. Let's get started!

## Understanding Routes in Express
Think of routes in `Express.js` as routes on a map, each of which directs an 
HTTP request. They're defined by a URL pattern and an HTTP method (GET, POST). 
`Express.js` uses these routes to process client requests.

**Path parameters** are variables in the routes, while **query parameters** add 
extra data to the URL. Let's look at how to log information about stars.

For example, endpoint `/api/star/:id` has a path parameter of `id`, we can query 
this endpoint with an URL like `/api/star/123`. In contrast, query parameters 
are added after the URL path by adding a question mark (`?`) and then adding the 
query parameters. For example: `/api/stars?type=sun` has a query parameter of 
`type` with the value `sun`.

```JavaScript
// Defining some star data for each star
const starData = {
    123: { type: 'sun', name: 'Sun' },
    124: { type: 'planet', name: 'Earth' },
    125: { type: 'satellite', name: 'Moon' },
};

// Below endpoint can be accessed via `/api/star/<starId>`, e.g., `/api/star/123`
app.get('/api/star/:id', (req, res) => {
  const starId = req.params.id;  // retrieving a path parameter
  const data = starData[starId] || {}; 
  res.json(data); // respond with the information of the star with the specified ID
});

// Below endpoint can be accessed via `/api/star?type=<starType>`, e.g., `/api/star?type=sun`
app.get('/api/stars', function (req, res) {
  const starType = req.query.type || ''; // retrieving a query parameter
  const data = starData.filter(star => star.type === starType)[0] || {}; // finding the star by its type
  res.json(data); // respond with the information of the stars with a particular type
});
```

## React Client Interaction with Express Server Routes
Let’s fetch data for our React client using Axios. We'll retrieve a star's data.

```JavaScript
axios.get(`/api/star/123`).then(response => {
  const starData = response.data; // retrieve the star data from the response
  /* Display starData on the page */
});
```
In this snippet, Axios sends a GET request to fetch data about a star with a 
specified ID from our server, then logs the response data.

```JavaScript
axios.get(`/api/stars`, {
  params: {
    type: 'sun'
  }
}).then(response => {
  const starData = response.data; // retrieve the star data from the response
  /* Display starData on the page */
});
```
In this piece of code, we request and log details about Sun stars from our 
server.

## Middlewares: The Traffic Controllers of Express.js
**Middlewares** in `Express.js` control how your server processes requests and 
responses, similar to traffic controllers. Middlewares are like functions that 
are applied to your requests, before these requests actually get executed. For 
example, let’s create a middleware that logs the time of each request (before 
the request is actually executed):

```JavaScript
app.use(function (req, res, next) {
  console.log('Time of request:', Date.now());
  next(); // proceed to the next middleware
});
```
Next, let's create another middleware that logs the request method.

```JavaScript
app.use(function (req, res, next) {
  console.log('Request method:', req.method);
  next(); // proceed to the next middleware
});
```
The middlewares are executed in the order they are defined.

## Connecting Middlewares and Routes: The Untold Story
Middlewares and routes are like the yin and yang of an `Express.js` server - 
**they complete each other**. Together, they define how the server handles and responds to client requests.

```JavaScript
const express = require('express');
const app = express();

// Middlewares
app.use(function (req, res, next) {
  console.log('Time of request:', Date.now()); 
  next();   // go to the next middleware
});
app.use(function (req, res, next) {
  console.log('Request method:', req.method);
  next();   // go to the next middleware
});

// Routes
app.get('/api/star/:id', (req, res) => {
  const starId = req.params.id;  // retrieving a path parameter
  const data = starData[starId] || {}; 
  res.json(data); // respond with the information of the star with the specified ID
});
app.get('/api/stars', function (req, res) {
  const starType = req.query.type || ''; // retrieving a query parameter
  const data = starData.filter(star => star.type === starType)[0] || {}; // finding the star by its type
  res.json(data); // respond with the information of the stars with a particular type
});

app.listen(5000);   // Our server listening on port 5000
```
We now have an `Express.js` server that uses a chain of middlewares and routes 
to process client requests. Our middlewares log each request's timing and type, and the appropriate routes then process these requests.

## Lesson Summary and Next Steps
Congratulations! We've learned about routes and middlewares in `Express.js`, 
which means we can now create servers that can manage a variety of client 
requests.

Try out our practice exercises that are coming up next. Then, join us for our 
next space voyage, where we'll explore RESTful APIs and error handling in 
`Express.js`. Until then, happy coding!

```
```
