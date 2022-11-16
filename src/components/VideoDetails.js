import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const videoScr = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoScr}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
