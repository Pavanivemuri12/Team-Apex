import { PrismaClient } from "@prisma/client";

// Create a global type for the PrismaClient singleton
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Use a singleton pattern for PrismaClient
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Optional: Logs for debugging
  });

// Assign the PrismaClient instance to the global object in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
