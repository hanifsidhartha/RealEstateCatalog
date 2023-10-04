import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDataProperty = () => {
  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="length">Length</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="totalArea">Total Area</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="noOfBHK">No of BHK</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="attached">Attached</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="furnished">Furnished</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="lift">Lift</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="facing">Facing</label>
              <input />
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="breath">Breath</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="areaUnit">Area Unit</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="noOfFloor">No of Floor</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="westernToilet">Western Toilet</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="carParking">Car Parking</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="electricity">Electricity</label>
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

export default ViewsDataProperty;
