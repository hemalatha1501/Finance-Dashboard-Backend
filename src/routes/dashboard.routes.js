import express from "express";
import { getSummaryController } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/summary", getSummaryController);

export default router;