import Transaction from "../models/transaction.model.js";

export const getSummary = async () => {
  const transactions = await Transaction.find();

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") totalIncome += t.amount;
    else totalExpense += t.amount;
  });

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  };
};