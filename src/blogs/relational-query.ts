import { prisma } from "../lib/prisma";

const relationalQuery = async () => {
  // const result = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  // relational filters --
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      posts: {
        where: {
          published: false,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQuery();
