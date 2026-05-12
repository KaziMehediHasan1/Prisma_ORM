import { prisma } from "../lib/prisma";

const aggregates = async () => {
  const avgAge = await prisma.user.aggregate({
  _sum: {
      id: true,
    },
  });

  console.log(avgAge);
};

aggregates();
