# Lesson (unit) 5: Exploring RESTful APIs in Express.js: A Beginner's Guide
Blast off! You're about to enter the orbit of RESTful APIs with Express.js! 🚀 
Keep going, you are doing stellar work exploring the server-side cosmos!

## Introduction to API and REST
Welcome to the fascinating world of APIs! An API (Application Programming 
Interface) is a set of rules that allow two applications to communicate with 
each other. Think of it as a restaurant menu. When you go to a restaurant, you 
look at the menu and order your food. The kitchen, or the system, then prepares 
your order and serves it to you. In this case, the menu is akin to an API. It 
describes what is possible, and the kitchen uses those instructions to prepare 
your order.

So, how does this apply to web development? Let's take the example of a weather 
application that shows weather data from different cities. The app fetches this 
data from a weather API. The app sends a request to the API, similar to placing 
an order from a menu, and the API returns the requested data, similar to the 
kitchen serving the food.

## Key Components of RESTful APIs with Express.js
One of the core concepts of REST is the use of HTTP methods on resources. These 
methods are:

- `GET`: Retrieves data. It doesn't change the state or data on the server; it just retrieves it.
- `POST`: Sends data to be processed to a specified resource. This method can change the state and the data on the server.
- `PUT`: Updates some data on the server.
- `PATCH`: Partially updates some data on the server.
- `DELETE`: Deletes some data from the server.

## Express Routes for REST APIs
You already know how to create simple routes in Express. However, building a 
REST API involves creating routes that correspond to the different HTTP 
methods. For example:

```JavaScript
app.get('/api/posts', getPosts);
app.post('/api/posts', createPost);
app.put('/api/posts/:id', updatePost);
app.delete('/api/posts/:id', deletePost);
```
In this code, we define different route handlers (i.e., callback functions) 
for different types of HTTP requests to `/posts`.

Each route handler gets three parameters:

- The request (`req`): Contains all the information and methods related to 
the client's request.
- The response (`res`): Contains all the information and methods for the server 
to respond with.
- `Next`: A callback that tells Express to go to the next middleware function 
in the stack.

## Implementing a Simple RESTful API
Next, we'll implement a simple RESTful API. One of the great features of 
`Express.js` is its ability to easily structure such APIs:

```JavaScript
const express = require('express');
const app = express();
app.use(express.json());

let posts = [{id: 1, text: 'Hello, CodeSignal'}];

// Endpoint for retrieving all existing posts
app.get('/api/posts', (req, res) => res.json(posts));

// Endpoint for adding a new post
app.post('/api/posts', (req, res) => {
  const newPost = {
    id: Date.now(),
    text: req.body.text
  };
  posts.push(newPost);
  res.json(newPost);
});

// Endpoint for updating the existing post
app.put('/api/posts/:id', (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));
  if (post) {
    // Update the post if it was found by the provided id
    post.text = req.body.text;
    res.json(post);
  } else {
    // if the post wasn't found - return status HTTP 404 (Not Found)
    res.sendStatus(404);
  }
});

// Endpoint for deleting the existing post
app.delete('/api/posts/:id', (req, res) => {
  const index = posts.findIndex((post) => post.id === Number(req.params.id));
  if (index !== -1) {
    // Delete the post if it was found by the provided id
    const deletedPost = posts.splice(index, 1);
    res.json(deletedPost);
  } else {
    // if the post wasn't found - return status HTTP 404 (Not Found)
    res.sendStatus(404);
  }
});

app.listen(5000, () => console.log('App listening on port 5000'));
```
To interact with this API, we can use different HTTP methods with the 
`/posts` endpoint. We can get all posts, create a new post, update a post, 
and delete a post.

## Accessing RESTful API from a React Client
In previous lessons, you were introduced to `Axios` for sending HTTP requests 
from a React client. Now, we'll use it with our new API. Let's create a 
component that displays a list of posts and includes functions for creating, 
updating, and deleting posts:

```JavaScript
import { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  // Other functions to add, update, and delete posts go here

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.text}</p>
      ))}
    </div>
  );
};

export default Posts;
```
In this code, we're fetching the posts from `/api/posts` when the component mounts and updating our state with the fetched posts.

## Lesson Summary
We've arrived at the end of our journey with REST APIs! In this lesson, you 
learned how to create and design RESTful APIs using Express.js and how to 
interact with these APIs using a React client and Axios. With Express.js and 
APIs, your server-side web development capabilities have certainly reached a 
new level! The universe of server-side programming is right at your 
fingertips, ready to be explored further. Happy coding!

```
```
