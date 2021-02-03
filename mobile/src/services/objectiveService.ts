import api from './api';

interface Objective {
  name: string;
  goal: number;
  description: string;
  user: string;
}

class ObjectiveService {
  async objectiveCreate(userId: string, data: Objective) {
    await api.post(`/users/${userId}/objectives`, data);
  }

  async objectiveAll(userId: string) {
    const objectives = await api.get(`/users/${userId}/objectives/all`);
    return objectives.data;
  }

  async objectiveOne(userId: string, objectiveId: string) {
    const objective = await api.get(
      `/users/${userId}/objectives/${objectiveId}`
    );
    return objective.data;
  }

  async objectiveUpdate(userId: string, objectiveId: string, data: Objective) {
    await api.put(`/users/${userId}/objectives/${objectiveId}/update`, data);
  }

  async objectiveDelete(userId: string, objectiveId: string) {
    await api.delete(`/users/${userId}/objectives/${objectiveId}/delete`);
  }
}

const objectiveService = new ObjectiveService();

export default objectiveService;
