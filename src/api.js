import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBdMeOrlKXUVNq3bxY69L3xll9-5Rk9EB0",
  },
});

export default request;
