import request from "../../api";
import {
  COMMENT_LIST_FAILURE,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
} from "../constants";

export const getCommentsByVideoId = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LIST_REQUEST });
    const { data } = await request.get("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
        key: process.env.REACT_APP_YT_API_KEY,
      },
    });
    dispatch({ type: COMMENT_LIST_SUCCESS, payload: data.items });
  } catch (err) {
    dispatch({ type: COMMENT_LIST_FAILURE, payload: err.message });
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
        key: process.env.REACT_APP_YT_API_KEY,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({ type: CREATE_COMMENT_SUCCESS });
    setTimeout(() => {
      dispatch(getCommentsByVideoId(id));
    }, 5000);
  } catch (err) {
    dispatch({ type: CREATE_COMMENT_FAILURE });
  }
};
