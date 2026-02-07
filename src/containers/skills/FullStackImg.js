import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    return (
      <img
        src={require("../../assets/images/fullstack.svg")}
        alt="Full Stack Development Illustration"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  }
}
