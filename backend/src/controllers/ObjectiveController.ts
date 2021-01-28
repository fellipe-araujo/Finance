import { Request, Response } from 'express';
import Objective from '../models/Objective';

export default {
  async index(request: Request, response: Response) {
    const objectives = await Objective.find();

    return response.json(objectives);
  },

  async show(request: Request, response: Response) {
    const objective = await Objective.findById(request.params.objectiveId);

    return response.json(objective);
  },

  async store(request: Request, response: Response) {
    const { name, goal, description } = request.body;

    const objective = await Objective.create({
      name,
      goal,
      description,
    });

    return response.status(201).json(objective);
  },

  async update(request: Request, response: Response) {},

  async delete(request: Request, response: Response) {},
};
