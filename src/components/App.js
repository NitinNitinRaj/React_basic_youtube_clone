import React, { Component } from "react";
import YoutubeApi from "../apis/YoutubeApi";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  onSearch = async (term) => {
    const response = await YoutubeApi.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      // selectedVideo: response.data.items[0],
    });
  };
  render() {
    return (
      <div className="ui segment">
        <SearchBar onSearch={this.onSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
