import { prisma } from "../lib/prisma";

async function main() {
  // Create a new user with a post
  // const getAllUserFromDB = await prisma.user.findMany();
  // console.log(getAllUserFromDB, "GET ALL");
  // const findFirst = await prisma.user.findFirst({
  //   where: {
  //     name: "Alice",
  //   },
  // });
  // console.log("Found user:", findFirst);

  const findUnique = await prisma.user.findUniqueOrThrow({
    where: {
      id: 1,
    },
  });

  console.log({ findUnique });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
