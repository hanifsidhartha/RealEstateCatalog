import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Basicinfo from "./Components/Basicinfo";
import PropertyDetails from "./Components/PropertyDetails";
import GeneraInfo from "./Components/GeneraInfo";
import LocationInfo from "./Components/LocationInfo";
import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import Layout from "./Components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={5000} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/layout" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="basicinfo" element={<Basicinfo />} />
            <Route path="property-detail" element={<PropertyDetails />} />
            <Route path="general-info" element={<GeneraInfo />} />
            <Route path="location-info" element={<LocationInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
