const express = require('express');
const app = express();
app.use(express.json());

let posts = [
  { id: 1, text: 'Hello, CodeSignal' },
  { id: 2, text: 'I am loving these lessons' },
];

app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// TODO: Add PUT endpoint for /api/posts/:id, updating the provided post
// The updated post text is provided in the request's body
// Solution:
app.put('/api/posts/:id', (req, res) => {
  const newPostData = { id: req.body.id, text: req.body.text };
  //
  const post = posts.find((post) => post.id === newPostData.id);
  //
  if (post) {
    post.text = newPostData.text;
  }
  // posts.push(newPostData);
  res.json(newPostData);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(5000, () => console.log('App listening on port 5000'));
