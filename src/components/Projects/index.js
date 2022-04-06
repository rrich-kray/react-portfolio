import React from "react";
import Projects from "../Projects";

const Projects = (props) => {
  return (
    <section className="projects">
      {Projects.map((project) => (
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};
