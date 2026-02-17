import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { LanguageContext } from "../../context/LanguageContext";
import { withTranslation } from "react-i18next";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  static contextType = LanguageContext;
  render() {
    const theme = this.props.theme;
    const { t } = this.props;
    const { portfolio } = this.context;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={800} distance="20px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  {t("education.title")}
                </h1>
                <CompetitiveSites logos={portfolio.competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {portfolio.mainCertifications.certifications.length > 0 ? (
            <Certifications
              theme={this.props.theme}
              title={t("education.mainCertifications")}
              certifications={portfolio.mainCertifications.certifications}
            />
          ) : null}
          {portfolio.otherCertifications.certifications.length > 0 ? (
            <Certifications
              theme={this.props.theme}
              title={t("education.otherCertifications")}
              certifications={portfolio.otherCertifications.certifications}
            />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default withTranslation()(Education);
