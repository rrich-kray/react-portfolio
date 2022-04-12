import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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
    expect(getByTestId("h1test")).toHaveTextContent("About Me");
  });
});
