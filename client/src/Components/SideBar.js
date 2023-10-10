import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import ImgUrl from "../assets/images/ImgUrl";

const SideBar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Property",
      image: ImgUrl?.property,
      nav: "/layout/home",
    },
    {
      id: 2,
      title: "Assistance",
      image: ImgUrl?.Assist,
      nav: "",
    },
    {
      id: 3,
      title: "Received Interest",
      image: ImgUrl?.ReceivedInt,
      nav: "",
    },
    {
      id: 4,
      title: "Sent Interest",
      image: ImgUrl?.sentInt,
      nav: "",
    },
    {
      id: 5,
      title: "Property Views",
      image: ImgUrl?.propertyViews,
      nav: "/layout/home",
    },
    {
      id: 6,
      title: "Tariff Plan",
      image: ImgUrl?.tarif,
      nav: "",
    },
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">Logo</h2>
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <NavLink to={menuItem?.nav} activeclassname="active">
              <img
                src={menuItem.image}
                alt={`${menuItem.text} Icon`}
                className="menu-icon"
              />
              {menuItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
