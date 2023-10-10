import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ProgressSteps from "../Components/ProgressSteps";

export default function LocationInfo({ isEdit }) {
  const location = useLocation();
  const viewData = location.state;

  const navigate = useNavigate();
  const basicInfo = JSON.parse(localStorage.getItem("basicInfo"));
  const propertyDetails = JSON.parse(localStorage.getItem("propertydetails"));
  const generalInfo = JSON.parse(localStorage.getItem("genralInfo"));
  const [formData, setFormData] = useState({
    email: viewData?.email || "",
    city: viewData?.city || "",
    area: viewData?.area || "",
    pincode: viewData?.pincode || "",
    address: viewData?.address || "",
    landmark: viewData?.landmark || "",
    latitude: viewData?.latitude || "",
    longitude: viewData?.longitude || "",
  });

  const { ppd_id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    // navigate("/layout/home");
    try {
      const wholeData = {
        ...basicInfo,
        ...propertyDetails,
        ...generalInfo,
        ...formData,
        ...(isEdit ? { property_id: ppd_id } : ""),
      };
      console.log("Request Data:", wholeData); // Log the request data
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://real-estate-catalog-u050.onrender.com/${isEdit ? "edit-property" : "add-property"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the authorization token
          },
          body: JSON.stringify(wholeData),
        }
      );
      if (!response.ok) {
        console.error(
          "Network response was not ok:",
          response.status,
          response.statusText
        );
        throw new Error("Network response was not ok");
      }
      const response_data = await response.json();
      console.log("Response from server:", response_data);

      if (response_data.code === 200) {
        console.log("Navigating to /layout/home...");
        // toast.success(response_data.message);
        navigate("/layout/home");
      } else {
        console.log("Navigating to /layout/basicinfo...");
        // toast.error(response_data.message);
        navigate("/layout/home");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to save property.");
      return;
    }
  };

  const handleCancel = () => {
    navigate("/layout/general-info");
  };
  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />

            <label htmlFor="area">Area</label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            >
              <option value="">Select Area</option>
              <option value="900">900</option>
              <option value="1200">1200</option>
              <option value="1400">1400</option>
              <option value="1800">1800</option>
              <option value="2100">2100</option>
              <option value="2400">2400</option>
              <option value="3000">3000</option>
              {/* Add more area options as needed */}
            </select>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
            />
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              placeholder="Latitude"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kurnool">Kurnool</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Indore">Indore</option>
              <option value="Kochi">Kochi</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Surat">Surat</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value="Patna">Patna</option>
              <option value="Dehradun">Dehradun</option>
              <option value="Ranchi">Ranchi</option>
              <option value="Guwahati">Guwahati</option>

            </select>

            <label htmlFor="pincode">Pincode</label>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value="">Select Pincode</option>
              <option value="500001">Hyderabad (500001)</option>
              <option value="560001">Bangalore (560001)</option>
              <option value="600001">Chennai (600001)</option>
              <option value="110001">Delhi (110001)</option>
              <option value="400001">Mumbai (400001)</option>
              <option value="518001">Kurnool (518001)</option>
              <option value="700001">Kolkata (700001)</option>
              <option value="411001">Pune (411001)</option>
              <option value="302001">Jaipur (302001)</option>
              <option value="380001">Ahmedabad (380001)</option>
              <option value="226001">Lucknow (226001)</option>
              <option value="160001">Chandigarh (160001)</option>
              <option value="462001">Bhopal (462001)</option>
              <option value="641001">Coimbatore (641001)</option>
              <option value="452001">Indore (452001)</option>
              <option value="682001">Kochi (682001)</option>
              <option value="530001">Visakhapatnam (530001)</option>
              <option value="395001">Surat (395001)</option>
              <option value="440001">Nagpur (440001)</option>
              <option value="143001">Amritsar (143001)</option>
              <option value="751001">Bhubaneswar (751001)</option>
              <option value="800001">Patna (800001)</option>
              <option value="248001">Dehradun (248001)</option>
              <option value="834001">Ranchi (834001)</option>
              <option value="781001">Guwahati (781001)</option>
            </select>

            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              placeholder="Landmark"
              onChange={handleChange}
            />

            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              placeholder="Longitude"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleCancel}>Previous</button>
          <button onClick={handleSave}>
            {" "}
            {isEdit ? "Save Property" : "Add Property"}
          </button>
        </div>
      </div>
    </div>
  );
}
