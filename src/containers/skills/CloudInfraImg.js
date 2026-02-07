import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        src={require("../../assets/images/devops.svg")}
        alt="DevOps Illustration"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  }
}
