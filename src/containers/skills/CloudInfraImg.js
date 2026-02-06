import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/skills/devops.svg`}
        alt="DevOps Illustration"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  }
}
