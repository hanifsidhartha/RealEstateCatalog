const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

router.post("/properties", async (req, res) => {
  try {
    const propertyData = req.body;
    const newProperty = new Property(propertyData);
    await newProperty.save();

    res.status(201).json(newProperty);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to save property", details: error.message });
  }
});

module.exports = router;
