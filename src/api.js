import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyB9jqVQEqvmrdMmx2JM-oQnXcVLB5BGTkk",
  },
});

export default request;
