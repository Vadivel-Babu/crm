import React from "react";
import "./plan.css";
import check from "../../assets/Check.svg";

const Plan = () => {
  return (
    <div className="plan">
      <div className="container">
        <h1 className="plan__title">We have plans for everyone!</h1>
        <p className="plan__para">
          We started with a strong foundation, then simply built all of the
          sales and marketing tools ALL businesses need under one platform.
        </p>
        <div className="plan__cards">
          <div className="card">
            <h1>STARTER</h1>
            <p>
              Best for local businesses needing to improve their online
              reputation.
            </p>
            <p className="price">
              $199 <span>/monthly</span>
            </p>
            <div className="card__details">
              <h1>What’s included</h1>
              <ul className="points">
                <li>
                  <img src={check} alt="check" />
                  Unlimited Users
                </li>
                <li>
                  <img src={check} alt="check" />
                  GMB Messaging
                </li>
                <li>
                  <img src={check} alt="check" />
                  Reputation Management
                </li>
                <li>
                  <img src={check} alt="check" />
                  GMB Call Tracking
                </li>
                <li>
                  <img src={check} alt="check" />
                  24/7 Award Winning Support
                </li>
              </ul>
            </div>
            <button className="card--btn card1-btn">SIGN UP FOR STARTER</button>
          </div>
          <div className="card">
            <h1>GROW</h1>
            <p>
              Best for all businesses that want to take full control of their
              marketing automation and track their leads, click to close.
            </p>
            <p className="price">
              $399 <span>/monthly</span>
            </p>
            <div className="card__details">
              <h1>What’s included</h1>
              <ul className="points">
                <li>
                  <img src={check} alt="check" />
                  Pipeline Management
                </li>
                <li>
                  <img src={check} alt="check" />
                  Marketing Automation Campaigns
                </li>
                <li>
                  <img src={check} alt="check" />
                  Live Call Transfer
                </li>
                <li>
                  <img src={check} alt="check" />
                  Embed-able Form Builder
                </li>

                <li>
                  <img src={check} alt="check" />
                  Reputation Management
                </li>
                <li>
                  <img src={check} alt="check" />
                  24/7 Award Winning Support
                </li>
              </ul>
            </div>
            <button className="card--btn">SIGN UP FOR STARTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
