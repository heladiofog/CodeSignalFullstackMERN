const express = require('express');
const app = express();
app.use(express.json());

let blogs = [
  { id: 1, title: 'My First Blog', description: 'This is my first blog' },
];

app.get('/api/blogs', (req, res) => res.json(blogs));

app.post('/api/blogs', (req, res) => {
  let blogId = Date.now();
  let newBlog = {
    id: blogId,
    title: req.body.title,
    description: req.body.description,
  };
  blogs.push(newBlog);
  res.json(blogs);  // It should be different response
  // Solution: Replace the line above
  // res.json(newBlog);
});

app.listen(5000, () => console.log('Blog server is running on port 5000'));
