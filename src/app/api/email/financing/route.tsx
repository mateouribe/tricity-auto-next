import { NextRequest, NextResponse } from "next/server";
import { emailService } from "@/services/emailService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      middleName,
      lastName,
      email,
      dob,
      cellPhone,
      workPhone,
      sin,
      maritalStatus,
      address,
      address2,
      city,
      province,
      postalCode,
      mortgageRent,
      employer,
      occupation,
      businessPhone,
      timeAtEmployer,
      grossIncome,
      comments,
    } = body;

    // Call email service to send financing email
    await emailService.sendFinancingEmail({
      firstName,
      middleName,
      lastName,
      email,
      dob,
      cellPhone,
      workPhone,
      sin,
      maritalStatus,
      address,
      address2,
      city,
      province,
      postalCode,
      mortgageRent,
      employer,
      occupation,
      businessPhone,
      timeAtEmployer,
      grossIncome,
      comments,
    });

    // Send success response
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending financing email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { message: "Error sending financing email", error: errorMessage },
      { status: 500 }
    );
  }
}
