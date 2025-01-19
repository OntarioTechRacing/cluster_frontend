import React from "react";
import otrLogo from "../../Images/icons/otrLogo.svg";
import "./SideNavBar.css";
export default function SideNavBar() {
  return (
    <main className="NavBar">
      <header>
        <img className="Otrlogo" src={otrLogo} alt="" />
      </header>
      <ul className="NavMenu">
        <li>Cluster Overview</li>
        <li>Job Runs</li>
        <li>File Upload</li>
        <li>Performance Metrics</li>
      </ul>
    </main>
  );
}
