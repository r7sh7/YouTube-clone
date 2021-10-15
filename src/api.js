import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAzXZZLiT0UWbPEIp0UG74cwA0LTzeTn-k",
  },
});

export default request;
