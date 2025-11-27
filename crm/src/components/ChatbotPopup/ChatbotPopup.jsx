import "./chatbot.css";
import profile from "../../assets/images/profile.svg";
import Avatar from "../../assets/images/Avatar.svg";
import sendicon from "../../assets/images/sendicon.svg";
import Close from "../../assets/images/Close.svg";

const ChatbotPopup = () => {
  return (
    <div className="chatpopup">
      <div className="messagebox">
        <div className="messagebox__header">
          <img src={profile} alt="profile" />
          <p className="bot__name">Hubly</p>
        </div>
        <div className="messages">
          <div className="receiver">
            <img src={Avatar} alt="avatar" />
            <div className="receiver__message">
              <p>How can i help you?</p>
              <p>Ask me anything!</p>
            </div>
          </div>
          <div className="message__form">
            <h1>Introduction Yourself</h1>
            <div className="form__name">
              <p>Your name</p>
              <h2>Your name</h2>
            </div>
            <div className="form__name">
              <p>Your Phone</p>
              <h2>+1 (000) 000-0000</h2>
            </div>
            <div className="form__name">
              <p>Your Email</p>
              <h2>example@gmail.com</h2>
            </div>
            <button className="btn btn__message-form">Thank You!</button>
          </div>
        </div>
        <div className="message__input">
          <p>Write a message</p>
          <img src={sendicon} alt="send icon" />
        </div>
      </div>
      <div className="welcome__message">
        <img src={Avatar} alt="avatar" />
        <img src={Close} alt="close" />
        <p>
          👋 Want to chat about Hubly? I'm an chatbot here to help you find your
          way.
        </p>
      </div>
    </div>
  );
};

export default ChatbotPopup;
