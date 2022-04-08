import React from "react";

const Hero = (props) => {
  const { setCurrentSection, sections } = props;
  return (
    <div className="hero d-flex flex-column">
      <div className="d-flex navbar">
        <div className="logo-container d-flex justify-content-start align-items-center">
          <img
            src="../../../public/assets/images/lightbulb.svg"
            alt="lightbulb"
          />
        </div>
        <ul className="nav-links-container d-flex justify-content-end align-items-center nav-links h-100 w-50">
          {sections.map((section) => (
            <li className="nav-item ">
              <a
                className="nav-link"
                href={`#${section}`}
                onClick={() => setCurrentSection(section)}
                key={section}
                alt={`${section}-section`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-body d-flex justify-content-around align-items-center w-100 h-100">
        <div className="project-search d-flex justify-self-start">
          <input type="text"></input>
        </div>
        <div>Test</div>
      </div>
    </div>
  );
};

// container-fluid centers items and expands element 100vw

export default Hero;
