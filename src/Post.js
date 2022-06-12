import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h4>
        {post.id}. {post.title}
      </h4>
      <p>{post.body}</p>
      <div className="reaction">
        <div className="like">
          <ThumbUpIcon /> Like
        </div>
        <div className="comment">
          <CommentIcon /> Comment
        </div>
      </div>
    </div>
  );
};

export default Post;
