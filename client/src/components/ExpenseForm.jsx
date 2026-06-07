import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    note: ""
  });

  const handleSubmit = () => {
    if (!form.amount || !form.category || !form.date) return;

    onAdd(form);

    setForm({
      amount: "",
      category: "",
      date: "",
      note: ""
    });
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Add Expense</h2>

      {/* AMOUNT */}
      <input
        placeholder="Amount"
        type="number"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
        style={styles.input}
      />

      {/* CATEGORY */}
      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
        style={styles.input}
      >
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Health</option>
        <option>Education</option>
        <option>Other</option>
      </select>

      {/* DATE */}
      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
        style={styles.input}
      />

      {/* NOTE (optional) */}
      <input
        placeholder="Note (optional)"
        value={form.note}
        onChange={(e) =>
          setForm({ ...form, note: e.target.value })
        }
        style={styles.input}
      />

      {/* BUTTON */}
      <button onClick={handleSubmit} style={styles.button}>
        Add Expense
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    border: "1px solid #e6e8ec",
    borderRadius: "16px",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 1px 2px rgba(16,24,40,0.06)"
  },

  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#101828"
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #d0d5dd",
    fontSize: "14px",
    outline: "none",
    background: "#fff"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "500",
    cursor: "pointer"
  }
};

export default ExpenseForm;