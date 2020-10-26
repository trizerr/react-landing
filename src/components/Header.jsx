import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export function Header() {
  return (
    <div className="row header m-0">
      <div className="col-6 header-info ml-5 mt-4">
        <p className="m-0">Product Name</p>
        <ul className="mt-4">
          <li>
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Put on this page information about your product
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            A detailed description of your product
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Tell us about the advantages and merits
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Associate the page with the payment system
          </li>
        </ul>
      </div>
      <div className="col-5 mr-5 mt-5 d-flex justify-content-end">
        <div className="header-image" />
      </div>
    </div>
  );
}
