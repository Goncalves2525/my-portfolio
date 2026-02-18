import React, { useContext } from "react";
import "./StartupProjects.css";
import { LanguageContext } from "../../context/LanguageContext";

export default function StartupProject() {
  const { portfolio } = useContext(LanguageContext);
  const { bigProjects } = portfolio;
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map((project) => {
              return (
                <div
                  className="saaya-health-div"
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img alt="Saad Working" src={project.image}></img>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
  );
}
