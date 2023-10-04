const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const Property = require("../models/Property");
require("dotenv").config();

const uri = process.env.MONGOURI;
const JWT_SECRET = process.env.JWT_SECRET;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = client.db("test");

function gen_res(code, message, data) {
  const resp = {
    code: code,
    message: message,
    data: data,
  };
  return resp;
}
// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json(gen_res(401, "Authorization header missing", {}));
  }

  const token = authHeader.split(" ")[1]; // Assuming it's a Bearer token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(402).json(gen_res(402, "Invalid Token", {}));
    }
    req.user = decoded;
    next();
  });
}
router.post("/add-property", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await db
        .collection("users")
        .findOne({ email: decoded.email });

      if (!user) {
        return res.status(403).json({ message: "Invalid Token" });
      }

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Invalid request" });
      }

      const req_obj = req.body;
      const collection = db.collection("real_estate_properties");

      try {
        const result = await collection.insertOne(req_obj);
        console.log("Success");
        return res.status(200).json({ message: "Success" });
      } catch (error) {
        console.error("Error inserting document:", error);
        return res.status(500).json({ message: "Error Inserting Document" });
      }
    } catch (err) {
      console.error(err);
      return res.status(403).json({ message: "Authorization Failed" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define the /list-properties route
router.post("/list-properties", verifyToken, async (req, res) => {
  try {
    const collection = db.collection("real_estate_properties");
    const docs = await collection.find({}).toArray();
    console.log("Found the following documents:");
    console.log(docs);
    const resp_arr = [];
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      const resp_obj = {
        ppp_id: element._id,
        image: element.photo,
        property_type: element.propertyType,
        contact: element.mobile,
        area: element.area,
        views: "02",
        status: "active",
        days_left: "20",
      };
      resp_arr.push(resp_obj);
    }
    return res.status(200).json(gen_res(200, "Success", resp_arr));
  } catch (err) {
    console.error("Error finding documents:", err);
    return res.status(500).json(gen_res(500, "Internal Server Error", {}));
  }
});

// Define the /delete-property route
router.delete("/delete-property", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json(gen_res(401, "Authorization header missing", {}));
    }
    const { property_id } = req.body;
    if (!property_id) {
      return res.status(400).json(gen_res(400, "Property ID is required", {}));
    }
    const token = authHeader.split(" ")[1]; // Assuming it's a Bearer token
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("Decoded JWT payload:", decoded);
      const user = await db
        .collection("users")
        .findOne({ email: decoded.email });
      if (!user) {
        return res.status(402).json(gen_res(402, "Invalid Token", {}));
      }
      const collection = db.collection("real_estate_properties");
      try {
        const result = await collection.deleteOne({
          _id: new ObjectId(property_id),
        });
        if (result.deletedCount === 1) {
          return res.status(200).json(gen_res(200, "Success", property_id));
        } else {
          return res.status(404).json(gen_res(404, "Property not found", {}));
        }
      } catch (err) {
        console.error("Error deleting property:", err);
        return res.status(500).json(gen_res(500, "Internal Server Error", {}));
      }
    } catch (err) {
      console.error(err);
      return res.status(402).json(gen_res(402, "Authorization Failed", {}));
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(gen_res(500, "Internal Server Error", {}));
  }
});

// Endpoint for searching properties
router.post("/search-properties", async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }
  try {
    // Use your database model and perform a search query here
    const results = await Property.find({
      $or: [
        { ppdId: { $regex: new RegExp(query, "i") } },
        { name: { $regex: new RegExp(query, "i") } },
      ],
    });
    console.log("Search results:", results);
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
