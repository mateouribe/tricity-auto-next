// src/services/ftpService.ts
import { Client } from "basic-ftp";
import { StringWriter } from "@/utils/stringWriter";
import ftpConfig from "@/config/ftpConfig";

export async function getCSVFromFTP(filePath: string): Promise<string | null> {
  const client = new Client();
  client.ftp.verbose = true; // Enable verbose logging

  const writer = new StringWriter(); // Writable stream to capture the CSV data

  try {
    console.log(`Connecting to FTP server at ${ftpConfig.host}...`);
    await client.access(ftpConfig);
    console.log(`Connected to FTP server.`);

    console.log(`Downloading file: ${filePath}`);
    await client.downloadTo(writer, filePath); // Download directly to the custom stream

    const csvData = writer.getData();
    return csvData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Error fetching the file from FTP:", err.message);
    return null;
  } finally {
    client.close();
  }
}
