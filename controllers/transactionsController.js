// we need to import express to create the router for the resource. In this case the resource is bookmarks
const express = require("express");

function validateForm(req, res, next) {
  if (!req.body.name || !req.body.category || !req.body.url)
    res.status(400).json({ message: "Invalid Inputs" });
  else next();
}

// we need to create a Router which is a way to reference in app.js this file
const transactions = express.Router();
// I want to return the data as json from the model using my controller
let transactionsArray = require("../models/transaction.model");

// create get route to return json data to the client
transactions.get("/", (req, res) => {
  res.json({ transactions: transactionsArray });
});

//get a single transaction
transactions.get("/:id", (req, res) => {
  const { id } = req.params;

  const transaction = transactionsArray.find(
    (transaction) => transaction.id === +id
  );

  res.json({ transaction });
});

// route to create a new transaction
transactions.post("/", validateForm, (req, res) => {
  //grab the information from the form

  // console.log(req.body);

  // i need to fake create a new id. i will take the last id number in the transactions array and add 1
  const newId = transactionsArray[transactionsArray.length - 1].id + 1;

  // req.body is an object where I receive all the data from the form. I will add an id to the object
  req.body.id = newId;

  //add data to the end of the array
  transactionsArray.push(req.body);

  // send back all the transactions because I plan to reset the setTransactions state
  res.json({ transactions: transactionsArray });
});

// route to delete a transaction
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;

  transactionsArray = transactionsArray.filter(
    (transaction) => transaction.id !== +id
  );

  res.json({ transactions: transactionsArray });
});

// STILL NEED THE EDIT ROUTE!!
module.exports = transactions;
