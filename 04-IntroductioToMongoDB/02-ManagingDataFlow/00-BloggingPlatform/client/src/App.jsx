import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchBlogs = () => {
    axios.get('/api/posts').then((response) => {
      setBlogs(response.data);
    });
  };

  const addBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      title: title,
      content: content,
    };

    axios.post('/api/posts', newBlog).then(() => {
      fetchBlogs();
    });
  };

  fetchBlogs();

  return (
    <div>
      <button onClick={fetchBlogs}>Fetch Blogs</button>
      <br />
      <button onClick={addBlog}>Add Blog</button>
      <br />
      Title:{' '}
      <input type="text" onChange={(e) => setTitle(e.target.value)} /> <br />
      Content:{' '}
      <input type="text" onChange={(e) => setContent(e.target.value)} />
      {' '}
      {blogs.map((blog) => (
        <div key={blog.id}>
          Title: {blog.title} // Content: {blog.content}
        </div>
      ))}
      {' '}
    </div>
  );
}
