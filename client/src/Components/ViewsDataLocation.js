import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDataLocation = () => {
  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="email">Email</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="area">Area</label>
              <input />
            </div>

            <div className="View-form-row">
              <label htmlFor="address">Address</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="latitude">Latitude</label>
              <input />
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="city">City</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="pincode">Pincode</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="landmark">Landmark</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="longitude">Longitude</label>
              <input />
            </div>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/layout/viewsdatabasic">BasicInfo</NavLink>
          <NavLink to="/layout/viewsdataproperty">Property Details</NavLink>
          <NavLink to="/layout/viewsdatageneral">General Info</NavLink>
          <NavLink to="/layout/viewsdatalocation">Location Info</NavLink>
        </div>
      </div>
    </>
  );
};

export default ViewsDataLocation;
