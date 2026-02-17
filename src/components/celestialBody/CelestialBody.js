import React from "react";
import "./CelestialBody.css";

const CelestialBody = () => {
  return (
    <div className="celestial-container" aria-hidden="true">
      {/* Moon — visible in night mode */}
      <div className="celestial-moon">
        <div className="celestial-moon__glow" />
        <div className="celestial-moon__body">
          <div className="celestial-moon__crater celestial-moon__crater--1" />
          <div className="celestial-moon__crater celestial-moon__crater--2" />
          <div className="celestial-moon__crater celestial-moon__crater--3" />
        </div>
      </div>

      {/* Sun — visible in day mode */}
      <div className="celestial-sun">
        <div className="celestial-sun__glow" />
        <div className="celestial-sun__body" />
      </div>
    </div>
  );
};

export default CelestialBody;
