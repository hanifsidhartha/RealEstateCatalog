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
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    try {
      // const hashedPassword = await bcrypt.hash(password, 10);
      const response = await fetch(
        "https://real-estate-catalog-u050.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.code === 200) {
          setName("");
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
        toast.error(`Signup failed: ${data.message}`);
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
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
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
