import React from "react";
import "../styles/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
