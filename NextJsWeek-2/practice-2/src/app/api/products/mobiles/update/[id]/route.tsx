
import MobileModel from '@/app/utils/models/mobile';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: {params: { id: string}}): Promise<NextResponse> {
    const { id } = context.params; 
    console.log("This is context", context);

try{
    const productsRecord = await MobileModel.findById(id)
    if (!productsRecord) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ productsRecord });
}
catch(error){
    console.error("Error fetching product record:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
}
}
