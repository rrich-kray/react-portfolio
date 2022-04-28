import React from "react";

const About = () => {
  return (
    <div className="about-container d-flex w-100 justify-content-center align-items-center">
      <div className="left-panel justify-content-center align-items-center d-flex">
        <div className="pfp-container">
          <img src={require("./avatar2.jpg")} className="pfp" alt="pfp"></img>
        </div>
      </div>
      <div className="right-panel d-flex justify-content-center align-items-center">
        <div className="bio-container">
          <h1 data-testid="h1test" className="about-text-container">
            About Me
          </h1>
          <p data-testid="paragraph-test">
            Veniam ex reprehenderit consequat ex quis ad quis aliquip. Voluptate
            sunt esse et eiusmod ut ullamco amet. Laboris anim ullamco cupidatat
            laborum do consequat tempor sint occaecat ad. Pariatur ut qui esse
            minim quis dolore enim id tempor deserunt. Sint ullamco occaecat
            cillum magna nisi. Ipsum quis irure enim incididunt proident dolor
            ad ad enim esse incididunt esse. Lorem velit laboris nostrud dolor
            labore eu irure reprehenderit labore. Reprehenderit ad velit labore
            eu veniam voluptate amet tempor est Lorem aliquip ea excepteur.
            Ipsum irure velit excepteur duis elit dolor occaecat culpa dolore
            excepteur. Aliqua excepteur sunt voluptate veniam consectetur. Magna
            enim ad et sit do sit dolore esse ea. Eu ut excepteur tempor eiusmod
            in. Exercitation elit do esse dolor. Velit adipisicing est ex ad
            esse deserunt officia proident adipisicing magna incididunt.
            Incididunt nisi non veniam deserunt qui laboris eu quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
