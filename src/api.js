import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDJWLsH_lS--hSw3bNq2HBZR3rvF0xkAUQ",
  },
});

export default request;
