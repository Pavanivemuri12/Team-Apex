import DBConnection from "../../utils/config/db";
import { NextResponse } from "next/server";

const ConnectDB = async():Promise<void>=>{
    await DBConnection()
}
ConnectDB()

export async function GET(): Promise<NextResponse> {
    return NextResponse.json({student:"all student data"})
    
}