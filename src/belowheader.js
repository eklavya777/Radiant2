// AdditionalComponent.js
import React from 'react';
import "./belowHeader.css";

const BelowHeader = () => {
  return (
    <div className="additional-component">
      <h2>Best website builder in the US</h2>
      <hr className='hr'/>
      <div className="flex-container">
        <p>Latest updated - February 22,2020</p>
        <p>Advertising Disclosure</p>
      </div>
      <hr className='hr'/>
      <div className="bottom-text-container">
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>
      <div className="four-text-container">
        <p>Home  ></p>
        <p>Hosting for all  ></p>
        <p>Hosting  ></p>
        <p>Hosting6  ></p>
        <p>Hosting5 </p>
      </div>
    </div>
  );
};

export default BelowHeader;
