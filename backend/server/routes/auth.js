const router = require("express").Router();

// temporary simple auth (NO DB DEPENDENCY)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password required"
    });
  }

  // fake login (for now)
  res.json({
    token: "demo-token",
    user: {
      id: 1,
      name: "Demo User",
      email
    }
  });
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "User registered (demo mode)",
    user: { email }
  });
});

module.exports = router;