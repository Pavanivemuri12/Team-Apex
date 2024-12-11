
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: void): Promise<NextResponse> {
    console.log("This is context", context);
    return NextResponse.json({ message: "Request received" });
}
