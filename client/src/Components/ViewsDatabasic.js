import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDatabasic = () => {

  const location = useLocation();

  const viewData = location.state;

  console.log(viewData,"stateeee");
  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form property-form-view">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="propertyType">Property Type</label>
              <input value={viewData?.propertyType}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="price">Price</label>
              <input value={viewData?.price}/>
            
            </div>

            <div className="View-form-row">
              <label htmlFor="propertyAge">Property Age</label>
              <input value={viewData?.propertyAge}/>
            
            </div>
            <div className="View-form-row">
              <label htmlFor="propertyDescription">Property Description</label>
              <input value={viewData?.propertyDescription}/>
            
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="negotiable">Negotiable</label>
              <input value={viewData?.negotiable}/>
            
            </div>
            <div className="View-form-row">
              <label htmlFor="ownership">Ownership</label>
              <input value={viewData?.ownership}/>
            
            </div>
            <div className="View-form-row">
              <label htmlFor="propertyApproved">Property Approved</label>
              <input value={viewData?.propertyApproved}/>
            
            </div>
            <div className="View-form-row">
              <label htmlFor="bankLoan">Bank Loan</label>
              <input value={viewData?.bankLoan}/>
            
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

export default ViewsDatabasic;
