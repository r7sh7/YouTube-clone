import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBFXj3sK6Q2geD-48mGSLQHzewhmKuYSiU",
  },
});

export default request;
