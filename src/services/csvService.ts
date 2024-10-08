import csvParser from "csv-parser";
import fs from "fs";
import path from "path";

export interface InventoryItem {
  DEALERSHIPID: string | null;
  VIN: string | null;
  STOCKNUMBER: string | null;
  YEAR: number | null;
  MAKE: string | null;
  MODEL: string | null;
  TRIM: string | null;
  INVENTORYTYPE: string | null;
  DRIVETYPE: string | null;
  TRANSMISSIONTYPE: string | null;
  ODOMETER: number | null;
  EXTCOLOUR: string | null;
  INTCOLOUR: string | null;
  LISTPRICE: number | null;
  DESCRIPTION: string | null;
  OPTIONS: string | null;
  PHOTOS: string[] | null;
}

export const parseInventory = (): Promise<InventoryItem[]> => {
  const results: InventoryItem[] = [];
  const filePath = path.join(process.cwd(), "data/inventory.csv");

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (data: InventoryItem) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (err: unknown) => reject(err));
  });
};
