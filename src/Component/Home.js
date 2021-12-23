import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rest from "../Utils/Rest";
import Post from "./Post";
import { initializePost, updateMessage } from "../Reducers/PostSlice";
import { useNavigate } from "react-router";
import { removeUserSession } from "../Utils/Common";

const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [message, setMessage] = useState("");

    const posts = useSelector(state => state.post.posts);
    const message = useSelector(state => state.post.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await Rest.getPosts();
        console.log({posts: data});
        // setPosts(data);
        dispatch(initializePost(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [dispatch]);

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await Rest.createPost({ message });
      console.log(response);
    //   setMessage("");
        dispatch(updateMessage(""));
      alert("Posted");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    removeUserSession();
    navigate("/login");
  }

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
            onChange={(e) => dispatch(updateMessage(e.target.value))}
          ></textarea>
          <input type="submit" value="Post" onClick={createPost} />
        </form>
      </div>
      <br />
      <div>
        {posts.map(post => {
          return <Post key={post.postId} post={post}></Post>;
        })}
      </div>
      <footer>
        <a href="/whotofollow">Who to follow</a>
        <button onClick={logout}>Logout</button>
      </footer>
    </div>
  );
};

export default Home;
