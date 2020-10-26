import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const items = [];
for (let i = 0; i < 4; i++) {
  items.push(
    <li className="reviews-content-item col-5 d-flex justify-content-start pb-5">
      <div className="reviews-content-item-image mr-3" />
      <LoremIpsum p={1} avgSentencesPerParagraph={3} />
    </li>,
  );
}
export function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews-title pt-4">
        <p>Reviews</p>
      </div>
      <div className="reviews-content">
        <ul className="row ml-3 mt-4">
          {items}
        </ul>
      </div>
    </div>

  );
}
