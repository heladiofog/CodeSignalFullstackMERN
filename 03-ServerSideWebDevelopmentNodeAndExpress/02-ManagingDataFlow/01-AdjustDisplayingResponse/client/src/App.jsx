import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  const onNewPost = () => {
    const newPost = {
      id: 3,
      title: 'Another day, another blog post',
      content: 'This is a new blog post.',
    };
    axios.post('/api/posts', newPost)
      .then(response => {
        setMessage(`Post with id: ${response.data.id} has been added!`);
        // Solution
        // setMessage(`Post titled: ${response.data.title} with id: ${response.data.id} has been added!`);
      });
  }

  return (
    <div className="App">
      <button onClick={onNewPost}>New Post</button>
      <p>{message}</p>
    </div>
  );
}

export default App;