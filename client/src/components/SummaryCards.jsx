function SummaryCards({ expenses }) {
    const total = expenses.reduce(
      (acc, item) => acc + Number(item.amount || 0),
      0
    );
  
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Total Expense</h3>
          <p>₹{total}</p>
        </div>
  
        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Total Items</h3>
          <p>{expenses.length}</p>
        </div>
  
        <div className="bg-slate-800 p-4 rounded-xl">
          <h3>Average</h3>
          <p>
            ₹{expenses.length ? (total / expenses.length).toFixed(2) : 0}
          </p>
        </div>
      </div>
    );
  }
  
  export default SummaryCards;