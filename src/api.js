import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCspMPbeZN6J1fkwt0ipunFT6ZyxH2j4fA",
  },
});

export default request;
