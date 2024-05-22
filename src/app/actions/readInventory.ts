"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// app/actions/inventory.ts
export const fetchInventory = async (skip = 0, take = 10, sort = "") => {
  console.log("fetchInventory", skip);
  try {
    const orderBy = sortOptionToOrderBy(sort); // Convert sort option to Prisma orderBy
    const totalItems = await prisma.inventoryViewDTO.count();
      const totalPages = Math.ceil(totalItems / take);
      
      console.log("orderBy", orderBy);
      console.log("totalPages", totalPages);

      console.log("skip", skip);
      console.log("take", take);

    const inventory = await prisma.inventoryViewDTO.findMany({
      skip: skip,
      take: take,
      orderBy: orderBy as any,
    });

    console.log("inventory", inventory);

    return { inventory, totalPages };
  } catch (error) {
    console.error("Error fetching inventory: ", error);
    throw error;
  }
};

function sortOptionToOrderBy(sortOption: any) {
  try {
    switch (sortOption) {
      case "1":
        return { title: "asc" };
      case "2":
        return { price: "asc" };
      case "3":
        return { price: "desc" };
      case "4":
        return { mileage: "asc" };
      case "5":
        return { mileage: "desc" };
      //case '6': return { year: 'latest' };
      //case '7': return { latest: 'latest' };
      // ... other cases
      default:
        return [];
    }
  } catch (error) {
    console.error("Error fetching sortOptionToOrderBy: ", error);
    throw error;
  }
}

export async function fetchInventoryCount() {
  try {
    const count = await prisma.inventoryViewDTO.count();
    return count;
  } catch (error) {
    console.error("Error fetching inventory count: ", error);
    throw error;
  }
}

export async function fetchButtonLinks(id: string) {
  try {
    const inventoryItem = await prisma.inventoryViewDTO.findUnique({
      where: { id },
      select: { btnlinks: true },
    });

    if (inventoryItem === null) {
      console.error("No inventory item found for the given ID");
      return null; // or throw an error, or return a default value
    }


    return inventoryItem.btnlinks;
  } catch (error) {
    console.error("Error fetching button links: ", error);
    throw error;
  }
}
