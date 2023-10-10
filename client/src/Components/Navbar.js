import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";

const Navbar = () => {
  const userName = localStorage.getItem("name");
  const capitalizedName = userName
    ? userName.charAt(0).toUpperCase() + userName.slice(1)
    : "";

  const userEmail = localStorage.getItem("email");
  const capitalizedEmail = userEmail
    ? userEmail.charAt(0).toUpperCase() + userEmail.slice(1)
    : "";

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="left-pane">Email : {capitalizedEmail}</div>
      <div className="right-pane" style={{}}>
        <div>
          <img src={ImgUrl.UserIcon} alt="pic misssing" />
        </div>
        <div>{capitalizedName}</div>
        <div>
          <img src={ImgUrl.Logout} onClick={handleLogout} alt="pic misssing" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
