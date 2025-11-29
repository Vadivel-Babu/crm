import React from "react";
import adobe from "../../assets/adobe.png";
import elastic from "../../assets/elastic.png";
import opendoor from "../../assets/opendoor.png";
import framer from "../../assets/framer.png";
import airtable from "../../assets/airtable.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner--img">
          <img src={adobe} alt="adobe" />
          <img src={elastic} alt="elastic" />
          <img src={opendoor} alt="opendoor" />
          <img src={airtable} alt="airtable" />
          <img src={elastic} alt="elastic" />
          <img src={framer} alt="framer" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
