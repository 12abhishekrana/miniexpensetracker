const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

// ✅ IMPORTANT ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/expenses", require("./routes/expense"));




mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
  console.log("MONGO_URI =", process.env.MONGO_URI);
});