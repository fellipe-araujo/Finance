import objectiveService from '../services/objectiveService';
import { User, UserObjective } from './types';

export const fetchAllObjectivesValues = async (user: User) => {
  const allObjectives: UserObjective[] = await objectiveService.objectiveAll(
    user?._id
  );

  let total = 0.0;

  allObjectives.forEach((objective: UserObjective) => {
    total += objective.amount!;
  });

  return total;
};
