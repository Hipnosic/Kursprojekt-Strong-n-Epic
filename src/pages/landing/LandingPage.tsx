import React from "react";
import { useNavigate } from "react-router";
import './LandingPage.css';

export default function LandingPage() {
    const navigate = useNavigate()
    
    function navigateLogin () {
        navigate("/login")
    }

    function navigateSignup () {
        navigate("/signup")
    }

    return (
        <div className="landing-page">
        <h1 className="landing-title">Strong n' Epic</h1>
        <div className="landing-btns">
            <button className="login-btn1" onClick={navigateLogin}>Log In</button>
            <button className="signup-btn" onClick={navigateSignup}>Sign Up</button>
        </div>
        </div>
  );
}
