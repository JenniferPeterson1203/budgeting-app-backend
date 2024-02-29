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

// import the controller in order to tell the application to use the specifc resource's controller
const transactionsController = require("./controllers/transactionsController");

// MIDDLEWARE FOR CONTROLLERS
// I want to use the bookMarkController routes with this base url
app.use("/transactions/", transactionsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my Budgeting App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page Not Found" });
  // res.status(404).send("Sorry, this route does not exist! Please try again.");
});

// EXPORT
module.exports = app;
