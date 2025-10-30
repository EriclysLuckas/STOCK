import { useContext } from "react";
import { BaseContext } from "../../context/baseContext";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const { handleLogout } = useContext(BaseContext);
  const navigate = useNavigate();

  const handleClick = () => {
    handleLogout(); 
    navigate("/login"); 
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "8px 14px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Sair
    </button>
  );
};
