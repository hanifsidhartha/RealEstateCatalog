import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Basicinfo.css"; // Import your custom CSS for styling
import ProgressSteps from "../Components/ProgressSteps";

const PropertyForm = () => {
  const [propertyType, setPropertyType] = useState("");
  const [negotiable, setNegotiable] = useState("");
  const [price, setPrice] = useState("");
  const [ownership, setOwnership] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [propertyApproved, setPropertyApproved] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [bankLoan, setBankLoan] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/layout/property-detail");
  };

  const handleCancel = () => {
    navigate("/layout/home");
  };

  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="propertyType">Property Type</label>
            <select
              id="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
            </select>

            <label htmlFor="price">Price</label>
            <select
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Example: 100000</option>
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="propertyAge">Property Age</label>
            <select
              id="propertyAge"
              value={propertyAge}
              onChange={(e) => setPropertyAge(e.target.value)}
            >
              <option value="">Select Property Age</option>
              <option value="New">New</option>
              <option value="Old">Old</option>
            </select>

            <label htmlFor="propertyDescription">Property Description</label>
            <select
              id="propertyDescription"
              value={propertyDescription}
              onChange={(e) => setPropertyDescription(e.target.value)}
            >
              <option value="">Select Property Description</option>
              <option value="Spacious">Spacious</option>
              <option value="Cozy">Cozy</option>
            </select>
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="negotiable">Negotiable</label>
            <select
              id="negotiable"
              value={negotiable}
              onChange={(e) => setNegotiable(e.target.value)}
            >
              <option value="">Select Negotiable</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="ownership">Ownership</label>
            <select
              id="ownership"
              value={ownership}
              onChange={(e) => setOwnership(e.target.value)}
            >
              <option value="">Select Ownership</option>
              <option value="Owned">Owned</option>
              <option value="Rented">Rented</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="propertyApproved">Property Approved</label>
            <select
              id="propertyApproved"
              value={propertyApproved}
              onChange={(e) => setPropertyApproved(e.target.value)}
            >
              <option value="">Select Property Approved</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label htmlFor="bankLoan">Bank Loan</label>
            <select
              id="bankLoan"
              value={bankLoan}
              onChange={(e) => setBankLoan(e.target.value)}
            >
              <option value="">Select Bank Loan</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
