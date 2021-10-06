import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown, MdAccountCircle } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text";
import request from "../../api";
const VideoMetaData = ({ video: { snippet, statistics }, id }) => {
  const { publishedAt, channelId, title, description, channelTitle } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const [channelIcon, setChannelIcon] = useState();
  const [channelStats, setChannelStats] = useState();

  useEffect(() => {
    const get_channel_details = async () => {
      const {
        data: { items },
      } = await request.get("/channels", {
        params: {
          part: "snippet,statistics",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
      setChannelStats(items[0].statistics);
      console.log(items);
    };
    get_channel_details();
  }, [channelId]);

  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="videoMetaData__top__stats">
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}{" "}
          </span>
          <div className="videoMetaData__top__stats__icons">
            <span>
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span>
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel">
        <div className="videoMetaData__channel__details">
          <img src={channelIcon?.url} alt="channel icon" />
          <div>
            <span style={{ color: "#fff" }}>{channelTitle}</span>
            <span>
              {numeral(channelStats?.subscriberCount).format("0.a")} Subscribers
            </span>
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
          {description}
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
