import React from "react";
import "../styles/main.css";
import video from "../video/video.mp4";

function Main() {
  return (
    <div id="drum-container">
      <div className="overlay"></div>
      <video autoPlay loop id="video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Main;
