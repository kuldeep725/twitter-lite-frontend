import { useEffect, useState } from "react";
import Rest from "../Utils/Rest";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await Rest.getPosts();
        console.log({posts: data});
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await Rest.createPost({ message });
      console.log(response);
      setMessage("");
      alert("Posted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header>
        <h1>Home</h1>
        <br />
        <br />
      </header>
      <div>
        <form>
          <label>Create Post</label>
          <textarea
            type="text"
            id="post"
            name="post"
            rows="5"
            columns="50"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Post" onClick={createPost} />
        </form>
      </div>
      <br />
      <div>
        {posts.map((post) => {
          return <Post post={post}></Post>;
        })}
      </div>
      <footer>
        <a href="/whotofollow">Who to follow</a>
        <a href="/logout">Logout</a>
      </footer>
    </div>
  );
};

export default Home;
