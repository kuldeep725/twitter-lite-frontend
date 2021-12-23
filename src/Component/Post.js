const Post = ({ post }) => {

  // TODO: need redux to make changes to post
  const likePost = async () => {}

  const commentPost = async () => {}

  const retweetPost = async () => {}

  return <div>
      <h4>Username: {post.username} (<small>{post.userId}</small>)</h4>
      <h4>Fullname: {post.fullname}</h4>
      <p>{post.messsage}</p>
      <div>
        <button>Like ({post.likes})</button>
        <button>Comment ({post.comments})</button>
        <button>Retweet ({post.retweets})</button>
      </div>
    </div>
};

export default Post;
