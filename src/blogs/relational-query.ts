import { prisma } from "../lib/prisma";

const relationalQuery = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
  console.log(result, "CHECK RESULT");
};

relationalQuery();
