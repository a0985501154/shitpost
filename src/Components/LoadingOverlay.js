import React from "react";
import "./Loading.css";
import LoadingVideo from "../Asset/Video/Loading.mp4";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <h1 className="loading-text">Site Loading</h1>
      <video autoPlay loop muted preload="auto" className="loading-video">
        <source src={LoadingVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingOverlay;
