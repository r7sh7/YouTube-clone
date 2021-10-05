import moment from "moment";
import numeral from "numeral";
import React from "react";
import "./_videoHorizontal.scss";

const VideoHorizontal = () => {
  return (
    <div className="videoHorizontal">
      <div className="videoHorizontal__left">
        <img
          src="https://i.ytimg.com/vi/NEd8OcL9cWU/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLBSXDqvGP_AJx4EFHuBI3x4pSvAXw
        "
          alt="video"
        />
        <span>5:45</span>
      </div>
      <div className="videoHorizontal__right">
        <div className="videoHorizontal__title">
          Video Title is so long that it cannot fit in this container which is
          why i have to use a line-clamp
        </div>
        <div className="videoHorizontal__details">
          <span>Channel Title</span>
          <span>
            {numeral(106297).format("0.a")} Views •{" "}
            {moment("07-15-2021").fromNow()}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoHorizontal;
