import { useState, useEffect } from 'react';
import axios from 'axios';

function SocialMediaPosts() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api-regional.codesignalcontent.com/posting-application-2/posts/'
      )
      // .then((response) => setPosts(response.data)) // You need to change this to save the text of first post
      // Solution
      .then((response) => setPostText(response.data[0].text)) // You need to change this to save the text of first post
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <ul>
      {/* {posts.map((post) => (
        <li key={post.id}>
          {post.text} - Likes: {post.likesCount}
        </li>
      ))} */}
      {/* Solution */}
      <li>{postText}</li>
    </ul>
  );
}

export default SocialMediaPosts;
