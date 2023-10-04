import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Basicinfo.css";
import ProgressSteps from "../Components/ProgressSteps";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    negotiable: "",
    price: "",
    ownership: "",
    propertyAge: "",
    propertyApproved: "",
    propertyDescription: "",
    bankLoan: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(formData);

  // useEffect(() => {
  // }, [formData]);

  const handleSave = () => {
    localStorage.setItem("basicInfo", JSON.stringify(formData));
    navigate("/layout/property-detail");
  };

  const handleCancel = () => {
    navigate("/layout/home");
  };

  return (
    <div className="property">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="propertyType">Property Type</label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Condo">Villa</option>
            </select>

            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="10000"
            />
          </div>

          <div className="form-row">
            <label htmlFor="propertyAge">Property Age</label>
            <select
              id="propertyAge"
              name="propertyAge"
              value={formData.propertyAge}
              onChange={handleChange}
            >
              <option value="">Select Property Age</option>
              <option value="New">New</option>
              <option value="Old">Old</option>
            </select>

            <label htmlFor="propertyDescription">Property Description</label>
            <select
              id="propertyDescription"
              name="propertyDescription"
              value={formData.propertyDescription}
              onChange={handleChange}
            >
              <option value="">Select Property Description</option>
              <option value="Spacious">Spacious</option>
              <option value="Cozy">Cozy</option>
              <option value="Charming">Charming</option>
              <option value="Modern">Modern</option>
              <option value="Luxurious">Luxurious</option>
              <option value="Elegant">Elegant</option>
            </select>
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="negotiable">Negotiable</label>
            <select
              id="negotiable"
              name="negotiable"
              value={formData.negotiable}
              onChange={handleChange}
            >
              <option value="">Select Negotiable</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="ownership">Ownership</label>
            <select
              id="ownership"
              name="ownership"
              value={formData.ownership}
              onChange={handleChange}
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
              name="propertyApproved"
              value={formData.propertyApproved}
              onChange={handleChange}
            >
              <option value="">Select Property Approved</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label htmlFor="bankLoan">Bank Loan</label>
            <select
              id="bankLoan"
              name="bankLoan"
              value={formData.bankLoan}
              onChange={handleChange}
            >
              <option value="" selected>
                Select Bank Loan
              </option>
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
