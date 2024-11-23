import { useState, useEffect } from 'react';
import axios from 'axios';

function SocialMediaFeed() {
  // TODO: Initialize state to hold the posts
  const [posts, setPosts] = useState([]);
  // TODO: Fetch posts from the server when the component mounts and handle any errors
  useEffect(() => {
    axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.log(`Error: ${error}`))
  }, []);
  // TODO: Render the fetched posts, displaying text and likes count for each post
  return (
    <div>
      <h2>Social Media Feed</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.text} - <strong>Likes: {post.likesCount}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default SocialMediaFeed;
