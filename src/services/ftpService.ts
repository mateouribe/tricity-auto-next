import { Client } from "basic-ftp";
import path from "path";
import ftpConfig from "@/config/ftpConfig";

export async function downloadInventory(): Promise<void> {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    console.log(`Connecting to FTP server at ${ftpConfig.host}...`);
    await client.access(ftpConfig);

    console.log("Connected to FTP server.");

    const filePath = path.join(process.cwd(), "public/data/inventory.csv");

    console.log(`Downloading file to: ${filePath}`);
    await client.downloadTo(filePath, "/tricity_inventory.csv");

    console.log("Downloaded inventory.csv successfully.");
  } catch (error) {
    console.error("Error downloading inventory:", error);
  } finally {
    client.close();
  }
}
