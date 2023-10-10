const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = require("../keys");

function gen_res(code, message, data) {
  var resp = {
    code: code,
    message: message,
    data: data,
  };
  return resp;
}

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password || !name) {
      return res
        .status(400)
        .json(gen_res(401, "Email and password and name are required", {}));
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json(gen_res(400, "Email already exists", {}));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(200).json(gen_res(200, "success", {}));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Check for an empty request body
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json(gen_res(400, "Invalid request", {}));
    }
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json(gen_res(401, "Email and password are required", {}));
    }
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json(gen_res(401, "Invalid credentials", {}));
    }
    // Check if the password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json(gen_res(401, "Invalid credentials", {}));
    }
    // Generate and send a JWT token
    const token = jwt.sign({ email: email }, JWT_SECRET);
    const cus_data = {
      token: token,
      name: user.name,
      email: user.email,
    };
    return res.status(200).json(gen_res(200, "success", cus_data));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
