import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Basicinfo from "./Components/Basicinfo";
import PropertyDetails from "./Components/PropertyDetails";
import GeneraInfo from "./Components/GeneraInfo";
import LocationInfo from "./Components/LocationInfo";
import ViewsDataBasic from "./Components/ViewsDatabasic";
import ViewsDataProperty from "./Components/ViewsDataProperty";
import ViewsDataGeneral from "./Components/ViewsDataGeneral";
import ViewsDataLocation from "./Components/ViewsDataLocation";
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
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/layout" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="basicinfo" element={<Basicinfo />} />
            <Route path="property-detail" element={<PropertyDetails />} />
            <Route path="general-info" element={<GeneraInfo />} />
            <Route path="viewsdatabasic" element={<ViewsDataBasic />} />
            <Route path="location-info" element={<LocationInfo />} />
            <Route path="viewsdataproperty" element={<ViewsDataProperty />} />
            <Route path="viewsdatageneral" element={<ViewsDataGeneral />} />
            <Route path="viewsdatalocation" element={<ViewsDataLocation />} />

            <Route path="/layout/basicinfo/edit/:ppd_id" element={<Basicinfo isEdit />} />
            <Route path="property-detail/edit/:ppd_id" element={<PropertyDetails isEdit />} />
            <Route path="general-info/edit/:ppd_id" element={<GeneraInfo isEdit />} />
            <Route path="location-info/edit/:ppd_id" element={<LocationInfo isEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
