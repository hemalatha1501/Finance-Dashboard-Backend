import {
  createTransaction,
  getTransactions,
} from "../services/transaction.service.js";

export const createTransactionController = async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({
        success: false,
        message: "Amount, type, and category are required",
      });
    }

    const transaction = await createTransaction(req.body);

    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTransactionsController = async (req, res) => {
  try {
    const transactions = await getTransactions(req.query);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

