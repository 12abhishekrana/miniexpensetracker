import { useEffect, useState } from "react";

export default function ExpenseForm({
  onSave,
  editExpense,
}) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  useEffect(() => {
    if (editExpense) setForm(editExpense);
  }, [editExpense]);

  const submit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div style={styles.card}>
      <h2 style={{ marginBottom: 15 }}>
        {editExpense ? "✏️ Edit Expense" : " Add Expenses "}
      </h2>

      <form onSubmit={submit}>
        <input
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({
              ...form,
              amount: e.target.value,
            })
          }
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
          select={styles.select}
        >
           <option value="">Select Category</option>
  <option value="Food">Food</option>
  <option value="Transport">Transport</option>
  <option value="Bills">Bills</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Shopping">Shopping</option>
  <option value="Other">Other</option>
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({
              ...form,
              date: e.target.value,
            })
          }
        />

        <input
          placeholder="Note"
          value={form.note}
          onChange={(e) =>
            setForm({
              ...form,
              note: e.target.value,
            })
          }
        />

        <button style={styles.btn}>
          {editExpense ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    background: "#111827",
    padding: 20,
    borderRadius: 16,
    border: "1px solid #0f172a",
  },
  btn: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    background: "#3b82f6",
    color: "blue",
    border: "none",
  },
};