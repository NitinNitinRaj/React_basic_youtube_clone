import axios from "axios";

const KEY = "AIzaSyAJdjONyWvwqWg9T0XWUKjaXaV-RlZmy5A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
