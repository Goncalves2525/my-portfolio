import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.buttonText || theme.body,
          backgroundColor: theme.buttonPrimary || theme.text,
          border: `solid 1px ${theme.buttonPrimary || theme.text}`,
          "--btn-text": theme.buttonPrimary || theme.text,
          "--btn-bg": theme.body,
        }}
      >
        {text}
      </a>
    </div>
  );
}
