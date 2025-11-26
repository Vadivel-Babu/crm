import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import "./team.css";

const TeamsPage = () => {
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
                <img src={member.avatar} alt="avatar" className="avatar" />
              </td>
              <td>{member.name}</td>

              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
              <td className="gap-col"></td>
              <td className="actions">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-btn">➕ Add Team Members</button>
    </div>
  );
};

export default TeamsPage;
