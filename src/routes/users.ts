import express from 'express';
import { createUser, getUsers } from '@/models/user';
import { body, validationResult } from 'express-validator';

export const usersRouter = express.Router();

usersRouter.get('/', async (req: any, res: any) => {
  const data = await getUsers();

  res.json(data);
});

usersRouter.post(
  '/',
  body('name').notEmpty().withMessage('Name is required'),
  body('score').notEmpty().withMessage('Score is required'),
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await createUser(req.body.name, req.body.score);
  }
);
