import React from "react";
import { NavLink, useLocation} from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";

const ViewsDataGeneral = () => {

  const location = useLocation();

  const viewData = location.state;

  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form property-form-view">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="name">Name</label>
              <input value={viewData?.name}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="postedBy">Posted By</label>
              <input value={viewData?.postedBy}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="featuredPackage">Featured Package</label>
              <input value={viewData?.featuredPackage}/>
            </div>
            <div className="View-form-row">
              <div className="imge">
                <label htmlFor="addPhoto">Picture</label>
                {/* <input value={viewData?.photo}/> */}
                <img src={`${viewData?.photo}`} alt="photo"/>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="mobile">Mobile</label>
              <input value={viewData?.mobile}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="saleType">Sale Type</label>
              <input value={viewData?.saleType}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="ppdPackage">PPD Package</label>
              <input value={viewData?.ppdPackage}/>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/layout/viewsdatabasic" state={viewData} >BasicInfo</NavLink>
          <NavLink to="/layout/viewsdataproperty" state={viewData}>Property Details</NavLink>
          <NavLink to="/layout/viewsdatageneral" state={viewData}>General Info</NavLink>
          <NavLink to="/layout/viewsdatalocation" state={viewData}>Location Info</NavLink>
        </div>
      </div>
    </>
  );
};

export default ViewsDataGeneral;
