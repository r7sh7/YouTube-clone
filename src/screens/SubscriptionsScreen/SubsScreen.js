import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ChannelHorizontal from "../../components/channelHorizontal/ChannelHorizontal";
import { getSubscriptionList } from "../../store/actions/channelActions";

const SubsScreen = () => {
  const { channels, loading } = useSelector((state) => state.subscriptionList);
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptionList());
  }, [dispatch]);

  useEffect(() => {
    if (user === null) {
      history.push("/login");
    }
  });
  return (
    <Container>
      {!loading &&
        channels.map((channel) => (
          <ChannelHorizontal channel={channel} key={channel.id} subScreen />
        ))}
    </Container>
  );
};

export default SubsScreen;
