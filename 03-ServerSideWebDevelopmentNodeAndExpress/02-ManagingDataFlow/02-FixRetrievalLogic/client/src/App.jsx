import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div>
      {blogs.length ? blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      )) : <div>Loading...</div>}
    </div>
  );
}

export default App;
