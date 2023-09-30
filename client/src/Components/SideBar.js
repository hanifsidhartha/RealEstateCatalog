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
            <NavLink to={menuItem?.nav} activeClassName="active">
              <img
                src={menuItem.image}
                alt={`${menuItem.text} Icon`}
                className="menu-icon"
              />
              {menuItem.title}
            </NavLink>
          </li>
        ))}
        {/* <li>
          <NavLink exact to="/" activeClassName="active">
            Property
          </NavLink>
        </li>
        <li>
          <NavLink to="/assistance" activeClassName="active">
            Assistance
          </NavLink>
        </li>
        <li>
          <NavLink to="/received-interest" activeClassName="active">
            Received Interest
          </NavLink>
        </li>
        <li>
          <NavLink to="/sent-interest" activeClassName="active">
            Sent Interest
          </NavLink>
        </li>
        <li>
          <NavLink to="/property-views" activeClassName="active">
            Property Views
          </NavLink>
        </li>
        <li>
          <NavLink to="/tariff-plan" activeClassName="active">
            Tariff Plan
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default SideBar;
