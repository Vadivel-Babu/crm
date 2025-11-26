import React, { useState } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import info from "../../assets/images/info.svg";
import "./setting.css";

const SettingPage = () => {
  const [visible, setVisible] = useState(null);
  return (
    <div className="settingpage">
      <HeaderText text={"settings"} />
      <div className="setting__content">
        <div className="tab tab__setting">
          <button className={`tab__content--active tab__setting--btn`}>
            Edit Profile
          </button>
        </div>
        <form className="edit__form">
          <div className="edit__input--wrapper">
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" className="setting__input" />
          </div>
          <div className="edit__input--wrapper">
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" className="setting__input" />
          </div>
          <div className="edit__input--wrapper">
            <label htmlFor="firstname">Email</label>
            <div className="tooltip">
              <input
                type="mail"
                name="Email"
                className="setting__input"
                readOnly
              />
              <div className="tooltip__container">
                <p
                  onMouseEnter={() => setVisible(1)}
                  onMouseLeave={() => setVisible(null)}
                  className="tooltip__icon"
                >
                  <img src={info} alt="icon" />
                </p>
                {visible === 1 && (
                  <p className="tooltip__content">
                    This is for readonly can'nt be edit
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="edit__input--wrapper">
            <label htmlFor="password">password</label>
            <div className="tooltip">
              <input
                type="password"
                name="password"
                className="setting__input"
              />
              <div className="tooltip__container">
                <p
                  onMouseEnter={() => setVisible(2)}
                  onMouseLeave={() => setVisible(null)}
                  className="tooltip__icon"
                >
                  <img src={info} alt="icon" />
                </p>
                {visible === 2 && (
                  <p className="tooltip__content">
                    User will logged out immediately
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="edit__input--wrapper">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <div className="tooltip">
              <input
                type="password"
                name="Confirm Password"
                className="setting__input"
              />
              <div className="tooltip__container">
                <p
                  onMouseEnter={() => setVisible(3)}
                  onMouseLeave={() => setVisible(null)}
                  className="tooltip__icon"
                >
                  <img src={info} alt="icon" />
                </p>
                {visible === 3 && (
                  <p className="tooltip__content">
                    User will logged out immediately
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="btn__wrapper">
            <button className="btn btn--save">save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingPage;
