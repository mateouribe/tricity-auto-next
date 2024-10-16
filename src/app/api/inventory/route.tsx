import { NextResponse } from "next/server";
import { parseInventory } from "@/services/csvService";

export async function GET() {
  try {
    const inventoryData = await parseInventory();
    return NextResponse.json(inventoryData, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load inventory" },
      { status: 500 }
    );
  }
}
