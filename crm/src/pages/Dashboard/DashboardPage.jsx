import React, { useState, useEffect } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import search from "../../assets/images/search.svg";
import "./dashboard.css";
import { getTickets } from "../../api/ticketApi";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const DashboardPage = () => {
  const [tab, setTab] = useState("");
  const { token } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [query, setQuery] = useState("");

  const loadTickets = async () => {
    try {
      console.log(tab);

      const data = await getTickets({
        token,
        status: tab,
        search: query,
      });
      console.log(data?.data?.data);
      setTickets(data?.data?.data);
    } catch (error) {
      console.log(error);
      toast.error("can not fetch ticket");
    }

    // setTickets(data);
  };

  useEffect(() => {
    loadTickets();
  }, [tab, query]);
  return (
    <div className="dashboard">
      <HeaderText text={"dashboard"} />
      <div className="search">
        <img src={search} alt="search" className="search__img" />
        <input
          type="text"
          placeholder="Search for ticket"
          className="search__input"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <div className="tab">
        <button
          onClick={() => setTab("")}
          className={`tab__content${tab === "" ? "--active" : ""}`}
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
        {tickets.length === 0 ? (
          <p>No Tickets</p>
        ) : (
          tickets?.map((ticket) => (
            <div key={ticket._id} className="ticket__card">
              <div className="ticket__head">
                <h1 className="ticket__title">Ticket# 2023-00123</h1>
                <p className="ticket__date">Posted at 12:45 AM</p>
              </div>
              <div className="ticket__content">
                <h1 className="ticket__content--title">Ticket# 2023-00123</h1>
                <p className="ticket__time">10:00</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
