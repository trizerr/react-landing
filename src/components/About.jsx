import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

export function About() {
  return (
    <div className="about row m-0">
      <div className="col-6 about-content ml-5 mt-5">
        <h2>About your product</h2>
        <br />
        <LoremIpsum p={2} avgSentencesPerParagraph={5} />
        <br />
        <br />
      </div>
      <div className=" col-5 mt-5 d-flex justify-content-end">
        <div className="about-image" />
      </div>
    </div>
  );
}
