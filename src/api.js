import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDmbEfRl6GaeNYcGvi6dCSEARRyOCUN8Xc",
  },
});

export default request;
