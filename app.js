// DEPENDENCIES
const express = require("express");
// import cors
const cors = require("cors");
// CONFIGURATION
// invoke our express package in order to use .get and such
const app = express();

// MIDDLEWARE PACKAGE
app.use(cors());

// needed for POST and PUT. Will parse the string that is sent from the fecth
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Budgeting App with your broke ass!!!");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found dummy!" });
});

// EXPORT
module.exports = app;
