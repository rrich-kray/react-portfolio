import React from "react";

const Projects = ({ data }) => {
  return (
    <div className="tile-container row justify-content-center">
      {data.map((project) => (
        <div className="tile col-2 m-3" key={project.name}>
          <div className="image-container">
            <img src={project.backgroundImage} alt="project-screenshot" />
          </div>
          <h5>{project.name}</h5>
          <p className="description">{project.description}</p>
          <a href={project.ghRepository}>
            <img
              src={require("./gh.svg").default}
              className="gh-icon icon"
              alt="github-icon"
            ></img>
          </a>
          <a href={project.deploymentLink}>
            <img
              src={require("./www.svg").default}
              className="www-icon icon"
              alt="www-icon"
            ></img>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
