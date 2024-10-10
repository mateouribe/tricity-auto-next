// // src/app/api/ftp-data.ts
// import { Client } from "basic-ftp";
// import { parse } from "csv-parse/sync"; // using sync for simplicity
// import { NextResponse } from "next/server";
// import { Writable } from "stream";

// interface FTPConfig {
//   host: string;
//   user: string;
//   password: string;
//   secure: boolean;
// }

// interface ParsedData {
//   [key: string]: string;
// }

// // Custom Writable stream to capture the data into a string
// class StringWriter extends Writable {
//   private data: string = "";

//   _write(
//     chunk: Buffer,
//     encoding: string,
//     callback: (error?: Error | null) => void
//   ) {
//     this.data += chunk.toString();
//     callback();
//   }

//   getData() {
//     return this.data;
//   }
// }

// async function getCSVFromFTP(
//   ftpConfig: FTPConfig,
//   filePath: string
// ): Promise<string | null> {
//   const client = new Client();
//   client.ftp.verbose = true; // Enable verbose logging

//   const writer = new StringWriter(); // Writable stream to capture the CSV data

//   try {
//     console.log(`Connecting to FTP server at ${ftpConfig.host}...`);
//     await client.access(ftpConfig);
//     console.log(`Connected to FTP server.`);

//     console.log(`Downloading file: ${filePath}`);
//     await client.downloadTo(writer, filePath); // Download directly to the custom stream

//     const csvData = writer.getData();
//     return csvData;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     console.error("Error fetching the file from FTP:", err.message);
//     return null;
//   } finally {
//     client.close();
//   }
// }

// export async function GET() {
//   const ftpConfig: FTPConfig = {
//     host: "ftp.samacle.com",
//     user: "u982983725.dealerPull",
//     password: "dp_TricityAuto2024",
//     secure: false, // Set to true if you're using FTPS
//   };

//   const filePath = "/tricity_inventory.csv";

//   // Get CSV data from FTP
//   const csvData = await getCSVFromFTP(ftpConfig, filePath);

//   if (!csvData) {
//     return NextResponse.json(
//       { error: "Failed to retrieve CSV data" },
//       { status: 500 }
//     );
//   }

//   // Parse CSV
//   const records: ParsedData[] = parse(csvData, {
//     columns: true,
//     skip_empty_lines: true,
//   });

//   return NextResponse.json(records, { status: 200 });
// }

// src/app/api/ftp-data/route.ts
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
