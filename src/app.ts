import express from 'express';
import 'express-async-errors';
import { wakasRouter } from './routes/wakas';

export const app = express();

app.use(express.json());

app.use('/', wakasRouter);
