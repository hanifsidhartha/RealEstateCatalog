import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDataProperty = () => {

  const location = useLocation();

  const viewData = location.state;

  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form property-form-view">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="length">Length</label>
              <input value={viewData?.length} />
            </div>
            <div className="View-form-row">
              <label htmlFor="totalArea">Total Area</label>
              <input value={viewData?.totalArea} />
            </div>
            <div className="View-form-row">
              <label htmlFor="noOfBHK">No of BHK</label>
              <input value={viewData?.noOfBHK} />
            </div>
            <div className="View-form-row">
              <label htmlFor="attached">Attached</label>
              <input value={viewData?.attached} />
            </div>
            <div className="View-form-row">
              <label htmlFor="furnished">Furnished</label>
              <input value={viewData?.furnished} />
            </div>
            <div className="View-form-row">
              <label htmlFor="lift">Lift</label>
              <input value={viewData?.lift} />
            </div>
            <div className="View-form-row">
              <label htmlFor="facing">Facing</label>
              <input value={viewData?.facing} />
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="breath">Breath</label>
              <input value={viewData?.breath} />
            </div>
            <div className="View-form-row">
              <label htmlFor="areaUnit">Area Unit</label>
              <input value={viewData?.areaUnit} />
            </div>
            <div className="View-form-row">
              <label htmlFor="noOfFloor">No of Floor</label>
              <input value={viewData?.noOfFloor} />
            </div>
            <div className="View-form-row">
              <label htmlFor="westernToilet">Western Toilet</label>
              <input value={viewData?.westernToilet} />
            </div>
            <div className="View-form-row">
              <label htmlFor="carParking">Car Parking</label>
              <input value={viewData?.carParking} />
            </div>
              <div className="View-form-row">
                <label htmlFor="electricity">Electricity</label>
                <input value={viewData?.electricity} />
              </div>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/layout/viewsdatabasic" state={viewData}>BasicInfo</NavLink>
          <NavLink to="/layout/viewsdataproperty" state={viewData}>Property Details</NavLink>
          <NavLink to="/layout/viewsdatageneral" state={viewData}>General Info</NavLink>
          <NavLink to="/layout/viewsdatalocation" state={viewData}>Location Info</NavLink>
        </div>
      </div>
    </>
  );
};

export default ViewsDataProperty;
