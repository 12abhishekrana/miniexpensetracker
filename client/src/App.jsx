import { useEffect, useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseChart from "./components/ExpenseChart.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await api.get("/expenses");
    setExpenses(res.data || []);
  };

  const saveExpense = async (expense) => {
    if (editExpense) {
      const res = await api.put(
        `/expenses/${editExpense._id}`,
        expense
      );

      setExpenses((prev) =>
        prev.map((e) =>
          e._id === editExpense._id ? res.data : e
        )
      );

      setEditExpense(null);
    } else {
      const res = await api.post("/expenses", expense);
      setExpenses((prev) => [res.data, ...prev]);
    }
  };

  const deleteExpense = async (id) => {
    await api.delete(`/expenses/${id}`);
    setExpenses((prev) =>
      prev.filter((e) => e._id !== id)
    );
  };

  return (
    <div style={styles.app}>
      <Navbar />

      <div style={styles.container}>
        <SummaryCards expenses={expenses} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <div style={styles.grid}>
          <ExpenseForm
            onSave={saveExpense}
            editExpense={editExpense}
          />

          <ExpenseChart expenses={expenses} />
        </div>

        <ExpenseTable
          expenses={expenses}
          filter={filter}
          deleteExpense={deleteExpense}
          setEditExpense={setEditExpense}
        />
      </div>
    </div>
  );
}

export default App;

const styles = {
  app: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0b1220, #05070f)",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginTop: 20,
  },
};