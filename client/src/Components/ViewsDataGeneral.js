import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDataGeneral = () => {
  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="name">Name</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="postedBy">Posted By</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="featuredPackage">Featured Package</label>
              <input />
            </div>
            <div className="View-form-row">
              <div className="imge">
                <label htmlFor="addPhoto">Picture</label>
                <input />
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="mobile">Mobile</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="saleType">Sale Type</label>
              <input />
            </div>
            <div className="View-form-row">
              <label htmlFor="ppdPackage">PPD Package</label>
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

export default ViewsDataGeneral;
