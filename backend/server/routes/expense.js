const router = require("express").Router();
const Expense = require("../models/Expense");

// GET ALL EXPENSES (per user)
router.get("/", async (req, res) => {
  try {
    const userId = req.headers.userid;

    const expenses = await Expense.find({ userId }).sort({
      createdAt: -1,
    });

    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD EXPENSE (per user)
router.post("/", async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;
    const userId = req.headers.userid;

    if (!userId) {
      return res.status(400).json({ message: "UserId missing" });
    }

    if (!amount || !category || !date) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const expense = await Expense.create({
      userId,
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

// DELETE EXPENSE (per user)
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.headers.userid;

    await Expense.deleteOne({
      _id: req.params.id,
      userId,
    });

    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
