import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/skills/fullstack.svg`}
        alt="Full Stack Development Illustration"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  }
}
