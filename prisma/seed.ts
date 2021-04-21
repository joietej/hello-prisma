import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create({
    data: {
      name: "Tejas",
      email: "foo@bar.com",
      posts: {
        create: { title: "Hello Prisma" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });
}

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
