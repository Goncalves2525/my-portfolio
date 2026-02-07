import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    const title = this.props.title || "Certifications";
    const certifications = this.props.certifications || [];

    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              {title}
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
