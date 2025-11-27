import { useState } from "react";
import "./details.css";
import User from "../User/User";
import user from "../../assets/images/user.svg";
import phone from "../../assets/images/phone.svg";
import message from "../../assets/images/message.svg";
import Dropdown from "../Dropdown/Dropdown";
import Popup from "../Popup/Popup";

const users = [
  { label: "Joe Doe", avatar: "/img/1.png" },
  { label: "Joe", avatar: "/img/2.png" },
  { label: "Doe", avatar: "/img/3.png" },
];
const status = [{ label: "resolved" }, { label: "unresolved" }];
const Details = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [isResolved, setIsResolved] = useState("resolved");
  const [popoverPos, setPopoverPos] = useState(null);

  function handleConfirmation() {
    console.log(selectedUser);
    setPopoverPos(null);
  }

  const openPopup = (user, event) => {
    const rect = event.target.getBoundingClientRect();
    console.log(rect);

    setPopoverPos({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });

    setSelectedUser(user);
  };

  return (
    <div className="details">
      <div className="details__user">
        <User name={"joe"} />
        <p className="details__title">Chat</p>
      </div>
      <div className="details__content">
        <h1 className="details__content--title">Details</h1>
        <div className="details__card">
          <img src={user} alt="user-icon" />
          <p className="details__username">joe doe</p>
        </div>
        <div className="details__card">
          <img src={phone} alt="user-icon" />
          <p className="details__username">joe doe</p>
        </div>
        <div className="details__card">
          <img src={message} alt="user-icon" />
          <p className="details__username">joe doe</p>
        </div>
      </div>
      <div className="details__content">
        <h1 className="details__content--title">Teammates</h1>
        <Dropdown
          items={users}
          selected={selectedUser}
          onSelect={openPopup}
          type="team"
        />
        <Dropdown
          items={status}
          selected={isResolved}
          onSelect={openPopup}
          type="status"
        />
        <Popup
          onCancel={() => setPopoverPos(null)}
          onConfirm={handleConfirmation}
          position={popoverPos}
        />
      </div>
    </div>
  );
};

export default Details;
