import React from "react";

function Hero(props) {
  const { setCurrentSection, sections } = props;
  console.log(sections);
  return (
    <div className="hero">
      <div className="navbar">
        <ul>
          {sections.map((section) => (
            <li>
              <a
                href={`#${section}`}
                onClick={() => setCurrentSection(section)}
                key={section}
                alt={`${section}-section`}
              >
                {section}
              </a>
            </li>
          ))}
          ;
        </ul>
      </div>
      <div className="hero-body">
        <h1 alt="">Welcome</h1>
      </div>
    </div>
  );
}

export default Hero;
