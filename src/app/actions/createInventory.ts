"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function insertInventory(data: any) {
  try {
    const newInventory = await prisma.inventoryViewDTO.create({ data });
    console.log("newInventory", newInventory);
    return newInventory;
  } catch (error) {
    console.error("Error inserting inventory: ", error);
    throw error;
  }
}