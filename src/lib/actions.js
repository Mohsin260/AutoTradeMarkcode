"use server";

import { connectToDB } from "./utils";
import { InventoryViewDTO } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/auth";
import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// Example of Action

export const sayHello = async () => {
  console.log("Hello!");
};

// Adding User

// export const addUser = async (prevState, formData) => {
//   const { username, email, password, img } = Object.fromEntries(formData);

//   // Prisma equivalent for saving a new user to the database

//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await prisma.user.create({
//       data: {
//         username,
//         email,
//         password: hashedPassword,
//         phone,
//         address,
//         isAdmin,
//         isActive,
//       },
//     });

//     console.log("User Saved To Database");
//     revalidatePath("/dashboard/users");
//     redirect("/dashboard/users");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something Went Wrong!" };
//   }
// };


// // Updating User

// export const updateUser = async (formData) => {
//   const { id, username, email, password, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData);

//   try {
//     const updateFields = {
//       username,
//       email,
//       password,
//       phone,
//       address,
//       isAdmin,
//       isActive,
//     };

//     Object.keys(updateFields).forEach(
//       (key) =>
//         (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
//     );

//     await prisma.user.update({
//       where: { id },
//       data: updateFields,
//     });
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to update user!");
//   }

//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/users");
// };



// // Deleting User

// export const deleteUser = async (formData) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     // connectToDB();

//     await prisma.user.delete({ where: { id } });
//     console.log("User Deleted From Database");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Failed to delete user!" };
//   }
// };


// // Update Products

// export const updateProduct = async (formData) => {
//   const { id, title, desc, price, stock, color, size } =
//     Object.fromEntries(formData);

//   try {
//     const updateFields = {
//       title,
//       desc,
//       price,
//       stock,
//       color,
//       size,
//     };

//     Object.keys(updateFields).forEach(
//       (key) =>
//         (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
//     );

//     await prisma.product.update({
//       where: { id },
//       data: updateFields,
//     });
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to update product!");
//   }

//   revalidatePath("/dashboard/products");
//   redirect("/dashboard/products");
// };

// Add Inventory

export const addInventory = async (formData) => {
  const { title, mpg, price, mileage, exteriorColor, interiorColor, stock, vin, bodyStyle } =
    Object.fromEntries(formData);
    
  console.log("FormData:", formData);

  try {
    connectToDB();
    const newInventory = new InventoryViewDTO({
      title,
      mpg,
      price,
      mileage,
      extColor: exteriorColor,
      intColor: interiorColor,
      stockNumber: stock,
      vin,
      bodyStyle
    });
    await newInventory.save();
    console.log("Inventory created:", newInventory);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create inventory!");
  }
  revalidatePath("/dashboard/inventory");
  redirect("/dashboard/inventory");
};

// Read Inventory

export const getInventoryById = async (id) => {
  try {
    connectToDB();
    const inventory = await InventoryViewDTO.findById(id);
    return inventory;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get inventory!");
  }
};

export const getAllInventory = async () => {
  try {
    connectToDB();
    const inventories = await InventoryViewDTO.find();
    return inventories;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get inventories!");
  }
};


// Update Inventory

export const updateInventory = async (formData) => {
  const { id, title, mpg, price, mileage, exteriorColor, interiorColor, stock, vin, bodyStyle } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      mpg,
      price,
      mileage,
      extColor: exteriorColor,
      intColor: interiorColor,
      stockNumber: stock,
      vin,
      bodyStyle
    };

    // Remove empty or undefined fields
    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
    );

    const updatedInventory = await InventoryViewDTO.findByIdAndUpdate(id, updateFields, { new: true });
    console.log("Inventory updated:", updatedInventory);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update inventory!");
  }
  revalidatePath("/dashboard/inventory");
  redirect("/dashboard/inventory");
};

// Delete Inventory

export const deleteInventory = async (id) => {
  try {
    connectToDB();
    await InventoryViewDTO.findByIdAndDelete(id);
    console.log(`Inventory with id ${id} deleted`);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete inventory!");
  }
};
