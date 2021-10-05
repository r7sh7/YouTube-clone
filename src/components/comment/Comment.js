import moment from "moment";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment">
      <MdAccountCircle size={45} />
      <div className="comment__body">
        <span className="comment__header">
          Rishi Bolinjkar • {moment("02-04-2021").fromNow()}
        </span>
        <span>This is so dope!</span>
      </div>
    </div>
  );
};

export default Comment;
