import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./Experience.css";
import { LanguageContext } from "../../context/LanguageContext";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  static contextType = LanguageContext;
  render() {
    const theme = this.props.theme;
    const { portfolio } = this.context;
    const { experience } = portfolio;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={800} distance="20px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>

          {experience.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="experience-section">
              <Fade bottom duration={800} distance="20px">
                <h2
                  className="experience-section-title"
                  style={{ color: theme.text }}
                >
                  {section.title}
                </h2>
              </Fade>
              {section.experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section.experiences.length}
                  experience={exp}
                  theme={theme}
                />
              ))}
            </div>
          ))}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
