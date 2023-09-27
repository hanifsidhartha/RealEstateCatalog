import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
      <div className="part-01">
        <h2>Logo</h2>
      </div>
      <div className="part-02">
        <h6>Enter your credentials to access your account</h6>
        <input
          type="text"
          placeholder="User ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="">Login</button>
      </div>
      <div className="part-03">
        <h5>
          <Link to="/signup">Don't have an account ? Sign Up</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
