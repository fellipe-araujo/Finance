import api from './api';
import { User } from '../utils/types';

class UserService {
  async register(data: User) {
    await api.post('/register', data);
  }

  async login(email: string, password: string) {
    const response = await api.post('/authenticate', { email, password });
    return response.data;
  }

  async userData(userId: string) {
    const user = await api.get(`/users/${userId}`);
    return user.data;
  }

  async userUpdate(userId: string, newData: User) {
    await api.put(`/users/${userId}/update`, newData);
  }

  async userDelete(userId: string) {
    await api.delete(`/users/${userId}/delete`);
  }
}

const userService = new UserService();

export default userService;
