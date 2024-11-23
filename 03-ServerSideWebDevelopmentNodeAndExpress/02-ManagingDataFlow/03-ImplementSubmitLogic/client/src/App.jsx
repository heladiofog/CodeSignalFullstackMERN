import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const newBloggedUser = {
    id: 4,
    title: 'Coding is fun!',
    content: 'I started learning server-side programming.',
  };

  // TODO: Create function 'onSubmit' to handle 'Submit' button click which makes POST request and handle the server's response
  // Solution
  function onSubmit(e) {
    e.preventDefault();
    axios
      .post('/api/posts', newBloggedUser)
      .then((response) =>
        setMessage(
          `Blog post successfully created id: ${response.data.id} with the title: ${response.data.title}`
        )
      )
      .catch((error) => setMessage(error.message));
  }

  return (
    <div>
      <h2>New User Form</h2>
      <button onClick={onSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
