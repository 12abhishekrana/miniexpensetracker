const router = require("express").Router();
const Expense = require("../models/Expense");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({
      createdAt: -1,
    });

    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD
router.post("/", async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;

    if (!amount || !category || !date) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const expense = await Expense.create({
      amount: Number(amount),
      category,
      date,
      note: note || "",
    });

    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
