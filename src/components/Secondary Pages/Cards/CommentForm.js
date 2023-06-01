import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CommentForm(props) {
  const [comment, setComment] = useState("");
  const userToken = props.userToken;
  const userData = props.userData;
  const isLogin = props.isLogin;
  const hallId = props.hallId;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("content", comment);
    fetch(`http://127.0.0.1:8000/user/auth/halls/${hallId}/addComment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
      body: formDataObj,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: data.message,
          showCancelButton: false,
        }).then((result) => {
          window.location.reload();
        });
      });
  };

  return (
    <form className="FormCommentSection" onSubmit={handleSubmit}>
      <div className="FirstDivForm">
        <h2>Write Your Comment</h2>

        <div className="margin10Width90">
          <input
            className="FirstInput"
            type="text"
            defaultValue={userToken.name}
            readOnly
          />
        </div>
        <div className="margin10Width90">
          <textarea
            className="Secondnput"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Comment"
            required
          />
        </div>
        <div>
          {" "}
          <button className="submitComment" type="submit">
            Post a Comment
          </button>
        </div>
      </div>
    </form>
  );
}
export default CommentForm;
