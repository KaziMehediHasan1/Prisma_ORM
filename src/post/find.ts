import { prisma } from "../lib/prisma";

const main = async () => {
  // const findManys = await prisma.post.findMany({
  //   skip: 5,
  //   take: 5,
  // });
  // console.log(findManys);

  const cursorBasedPagination = await prisma.post.findMany({
    take: 2,
    cursor: {
      id: 15,
    },
    skip: 1,
  });
  console.log(cursorBasedPagination);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
