import { prisma } from "../lib/prisma";

const main = async () => {
  // Create a new user with a post
  const userMany = await prisma.user.createMany({
    data: [
      {
        name: "kazi",
        email: "kazi@example.com",
      },
      {
        name: "kazi2",
        email: "kazi2@example.com",
      },
    ],
  });

  console.log(userMany, "MANY");
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
