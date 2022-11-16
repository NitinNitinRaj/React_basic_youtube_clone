import React, { Component } from "react"
import VideoItem from "./VideoItem"

class VideoList extends Component {
  render() {
    const videosList = this.props.videos.map((video) => (
      <VideoItem
        key={video.id.videoId}
        title={video.snippet.title}
        thumbnail={video.snippet.thumbnails.default.url}
        desc={video.snippet.description}
        channel={video.snippet.channelTitle}
      />
    ))
    return (
      <div className="ui segment">
        <h3 className="ui dividing header">Suggestions</h3>
        <div className="ui unstackable items">{videosList}</div>
      </div>
    )
  }
}

export default VideoList
