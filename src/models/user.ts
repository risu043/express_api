import { databaseManager } from '@/db';
const prisma = databaseManager.getInstance();

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      score: 'desc',
    },
  });

  return { users };
};

export const createUser = async (name: string, score: number) => {
  return await prisma.user.create({
    data: {
      name: name,
      score: score,
    },
  });
};
