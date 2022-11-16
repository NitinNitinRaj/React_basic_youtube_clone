import React, { Component } from "react"
import YoutubeApi from "../apis/YoutubeApi"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"

class App extends Component {
  state = {
    videos: [],
  }
  onSearch = async (term) => {
    const response = await YoutubeApi.get("/search", {
      params: {
        q: term,
      },
    })
    this.setState({ videos: response.data.items })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
