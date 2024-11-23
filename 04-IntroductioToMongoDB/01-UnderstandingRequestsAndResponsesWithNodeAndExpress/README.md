# Understanding Requests and Responses with Node.js and Express

## Lesson Overview

In our journey into the Express.js universe today, we are going to unravel
requests and responses, which are critical for efficient web apps. Our aim is
to make you comfortable with creating routes, handling requests, and sending
responses in Express.js.

## Interacting with Express.js via the Request Object

In Express.js, a client's request is accompanied by a request object (`req`).
The `req` object holds data such as the URL, HTTP method, headers, and any data
sent by the client.

For instance, to extract the URL and the `User-Agent` header from the request in
a GET method, we use `req.url` and `req.headers` respectively:

```JavaScript
const express = require('express');
const app = express();

app.get('/api/endpoint', (req, res) => {
    console.log(req.url); // prints: '/api/endpoint'
    console.log(req.headers['user-agent']); // prints: axios/0.19.2
    // Note: this is just potential User-Agent output, the actual output depends on your request
    res.send('Hello World!');
});

app.listen(5000);
```

This logs the URL of a GET request as well as the request's `User-Agent` header, 
and then sends a `"Hello World!"` response to the client.

## Dealing with the Response Object
Along with `req`, we also receive a response object, `res`, which enables us to 
send responses back to the client. The `res` object includes methods like `res.send()`, `res.json()`, and `res.sendFile()`, for sending strings, JSON, and files, respectively.

For example, to respond with a JSON message, you would do the following:

```JavaScript
app.get('/api/endpoint', (req, res) => {
    // Sends a JSON response to the client
    res.json({message: 'Hello from the API!'}); 
});
```
We will explain JSON in more detail later in this lesson.

## Creating Express.js Routes
In Express.js, we define routes to respond to various URLs. These routes specify which HTTP methods they should respond to, such as GET, POST, and DELETE.

For instance, a route responding to a GET request at `'/api/about'` looks like this:

```JavaScript
app.get('/api/about', (req, res) => {
    res.send('About page');
});
```

This sends `'About page'` when a GET request is directed to the `'/api/about'` 
endpoint.

## Understanding JSON and Its Usage in Express
JSON is a lightweight data interchange format used for data exchanges between 
servers and web apps. Express.js allows us to send JSON responses with the 
`res.json()` method:

```JavaScript
app.get('/api/items', (req, res) => {
    res.json({ item1: 'Shirt', item2: 'Pants' });
});
```
Using the code above, our Express.js server delivers a JSON response containing 
the items `'Shirt'` and `'Pants'`.

## React Interaction with Express.js
We are using a React app for our client-side interactions, which employs `axios` 
to make HTTP requests to the Express.js server. If the API response is a raw 
string, the `response.data` will store this raw string itself. However, if the 
Express.js API response is a JSON object, the `response.data` will be a JSON 
object. Take a look at the example:

```JavaScript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items').then(response => {
            setItems(response.data); // update state with new items
        });
    }, []);

    return (
        <ul>
            {items.map((item, index) => 
                <li key={index}>{item}</li>
            )}
        </ul>
    );
}

export default ItemList;
```

This `axios` call fetches data from an endpoint upon loading and subsequently sets the `'items'` state.

## Lesson Summary
We've done a deep dive today, exploring requests and responses in Express.js and 
learning how to set up routes, handle requests, and send responses. Are you 
ready for some hands-on practice exercises? Practicing is the most surefire way 
to reinforce what you've learned. Great job today!

```
```
