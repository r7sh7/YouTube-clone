import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getVideosByChannel } from "../../store/actions/videoActions";

const ChannelScreen = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams();
  const { videos, loading } = useSelector((state) => state.channelVideos);
  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
  }, [dispatch, channelId]);
  return (
    <Container>
      {!loading &&
        videos.map((video) => (
          <VideoHorizontal video={video} key={video.id} channelVideos />
        ))}
    </Container>
  );
};

export default ChannelScreen;
