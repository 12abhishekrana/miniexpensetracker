import api from "./api";

// ----------------------
// LOGIN USER
// ----------------------
export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/auth/login", {
      email,
      password
    });

    // store token + user
    localStorage.setItem("token", res.data.token);
    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    return res.data.user;
  } catch (err) {
    throw err.response?.data?.message || "Login failed";
  }
};

// ----------------------
// REGISTER USER
// ----------------------
export const registerUser = async (email, password) => {
  try {
    const res = await api.post("/auth/register", {
      email,
      password
    });

    return res.data;
  } catch (err) {
    throw err.response?.data?.message || "Register failed";
  }
};

// ----------------------
// LOGOUT USER
// ----------------------
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// ----------------------
// GET CURRENT USER
// ----------------------
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// ----------------------
// CHECK AUTH
// ----------------------
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};