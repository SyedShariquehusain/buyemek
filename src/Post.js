const Post = ({ title, body }) => {
  return (
    <div className="postContainer">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;