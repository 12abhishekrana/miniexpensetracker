function ExpenseTable({ expenses, onDelete }) {
    return (
      <div className="card">
        <h2>Expenses</h2>
  
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={styles.th}>Amount</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Note</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
  
            <tbody>
              {expenses.map((e) => (
                <tr key={e._id}>
                  <td style={styles.td}>₹{e.amount}</td>
                  <td style={styles.td}>{e.category}</td>
                  <td style={styles.td}>
                    {e.date ? new Date(e.date).toLocaleDateString() : "-"}
                  </td>
                  <td style={styles.td}>{e.note || "-"}</td>
  
                  <td style={styles.td}>
                    <button
                      onClick={() => onDelete(e._id)}
                      style={styles.btn}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  const styles = {
    th: {
      textAlign: "left",
      padding: "10px",
      borderBottom: "1px solid #e5e7eb",
      color: "#6b7280",
      fontSize: "13px"
    },
  
    td: {
      padding: "10px",
      borderBottom: "1px solid #f1f5f9",
      fontSize: "14px"
    },
  
    btn: {
      padding: "6px 10px",
      background: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    }
  };
  
  export default ExpenseTable;
