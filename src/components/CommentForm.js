import axios from "axios";
import { useState } from "react";

function CommentForm({ addComment }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addComment(name, comment);
      axios
      .post("http://localhost:3000/products", {
        name,
        comment,
      })
      .then((response) => {});
      setName("");
      setComment("");

    };
  
    return (
      <form className="FormCommentSection" onSubmit={handleSubmit}>
        <div className="FirstDivForm">
        <h2>Write Your Comment</h2>

            <div className="margin10Width90">
                <input
                className="FirstInput"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
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
        <div> <button className="submitComment" type="submit">Post a Comment</button></div>

        </div>
       
      </form>
    );
  }
  export default CommentForm;