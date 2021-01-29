import { Request, Response } from 'express';
import Objective from '../models/Objective';

export default {
  async index(request: Request, response: Response) {
    try {
      const objectives = await Objective.find({
        user: request.params.userId,
      });

      return response.json(objectives);
    } catch (error) {
      return response.status(400).json({ error: 'Objectives not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { userId, objectiveId } = request.params;

      const objective = await Objective.findOne({
        _id: objectiveId,
        user: userId,
      });

      return response.json(objective);
    } catch (error) {
      return response.status(400).json({ error: 'Objective not found.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { name, goal, description } = request.body;
      const { userId } = request.params;

      const objective = await Objective.create({
        name,
        goal,
        description,
        user: userId,
      });

      return response.status(201).json(objective);
    } catch (error) {
      return response.status(400).json({ error: 'Error creating objective.' });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { userId, objectiveId } = request.params;

      const objective = await Objective.findOneAndUpdate(
        {
          _id: objectiveId,
          user: userId,
        },
        {
          ...request.body,
        },
        {
          new: true,
        }
      );

      return response.json(objective);
    } catch (error) {
      return response.status(400).json({ error: 'Error updating objective.' });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { userId, objectiveId } = request.params;

      await Objective.findOneAndRemove({
        _id: objectiveId,
        user: userId,
      });

      return response.json({ message: 'Objective deleted.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting objective.' });
    }
  },
};
