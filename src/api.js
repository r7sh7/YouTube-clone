import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBut_k_XapC6M8kjNdXaeKfb6lwHHqbh3A",
  },
});

export default request;
