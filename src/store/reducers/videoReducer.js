import {
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../constants";

const initState = {
  videos: [],
  nextPageToken: null,
  loading: false,
  activeCategory: "All",
};

export const homeVideosReducer = (state = initState, action) => {
  switch (action.type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload.videos,
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        activeCategory: action.payload.category,
      };
    case HOME_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        nextPageToken: null,
      };
    default:
      return state;
  }
};
