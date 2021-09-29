import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/rt-2cxAiPJk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5FHa8UXdC3VA95b5HmLxam1S7kQ"
          alt="Video Preview"
        />
        <span>05:43</span>
      </div>
      <div className="video__description">
        <img
          src="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj-mo"
          alt="channel"
        />
        <div className="details">
          <div className="details__title">
            SPIDER-MAN: NO WAY HOME - Official Teaser Trailer (HD)
          </div>
          <div className="details__channel">
            <span>Marvel Entertainment</span>
          </div>
          <div className="details__stats">
            <span>
              <AiFillEye /> 5m Views •
            </span>
            <span> 5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
