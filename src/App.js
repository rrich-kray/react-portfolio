import React, { useState } from "react";
import Hero from "./components/Hero/index";
import Footer from "./components/Footer/index";
import Projects from "./components/Projects/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import data from "./components/Projects/data";

// This is where all of the components will reside

const App = () => {
  const sections = ["projects", "about me", "contact", "loading"];
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [loading, setLoading] = useState(true);

  const renderSection = () => {
    let activeSection;
    if (currentSection === "projects") activeSection = <Projects data={data} />;
    if (currentSection === "about me") activeSection = <About />;
    if (currentSection === "contact") activeSection = <Contact />;
    return activeSection;
  };

  return (
    // can only return one element, but that element can have child elements
    <div className="main-wrapper container-fluid">
      <Hero
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sections={sections}
      />
      <div className="main-section">{renderSection()}</div>
      <Footer />
    </div>
  );
};

// cannot update App while rendering Hero

export default App;

// How can I use currentSection to conditionally render components?
// Pass down currentSection state and setCurrentSection setter to Nav component, and each link uses setCurrentSection to change state in parent
// isActive state?
// isContactActive, isWelcomeActive, etc
// Create sections array of objects consisting of name and isDisplayed properties: loop through object and render based on which object's isDisplayed property is set to true
// multiple if/return statements. Code may become unwieldy
