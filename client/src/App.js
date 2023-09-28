import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

import Basicinfo from "./Components/basicinfo";
import Generalinfo from "./Components/generalinfo";
import Propertdetail from "./Components/propertdetail";

import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import Layout from "./Components/Layout";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/layout" element={<Layout />}>
            <Route path="home" element={<Home />} />

            <Route path="basicinfo" element={<Basicinfo />} />
            <Route path="propertdetail" element={<Propertdetail />} />
            <Route path="generalinfo" element={<Generalinfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
