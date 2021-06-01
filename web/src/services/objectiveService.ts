import api from "./api";
import { UserObjective } from "../utils/types";

class ObjectiveService {
  async objectiveCreate(userId: string, data: UserObjective) {
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

  async objectiveUpdate(
    userId: string,
    objectiveId: string,
    data: UserObjective
  ) {
    await api.put(`/users/${userId}/objectives/${objectiveId}/update`, data);
  }

  async objectiveDelete(userId: string, objectiveId: string) {
    await api.delete(`/users/${userId}/objectives/${objectiveId}/delete`);
  }
}

const objectiveService = new ObjectiveService();

export default objectiveService;
