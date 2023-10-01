// ProgressSteps.js
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Signup.css";

const steps = [
  { path: "/layout/basicinfo", label: "Basic Info" },
  { path: "/layout/property-detail", label: "Property Detail" },
  { path: "/layout/general-info", label: "General Info" },
  { path: "/layout/location-info", label: "Location Info" },
];

const ProgressSteps = () => {
  const location = useLocation();

  // Find the current step based on the URL
  const currentStep = steps.findIndex(
    (step) => step.path === location.pathname
  );
  const stepContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
    padding: "30px",
  };

  const stepStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "#fff",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#BFBFBF",
    fontWeight: "bold",
    fontsize: "20px",
    fontfamily: "Source Sans Pro",
  };
  const activeStepStyle = {
    ...stepStyle,
    background: "#007bff",
    color: "#fff",
  };

  return (
    <div className="ps">
      <div className="progress-steps" style={{ display: "flex" }}>
        {steps.map((step, index) => (
          <div key={index} style={stepContainerStyle}>
            <div
              style={
                location.pathname === step.path ? activeStepStyle : stepStyle
              }
              className={`step ${index <= currentStep ? "active" : ""}`}
            >
              {index + 1}
            </div>
            <span>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
