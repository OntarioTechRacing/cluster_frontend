import React from "react";
import TeamPhoto from "../Images/Team Photo (2).png";
import "../Components/LoginPage/LoginPage.css";
import Logo from "../assets/OTRLogo.png";


export default function LoginPage() {
  return (
    <div className="login-container">
      {/* Left side - login form */}
      <div className="login-form">
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <h2>Sign In</h2>
        <form>
          <label>Email*</label>
          <input type="email" placeholder="Enter email" required />

          <label>Password*</label>
          <input type="password" placeholder="Enter password" required />

          <button type="submit">Sign in</button>

          <p className="forgot-password">Forgot password?</p>

          <div className="divider">or</div>

          <button type="button" className="google-btn">
            Sign in with Google
          </button>
        </form>
      </div>

      {/* Right side - image */}
      <div className="login-image">
        <img src={TeamPhoto} alt="Team Photo" />
      </div>
    </div>
  );
}
