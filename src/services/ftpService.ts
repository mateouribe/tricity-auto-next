import ftp from "basic-ftp";
import path from "path";
import { ftpConfig } from "@/config/ftpConfig";

export const downloadInventory = async (): Promise<void> => {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access(ftpConfig);
    const filePath = path.join(process.cwd(), "data/inventory.csv");
    await client.downloadTo(filePath, "/tricity_inventory.csv");
  } catch (error) {
    console.error("FTP download error:", error);
    throw error;
  } finally {
    client.close();
  }
};
