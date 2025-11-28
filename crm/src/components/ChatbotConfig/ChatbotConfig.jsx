import "./chatconfig.css";
import configedit from "../../assets/images/configedit.svg";

const ChatbotConfig = () => {
  return (
    <div className="chatconfig">
      <div className="card">
        <h1 className="card__title">Header Color</h1>
        <div className="colorpalette headercolor">
          <div className="colors"></div>
          <div className="colors"></div>
          <div className="colors"></div>
        </div>
        <div className="choosecolor">
          <div className="chosen"></div>
          <input type="text" className="color" value={"#33475B"} />
        </div>
      </div>
      <div className="card">
        <h1 className="card__title">Custom Background Color</h1>
        <div className="colorpalette backgroundcolor">
          <div className="colors"></div>
          <div className="colors"></div>
          <div className="colors"></div>
        </div>
        <div className="choosecolor">
          <div className="chosen"></div>
          <input type="text" className="color" value={"#EEEEEE"} />
        </div>
      </div>
      <div className="card">
        <h1 className="card__title">Customize Message</h1>
        <div className="welcometext">
          <p>How can i help you?</p>
          <img src={configedit} alt="edit" />
        </div>
        <div className="welcometext">
          <p>Ask me anything!</p>
          <img src={configedit} alt="edit" />
        </div>
      </div>
      <div className="card">
        <h1 className="card__title">Introduction Form</h1>
        <div className="intro__form">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="intro__input"
            id=""
          />
        </div>
        <div className="intro__form">
          <label htmlFor="name">Your Phone</label>
          <input
            type="text"
            name="name"
            placeholder="+1 (000) 000-0000"
            className="intro__input"
            id=""
          />
        </div>
        <div className="intro__form">
          <label htmlFor="name">Your Email</label>
          <input
            type="text"
            name="name"
            placeholder="example@gmail.com"
            className="intro__input"
            id=""
          />
        </div>
      </div>
      <div className="card">
        <h1 className="card__title">Welcome Message</h1>
        <div className="welcometext welcomemessage">
          <p>15/50</p>
          <div className="welcometext">
            <p>
              👋 Want to chat about Hubly? I'm an chatbot here to help you find
              your way.
            </p>
            <img src={configedit} alt="edit" />
          </div>
        </div>
      </div>
      <div className="card">
        <h1 className="card__title">Missed chat timer </h1>
        <div className="timer__wrapper">
          <div className="timer">
            <p>12</p>
            <p>09</p>
            <p>59</p>
          </div>
          <div className="timer">
            <p>12</p>
            <p>09</p>
            <p>59</p>
          </div>
          <div className="timer">
            <p>12</p>
            <p>09</p>
            <p>59</p>
          </div>
          <button className="btn btn--save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotConfig;
