import { getSummary } from "../services/dashboard.service.js";

export const getSummaryController = async (req, res) => {
  try {
    const summary = await getSummary();
    res.status(200).json(summary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};