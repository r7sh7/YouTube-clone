import React from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { MdAccountCircle } from "react-icons/md";

const Comments = () => {
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comments__form">
        <MdAccountCircle size={45} />
        <input type="text" placeholder="Write a comment..." />
        <button>Comment</button>
      </div>
      <div className="comments__list">
        {[...Array(20)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
