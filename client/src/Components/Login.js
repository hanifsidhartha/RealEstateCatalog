import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base_url = "https://02d02ba2-5227-46f2-b3d7-40fdc3a41bdc.mock.pstmn.io";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(base_url);
  const handleLogin = async () => {
    try {
      const req_body = {
        email: email,
        password: password,
      };

      const response = await fetch(base_url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req_body),
      });

      if (response.ok) {
        const response_data = await response.json();
        console.log(response_data);
        if (response_data.code == 200) {
          localStorage.setItem("token", response_data.data.token);
          localStorage.setItem("name", response_data.data.name);
          console.log("Login successful");
          navigate("/layout/home");
          toast.success("Login successful");
          setEmail("");
          setPassword("");
        } else {
          toast.error("Login failed: " + response_data.message);
        }
      } else {
        const response_data = await response.json();
        console.error("Login failed:", response_data.error);
        toast.error("Login failed: " + response_data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error: " + error.message);
    }
  };

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
        <button onClick={() => handleLogin()}>Login</button>
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
