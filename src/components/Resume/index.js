import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import pdf from "./Resume.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <Document file={{ data: pdf }}>
        <Page />
      </Document>
    </div>
  );
};

export default Resume;
