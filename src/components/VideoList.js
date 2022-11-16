import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosList = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  if (!videos.length) {
    return <div></div>;
  }
  return (
    <div className="ui segment">
      <div className="ui relaxed divided list">{videosList}</div>
    </div>
  );
};

export default VideoList;
