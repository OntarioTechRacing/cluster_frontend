import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

function Simulation({ name, startedHoursAgo, progressPercentage }) {
  return (
    <div>
      <div className="simulation">
        <div className="simulation-info">
          <h4>{name}</h4>
          <p>Started {startedHoursAgo} hours ago</p>
        </div>
        <div className="progress">
          <ProgressBar percentage={progressPercentage} />
        </div>
      </div>
    </div>
  );
}

export default Simulation;
