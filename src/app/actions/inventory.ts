"use server";

// import { connectToDB } from "./utils";
// import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/auth";
import bcrypt from "bcryptjs";

import { PrismaClient } from '@prisma/client';
// import { redirect } from "next/navigation";
const prisma = new PrismaClient();

async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('Database connection is successful.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabaseConnection();

// export async function insertInventory(data: any) {
//   try {
//     const newInventory = await prisma.car.create({ data });
//     console.log("newInventory", newInventory);
//     return newInventory;
//   } catch (error) {
//     console.error("Error inserting inventory: ", error);
//     throw error;
//   }
// }

// export const addPost = async (formData: any) => {
//   const { title, desc, slug, userId } = Object.fromEntries(formData);

//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         title,
//         desc,
//         slug,
//         userId,
//       },
//     });

//     console.log("Post Saved To Database");
//     revalidatePath("/blog");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something went wrong" };
//   }
// };

// export const deletePost = async (formData: any) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     await prisma.post.delete({
//       where: {
//         id,
//       },
//     });
//     console.log("Post Deleted From Database");
//     revalidatePath("/blog");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something Went Wrong While Deleting Post" };
//   }
// };

// export const addUser = async (formData: any) => {
//   const { username, email, password, img } = Object.fromEntries(formData);

//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         username,
//         email,
//         password,
//         img,
//       },
//     });

//     console.log("User Saved To Database");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something Went Wrong!" };
//   }
// };

// export const deleteUser = async (formData: any) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     await prisma.post.deleteMany({
//       where: {
//         userId: id,
//       },
//     });
//     await prisma.user.delete({
//       where: {
//         id,
//       },
//     });
//     console.log("User Deleted From Database");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something Went Wrong!" };
//   }
// };

// Authentication

// Registering User
export const registerUser = async (previousState, formData: any) => {
  const { username, email, password, confirmPassword, phone, address } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: "Passwords Do Not Match" };
  }

  // Checking User In Database And Creating New User In Database

  try {
    // connectToDB();

    // Checking if User Already Exists
    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return { error: "User Already Exists" };
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        phone: 'phone',
        address: 'address',
      },
    });

    console.log("User Saved To Database");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// Logging User
export const handleUserLogin = async (previousState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    // Assuming you have a Prisma model named "User"
    const user = await prisma.user.findUnique({
      where: { username },
    });

    console.log("username", username);
    console.log("password", password);
    console.log("user", user);

    if (!user) {
      return { error: "Invalid username or password" };
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid username or password" };
    }

    if (user) {
      // Sign in user
      try {
        await signIn("credentials", { username, password });
        console.log("User Logged In");
      } catch (error: any) {
        if (
          error.message.includes("https://errors.authjs.dev#credentialssignin")
        ) {
          return { error: "Invalid username or password" };
        }
        throw error;
      }
      redirect("/");
    }
    // You can proceed with further actions here
  } catch (error) {
    throw error;
  }
};

// Google Auth
export const handleGoogleLogin = async () => {
  await signIn("google");
};

// Github Auth
export const handleGithubLogin = async () => {
  await signIn("github");
};

// Logout
export const handleLogout = async () => {
  await signOut();
};


