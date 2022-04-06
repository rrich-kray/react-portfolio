import React, { useState } from "react";
import Hero from "./components/Hero/index";
import Footer from "./components/Footer/index";
import Projects from "./components/Projects/index";
import About from "./components/About/index";

// This is where all of the components will reside

function App() {
  const sections = ["welcome", "projects", "about me", "contact"];
  const [currentSection, setCurrentSection] = useState(sections[0]);
  return (
    // can only return one element, but that element can have child elements
    <div className="main-wrapper">
      <Hero />
      <div className="main-section"></div>
    </div>
  );
}

export default App;
