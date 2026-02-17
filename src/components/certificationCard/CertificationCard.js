import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { withTranslation } from "react-i18next";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    const { t } = this.props;
    return (
      <Fade bottom duration={600} distance="20px">
        <div
          className="cert-card"
          style={{
            backgroundColor: theme.cardBackground || theme.highlight,
            border: `1px solid ${theme.cardBorder || "#d9dbdf"}`,
            boxShadow: theme.cardShadow || "5px 5px 5px #d9dbdf",
          }}
        >
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                {certificate.iconifyClassname ? (
                  <div className="logo_img">
                    <span
                      className="iconify"
                      data-icon={certificate.iconifyClassname}
                      style={certificate.iconStyle}
                      data-inline="false"
                    ></span>
                  </div>
                ) : (
                  <img
                    className="logo_img"
                    src={require(`../../assets/images/${certificate.logo_path}`)}
                    alt={certificate.alt_name}
                  />
                )}
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  {t("buttons.viewCertificate")}
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default withTranslation()(CertificationCard);
