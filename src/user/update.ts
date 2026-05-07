import { prisma } from "../lib/prisma";

const main = async () => {
  // const update = await prisma.user.update({
  //   where: {
  //     id: 5,
  //   },
  //   data: {
  //     name: "kazi updated",
  //   },
  // });

  // const updateMany = await prisma.user.updateMany({
  //   where: {
  //     id: 4,
  //   },
  //   data: {
  //     name: "kazi miya bat khan",
  //   },
  // });
  // console.log(updateMany);

  const upsertData = await prisma.user.upsert({
    where: {
      id: 6,
    },
    update: {
      name: "Kazi Mehdi Hasan",
    },
    create: {
      name: "Kazi Mehdi Hasan",
      email: "kaisaji@gmail.com",
    },
  });
  console.log(upsertData, "UPSERT");
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
