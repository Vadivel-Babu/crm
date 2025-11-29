import "./analyticscard.css";

const AnalyticsCard = ({ type = "sec" }) => {
  return (
    <div className="analyticscard">
      <h1>Average Reply time</h1>
      <div>
        <p className="analytics__content">
          For highest customer satisfaction rates you should aim to reply to an
          incoming customer's message in 15 seconds or less. Quick responses
          will get you more conversations, help you earn customers trust and
          make more sales.
        </p>
        {type === "sec" && <p className="sec">0 secs</p>}
        {type === "per" && (
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
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
