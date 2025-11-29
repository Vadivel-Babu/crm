import React from "react";
import "./analyticpercent.css";

const AnalyticPercent = () => {
  return (
    <div className="analyticspercent">
      <div>
        <h1>Resolved Tickets</h1>
        <p className="analyticspercent__content">
          A callback system on a website, as well as proactive invitations, help
          to attract even more customers. A separate round button for ordering a
          call with a small animation helps to motivate more
          customers to make calls.
        </p>
      </div>

      <div className="analytics__percentage">
        <div
          style={{
            backgroundImage: `conic-gradient(#00d907 0deg,#00d907 ${
              (75 / 100) * 360
            }deg,rgba(91, 147, 255, 0.05) 0deg,rgba(91, 147, 255, 0.05) 360deg)`,
          }}
          className="progress-circle"
        >
          <div className="progress-fill">75</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticPercent;
