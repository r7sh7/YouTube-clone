import request from "../../api";
import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../constants";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CHANNEL_DETAILS_REQUEST });
    const { data } = await request.get("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });
    dispatch({ type: CHANNEL_DETAILS_SUCCESS, payload: data.items[0] });
  } catch (err) {
    dispatch({ type: CHANNEL_DETAILS_FAILURE, payload: err.message });
  }
};

export const getSubscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const { data } = await request.get("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
  } catch (err) {
    console.log(err);
  }
};
