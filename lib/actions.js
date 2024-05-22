"use server";

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/auth";
import bcrypt from "bcryptjs";

export const sayHello = async () => {
  console.log("Hello!");
};

export const addPost = async (formData) => {
  // In Seprate DeStructuring
  // const title = formData.get('title');
  // const desc = formData.get('desc');
  // const slug = formData.get('slug')

  // In Single Line DeStucturing
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  console.log(title, desc, slug, userId);

  // Example of Inserting Posts to Database
  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Post Saved To Database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  console.log(id);

  // Deleting Post from Database
  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log("Post Deleted From Database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong While Deleting Post" };
  }
};

export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("User Saved To Database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User Deleted From Database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong!" };
  }
};

// Authentication

// Registering User
export const registerUser = async (previousState, formData) => {
  const { username, email, password, confirmPassword, img } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: "Passwords Do Not Match" };
  }

  // Checking User In Database And Creating New User In Database

  try {
    connectToDB();

    // Checking if User Already Exists
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User Already Exists" };
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      confirmPassword,
      img,
    });

    await newUser.save();
    console.log("User Saved To Database");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// Loging User
export const handleUserLogin = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("https://errors.authjs.dev#credentialssignin")) {
      return { error: "Invalid username or password" };
    }
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
