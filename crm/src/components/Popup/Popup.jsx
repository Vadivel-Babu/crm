import { useRef, useEffect, useState } from "react";
import "./popup.css";

const Popup = ({ onCancel, onConfirm, position }) => {
  const ref = useRef();
  const [width, setWidth] = useState(180);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onCancel();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!position) return null;

  return (
    <div
      ref={ref}
      style={{
        top: position.top - 35,
        left: position.left - width,
      }}
      className="popup"
    >
      <h1 className="popup__title">
        Chat would be assigned to Different team member
      </h1>
      <div className="popup__action">
        <button className="btn btn--cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn--confirm" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Popup;
