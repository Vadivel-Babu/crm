import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login.png";
import { useState } from "react";
import { loginUser } from "../../api/auth";
import { toast } from "react-toastify";
import "./login.css";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await loginUser(name, password);
      console.log(res.user, res.token);
      login(res.user, res.token);

      toast.success("login succesfully");
      navigate("/");
    } catch (error) {
      toast.error(err.response?.data?.message || "Signup failed!");
      setLoading(false);
    }
  };
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
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="input"
                      name="name"
                      value={name}
                      id=""
                    />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="input"
                      name="password"
                      id=""
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="btn btn__submit"
                    type="submit"
                  >
                    {loading ? "loading..." : "Log in"}
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
