const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const expenseRoutes = require("./routes/expense");

const app = express();

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    app.use("/api/expenses", expenseRoutes);

    app.get("/", (req, res) => {
      res.send("API Running");
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB Error:", err);
  }
}

startServer();
