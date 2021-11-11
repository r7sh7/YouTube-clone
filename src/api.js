import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBRjE07ty4IhrLOvOxlUyKgyaD_7EQEPq0",
  },
});

export default request;
