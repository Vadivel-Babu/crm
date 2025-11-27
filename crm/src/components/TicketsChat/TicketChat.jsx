import React from "react";
import "./ticketchat.css";
import home from "../../assets/images/home.svg";
import send from "../../assets/images/send.svg";
import User from "../User/User";

const TicketChat = () => {
  return (
    <div className="ticketchat">
      <div className="ticketchat__head">
        <h1 className="ticketchat__title">Ticket# 2025-00123</h1>
        <img src={home} alt="home" />
      </div>
      <div className="ticket__conversation">
        <div className="ticketchat__date">
          <hr />
          <p className="chat__date">March 7, 2025</p>
        </div>
        <div className="chats">
          <div className="chat">
            <User name="Joe Dan" />
            <div className="message__content">
              <h1 className="user__name">Joe Dan</h1>
              <p className="message">I have a question</p>
            </div>
          </div>
          <div className="chat chat__sender">
            <div className="message__content">
              <h1 className="user__name">Joe Dan</h1>
              <p className="message">I have a question</p>
            </div>
            <User name="Joe Dan" />
          </div>
        </div>
        <div className="textarea">
          <textarea rows={10} name="text" placeholder="Type here" id="" />
          <button className="btn btn--send">
            <img src={send} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketChat;
