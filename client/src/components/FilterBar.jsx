export default function FilterBar({ filter, setFilter }) {
  return (
    <div style={{ padding: "10px" }}>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="all">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}