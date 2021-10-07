import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../constants";

const channelDetailsState = {
  channel: {},
  loading: true,
  subscriptionStatus: false,
};

export const channelDetailsReducer = (state = channelDetailsState, action) => {
  switch (action.type) {
    case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel: action.payload,
        loading: false,
      };
    case CHANNEL_DETAILS_FAILURE:
      return {
        ...state,
        channel: {},
        loading: false,
        error: action.payload,
      };
    case SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        subscriptionStatus: action.payload,
      };
    default:
      return state;
  }
};
