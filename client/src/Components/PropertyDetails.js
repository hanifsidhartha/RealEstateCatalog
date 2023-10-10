import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ProgressSteps from "../Components/ProgressSteps";

export default function PropertyDetails({isEdit}) {

  const location = useLocation();
  const viewData = location.state;

  const [formData, setFormData] = useState({
    length: viewData?.length || "",
    breath:  viewData?.breath ||"",
    totalArea: viewData?.totalArea || "",
    areaUnit: viewData?.areaUnit || "",
    noOfBHK:viewData?.noOfBHK ||  "",
    noOfFloor:viewData?.noOfFloor ||  "",
    attached: viewData?.attached || "",
    westernToilet: viewData?.westernToilet || "",
    furnished: viewData?.furnished || "",
    carParking:viewData?.carParking ||  "",
    lift: viewData?.lift || "",
    electricity: viewData?.electricity || "",
    facing:viewData?.facing ||  "",
  });

  const { ppd_id } = useParams();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
  };

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  const navigate = useNavigate();

  const handleSave = () => {
    localStorage.setItem("propertydetails", JSON.stringify(formData));
    navigate(isEdit ? `/layout/general-info/edit/${ppd_id}`: "/layout/general-info", { state: viewData });
  };

  const handleCancel = () => {
    navigate("/layout/basicinfo");
  };
  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="length">Length</label>
            <input
              type="text"
              // id="length"
              name="length"
              value={formData.length}
              placeholder="Example: 1000"
              onChange={handleChange}
            />

            <label htmlFor="totalArea">Total Area</label>
            <input
              type="text"
              id="totalArea"
              name="totalArea"
              value={formData.totalArea}
              placeholder="Example: 7500"
              onChange={handleChange}
            />
            <label htmlFor="noOfBHK">No of BHK</label>
            <select
              id="noOfBHK"
              name="noOfBHK"
              value={formData.noOfBHK}
              onChange={handleChange}
            >
              <option value="">Select No of BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
            </select>

            <label htmlFor="attached">Attached</label>
            <select
              id="attached"
              name="attached"
              value={formData.attached}
              onChange={handleChange}
            >
              <option value="">Select Attached</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="furnished">Furnished</label>
            <select
              id="furnished"
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
            >
              <option value="">Select Furnished</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="lift">Lift</label>
            <select
              id="lift"
              name="lift"
              value={formData.lift}
              onChange={handleChange}
            >
              <option value="">Select Lift</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="facing">Facing</label>
            <select
              id="facing"
              name="facing"
              value={formData.facing}
              onChange={handleChange}
            >
              <option value="">Select Facing</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="breath">Breath</label>
            <input
              type="text"
              id="breath"
              name="breath"
              value={formData.breath}
              placeholder="Example: 1000"
              onChange={handleChange}
            />
            <label htmlFor="areaUnit">Area Unit</label>
            <input
              type="text"
              id="areaUnit"
              name="areaUnit"
              value={formData.areaUnit}
              placeholder="1400"
              onChange={handleChange}
            />
            <label htmlFor="noOfFloor">No of Floor</label>
            <select
              id="noOfFloor"
              name="noOfFloor"
              value={formData.noOfFloor}
              onChange={handleChange}
            >
              <option value="">Select No of Floor</option>
              <option value="1">1 Floor</option>
              <option value="2">2 Floors</option>
              <option value="3">3 Floors</option>
            </select>

            <label htmlFor="westernToilet">Western Toilet</label>
            <select
              id="westernToilet"
              name="westernToilet"
              value={formData.westernToilet}
              onChange={handleChange}
            >
              <option value="">Select Western Toilet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="carParking">Car Parking</label>
            <select
              id="carParking"
              name="carParking"
              value={formData.carParking}
              onChange={handleChange}
            >
              <option value="">Select Car Parking</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="electricity">Electricity</label>
            <input
              type="text"
              id="electricity"
              name="electricity"
              value={formData.electricity}
              placeholder="Example: 3 phase"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleCancel}>Previous</button>
          <button onClick={handleSave}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
}
