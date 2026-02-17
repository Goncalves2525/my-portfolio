import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { LanguageContext } from "../../context/LanguageContext";
import { withTranslation } from "react-i18next";
import { Fade } from "react-reveal";

class Educations extends Component {
  static contextType = LanguageContext;
  render() {
    const theme = this.props.theme;
    const { t } = this.props;
    const { portfolio } = this.context;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              {t("education.degreesReceived")}
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {portfolio.degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default withTranslation()(Educations);
