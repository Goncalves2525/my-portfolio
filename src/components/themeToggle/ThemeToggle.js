import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const isDay = mode === "day";

  return (
    <button
      className={`theme-toggle${isDay ? " theme-toggle--day" : ""}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDay ? "night" : "day"} mode`}
      title={`Switch to ${isDay ? "night" : "day"} mode`}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__stars" />
        <span className="theme-toggle__clouds" />
      </span>
      <span className="theme-toggle__knob">
        {/* Moon icon */}
        <svg
          className="theme-toggle__moon"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="14"
          height="14"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        {/* Sun icon */}
        <svg
          className="theme-toggle__sun"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="14"
          height="14"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
