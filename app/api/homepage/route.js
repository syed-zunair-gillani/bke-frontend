import { client } from '@/sanity/lib/client';
import { QHomePage } from '@/sanity/lib/query';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const homepage = await client.fetch(QHomePage);
        return new NextResponse(
            JSON.stringify({
                status: "success",
                data: homepage,
            }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
    
}
