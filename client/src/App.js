import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
