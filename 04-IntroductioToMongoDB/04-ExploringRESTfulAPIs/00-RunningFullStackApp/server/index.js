const express = require('express');
const app = express();
app.use(express.json());

let comments = [{ id: 1, text: 'Hello, CodeSignal' }];

app.get('/api/comments', (req, res) => res.json(comments));

app.post('/api/comments', (req, res) => {
  const newComment = {
    id: Date.now(),
    text: req.body.text,
  };
  comments.push(newComment);
  res.json(newComment);
});

app.delete('/api/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const index = comments.findIndex((comment) => comment.id === commentId);
  if (index !== -1) {
    comments.splice(index, 1);
    res.json({ status: 'successful' });
  } else {
    res.status(404).json({ status: 'Comment not found' });
  }
});

app.listen(5000, () => console.log('Server is running on port 5000'));
