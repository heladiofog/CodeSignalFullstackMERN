import { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const fetchComments = async () => {
    const res = await axios.get('/api/posts/1/comments');
    setComments(res.data);
  };

  const postComment = async () => {
    await axios.post('/api/posts/1/comments', { text: commentText });
    fetchComments();
    setCommentText('');
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={postComment}>Post</button>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default Comments;
