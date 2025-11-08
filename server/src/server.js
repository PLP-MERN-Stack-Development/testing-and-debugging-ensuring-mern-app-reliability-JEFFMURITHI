const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan"); // For logging HTTP requests
const fs = require("fs");
const path = require("path");

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Log setup - store logs in a file for debugging
const logStream = fs.createWriteStream(path.join(__dirname, "server.log"), { flags: "a" });
app.use(morgan("combined", { stream: logStream }));
app.use(morgan("dev")); // console logs for development

// Performance monitoring middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`⏱️ ${req.method} ${req.originalUrl} took ${duration}ms`);
  });
  next();
});

// Check for Mongo URI
if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    // Start server after DB connection
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Global error handler (for unexpected errors)
process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("💥 Unhandled Rejection:", err);
});
