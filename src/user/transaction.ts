import { prisma } from "../lib/prisma";

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "Morshed Alom",
      email: "Morshed@gamil.com",
      age: 30,
    },
  });

  console.log("createuser", createUser);

  const updateUser = prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      age: 80,
    },
  });

  // console.log("updateuser", updateUser);

  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updatedData);
};

batchTransaction();
