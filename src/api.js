import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyB5RkjY2zyG6bPo4bMJBUohPGFJ2yv6wXA",
  },
});

export default request;
