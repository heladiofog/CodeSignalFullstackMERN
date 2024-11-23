import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api-regional.codesignalcontent.com/posting-application-2/posts/'
      )
      .then((response) => setPosts(response))
      // .then((response) => setPosts(response.data)) // solution
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.text}</li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}
