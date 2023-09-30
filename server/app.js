const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require("../server/keys");
const app = express();

const db = mongoose
  .connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    return mongoose.connection;
  })
  .catch((err) => console.error(err));

console.log("asdf");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: "Invalid token" });
//     }
//     req.userId = decoded.userId; // Store the user ID in the request object
//     next();
//   });
// };

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Something went wrong!" });
// });

require("./models/User");
require("./models/Property");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/property"));

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
