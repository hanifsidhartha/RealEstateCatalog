import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.code === 200) {
          setName(""); // Clear input fields
          setEmail("");
          setPassword("");
          toast.success("Signup successful", { autoClose: 2000 });
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          toast.error(`Signup failed: ${data.message}`);
        }
      } else {
        const data = await response.json();
        toast.error(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
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
      {/* {popupMessage && <div className="popup">{popupMessage}</div>} */}
    </div>
  );
};

export default Signup;
