import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login.png";
import "./signup.css";

const Signup = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="content">
          <div className="content__left">
            <div className="wrapper">
              <img src="/hub.svg" alt="logo" />
              <h1>Hubly</h1>
            </div>
            <div className="form__wrapper">
              <div className="form form__signup">
                <div className="form__head">
                  <h1 className="form__title">Create an account</h1>
                  <Link to={"/"} className="signin__link">
                    Sign in instead
                  </Link>
                </div>

                <form className="form__input">
                  <div className="input__wrapper">
                    <label className="lable" htmlFor="firstname">
                      First name
                    </label>
                    <input type="text" className="input" name="name" id="" />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="lastname">Last name</label>
                    <input
                      type="text"
                      className="input"
                      name="lastname"
                      id=""
                    />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="Email">Email</label>
                    <input type="text" className="input" name="Email" id="" />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="Password">Password</label>
                    <input
                      type="text"
                      className="input"
                      name="Password"
                      id=""
                    />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="Confirm Password">Confirm Password</label>
                    <input
                      type="text"
                      className="input"
                      name="Confirm Password"
                      id=""
                    />
                  </div>
                  <div className="input__wrapper input__wrapper--checkbox">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="accept"
                      />
                      <span className="checkmark"></span>
                      <p className="terms">
                        By creating an account, I agree to our{" "}
                        <u>Terms of use</u> and <u>Privacy Policy</u>
                      </p>
                    </label>
                  </div>
                  <button className="btn btn__submit" type="submit">
                    Create an account
                  </button>
                </form>
              </div>
              <p className="policy">
                This site is protected by reCAPTCHA and the{" "}
                <u> Google Privacy Policy</u>
                and <u>Terms of Service</u> apply.
              </p>
            </div>
          </div>
          <div className="content__right">
            <img src={img} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
