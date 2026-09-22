const Header = ({ colors, scrollToSection }) => {
  const navStyle = {
    border: "none",
    background: "transparent",
    color: colors.brown,
    cursor: "pointer",
    fontSize: "14px",
    padding: "5px",
  };

  return (
    <nav
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "20px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${colors.beige}`,
        backgroundColor: "transparent",
      }}
    >
      <div style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "bold", color: colors.brown }}>
        Ihda Ibadurrohman
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        <button onClick={() => scrollToSection("home")} style={navStyle}>Home</button>
        <button onClick={() => scrollToSection("about")} style={navStyle}>About</button>
        <button onClick={() => scrollToSection("projects")} style={navStyle}>Projects</button>
        <button onClick={() => scrollToSection("contact")} style={navStyle}>Contact</button>
      </div>
    </nav>
  );
};

export default Header;