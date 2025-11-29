import React from "react";
import hero from "../../assets/hero.png";
import card from "../../assets/Card 1.png";
import calender from "../../assets/Calendar.png";
import graph from "../../assets/garph.png";
import arrow from "../../assets/arrow.svg";
import play from "../../assets/play.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__right">
          <h1 className="title">Grow Your Business Faster with Hubly CRM</h1>
          <p className="para">
            Manage leads, automate workflows, and close deals effortlessly—all
            in one powerful platform.
          </p>
          <div className="actions">
            <button className="hero--btn">
              Get started
              <img src={arrow} alt="arrow" />
            </button>
            <button className="hero--btn">
              <img src={play} alt="play" />
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero__left">
          <img src={hero} alt="hero" />
          <img src={card} alt="card" className="img card" />
          <img src={calender} alt="calender" className="img calender" />
          <img src={graph} alt="graph" className="img graph" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
