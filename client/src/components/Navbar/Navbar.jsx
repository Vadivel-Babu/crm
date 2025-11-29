import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <img src="/hub.svg" className="logo__img" alt="logo" />
          <h1 className="title">Hubly</h1>
        </div>
        <div className="links">
          <button className="btn btn--login">Login</button>
          <button className="btn btn--signup">signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
