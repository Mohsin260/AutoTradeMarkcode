import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
    console.log('Database connection state:', connection.isConnected === 1 ? 'Connected' : 'Not connected');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
