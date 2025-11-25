import { Link, useLocation, useNavigate } from "react-router-dom";
import home from "../../assets/images/home.svg";
import chat from "../../assets/images/chat.svg";
import graph from "../../assets/images/graph.svg";
import bot from "../../assets/images/bot.svg";
import member from "../../assets/images/member.svg";
import setting from "../../assets/images/setting.svg";
import logout from "../../assets/images/logout.svg";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const currentPathname = location.pathname.split("/")[1];

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="logo">
          <img src="/hub.svg" alt="logo" />
        </div>
        <div className="nav__links">
          <Link to="/" className="link">
            <img src={home} alt="dashboard" />
            <p
              style={{
                visibility: currentPathname === "" ? "visible" : "hidden",
              }}
              className="name"
            >
              Dashboard
            </p>
          </Link>
          <Link to="/contact" className="link">
            <img src={chat} alt="Contact Center" />
            <p
              style={{
                visibility:
                  currentPathname === "contact" ? "visible" : "hidden",
              }}
              className="name"
            >
              Contact Center
            </p>
          </Link>
          <Link to="/analytics" className="link">
            <img src={graph} alt="Analytics" />
            <p
              style={{
                visibility:
                  currentPathname === "analytics" ? "visible" : "hidden",
              }}
              className="name"
            >
              Analytics
            </p>
          </Link>
          <Link to="/chat" className="link">
            <img src={bot} alt="Chat bot" />
            <p
              style={{
                visibility: currentPathname === "chat" ? "visible" : "hidden",
              }}
              className="name"
            >
              Chat bot
            </p>
          </Link>
          <Link to="/teams" className="link">
            <img src={member} alt="Team" />
            <p
              style={{
                visibility: currentPathname === "teams" ? "visible" : "hidden",
              }}
              className="name"
            >
              Team
            </p>
          </Link>
          <Link to="/setting" className="link">
            <img src={setting} alt="Setting" />
            <p
              style={{
                visibility:
                  currentPathname === "setting" ? "visible" : "hidden",
              }}
              className="name"
            >
              Setting
            </p>
          </Link>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="logout">
          <img src={logout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
