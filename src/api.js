import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDH6acq0G3rJYPA8h3R7x0nGUPdrza8Bzc",
  },
});

export default request;
