import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDataLocation = () => {

  const location = useLocation();

  const viewData = location.state;

  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form property-form-view">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="email">Email</label>
              <input value={viewData?.email}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="area">Area</label>
              <input value={viewData?.area}/>
            </div>

            <div className="View-form-row">
              <label htmlFor="address">Address</label>
              <input value={viewData?.address} />
            </div>
            <div className="View-form-row">
              <label htmlFor="latitude">Latitude</label>
              <input value={viewData?.latitude} />
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="city">City</label>
              <input  value={viewData?.city} />
            </div>
            <div className="View-form-row">
              <label htmlFor="pincode">Pincode</label>
              <input  value={viewData?.pincode}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="landmark">Landmark</label>
              <input value={viewData?.landmark}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="longitude">Longitude</label>
              <input value={viewData?.longitude}/>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/layout/viewsdatabasic"state={viewData}>BasicInfo</NavLink>
          <NavLink to="/layout/viewsdataproperty"state={viewData}>Property Details</NavLink>
          <NavLink to="/layout/viewsdatageneral"state={viewData}>General Info</NavLink>
          <NavLink to="/layout/viewsdatalocation"state={viewData}>Location Info</NavLink>
        </div>
      </div>
    </>
  );
};

export default ViewsDataLocation;
