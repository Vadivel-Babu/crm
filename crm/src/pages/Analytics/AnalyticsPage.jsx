import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import "./analytics.css";
import Chart from "../../components/Chart/Chart";
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
import AnalyticPercent from "../../components/AnalyticPercent/AnalyticPercent";

const data = [
  { week: "Week 1", value: 15 },
  { week: "Week 2", value: 18 },
  { week: "Week 3", value: 12 },
  { week: "Week 4", value: 10 },
  { week: "Week 5", value: 14 },
  { week: "Week 6", value: 13 },
  { week: "Week 7", value: 8 },
  { week: "Week 8", value: 12 },
  { week: "Week 9", value: 18 },
  { week: "Week 10", value: 20 },
];

const AnalyticsPage = () => {
  return (
    <div className="analyticspage">
      <HeaderText text={"Analytics"} />
      <div className="analytic__chart">
        <Chart data={data} />
      </div>
      <AnalyticsCard type="sec" />
      <AnalyticPercent />
      <AnalyticsCard />
    </div>
  );
};

export default AnalyticsPage;
