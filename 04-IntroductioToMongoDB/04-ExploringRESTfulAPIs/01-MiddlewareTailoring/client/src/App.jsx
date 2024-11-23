import { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    };
    getPosts();
  }, []);

  const deletePost = async (postId) => {
    await axios.delete(`/api/posts/${postId}`);
    // Fetch the updated posts
    const res = await axios.get('/api/posts');
    setPosts(res.data);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
