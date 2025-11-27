import React from "react";
import Chat from "../../components/Chatcenter/Chat";
import TicketChat from "../../components/TicketsChat/TicketChat";
import Details from "../../components/Details/Details";
import "./contactpage.css";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <Chat />
      <TicketChat />
      <Details />
    </div>
  );
};

export default ContactPage;
