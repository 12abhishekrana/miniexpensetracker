function ExpenseChart({ expenses }) {
    // If no data → show empty state
    if (!expenses || expenses.length === 0) {
      return (
        <div className="card">
          <h2>Category Breakdown</h2>
          <p style={{ color: "#6b7280", marginTop: "10px" }}>
            No data available 📭
          </p>
        </div>
      );
    }
  
    // Build category totals
    const data = {};
  
    expenses.forEach((e) => {
      const amount = Number(e.amount) || 0;
      data[e.category] = (data[e.category] || 0) + amount;
    });
  
    return (
      <div className="card">
        <h2>Category Breakdown</h2>
  
        {Object.keys(data).map((cat) => (
          <div key={cat} className="bar-box">
            <div className="bar-label">
              <span>{cat}</span>
              <span>₹{data[cat]}</span>
            </div>
  
            <div className="bar">
              <div
                className="fill"
                style={{
                  width: Math.min(data[cat], 300) + "px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ExpenseChart;