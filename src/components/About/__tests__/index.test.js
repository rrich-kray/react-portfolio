import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testting-library/jest-dom/extend-expect";
import About from "../index";

afterEach(cleanup);

describe("Component renders", () => {
  // renders component
  it("renders", () => {
    render(<About />);
  });

  it("Matches the DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders About Me element", () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("h1test")).toHaveTextContent("About me");
  });

  it("Renders About Me Paragraph", () => {
    const { getByTestId } = render(<About />);
    const aboutMeParagraph = `Veniam ex reprehenderit consequat ex quis ad quis aliquip. Voluptate
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
      Incididunt nisi non veniam deserunt qui laboris eu quis.`;
    expect(getByTestId("paragraph-test")).toHaveTextContent(aboutMeParagraph);
  });
});
