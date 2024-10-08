import { NextRequest, NextResponse } from "next/server";
import { parseInventory } from "@/services/csvService";
import { downloadInventory } from "@/services/ftpService";

// Handler for fetching and returning inventory data
export async function GET(req: NextRequest) {
  try {
    // Download the inventory CSV file from the FTP server
    await downloadInventory();

    // Parse the CSV file to extract inventory data
    const inventoryData = await parseInventory();

    // Return the parsed inventory data as JSON
    return NextResponse.json(inventoryData);
  } catch (err: any) {
    console.error("Failed to load inventory:", err);
    return NextResponse.json(
      { error: "Failed to load inventory" },
      { status: 500 }
    );
  }
}
