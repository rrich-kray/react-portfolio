import React from "react";
import data from "./data";

const Projects = ({ data }) => {
  return (
    <>
      {data.map((project) => (
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </>
  );
};

export default Projects;
