import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      title,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const videoDuration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      setViews(items[0].statistics.viewCount); //in all these cases items[0] is unnecessary but required for the youtube api to work
      setDuration(items[0].contentDetails.duration);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_details = async () => {
      const {
        data: { items },
      } = await request.get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_details();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="Video Preview" />
        <span>{videoDuration}</span>
      </div>
      <div className="video__description">
        <img src={channelIcon?.url} alt="channel" />
        <div className="details">
          <div className="details__title">{title}</div>
          <div className="details__channel">
            <span>{channelTitle}</span>
          </div>
          <div className="details__stats">
            <span>
              <AiFillEye /> {numeral(views).format("0.a")} Views •
            </span>
            <span> {moment(publishedAt).fromNow()} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
