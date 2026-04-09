// components/Header.jsx
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", padding: "10px", justifyContent: "space-between", background: "#202020", color: "white" }}>
      
      <h2>YouTube Clone</h2>

      <input placeholder="Search..." />

      <button onClick={() => navigate("/login")}>Sign In</button>
    </div>
  );
};

export default Header;