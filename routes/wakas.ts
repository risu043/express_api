import express from 'express';
import { searchWakas } from '../src/models/waka';
import { DEFAULT_FILTER, DEFAULT_PAGE } from '../src/constants';

export const router = express.Router();

router.get('/', async (req: any, res: any) => {
  const filter = req.query['filter']
    ? String(req.query['filter'])
    : DEFAULT_FILTER;
  const page = req.query['page'] ? Number(req.query['page']) : DEFAULT_PAGE;

  const data = await searchWakas(filter, page);

  res.json(data);
});

module.exports = router;
