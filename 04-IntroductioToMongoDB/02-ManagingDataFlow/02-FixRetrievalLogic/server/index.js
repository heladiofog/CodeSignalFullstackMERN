const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const data = {
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

app.post('/api/posts', (req, res) => {
// Solution
// app.get('/api/posts', (req, res) => {
  res.json(data.posts);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
