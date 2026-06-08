const router = require("express").Router();
const mongoose = require("mongoose");
const Expense = require("../models/Expense");

// GET ALL EXPENSES
router.get("/", async (req, res) => {
  try {
    console.log(
      "Mongo State:",
      mongoose.connection.readyState
    );

    const expenses = await Expense.find().sort({
      createdAt: -1,
    });

    res.json(expenses);
  } catch (err) {
    console.error("GET ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// ADD EXPENSE
router.post("/", async (req, res) => {
  try {
    console.log(
      "Mongo State:",
      mongoose.connection.readyState
    );

    const {
      amount,
      category,
      date,
      note,
    } = req.body;

    if (!amount || !category || !date) {
      return res.status(400).json({
        message: "Invalid input",
      });
    }

    const expense = await Expense.create({
      amount: Number(amount),
      category,
      date,
      note: note || "",
    });

    res.status(201).json(expense);
  } catch (err) {
    console.error("POST ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// DELETE EXPENSE
router.delete("/:id", async (req, res) => {
  try {
    console.log(
      "Mongo State:",
      mongoose.connection.readyState
    );

    await Expense.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    console.error("DELETE ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
