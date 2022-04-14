import React from "react";

const Resume = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript ES6+",
    "SASS",
    "SQL",
    "MySQL",
    "Sequelize",
    "GitHub",
    "Handlebars",
    "jQuery",
    "Bootstrap",
    "PHP",
    "MERN Stack (MongoDB, Express, React, Node)",
    "GraphQL",
    "Apollo",
  ];

  const brandStatement = `
  Full-stack web developer leveraging background in business to provide unique perspectives on how to solve real-world problems. Earned a certificate in Full-Stack Web Development from the CWRU Coding Boot Camp. I am a passionate, detail-oriented coder with experience leveraging both front and back-end technologies. I built a MySQL database to query and display employee information. I developed a Sequelize relational database to house data for the front-end of a fictional Ecommerce website. I am avidly searching for a role and firm conducive to the establishment of a long-term, fulfilling career as a developer.
  `;

  const resumeLink =
    "https://docs.google.com/document/d/1gzlYNrQPsWXRgWO9sgm8WkaF6DgDphDc/edit?usp=sharing&ouid=108149335393344460606&rtpof=true&sd=true";

  return (
    <div className="resume-container">
      <div className="brand-header d-flex justify-content-center align-items-center">
        <h3>Brand Statement</h3>
      </div>
      <div className="brand-statement">{brandStatement}</div>
      <div className="skills-header d-flex justify-content-center align-items-center">
        <h3>Technical Skills</h3>
      </div>
      <div className="skills-container d-flex justify-content-center">
        <ul className="skills-list">
          {skills.map((skill) =>
            skills.indexOf(skill) !== skills.length - 1 ? (
              <li className="skill" key={skill}>{`${skill},`}</li>
            ) : (
              <li className="skill" key={skill}>
                {skill}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="resume-container d-flex justify-content-center">
        <a
          href={resumeLink}
          alt="resume-link"
          className="resume-link"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
