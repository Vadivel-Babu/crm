import React, { useState } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import search from "../../assets/images/search.svg";
import "./dashboard.css";

const DashboardPage = () => {
  const [tab, setTab] = useState("all");
  return (
    <div className="dashboard">
      <HeaderText text={"dashboard"} />
      <div className="search">
        <img src={search} alt="search" className="search__img" />
        <input
          type="text"
          placeholder="Search for ticket"
          className="search__input"
        />
      </div>
      <div className="tab">
        <button
          onClick={() => setTab("all")}
          className={`tab__content${tab === "all" ? "--active" : ""}`}
        >
          All tickets
        </button>
        <button
          onClick={() => setTab("resolve")}
          className={`tab__content${tab === "resolve" ? "--active" : ""}`}
        >
          Resolved
        </button>
        <button
          onClick={() => setTab("unresolve")}
          className={`tab__content${tab === "unresolve" ? "--active" : ""}`}
        >
          Unresolved
        </button>
      </div>
      <div className="ticket">
        <div className="ticket__card">
          <div className="ticket__head">
            <h1 className="ticket__title">Ticket# 2023-00123</h1>
            <p className="ticket__date">Posted at 12:45 AM</p>
          </div>
          <div className="ticket__content">
            <h1 className="ticket__content--title">Ticket# 2023-00123</h1>
            <p className="ticket__time">10:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
