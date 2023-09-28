import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        console.log("Signup successful");
      } else {
        const data = await response.json();
        console.error("Signup failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="main">
      <div className="part-01">
        <h2>Logo</h2>
      </div>
      <div className="part-02">
        <h6>Create New Account</h6>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => handleSignup()}>Signup</button>
      </div>
      <div className="part-03">
        <h5>
          <Link to="/login">Already have an account ? Sign In</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
