import { Request, Response, Router } from 'express';
import Objective from '../models/Objective';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/all', async (request: Request, response: Response) => {
  const objectives = await Objective.find();

  return response.json(objectives);
});

router.get('/:objectiveId', async (request: Request, response: Response) => {
  const objective = await Objective.findById(request.params.objectiveId);

  return response.json(objective);
});

router.post('/', async (request: Request, response: Response) => {
  const { name, goal, description } = request.body;

  const objective = await Objective.create({
    name,
    goal,
    description,
  });

  return response.status(201).json(objective);
});

module.exports = (app: { use: (arg0: string, arg1: Router) => any }) =>
  app.use('/objectives', router);
