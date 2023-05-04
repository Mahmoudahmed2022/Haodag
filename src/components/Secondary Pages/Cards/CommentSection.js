import { useState } from "react";
import CommentForm from "./CommentForm";
import { FaUserAlt } from "react-icons/fa";

function CommentSection() {
  const [comments, setComments] = useState([]);

  const addComment = (name, comment) => {
    const newComment = { name, comment };
    setComments([...comments, newComment]);
  };

  return (
    <div className="AllCommentSection">
      <div className="containerCommentSection">
        <CommentForm addComment={addComment} />
        {comments.map((comment, index) => (
          <div className="commentData" key={index}>
            <div className="ImgName">
              <div className="marginRight ">
                <FaUserAlt />
              </div>
              <p >{comment.name}</p>

            </div>
            <div className="width90%">
            <li className="pWrap">{comment.comment}</li>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CommentSection;
