import cron from "node-cron";
import { downloadInventory } from "../services/ftpService";

// Schedule a cron job to run at 3 AM every day
export const inventoryCron = () => {
  cron.schedule("0 3 * * *", async () => {
    console.log("Running cron job at 3 AM: Downloading CSV file...");
    try {
      await downloadInventory();
      console.log("CSV file successfully downloaded by cron job");
    } catch (err) {
      console.error("Cron job error:", err);
    }
  });
};
