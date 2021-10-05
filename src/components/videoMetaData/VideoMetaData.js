import moment from "moment";
import numeral from "numeral";
import React from "react";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown, MdAccountCircle } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text";
const VideoMetaData = () => {
  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="videoMetaData__top__stats">
          <span>
            {numeral(716237).format("0.a")} Views •{" "}
            {moment("05-09-2020").fromNow()}{" "}
          </span>
          <div className="videoMetaData__top__stats__icons">
            <span>
              <MdThumbUp size={26} /> 999
            </span>
            <span>
              <MdThumbDown size={26} /> 14
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel">
        <div className="videoMetaData__channel__details">
          <MdAccountCircle size={50} />
          <div>
            <span style={{ color: "#fff" }}>Channel Name</span>
            <span>{numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button>SUBSCRIBE</button>
      </div>
      <div className="videoMetaData__description">
        <ReactShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
