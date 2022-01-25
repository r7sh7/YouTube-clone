import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAX77tiRcG8CTHobRBy8W37PIM80RwsL88",
  },
});

export default request;
