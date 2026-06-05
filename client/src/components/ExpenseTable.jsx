export default function ExpenseTable({
  expenses,
  filter,
  deleteExpense,
  setEditExpense,
}) {
  const data =
    filter === "all"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  return (
    <div style={styles.card}>
      <h2>Expense History</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e._id}>
              <td>₹{e.amount}</td>
              <td>{e.category}</td>
              <td>{e.date}</td>
              <td>{e.note}</td>
              <td>
                <button
                  style={styles.edit}
                  onClick={() => setEditExpense(e)}
                >
                  Edit
                </button>

                <button
                  style={styles.delete}
                  onClick={() =>
                    deleteExpense(e._id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  card: {
    marginTop: 20,
    background: "#111827",
    padding: 20,
    borderRadius: 16,
  },
  table: {
    width: "100%",
    marginTop: 10,
  },
  edit: {
    background: "#f59e0b",
    marginRight: 8,
    color: "white",
    padding: 5,
    border: "none",
  },
  delete: {
    background: "#ef4444",
    color: "white",
    padding: 5,
    border: "none",
  },
};