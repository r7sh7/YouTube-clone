import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCjE7lyBBt-isEX8Bue-pridXFmY8aS-ec",
  },
});

export default request;
