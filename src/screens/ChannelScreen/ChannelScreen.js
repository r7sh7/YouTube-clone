import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getVideosByChannel } from "../../store/actions/videoActions";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";

const ChannelScreen = ({ setActive }) => {
  const dispatch = useDispatch();
  const { channelId } = useParams();
  const { videos, loading } = useSelector((state) => state.channelVideos);
  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
  }, [dispatch, channelId]);
  useEffect(() => {
    setActive("");
  });

  return (
    <Container>
      {!loading && (
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <Video video={video} key={video.id} channelVideos />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ChannelScreen;
