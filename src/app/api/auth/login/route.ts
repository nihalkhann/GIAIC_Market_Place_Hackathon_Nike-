import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { username, password } = body;

    // // Replace these with environment variables in production
    // const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    // const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "adminn";

    console.log("Env variables:", { ADMIN_USERNAME, ADMIN_PASSWORD });

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true, message: "Login successful" });
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 },
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
