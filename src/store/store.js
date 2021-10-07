import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { channelDetailsReducer } from "./reducers/channelReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import {
  homeVideosReducer,
  relatedVideoReducer,
  selectedVideoReducer,
} from "./reducers/videoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentsReducer,
  relatedVideos: relatedVideoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
