import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import "./chat.css";
import User from "../User/User";

const Chat = () => {
  return (
    <div className="userchat">
      <div className="userchat__header">
        <HeaderText text={"contact center"} />
      </div>
      <div className="userchats">
        <div className="tab">
          <button className="userchats__tab">Chats</button>
        </div>
        <div className="user__cards">
          <div className="user__card active">
            <User name="Joe" />
            <div className="user__name">
              <p className="title">Chat 1</p>
              <p className="content">I have a question</p>
            </div>
          </div>
          <div className="user__card">
            <User name="Joe" />
            <div className="user__name">
              <p className="title">Chat 1</p>
              <p className="content">I have a question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
