import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import request from "../../api";
import "./_videoHorizontal.scss";

const VideoHorizontal = ({ video }) => {
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      channelId,
      title,
      thumbnails: { medium },
      channelTitle,
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const videoDuration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    request("/videos", {
      params: {
        part: "contentDetails,statistics",
        id: videoId,
      },
    })
      .then((data) => {
        console.log(data);
        setViews(data.data.items[0].statistics.viewCount); //in all these cases items[0] is unnecessary but required for the youtube api to work
        setDuration(data.data.items[0].contentDetails.duration);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [videoId]);

  useEffect(() => {
    request
      .get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((data) => {
        setChannelIcon(data.data.items[0].snippet.thumbnails.default);
      });
  }, [channelId]);

  return (
    <div className="videoHorizontal">
      <div className="videoHorizontal__left">
        <img src={medium.url} alt="video" />
        {videoDuration && <span>{videoDuration}</span>}
      </div>
      <div className="videoHorizontal__right">
        <div className="videoHorizontal__title">{title}</div>
        <div className="videoHorizontal__details">
          <span>{channelTitle}</span>
          <span>
            {numeral(views).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoHorizontal;
