import HeaderText from "../../components/HeaderText/HeaderText";
import ChatbotPopup from "../../components/ChatbotPopup/ChatbotPopup";
import ChatbotConfig from "../../components/ChatbotConfig/ChatbotConfig";
import "./chatpage.css";

const ChatbotPage = () => {
  return (
    <div className="chatbot">
      <div className="chatbot__title">
        <HeaderText text={"Chat Bot"} />
      </div>
      <ChatbotPopup />
      <ChatbotConfig />
    </div>
  );
};

export default ChatbotPage;
