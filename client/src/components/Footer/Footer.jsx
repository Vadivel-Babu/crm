import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/hub.svg" className="logo__img" alt="logo" />
        <h1 className="title">Hubly</h1>
      </div>
      <div className="footer__content top">
        <div className="footer__wrapper">
          <h1>Product</h1>
          <ul>
            <li>Universal checkout</li>
            <li>Payment workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & integrations</li>
          </ul>
        </div>
        <div className="footer__wrapper">
          <h1>Product</h1>
          <ul>
            <li>Universal checkout</li>
            <li>Payment workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & integrations</li>
          </ul>
        </div>
        <div className="footer__wrapper">
          <h1>Product</h1>
          <ul>
            <li>Universal checkout</li>
            <li>Payment workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & integrations</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
