import {React, useState} from "react"; 
// import FileUpload from "./Components/FileUpload/FileUpload.jsx";
import Navbar from "../NavBar/NavBar";
import FileUpload from "../FileUpload/FileUpload";
import "../Hero/Hero.css";
import "./Hero.css";



const Hero = () => {


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
                  <a href="./">Force Results</a>
                </li>
                <li>
                  <a href="./">Simulation Comparisons</a>
                </li>
              </ul>
              <hr className="hr-element" />
            </div>
            {/*import file upload box*/ }
            <FileUpload></FileUpload>
          </div>
        </div>
      );
};

export default Hero;