const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

const PORT = process.env.PORT;
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
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Middleware to pass the db variable
app.use((req, res, next) => {
  req.db = db; // Assuming that 'db' is your database connection
  next(); // Move on to the next middleware or route handler
});

require("./models/User");
require("./models/Property");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/property"));

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
