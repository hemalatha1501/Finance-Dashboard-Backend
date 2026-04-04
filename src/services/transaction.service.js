import Transaction from "../models/transaction.model.js";

export const createTransaction = async (data) => {
  const transaction = new Transaction(data);
  return await transaction.save();
};

export const getTransactions = async (filters) => {
  return await Transaction.find(filters);
};