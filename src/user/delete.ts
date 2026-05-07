import { prisma } from "../lib/prisma";

const main = async () => {
  // const deleted = await prisma.user.delete({
  //   where: {
  //     id: 5,
  //   },
  // });
  const deleteManys = await prisma.user.deleteMany({});
  console.log(deleteManys, "DELETED");
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
