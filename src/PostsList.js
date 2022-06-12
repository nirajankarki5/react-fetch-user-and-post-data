import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const posts = await response.json();
      setPosts(posts);
      setIsLoading(false);
    } catch (err) {
      console.log("The error is " + err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostsList;
