import React from "react";
import "../assets/css/AIOrbit3Cards.css";

const AIOrbit3Cards = () => {
  return (
    <div className="orbit-container">

      {/* Center AI Core */}
      <div className="core">
        🤖 AI CORE
      </div>

      {/* Orbit Wrapper */}
      <div className="orbit">

        <div className="card card1">
          Smart Analysis
        </div>

        <div className="card card2">
          Automation
        </div>

        <div className="card card3">
          Prediction
        </div>

      </div>

    </div>
  );
};

export default AIOrbit3Cards;