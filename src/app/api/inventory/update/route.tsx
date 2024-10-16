import { NextResponse } from "next/server";
import { downloadInventory } from "@/services/ftpService";

export async function POST() {
  try {
    await downloadInventory();
    return NextResponse.json(
      { message: "Inventory successfully updated." },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update inventory" },
      { status: 500 }
    );
  }
}
