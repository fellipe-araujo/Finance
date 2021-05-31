import api from "./api";
import { UserCategory } from "../utils/types";

class CategoryService {
  async categoryCreate(userId: string, data: UserCategory) {
    await api.post(`/users/${userId}/categories`, data);
  }

  async categoryAll(userId: string) {
    const categories = await api.get(`/users/${userId}/categories/all`);
    return categories.data;
  }

  async categoryOne(userId: string, categoryId: string) {
    const category = await api.get(`/users/${userId}/categories/${categoryId}`);
    return category.data;
  }

  async categoryUpdate(userId: string, categoryId: string, data: UserCategory) {
    await api.put(`/users/${userId}/categories/${categoryId}/update`, data);
  }

  async categoryDelete(userId: string, categoryId: string) {
    await api.delete(`/users/${userId}/categories/${categoryId}/delete`);
  }
}

const categoryService = new CategoryService();

export default categoryService;
