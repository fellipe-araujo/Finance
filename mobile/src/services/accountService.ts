import api from './api';

interface Account {
  name: string;
  balance: number;
}

class AccountService {
  async accountCreate(userId: string, data: Account) {
    await api.post(`/users/${userId}/accounts`, data);
  }

  async accountAll(userId: string) {
    const accounts = await api.get(`/users/${userId}/accounts/all`);
    return accounts.data;
  }

  async accountOne(userId: string, accountId: string) {
    const account = await api.get(`/users/${userId}/accounts/${accountId}`);
    return account.data;
  }

  async accountUpdate(userId: string, accountId: string, name: string) {
    await api.put(`/users/${userId}/accounts/${accountId}/update`, { name });
  }

  async accountDelete(userId: string, accountId: string) {
    await api.delete(`/users/${userId}/accounts/${accountId}/delete`);
  }
}

const accountService = new AccountService();

export default accountService;
