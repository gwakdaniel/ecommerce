import { NextResponse } from "@/node_modules/next/server";
import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/prismadb";

export async function POST(  //api for creating a store 
    req: Request,
) {
    try {
        const authObject = await auth();
        
        const userId = authObject.userId;

        const body = await req.json();
        
        const { name } = body;

        //checks if relevant data is correct
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401});
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400});
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        });
        
        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORES_POST]', error);  // good practice to indicate where an error occurs during development
        return new NextResponse("Internal error", { status: 500});
    }
}