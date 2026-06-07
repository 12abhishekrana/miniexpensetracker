import { useEffect, useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SummaryCards from "./components/SummaryCards";
import Analytics from "./components/Analytics";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("Dashboard");

  const [expenses, setExpenses] = useState([]);

  const [wallet, setWallet] = useState(() => {
    return Number(localStorage.getItem("wallet")) || 0;
  });

  const [inputBudget, setInputBudget] = useState("");

  // -------------------------
  // LOAD USER
  // -------------------------
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // -------------------------
  // FETCH EXPENSES
  // -------------------------
  const fetchExpenses = async () => {
    const res = await api.get("/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    if (user) fetchExpenses();
  }, [user]);

  // -------------------------
  // ADD EXPENSE
  // -------------------------
  const addExpense = async (expense) => {
    await api.post("/expenses", expense);
    fetchExpenses();
  };

  // -------------------------
  // DELETE EXPENSE
  // -------------------------
  const deleteExpense = async (id) => {
    await api.delete(`/expenses/${id}`);
    fetchExpenses();
  };

  // -------------------------
  // SAVE WALLET
  // -------------------------
  const saveWallet = () => {
    const value = Number(inputBudget);
    setWallet(value);
    localStorage.setItem("wallet", value);
    setInputBudget("");
  };

  // -------------------------
  // LOGOUT
  // -------------------------
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const totalSpent = expenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  const remaining = wallet - totalSpent;

  if (!user) return <Auth setUser={setUser} />;

  return (
    <div style={styles.app}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <Navbar setView={setView} />
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        <h2>Welcome, {user.name}</h2>

        {/* DASHBOARD */}
        {view === "Dashboard" && (
          <>
            <SummaryCards expenses={expenses} />

            <ExpenseForm onAdd={addExpense} />

            <ExpenseTable
              expenses={expenses}
              onDelete={deleteExpense}
            />
          </>
        )}

        {/* ANALYTICS */}
        {view === "Analytics" && (
          <Analytics
            expenses={expenses}
            wallet={wallet}
          />
        )}

        {/* SETTINGS */}
        {view === "Settings" && (
          <div style={styles.card}>
            <h2>⚙️ Settings</h2>

            <h3>💰 Wallet Budget</h3>

            <input
              type="number"
              placeholder="Enter budget"
              value={inputBudget}
              onChange={(e) =>
                setInputBudget(e.target.value)
              }
              style={styles.input}
            />

            <button
              onClick={saveWallet}
              style={styles.button}
            >
              Save Budget
            </button>

            <hr style={{ margin: "20px 0" }} />

            <h3>📊 Financial Summary</h3>
            <p>💸 Spent: ₹{totalSpent}</p>
            <p>💰 Wallet: ₹{wallet}</p>
            <p>🟢 Remaining: ₹{remaining}</p>

            <hr style={{ margin: "20px 0" }} />

            <button
              onClick={logout}
              style={styles.logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------
// STYLES
// -------------------------
const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    background: "#f1f5f9"
  },
  sidebar: {
    width: "220px",
    background: "#0f172a",
    color: "white",
    padding: "20px"
  },
  main: {
    flex: 1,
    padding: "20px"
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "420px",
    border: "1px solid #e5e7eb"
  },
  input: {
    padding: "10px",
    width: "100%",
    marginTop: "10px"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    background: "#6366f1",
    color: "white",
    border: "none"
  },
  logout: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    background: "red",
    color: "white",
    border: "none"
  }
};

export default App;