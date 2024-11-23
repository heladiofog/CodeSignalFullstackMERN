const express = require('express');
const app = express();
const port = 5000;

let data = {
  posts: [
    {
      id: 1,
      title: 'Hello, world!',
      content: 'This is my first blog post.',
    },
    {
      id: 2,
      title: 'Goodbye, world!',
      content: 'This is my last blog post.',
    },
  ],
};

app.use(express.json());

app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  data.posts.push(newPost);
  res.json(newPost);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
