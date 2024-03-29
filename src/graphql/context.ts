import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface PrismaContext {
    prisma: PrismaClient
}

export const createContext = ():PrismaContext => ({prisma})
