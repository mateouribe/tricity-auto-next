/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import csvParser from "csv-parser";

export function parseInventory(): Promise<any[]> {
  const results: any[] = [];
  const filePath = path.join(process.cwd(), "public/data/inventory.csv");

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}
