// src/app/api/sendContactEmail/route.ts

import { NextRequest, NextResponse } from "next/server";
import { emailService } from "@/services/emailService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phoneNumber, email, message } = body;

    // Call email service to send contact email
    await emailService.sendContactEmail({
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    });

    // Send success response
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending contact email:", error);

    return NextResponse.json(
      { message: "Error sending contact email", error: error.message },
      { status: 500 }
    );
  }
}
