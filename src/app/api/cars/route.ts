// import { NextRequest, NextResponse } from "next/server";
import {Car} from '@/lib/models'; // replace with the path to your Car model
import { connectToDB } from '@/lib/utils'; // replace with the path to your utils file

async function insertCar(data: any) {
  try {
    await connectToDB();
    const newCar = await Car.create(data);
    console.log("newCar: ", newCar);
    return newCar;
  } catch (error) {
    console.error("Error inserting Car: ", error);
    throw error;
  }
}

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  try {
    const newCar = await insertCar(data);
    return res.json(), { status: 200 }; // Send a success response back to the client
  } catch (error) {
    console.error("Error inserting Car: ", error);
    return res.json(), { status: 500 };
  }
}
