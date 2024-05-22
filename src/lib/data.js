import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    const count = await prisma.user.count({
      where: { username: { contains: q } }
    });
    const users = await prisma.user.findMany({
      where: { username: { contains: q } },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (page - 1)
    });
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id }
    });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    const count = await prisma.product.count({
      where: { title: { contains: q } }
    });
    const products = await prisma.product.findMany({
      where: { title: { contains: q } },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (page - 1)
    });
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: id }
    });
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchInventories = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    const count = await prisma.inventory.count({
      where: { title: { contains: q } }
    });
    const inventory = await prisma.inventory.findMany({
      where: { title: { contains: q } },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (page - 1)
    });
    console.log(inventory)
    return { count, inventory };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch inventory!");
  }
};

export const fetchInventory = async (id) => {
  try {
    const inventory = await prisma.inventory.findUnique({
      where: { id: id }
    });
    return inventory;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch inventory!");
  }
};

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];