import { prisma } from "../lib/prisma";

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "kazi@1",
  //     email: "kazi14@gmail.com",
  //     role: "USER",
  //   },
  // });

  // console.log(createUser, "CREATE USER");

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is my bio",
  //     userId: 6,
  //   },
  // });

  // console.log(createProfile, "Profile Create ID - 6");

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Tech",
  //   },
  // });
  // console.log(createCategory, "CREATE CATEGORY");

  const createPost = await prisma.post.create({
    data: {
      title: "My First Post",
      content: "This is the content of my first post.",
      published: true,
      authorId: 6,
      postCategories: {
        create: {
          category: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
  });
  console.log(createPost, "CREATE POST");
};

main()
  .then(() => {
    console.log("User created successfully");
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
