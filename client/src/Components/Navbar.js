import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";

const Navbar = () => {
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="left-pane">USERID :06PD125</div>
      <div className="right-pane" style={{}}>
        <div>
          <img src={ImgUrl.UserIcon} alt="pic misssing" />
        </div>
        <div>{userName || ""}</div>
        <div>
          <img src={ImgUrl.Logout} onClick={handleLogout} alt="pic misssing" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
