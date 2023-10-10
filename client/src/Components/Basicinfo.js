import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../styles/Basicinfo.css";
import ProgressSteps from "../Components/ProgressSteps";

const PropertyForm = ({isEdit}) => {

  const location = useLocation();
  const viewData = location.state;

  const [formData, setFormData] = useState({
    propertyType: viewData?.propertyType || "",
    negotiable: viewData?.negotiable || "",
    price: viewData?.price ||"",
    ownership:viewData?.ownership || "",
    propertyAge:viewData?.propertyAge || "",
    propertyApproved: viewData?.propertyApproved ||"",
    propertyDescription:viewData?.propertyDescription || "",
    bankLoan: viewData?.bankLoan ||"",
  });

  const { ppd_id } = useParams();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("basicInfo", JSON.stringify(formData));
    navigate(isEdit? `/layout/property-detail/edit/${ppd_id}`: "/layout/property-detail", { state: viewData });
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
              <option value="villa">Villa</option>
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
