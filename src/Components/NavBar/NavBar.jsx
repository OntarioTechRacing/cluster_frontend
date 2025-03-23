import React from "react";
import "../NavBar/Navbar.css";
import Logo from "../../Assets/OTRLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faShareNodes,
  faPlusSquare,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

// TODO: Work on passing a prop as the active status for the navbar so that the active link can be highlighted

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#cluster-overview">
            <FontAwesomeIcon icon={faServer} style={{ color: "black" }} />
            Cluster Overview
          </a>
        </li>
        <li>
          <a href="#job-runs">
            <FontAwesomeIcon icon={faShareNodes} style={{ color: "black" }} />
            Job Runs
          </a>
        </li>
        <li>
          <a href="#file-upload">
            <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black" }} />
            File Upload
          </a>
        </li>
        <li>
          <a href="#performance-metrics">
            <FontAwesomeIcon icon={faChartBar} style={{ color: "black" }} />
            Performance Metrics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
