const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// HTTP request logging (dev + combined for file if needed in server.js)
app.use(morgan("dev"));

// Example routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "⚠️ Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("💥 Global Error Handler:", err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app; // ✅ export the app only
