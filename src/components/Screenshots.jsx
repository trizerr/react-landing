import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const items = [];
for (let i = 0; i < 4; i++) {
  items.push(
    <li className="screenshots-content-item col-5 d-flex justify-content-start pb-5">
      <div className="screenshots-content-item-image mr-3" />
      <LoremIpsum p={1} avgSentencesPerParagraph={3} />
    </li>,
  );
}
export function Screenshots() {
  return (
    <div className="screenshots">
      <div className="screenshots-title mt-3">
        <p>Screenshots</p>
      </div>
      <div className="screenshots-content">
        <ul className="row ml-3 mt-4">
          {items}
        </ul>
      </div>
    </div>

  );
}
