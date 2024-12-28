import express from 'express';
import 'express-async-errors';
import { wakasRouter } from './routes/wakas';
import { usersRouter } from './routes/users';

export const app = express();

app.use(express.json());

app.use('/wakas', wakasRouter);
app.use('/users', usersRouter);
