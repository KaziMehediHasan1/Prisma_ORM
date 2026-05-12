import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import pg from "pg";
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new pg.Pool({ connectionString });

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
  log: [
    { level: "query", emit: "event" },
    { level: "info", emit: "stdout" },
    { level: "warn", emit: "stdout" },
    { level: "error", emit: "stdout" },
  ],
});

prisma.$on("query", (e) => {
  console.log(`Executed query: ${e.query}`);
  console.log(`Query parameters: ${e.params}`);
  console.log(`Query duration: ${e.duration}ms`);
});

export { prisma };
