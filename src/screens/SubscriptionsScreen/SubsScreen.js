import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ChannelHorizontal from "../../components/channelHorizontal/ChannelHorizontal";
import { getSubscriptionList } from "../../store/actions/channelActions";

const SubsScreen = () => {
  const { channels, loading } = useSelector((state) => state.subscriptionList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptionList());
  }, [dispatch]);
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
