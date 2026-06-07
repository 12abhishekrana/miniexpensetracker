const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const FILE_PATH = path.join(
  __dirname,
  "../data/expenses.json"
);

// --------------------
// READ
// --------------------
function readExpenses() {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// --------------------
// SAVE
// --------------------
function saveExpenses(expenses) {
  fs.writeFileSync(
    FILE_PATH,
    JSON.stringify(expenses, null, 2)
  );
}

// --------------------
// GET ALL
// --------------------
router.get("/", (req, res) => {
  const expenses = readExpenses();
  res.json(expenses);
});

// --------------------
// ADD EXPENSE
// --------------------
router.post("/", (req, res) => {
  const { amount, category, date, note } = req.body;

  if (!amount || !category || !date) {
    return res.status(400).json({
      message: "Invalid input"
    });
  }

  const expenses = readExpenses();

  const newExpense = {
    id: uuidv4(),
    amount: Number(amount),
    category,
    date,
    note: note || ""
  };

  expenses.push(newExpense);
  saveExpenses(expenses);

  res.status(201).json(newExpense);
});

// --------------------
// DELETE
// --------------------
router.delete("/:id", (req, res) => {
  let expenses = readExpenses();

  expenses = expenses.filter(
    (e) => e.id !== req.params.id
  );

  saveExpenses(expenses);

  res.json({ message: "Deleted" });
});

module.exports = router;