import dbConnection from "../../../utils/config/db"
import MobileModel from "@/app/utils/models/mobile";

import { NextResponse } from "next/server";


export async function GET(): Promise<NextResponse>{
    const mobileData = await MobileModel.find({})
    return NextResponse.json({mobileData})
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        // Connect to the database
        await dbConnection();

        // Parse request body
        const { title, devicemodel, price }: { title: string; devicemodel: string; price: string } = await request.json();

        // Insert mobile data into the database
        await MobileModel.create({
            title,
            devicemodel, // Assuming "modelName" matches the schema
            price,
        });

        return NextResponse.json({ success: "Mobile added successfully" });
    } catch (error) {
        console.error("Error inserting mobile:", error);
        return NextResponse.json({ error: "Failed to add mobile" }, { status: 500 });
    }
}

export async function PUT(request:Request):Promise<NextResponse>{
    try {
      
        await dbConnection();
        const url = new URL(request.url); // Create a URL object from the request's URL
        const mobileId = url.searchParams.get("id");
        if (!mobileId) {
            return NextResponse.json({ error: "Mobile ID is required" }, { status: 400 });
        }
        const { newTitle: title, newModel: devicemodel, newPrice: price }: { newTitle: string; newModel: string; newPrice: string } = await request.json();

        const updatedMobile = await MobileModel.findByIdAndUpdate(
            mobileId,
            { title, devicemodel, price },
            { new: true }
        );

        if (!updatedMobile) {
            return NextResponse.json({ error: "Mobile not found" }, { status: 404 });
        }

        return NextResponse.json({ success: "Mobile updated successfully", data: updatedMobile });
    } catch (error) {
        console.error("Error updating mobile:", error);
        return NextResponse.json({ error: "Failed to update mobile" }, { status: 500 });
    }}