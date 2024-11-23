import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, description };
    const res = await axios.post('/api/blogs', newBlog);
    setBlogs([...blogs, res.data]);
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/api/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your Blog Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <br />
        <textarea
          placeholder="Your Blog Description"
          value={description}
          onChange={handleDescriptionChange}
          required
        ></textarea>
        <button type="submit">Create Blog</button>
      </form>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogApp;
