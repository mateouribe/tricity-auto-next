import { NextResponse } from "next/server";
import { parse } from "csv-parse/sync";
import { getCSVFromFTP } from "@/services/ftpService";

export async function GET() {
  const filePath = "/tricity_inventory.csv";

  // Get CSV data from FTP
  const csvData = await getCSVFromFTP(filePath);

  if (!csvData) {
    return NextResponse.json(
      { error: "Failed to retrieve CSV data" },
      { status: 500 }
    );
  }

  // Parse CSV
  const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true,
  });

  return NextResponse.json(records, { status: 200 });
}
