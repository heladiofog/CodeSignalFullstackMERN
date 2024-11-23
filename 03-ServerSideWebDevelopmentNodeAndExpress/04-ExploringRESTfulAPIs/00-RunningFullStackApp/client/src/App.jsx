import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get('/api/comments').then((res) => {
      setComments(res.data);
    });
  }, []);

  const addComment = () => {
    axios.post('/api/comments', { text: newComment }).then((res) => {
      setComments([...comments, res.data]);
    });
  };

  const deleteComment = (id) => {
    axios.delete(`/api/comments/${id}`).then(() => {
      setComments(comments.filter((comment) => comment.id !== id));
    });
  };

  return (
    <div>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
