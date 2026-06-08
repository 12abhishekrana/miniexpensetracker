const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const expenseRoutes = require("./routes/expense");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    console.log("MongoDB Connected")
  )
  .catch((err) =>
    console.error(err)
  );

app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("FinSaaS API Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});