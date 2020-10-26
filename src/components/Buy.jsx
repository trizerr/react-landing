import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';



const description = (number) => {
    const items=[];
  for (let i = 1; i < number + 1; i++) {
    items.push(
      <li className="buy-content-description-item">
          Lorem ipsum odor amet, consectetuer
      </li>,
    );
  }
  return (items);
};


export function Buy() {
  return (
    <div className="buy">
      <div className="buy-title mt-3">
        <p>Buy it Now</p>
      </div>
      <div className="buy-content row ml-5 mb-5">
        <div className="buy-content-first col-3 offset-1 ">
          <div className="buy-content-first-item">
            <p className="buy-content-title">Standart</p>
            <div className="buy-content-square">
              <div className="buy-content-price">
                <span>$100</span>
              </div>
            </div>
              <ol type="1" className="buy-content-description">
              {description(4)}
            </ol>
              <div className="buy-content-button d-flex justify-content-center align-items-center">
                  <span>Buy</span>
              </div>
          </div>

        </div>
        <div className="buy-content-second col-3 ">
          <div className="buy-content-second-item">
            <p className="buy-content-title">Premium</p>
            <div className="buy-content-square">
              <div className="buy-content-price">
                <span>$150</span>
              </div>
            </div>
            <ol type="1" className="buy-content-description">
                {description(8)}

            </ol>
              <div className="buy-content-button d-flex justify-content-center align-items-center">
                  <span>Buy</span>
              </div>
          </div>

        </div>
        <div className="buy-content-third col-3 ">
          <div className="buy-content-third-item">
            <p className="buy-content-title">Lux</p>
            <div className="buy-content-square">
              <div className="buy-content-price">
                <span>$200</span>
              </div>
            </div>
              <ol type="1" className="buy-content-description">
                {description(12)}
              </ol>
              <div className="buy-content-button d-flex justify-content-center align-items-center">
                  <span>Buy</span>
              </div>
          </div>

        </div>
      </div>
    </div>

  );
}
