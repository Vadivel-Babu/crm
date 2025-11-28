import React from "react";

const User = ({ name = "" }) => {
  const user = name.split(" ");
  return (
    <p
      style={{
        backgroundColor: "#86898c",
        color: "white",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        fontSize: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user[0][0]?.toUpperCase()} {user[1] ? user[1][0]?.toUpperCase() : ""}
    </p>
  );
};

export default User;
