// we need to import express to create the router for the resource. In this case the resource is bookmarks
const express = require("express");

// we need to create a Router which is a way to reference in app.js this file
const transactions = express.Router();
// I want to return the data as json from the model using my controller
let transactionsArray = require("../models/transaction.model");

function validateForm(req, res, next) {
  if (
    !req.body.name ||
    !req.body.date ||
    !req.body.amount ||
    !req.body.from ||
    !req.body.category
  ) {
    res.status(400).json({ message: "Invalid Inputs" });
  } else next();
}
// route to get ALL transactions (index page)
transactions.get("/", (req, res) => {
  res.json({ transactions: transactionsArray });
});

//route to get a single transaction
transactions.get("/:id", (req, res) => {
  const { id } = req.params;

  const transaction = transactionsArray.find(
    (transaction) => transaction.id === +id
  );

  if (transaction)
    res.status(200).json({ transaction: transaction, message: "Success" });
  else res.status(400).json({ error: "ID not found" });
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
  res.status(200).json({ transactions: transactionsArray });
});

// route to edit a transaction
transactions.put("/:id", validateForm, (req, res) => {
  const { id } = req.params;

  const transactionIndex = transactionsArray.findIndex((log) => log.id === +id);

  if (transactionIndex > -1) transactionsArray[transactionIndex] = req.body;

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

// export the transactions variable on line 11 to be used in the app.js file
module.exports = transactions;
