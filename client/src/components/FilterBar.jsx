function FilterBar({ setFilter }) {
  return (
    <div style={styles.box}>
      <div style={styles.dropdownWrapper}>
        <select
          style={styles.select}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
}

const styles = {
  box: {
    margin: "15px 0",
    textAlign: "center",
  },

  dropdownWrapper: {
    display: "inline-block",
    position: "relative",
  },

  select: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "white",
    outline: "none",
    cursor: "pointer",

    // 👇 makes dropdown menu scrollable
    maxHeight: "150px",
    overflowY: "auto",
  },
};

export default FilterBar;