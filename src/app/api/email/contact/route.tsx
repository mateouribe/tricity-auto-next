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
  } catch (error) {
    console.error("Error sending contact email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { message: "Error sending contact email", error: errorMessage },
      { status: 500 }
    );
  }
}
