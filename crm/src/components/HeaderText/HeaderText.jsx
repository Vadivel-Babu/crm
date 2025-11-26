const HeaderText = ({ text }) => {
  return (
    <h1
      style={{
        color: "#6A6B70",
        fontSize: "18px",
        fontWeight: "500",
        textTransform: "capitalize",
      }}
    >
      {text}
    </h1>
  );
};

export default HeaderText;
