import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout Successful",
            success: true,
        });
        
        // Remove the token by setting its maxAge to 0 and not setting its value
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Use secure flag in production
            sameSite: "strict", // Ensure CSRF protection
            maxAge: 0, // Set maxAge to 0 to expire the cookie immediately
            path: "/", // Cookie available throughout the site
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
