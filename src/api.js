import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBhg3YQSRMJw5u8Tt32Pf5mzmiKxTkaKjk",
  },
});

export default request;
