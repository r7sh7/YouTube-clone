import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyABMWk8sYGbB3DVbZ94SMPPqaKihNilmcM",
  },
});

export default request;
