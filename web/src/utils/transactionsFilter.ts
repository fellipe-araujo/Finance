import transactionService from "../services/transactionService";
import { User, UserTransaction } from "./types";

export const fetchAllTransactions = async (user: User) => {
  const allTransactions = await transactionService.transactionAll(user?._id!);

  return {
    transactions: allTransactions.reverse(),
    type: "totais",
  };
};

export const fetchAllEntriesTransactions = async (user: User) => {
  const allTransactions = await transactionService.transactionAll(user?._id!);

  return {
    transactions: allTransactions.filter(
      (transaction: UserTransaction) => transaction.expense === false
    ).reverse(),
    type: "entradas",
  };
};

export const fetchAllExpensesTransactions = async (user: User) => {
  const allTransactions = await transactionService.transactionAll(user?._id!);

  return {
    transactions: allTransactions.filter(
      (transaction: UserTransaction) => transaction.expense === true
    ).reverse(),
    type: "saídas",
  };
};

export const fetchCurrentMonthTransactions = async (user: User) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("pt-BR").slice(3, 5);
  const currentYear = currentDate.toLocaleString("pt-BR").slice(6, 10);

  const allTransactions = await transactionService.transactionAll(user?._id!);

  const currentMonthTransactions: UserTransaction[] = allTransactions.filter(
    (transaction: UserTransaction) =>
      transaction.date?.toLocaleString("pt-BR").slice(0, 7) ===
      `${currentYear}-${currentMonth}`
  );

  return {
    transactions: currentMonthTransactions.reverse(),
    type: "este mês",
  };
};
