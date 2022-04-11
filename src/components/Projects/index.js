import React from "react";

const Projects = ({ data }) => {
  const deploymentIconToggle = (project) => {
    if (project.deploymentLink) {
      return (
        <a href={project.deploymentLink} target="_blank" rel="noreferrer">
          <img
            src={require("./www.svg").default}
            className="www-icon icon"
            alt="www-icon"
          ></img>
        </a>
      );
    }
  };
  return (
    <div className="tile-container">
      {data.map((project) => (
        <div className="tile m-3" key={project.name}>
          <div className="image-container">
            <img src={project.backgroundImage} alt="project-screenshot" />
          </div>
          <h5>{project.name}</h5>
          <p className="description">{project.description}</p>
          <a href={project.ghRepository} target="_blank" rel="noreferrer">
            <img
              src={require("./gh.svg").default}
              className="gh-icon icon"
              alt="github-icon"
            ></img>
          </a>
          {deploymentIconToggle(project)}
        </div>
      ))}
    </div>
  );
};

export default Projects;
