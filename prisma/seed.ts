import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "nkechi@example.com",
      name: "Nkechi",
      profiles: {
        create: {
          lineage: "Ọmụnna",
          language: "Igbo",
          community: "Diaspora",
          culturalTags: ["Uli", "Ọjị", "Ụmụnne"]
        }
      }
    }
  });
}

main().finally(() => prisma.$disconnect());
