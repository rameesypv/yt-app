import axios from "axios";

const KEY = "AIzaSyBs9lXGo3P5Y_UeoLTGj_l7IqFStzklcGI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
