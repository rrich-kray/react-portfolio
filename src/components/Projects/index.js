import React from "react";

const Projects = ({ data }) => {
  return (
    <>
      <div className="tile-container row justify-content-center">
        {data.map((project) => (
          <div className="tile col-2 m-3 rounded">
            <div className="image-container">
              <img src={project.backgroundImage} alt="project-screenshot" />
            </div>
            <h4>{project.name}</h4>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
