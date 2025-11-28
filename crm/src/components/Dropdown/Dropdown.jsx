import { useState } from "react";
import "./dropdown.css";
import User from "../User/User";
import down from "../../assets/images/down.svg";
import ticket from "../../assets/images/ticket.svg";

const Dropdown = ({ items = [], selected, onSelect, type = "team" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__selected" onClick={() => setOpen(!open)}>
        <div className="dropdown__head">
          {type === "team" && <User name={selected?.label} />}
          {type === "status" && <img src={ticket} alt="ticket" />}
          {type === "team" && <p>{selected?.label}</p>}
          {type === "status" && <p>Ticket status</p>}
          {type === "designation" && (
            <p style={{ color: "black" }}>{selected}</p>
          )}
        </div>
        <img src={down} alt="down" />
      </div>
      {type === "team" && open && (
        <div className="dropdown__options">
          {items.map((item, i) => (
            <div
              key={i}
              className="dropdown__head"
              onClick={(e) => {
                onSelect(item, e);
                setOpen(false);
              }}
            >
              <User name={item?.label} />
              <p>{item?.label}</p>
            </div>
          ))}
        </div>
      )}
      {type === "status" && open && (
        <div className="dropdown__options">
          {items.map((item, i) => (
            <div
              key={i}
              className="dropdown__head"
              onClick={(e) => {
                onSelect(item, e);
                setOpen(false);
              }}
            >
              <p>{item?.label}</p>
            </div>
          ))}
        </div>
      )}
      {type === "designation" && open && (
        <div className="dropdown__options">
          {items.map((item, i) => (
            <div
              key={i}
              className="dropdown__head"
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              <p>{item?.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
