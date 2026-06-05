import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getExpenses = () => api.get("/expenses");

export const addExpense = (expense) =>
  api.post("/expenses", expense);

export const deleteExpense = (id) =>
  api.delete(`/expenses/${id}`);

export const getMonthlySummary = () =>
  api.get("/expenses/summary/month");

export default api;