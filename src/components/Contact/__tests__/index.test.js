import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../index";

afterEach(cleanup);

describe("Component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("Component matches DOM structure", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Contact component renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("contact").toHaveTextContent("Contact"));
  });

  it("email renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("email")).toHaveTextContent(
      "Email: rrich.kray.93@gmail.com"
    );
  });

  it("GitHub renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("gh")).toHaveTextContent(
      "GitHub: https://rrich-kray.github.io"
    );
  });
});
