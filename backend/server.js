const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();


// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000"
  })
);

app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "PSPerfume backend is running"
  });
});


// API routes
app.use("/api/products", require("./routes/productRoutes"));


// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});