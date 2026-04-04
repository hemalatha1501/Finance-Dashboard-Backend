import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/user.routes.js";
import transactionRoutes from "./src/routes/transaction.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";

dotenv.config();

const app = express();

console.log("Starting server...");

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/transactions", transactionRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});