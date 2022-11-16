import axios from "axios"

const KEY = "AIzaSyCFoODfGKkHELhcyLDFrKEHC8YpJYi8naU"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
})
