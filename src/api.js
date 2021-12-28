import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCfrRMFSPqfGluiK2bMu00XwRB7_X57EMY",
  },
});

export default request;
