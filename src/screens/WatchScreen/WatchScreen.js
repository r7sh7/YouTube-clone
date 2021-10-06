import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import { getVideoById } from "../../store/actions/videoActions";
import "./watchScreen.scss";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, loading } = useSelector((state) => state.selectedVideo);

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchscreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet.title}
            allowFullScreen
            height="100%"
            width="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} id={id} />
        ) : (
          <div>Loading...</div>
        )}
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(20)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
