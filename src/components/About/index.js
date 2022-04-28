import React from "react";

const About = () => {
  return (
    <div className="about-container d-flex flex-column w-100 justify-content-center align-items-center">
      <div className="left-panel panel justify-content-center align-items-center d-flex">
        <div className="pfp-container">
          <img src={require("./avatar2.jpg")} className="pfp" alt="pfp"></img>
        </div>
      </div>
      <div className="right-panel panel d-flex justify-content-center align-items-center">
        <div className="bio-container">
          <h1 data-testid="h1test" className="about-title">
            About Me
          </h1>
          <p data-testid="paragraph-test" className="about-text-container">
            My name is Ryan, and I am currently a student attending the Case
            Western Reserve Full Stack Web Development Bootcamp. My career began
            in equity research, where I produced research for institional
            investor clients such as pension funds. Here, I frequently used
            Python to build and organize large proprietary datasets that often
            served as the bedrock for differentiated, revenue-generating
            research. More importantly, it helped me realize my passion for
            software development and motivated my departure from the industry
            nearly a year ago. Since then, I have built dozens of projects
            leveraging technologies across the entire MERN stack, and I continue
            to be motivated by the prospect of developing unique solutions to
            unique problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
