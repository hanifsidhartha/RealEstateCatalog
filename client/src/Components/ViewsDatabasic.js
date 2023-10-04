import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDatabasic = () => {
  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="propertyType">Property Type</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="price">Price</label>
              <input />
            </div>

            <div className="View-form-row">
              <label htmlFor="propertyAge">Property Age</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="propertyDescription">Property Description</label>
              <input />
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="negotiable">Negotiable</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="ownership">Ownership</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="propertyApproved">Property Approved</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="bankLoan">Bank Loan</label>
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

export default ViewsDatabasic;
