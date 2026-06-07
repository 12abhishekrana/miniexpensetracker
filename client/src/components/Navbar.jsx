import { useState } from "react";

function Navbar({ setView }) {
  const [active, setActive] = useState("Dashboard");

  const menu = ["Dashboard", "Analytics", "Settings"];

  const handleClick = (item) => {
    setActive(item);
    setView(item);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Tracker</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menu.map((item) => (
          <div
            key={item}
            onClick={() => handleClick(item)}
            style={{
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              background: active === item ? "#6366f1" : "transparent",
              color: active === item ? "white" : "#cbd5e1"
            }}
          >
            {item === "Dashboard" && "📊 "}
            {item === "Analytics" && "📈 "}
            {item === "Settings" && "⚙️ "}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;