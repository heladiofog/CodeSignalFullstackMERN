import { useState, useEffect } from 'react';
import axios from 'axios';

function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api-regional.codesignalcontent.com/posting-application-2/posts/'
      )
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.text} - Likes: {post.likesCount}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default SocialFeed;
