import { useState, useEffect } from 'react';
import axios from 'axios';

function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api-regional.codesignalcontent.com/posting-application-2/posts/'
      )
      .then(/* TODO: Update state with the fetched data */)
      // .then((response) => setPosts(response.data)) // solution
      .catch(/* TODO: Handle the error */);
      // .catch((error) => console.error('Error fetching posts:', error));  // solution
  }, []);

  return (
    <div>
      {posts.length ? (
        <ul>
          {/* TODO: Map 'posts' to list items displaying text and likes count */}
          {posts.map((p) => (<li key={p.id}>{p.text}</li>))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default SocialFeed;
