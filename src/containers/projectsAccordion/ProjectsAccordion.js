import React, { Component } from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard.js";
import "./ProjectsAccordion.css";

class ProjectsAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-accord">
        {this.props.sections.map((section) => {
          return (
            <div key={section["title"]} className="project-section">
              {/* Section Title (Personal Projects / Academic Projects) */}
              <h2 className="section-title" style={{ color: theme.text }}>
                {section["title"]}
              </h2>

              {/* Render all projects with their categories */}
              <div className="repo-cards-div-main">
                {section["projects"] &&
                  section["projects"].map((project) => {
                    return (
                      <GithubRepoCard
                        repo={project}
                        theme={theme}
                        categories={project.categories}
                        key={project.id}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectsAccordion;
