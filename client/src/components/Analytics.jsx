import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
  } from "recharts";
  
  function Analytics({ expenses, wallet }) {
    // -----------------------------
    // CATEGORY DATA
    // -----------------------------
    const categoryMap = {};
  
    expenses.forEach((e) => {
      categoryMap[e.category] =
        (categoryMap[e.category] || 0) + Number(e.amount);
    });
  
    const pieData = Object.keys(categoryMap).map((key) => ({
      name: key,
      value: categoryMap[key]
    }));
  
    // -----------------------------
    // MONTHLY DATA
    // -----------------------------
    const monthMap = {};
  
    expenses.forEach((e) => {
      const month = new Date(e.date).toLocaleString("default", {
        month: "short"
      });
  
      monthMap[month] =
        (monthMap[month] || 0) + Number(e.amount);
    });
  
    const barData = Object.keys(monthMap).map((m) => ({
      month: m,
      amount: monthMap[m]
    }));
  
    // -----------------------------
    // FINTECH CALCULATIONS
    // -----------------------------
    const totalSpent = expenses.reduce(
      (sum, e) => sum + Number(e.amount),
      0
    );
  
    const remaining = wallet - totalSpent;
  
    const days = new Set(expenses.map((e) => e.date)).size || 1;
    const dailyAvg = (totalSpent / days).toFixed(2);
  
    const topCategory = Object.entries(categoryMap).sort(
      (a, b) => b[1] - a[1]
    )[0];
  
    // -----------------------------
    // SMART STATUS LOGIC
    // -----------------------------
    let status = "";
  
    if (remaining < 0) {
      status = "🚨 Budget Exceeded!";
    } else if (remaining < wallet * 0.2) {
      status = "⚠️ Close to limit";
    } else {
      status = "✅ Spending under control";
    }
  
    const COLORS = [
      "#6366f1",
      "#22c55e",
      "#f59e0b",
      "#ef4444",
      "#06b6d4",
      "#a855f7"
    ];
  
    return (
      <div style={styles.wrapper}>
        
        {/* KPI CARDS */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h4>💸 Total Spent</h4>
            <h2>₹{totalSpent}</h2>
          </div>
  
          <div style={styles.card}>
            <h4>💰 Wallet</h4>
            <h2>₹{wallet}</h2>
          </div>
  
          <div style={styles.card}>
            <h4>📊 Daily Avg</h4>
            <h2>₹{dailyAvg}</h2>
          </div>
  
          <div style={styles.card}>
            <h4>🏆 Top Category</h4>
            <h2>{topCategory ? topCategory[0] : "-"}</h2>
          </div>
        </div>
  
        {/* SMART ALERT */}
        <div
          style={{
            ...styles.alert,
            background:
              remaining < 0
                ? "#fee2e2"
                : remaining < wallet * 0.2
                ? "#fef3c7"
                : "#dcfce7"
          }}
        >
          <div style={{ fontWeight: "600" }}>{status}</div>
  
          <div style={{ fontSize: "14px", marginTop: "5px" }}>
            Wallet: ₹{wallet} | Spent: ₹{totalSpent} | Remaining: ₹
            {remaining}
          </div>
        </div>
  
        {/* PIE CHART */}
        <div style={styles.cardBox}>
          <h3>📊 Category Breakdown</h3>
  
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
  
        {/* BAR CHART */}
        <div style={styles.cardBox}>
          <h3>📈 Monthly Spending</h3>
  
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  // -----------------------------
  // STYLES
  // -----------------------------
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    },
  
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "10px"
    },
  
    card: {
      background: "white",
      padding: "15px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      textAlign: "center"
    },
  
    cardBox: {
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb"
    },
  
    alert: {
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      textAlign: "center"
    }
  };
  
  export default Analytics;