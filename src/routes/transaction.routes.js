import express from "express";
import { authorize } from "../middlewares/auth.middleware.js";

import {
  createTransactionController,
  getTransactionsController,
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/", authorize(["admin"]), createTransactionController);
router.get("/", authorize(["admin", "analyst"]), getTransactionsController);

export default router;