export default function SummaryCards({ expenses = [] }) {
  const total = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  const avg =
    expenses.length > 0 ? total / expenses.length : 0;

  const highest =
    expenses.length > 0
      ? Math.max(...expenses.map(e => Number(e.amount || 0)))
      : 0;

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <Card title="Total Spent" value={`₹${total}`} />
      <Card title="Average" value={`₹${avg.toFixed(2)}`} />
      <Card title="Highest" value={`₹${highest}`} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={cardStyle}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  padding: "15px",
  background: "#1e293b",
  color: "white",
  borderRadius: "10px",
  textAlign: "center",
};