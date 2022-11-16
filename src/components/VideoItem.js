import React, { Component } from "react"

class VideoItem extends Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.thumbnail} alt={this.props.title} />
        </div>
        <div className="content">
          <a className="header">{this.props.title}</a>
          <div className="meta">
            <span>{this.props.channel}</span>
          </div>
          <div class="description">
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItem
