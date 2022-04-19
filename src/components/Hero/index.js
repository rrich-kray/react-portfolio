import React from "react";

const Hero = (props) => {
  const {
    currentSection,
    setCurrentSection,
    isSearchActive,
    setSearch,
    sections,
  } = props;

  // const searchDisplayToggle = () => {
  //   if (isSearchActive === true) {
  //     return (
  //       <div className="hero-body d-flex justify-content-around align-items-center w-100 h-100">
  //         <div className="project-search d-flex justify-self-start">
  //           <label for="search">Search</label>
  //           <input type="text" name="search" className="search"></input>
  //         </div>
  //       </div>
  //     );
  //   }
  // };
  // const searchBtnDisplayToggle = () => {
  //   if (currentSection === "projects") {
  //     return (
  //       <li>
  //         <button
  //           className="nav-btn"
  //           onClick={() => setSearch(!isSearchActive)}
  //         >
  //           Search
  //         </button>
  //       </li>
  //     );
  //   }
  // };

  return (
    <div className="hero d-flex flex-column">
      <div className="d-flex navbar">
        <div className="logo-container d-flex justify-content-start align-items-center">
          <img
            src={require("./monkey.svg").default}
            className="lightbulb"
            alt="lightbulb"
          />
        </div>
        <ul className="nav-links-container d-flex justify-content-end align-items-center nav-links h-100 w-50">
          {sections.map((section) => (
            <li className="nav-item">
              <button
                className="nav-btn"
                onClick={() => setCurrentSection(section)}
                key={section}
                alt={`${section}-section`}
              >
                {section.split(" ")
                  ? section
                      .split(" ")
                      .map(
                        (word) => " " + word[0].toUpperCase() + word.slice(1)
                      )
                  : section[0].toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
          {/* {searchBtnDisplayToggle()} */}
        </ul>
      </div>
      {/* {searchDisplayToggle()} */}
    </div>
  );
};

// container-fluid centers items and expands element 100vw

export default Hero;
