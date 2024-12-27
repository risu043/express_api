import { databaseManager } from '@/db';
const prisma = databaseManager.getInstance();

export const searchWakas = async (filter: string, page: number) => {
  const data = await prisma.waka.findMany({
    where: {
      bodyKanji: {
        contains: filter,
      },
    },
    take: 10,
    skip: (page - 1) * 10,
  });

  const hitCount = await prisma.waka.count({
    where: {
      bodyKanji: {
        contains: filter,
      },
    },
  });

  return { data, hitCount };
};

export const getRandomWakas = async () => {
  const randomIds = Array.from({ length: 100 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  const data = await prisma.waka.findMany({
    where: {
      id: {
        in: randomIds,
      },
    },
  });

  return data;
};
