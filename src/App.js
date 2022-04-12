/*
S - Single Responsibility Principle
O - Open/Closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle
*/

import React, { useState } from "react";
import Hero from "./components/Hero/index";
import Footer from "./components/Footer/index";
import Projects from "./components/Projects/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Resume from "./components/Resume/index";
import data from "./components/Projects/data";

const App = () => {
  const sections = ["projects", "about me", "contact", "resume"];
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isSearchActive, setSearch] = useState(false);
  // const [loading, setLoading] = useState(true);

  const renderSection = () => {
    let activeSection;
    if (currentSection === "projects") activeSection = <Projects data={data} />;
    if (currentSection === "about me") activeSection = <About />;
    if (currentSection === "contact") activeSection = <Contact />;
    if (currentSection === "resume") activeSection = <Resume />;
    return activeSection;
  };

  return (
    // can only return one element, but that element can have child elements
    <div className="main-wrapper">
      <Hero
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sections={sections}
        isSearchActive={isSearchActive}
        setSearch={setSearch}
      />
      <div className="main-section container-fluid">{renderSection()}</div>
      <Footer />
    </div>
  );
};

export default App;
