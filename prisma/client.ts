import { PrismaClient } from '@prisma/client'

class PrismaInstance {
  private static instance: PrismaInstance;
  private readonly prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): PrismaInstance {
    if (!PrismaInstance.instance) {
      PrismaInstance.instance = new PrismaInstance();
    }
    return PrismaInstance.instance;
  }

  public getClient(): PrismaClient {
    return this.prisma;
  }
}

export default PrismaInstance.getInstance().getClient();