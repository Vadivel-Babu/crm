import { useState } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import "./team.css";
import User from "../../components/User/User";
import Modal from "../../components/Modal/Modal";
import edit from "../../assets/images/edit.svg";
import del from "../../assets/images/delete.svg";
import add from "../../assets/images/add.svg";
import Popup from "../../components/Popup/Popup";

const TeamsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [popoverPos, setPopoverPos] = useState(null);
  const teamMembers = [
    {
      name: "Joe Doe",
      phone: "+1 (000) 000-0000",
      email: "example@gmail.com",
      role: "Admin",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Joe Doe",
      phone: "+1 (000) 000-0000",
      email: "example@gmail.com",
      role: "Member",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Joe Doe",
      phone: "+1 (000) 000-0000",
      email: "example@gmail.com",
      role: "Member",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];
  const openPopup = (event) => {
    const rect = event.target.getBoundingClientRect();
    console.log(rect);

    setPopoverPos({
      top: rect.bottom,
      right: rect.right,
    });
  };
  return (
    <div className="teampage">
      <div className="teampage__head">
        <HeaderText text={"Team"} />
      </div>

      <table className="team-table">
        <thead>
          <tr>
            <th></th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
            <th className="gap-col"></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index}>
              <td className="user-cell">
                <User name={member?.name} />
              </td>
              <td>{member?.name}</td>

              <td>{member?.phone}</td>
              <td>{member?.email}</td>
              <td>{member?.role}</td>
              <td></td>
              <td className="actions">
                <button className="edit-btn">
                  <img src={edit} alt="edit" />
                </button>
                <button onClick={(e) => openPopup(e)} className="delete-btn">
                  <img src={del} alt="delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-btn">
        <button onClick={() => setOpenModal(true)} className="add-btn">
          <img src={add} alt="add" /> Add Team Members
        </button>
        <Popup
          onCancel={() => setPopoverPos(null)}
          onConfirm={() => setPopoverPos(null)}
          position={popoverPos}
        />
      </div>

      <Modal
        open={openModal}
        message="Are you sure you want to delete this item?"
        onConfirm={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      />
    </div>
  );
};

export default TeamsPage;
