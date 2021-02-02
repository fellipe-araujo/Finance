import api from './api';

interface Transaction {
  expense: boolean;
  price: number;
  user: string;
  account: string;
  category: string;
}

class TransactionService {
  async transactionCreate(userId: string, data: Transaction) {
    await api.post(`/users/${userId}/transactions`, data);
  }

  async transactionAll(userId: string) {
    const transactions = await api.get(`/users/${userId}/transactions/all`);
    return transactions.data;
  }

  async transactionOne(userId: string, transactionId: string) {
    const transaction = await api.get(
      `/users/${userId}/transactions/${transactionId}`
    );
    return transaction.data;
  }

  async transactionDelete(userId: string, transactionId: string) {
    await api.delete(`/users/${userId}/transactions/${transactionId}/delete`);
  }
}

const transactionService = new TransactionService();

export default transactionService;
