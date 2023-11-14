// VideoBackground.js

import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="card">
          {/* Your card content with buttons */}
          <div className="card-content">
            <h2>Card Title</h2>
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
