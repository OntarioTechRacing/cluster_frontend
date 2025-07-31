import { React, useState } from "react";
import Navbar from "../NavBar/Navbar.jsx"; // Ensure this path is correct
import "./Hero.css";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import Simulation from "../Simulation/Simulation.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faCircleInfo,
  faCircle,
  faCirclePlay,
  faCircleCheck,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons";
import ForceResults from "../../pages/PostProcessing/ForceResults.jsx";

import { Link } from "react-router-dom";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Active Simulations");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="hero-layout">
      {/* Add Navbar */}
      <Navbar />
      {/* Hero Content */}
      <div className="hero-content">
        <div className="headerLinks">
          <ul className="headerLinks-list">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">Simulation Runs</a>
            </li>
            <li>
              <Link to="/force-results">Force Results</Link>
            </li>
            <li>
              <a href="./">Simulation Comparisons</a>
            </li>
          </ul>
          <hr className="hr-element" />
        </div>
        <div className="hero-header">
          <h1 className="hero-user">Welcome, User</h1>
          <div className="hero-buttons">
            <button className="profile-btn">
              <FontAwesomeIcon icon={faUser} /> Profile
            </button>
            <button className="info-btn">
              <FontAwesomeIcon icon={faCircleInfo} /> Information
            </button>
          </div>
        </div>
        <div className="notifications">
          <h3>
            <FontAwesomeIcon icon={faBell} /> New Notifications
          </h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircle} /> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent viverra.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} /> Lorem ipsum dolor sit amet,
              consectetur.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} /> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} /> 5+ more...
            </li>
          </ul>
        </div>
        <h1 className="overview-title">Overview</h1>
        <div className="overview">
          <div className="overview-item">
            <h3>
              Active Simulations
              <FontAwesomeIcon icon={faCirclePlay} />
            </h3>
            <p>2</p>
          </div>
          <div className="overview-item">
            <h3>
              Completed Simulations
              <FontAwesomeIcon icon={faCircleCheck} />
            </h3>
            <p>5</p>
          </div>
          <div className="overview-item">
            <h3>
              Cluster Utilization
              <FontAwesomeIcon icon={faPieChart} />
            </h3>
            <p>78%</p>
            <ProgressBar percentage={78} />
          </div>
        </div>
        <div className="status">
          <h3 className="status-header">Status</h3>
          <div className="tabs">
            <button
              className={activeTab === "Active Simulations" ? "active-tab" : ""}
              onClick={() => handleTabClick("Active Simulations")}
            >
              Active Simulations
            </button>
            <button
              className={
                activeTab === "Completed Simulations" ? "active-tab" : ""
              }
              onClick={() => handleTabClick("Completed Simulations")}
            >
              Completed Simulations
            </button>
          </div>
          <div className="simulations">
            <Simulation
              name="Simulation 1"
              startedHoursAgo={3}
              progressPercentage={50}
            />
            <Simulation
              name="Simulation 2"
              startedHoursAgo={1}
              progressPercentage={25}
            />
          </div>
          <button className="new-simulation-btn">+ Start New Simulation</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
