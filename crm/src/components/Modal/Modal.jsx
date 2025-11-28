import React, { useRef, useEffect, useState } from "react";
import "./modal.css";
import Dropdown from "../Dropdown/Dropdown";

const member = [{ label: "member" }, { label: "admin" }];

const Modal = ({ open, message, onConfirm, onCancel }) => {
  const [designation, setDesignation] = useState("member");
  if (!open) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__box">
        <h1 className="modal__title">Add Team members</h1>
        <p className="modal__message">
          Talk with colleagues in a group chat. Messages in this group are only
          visible to it's participants. New teammates may only be invited by the
          administrators.
        </p>
        <div className="modal__input--field">
          <label htmlFor="name">User name</label>
          <input type="text" className="modal__input" placeholder="User name" />
        </div>
        <div className="modal__input--field">
          <label htmlFor="name">Email</label>
          <input type="text" className="modal__input" placeholder="Email" />
        </div>
        <div className="modal__input--field">
          <label htmlFor="name">Designation</label>
          <Dropdown
            items={member}
            selected={designation}
            onSelect={() => console.log("hi")}
            type="designation"
          />
        </div>

        <div className="modal__actions">
          <button className="btn cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-save" onClick={onConfirm}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
