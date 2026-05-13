import { prisma } from "../lib/prisma";

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published"],
  });
  console.log(groupPost);
};

groupBy();
