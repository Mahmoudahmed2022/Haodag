import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { FaUserAlt } from "react-icons/fa";

function CommentSection(props) {
  const [comments, setComments] = useState([]);
  const hallId = props.hallId;
  const personData = props.personData;
  const userData = props.userData;
  const isLogin = props.isLogin;

  const addComment = (name, comment) => {
    const newComment = { name, comment };
    setComments([...comments, newComment]);
  };
  const getComments = () => {
    const api = `http://127.0.0.1:8000/api/auth/getHallComment/${hallId}`;
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setComments(response.data);
      })
      .catch((err) => console.error(err));
  };
  // console.log(personData, hallId, comments);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="AllCommentSection">
      <div className="containerCommentSection">
        {personData?.role == "user" && (
          <CommentForm
            personData={personData}
            hallId={hallId}
           
          />
        )}
        {comments?.map((comment, index) => (
          <div className="commentData" key={index}>
            <div className="ImgName">
              <div className="marginRight ">
                <FaUserAlt />
              </div>
              <p>{comment.users.name}</p>
            </div>
            <div className="width90%">
              <li className="pWrap">{comment.content}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CommentSection;
