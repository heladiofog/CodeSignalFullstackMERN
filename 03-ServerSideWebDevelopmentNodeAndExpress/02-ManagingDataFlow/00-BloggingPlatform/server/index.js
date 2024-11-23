const express = require('express');
const app = express();
app.use(express.json());

const posts = [
  { id: 1, title: 'First Blog', content: 'This is my first blog.' },
  { id: 2, title: 'Second Blog', content: 'This is my second blog.' },
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.json(newPost);
});

app.listen(5000);
