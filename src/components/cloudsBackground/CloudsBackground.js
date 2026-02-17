import React from "react";
import "./CloudsBackground.css";

const clouds = [
  { id: 0, top: "12%", width: 160, opacity: 0.5, duration: 55, delay: 0 },
  { id: 1, top: "28%", width: 120, opacity: 0.4, duration: 70, delay: -15 },
  { id: 2, top: "45%", width: 200, opacity: 0.35, duration: 80, delay: -30 },
  { id: 3, top: "18%", width: 100, opacity: 0.55, duration: 50, delay: -40 },
  { id: 4, top: "60%", width: 140, opacity: 0.3, duration: 65, delay: -10 },
  { id: 5, top: "75%", width: 180, opacity: 0.4, duration: 75, delay: -50 },
  { id: 6, top: "35%", width: 90, opacity: 0.45, duration: 45, delay: -25 },
  { id: 7, top: "55%", width: 110, opacity: 0.35, duration: 60, delay: -35 },
];

const CloudsBackground = () => {
  return (
    <div className="clouds-container" aria-hidden="true">
      {clouds.map((c) => (
        <div
          key={c.id}
          className="cloud"
          style={{
            top: c.top,
            width: `${c.width}px`,
            height: `${Math.round(c.width * 0.4)}px`,
            opacity: c.opacity,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CloudsBackground;
