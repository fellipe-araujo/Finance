import transactionService from '../services/transactionService';
import { period } from './period';
import { User, UserTransaction } from './types';

interface MonthProps {
  id: string;
  value: string;
}

export const fetchAllTransactions = async (user: User) => {
  const allTransactions = await transactionService.transactionAll(user?._id!);

  return {
    transactions: allTransactions.reverse(),
    type: 'totais',
  };
};

export const fetchMonthAndYearTransactions = async (
  user: User,
  month: string,
  year: string
) => {
  const allTransactions = await transactionService.transactionAll(user?._id!);

  const selectedMonthAndYearTransactions: UserTransaction[] =
    allTransactions.filter(
      (transaction: UserTransaction) =>
        transaction.date?.toLocaleString('pt-BR').slice(0, 7) ===
        `${year}-${month}`
    );

  let sumEntries = 0.0;
  let sumExpenses = 0.0;

  selectedMonthAndYearTransactions.forEach((transaction: UserTransaction) => {
    if (transaction.expense === false) {
      sumEntries += transaction.price!;
    } else {
      sumExpenses += transaction.price!;
    }
  });

  return {
    transactions: selectedMonthAndYearTransactions.reverse(),
    sumEntries,
    sumExpenses,
    type: period.months.find((item: MonthProps) => item.id === month)?.value,
  };
};

export const fetchAllEntriesTransactions = async (user: User) => {
  const allTransactions: UserTransaction[] =
    await transactionService.transactionAll(user?._id!);

  return {
    transactions: allTransactions
      .filter((transaction: UserTransaction) => transaction.expense === false)
      .reverse(),
    type: 'entradas',
  };
};

export const fetchAllExpensesTransactions = async (user: User) => {
  const allTransactions = await transactionService.transactionAll(user?._id!);

  return {
    transactions: allTransactions
      .filter((transaction: UserTransaction) => transaction.expense === true)
      .reverse(),
    type: 'saídas',
  };
};

export const fetchCurrentPeriodTransactions = async (user: User) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('pt-BR').slice(3, 5);
  const currentYear = currentDate.toLocaleString('pt-BR').slice(6, 10);

  const allTransactions = await transactionService.transactionAll(user?._id!);

  const currentPeriodTransactions: UserTransaction[] = allTransactions
    .filter(
      (transaction: UserTransaction) =>
        transaction.date?.toLocaleString('pt-BR').slice(0, 7) ===
        `${currentYear}-${currentMonth}`
    )
    .reverse();

  const currentPeriodEntriesTransactions: UserTransaction[] =
    currentPeriodTransactions?.filter(
      (transaction: UserTransaction) => transaction.expense === false
    );

  const currentPeriodExpensesTransactions: UserTransaction[] =
    currentPeriodTransactions?.filter(
      (transaction: UserTransaction) => transaction.expense === true
    );

  const lastDayEntries = currentPeriodEntriesTransactions[0]?.date
    ?.toLocaleString('pt-BR')
    .slice(8, 10);

  const lastDayExpenses = currentPeriodExpensesTransactions[0]?.date
    ?.toLocaleString('pt-BR')
    .slice(8, 10);

  return {
    transactions: currentPeriodTransactions,
    lastDayEntries,
    lastDayExpenses,
    type: 'este mês',
  };
};
