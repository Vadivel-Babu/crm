import "./solution.css";
import solution from "../../assets/solution.png";

const Solution = () => {
  return (
    <div className="solution">
      <div className="container">
        +
        <div className="solution__content">
          <div className="solution__right">
            <div className="solution__right-title">
              <h1>MULTIPLE PLATFORMS TOGETHER!</h1>
              <p>
                Email communication is a breeze with our fully integrated, drag
                & drop email builder.
              </p>
            </div>
            <div className="solution__right-title">
              <h1>CLOSE</h1>
              <p>
                Capture leads using our landing pages, surveys, forms,
                calendars, inbound phone system & more!
              </p>
            </div>
            <div className="solution__right-title">
              <h1>NURTURE</h1>
              <p>
                Capture leads using our landing pages, surveys, forms,
                calendars, inbound phone system & more!
              </p>
            </div>
          </div>
          <div className="solution__left">
            <img src={solution} alt="solution" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
