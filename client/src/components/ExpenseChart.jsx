import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function ExpenseChart({ expenses }) {
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find((i) => i.name === curr.category);
    if (found) {
      found.value += Number(curr.amount);
    } else {
      acc.push({ name: curr.category, value: Number(curr.amount) });
    }
    return acc;
  }, []);

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={120}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

const box = {
  padding: "15px",
  background: "#334155",
  color: "white",
  borderRadius: "10px",
  flex: 1,
};