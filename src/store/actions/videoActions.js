import request from "../../api";
import {
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAILURE,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCHED_VIDEOS_FAILURE,
  SEARCHED_VIDEOS_REQUEST,
  SEARCHED_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAILURE,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../constants";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (err) {
    dispatch({ type: HOME_VIDEOS_FAILURE, payload: err.message });
  }
};

export const getVideosByCategory = (keyword) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: HOME_VIDEOS_REQUEST });
      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          q: keyword,
          type: "video",
        },
      });
      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: keyword,
        },
      });
    } catch (err) {
      dispatch({ type: HOME_VIDEOS_FAILURE, payload: err.message });
    }
  };
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: SELECTED_VIDEO_REQUEST });
    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,statistics",
        id,
      },
    });
    dispatch({ type: SELECTED_VIDEO_SUCCESS, payload: data.items[0] });
  } catch (err) {
    dispatch({ type: SELECTED_VIDEO_FAILURE, payload: err.message });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({ type: RELATED_VIDEO_REQUEST });
    const { data } = await request.get("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    dispatch({ type: RELATED_VIDEO_SUCCESS, payload: data.items });
  } catch (err) {
    dispatch({ type: RELATED_VIDEO_FAILURE, payload: err.response.message });
  }
};

export const getSearchedVideos = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEARCHED_VIDEOS_REQUEST });
      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: keyword,
          type: "channel,video",
        },
      });
      console.log(data.items);
      dispatch({
        type: SEARCHED_VIDEOS_SUCCESS,
        payload: data.items,
      });
    } catch (err) {
      dispatch({ type: SEARCHED_VIDEOS_FAILURE, payload: err.message });
    }
  };
};
