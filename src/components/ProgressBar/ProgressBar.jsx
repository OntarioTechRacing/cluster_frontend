import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
