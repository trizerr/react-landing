import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { LoremIpsum } from 'react-lorem-ipsum';

const items = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; i++) {
  items.push(
    <li className="pluses-list-item col-6">
        <FontAwesomeIcon icon={faPlusSquare} className="mr-2" pull="left" size="3x" />
        <LoremIpsum p={1} avgSentencesPerParagraph={3} />

    </li>,
  );
}

export function Pluses() {
  return (
    <div className="pluses m-0">
      <div className="pluses-title pt-5">
        <p>Dignity and pluses of the product</p>
      </div>
      <div className="  pluses-list">
        <ul className="row mt-4 ml-3">
          {items}
        </ul>
      </div>
    </div>
  );
}
