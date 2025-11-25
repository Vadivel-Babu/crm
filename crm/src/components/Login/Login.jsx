import { Link } from "react-router-dom";
import img from "../../assets/images/login.png";
import "./login.css";

const Login = () => {
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
              <div className="form">
                <h1 className="form__title">Sign in to your Plexify</h1>
                <form className="form__input">
                  <div className="input__wrapper">
                    <label className="lable" htmlFor="name">
                      Username
                    </label>
                    <input type="text" className="input" name="name" id="" />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      className="input"
                      name="password"
                      id=""
                    />
                  </div>
                  <button className="btn btn__submit" type="submit">
                    Log in
                  </button>
                  <p className="login__nav">
                    Don't have an account?
                    <Link to={"/signup"} className="link">
                      Sign up
                    </Link>
                  </p>
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

export default Login;
