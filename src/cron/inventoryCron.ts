// cron/scheduler.js
const cron = require("node-cron");
const { getCSVFromFTP } = require("@/services/ftpService");
const { parse } = require("csv-parse/sync");

async function fetchCSVAndProcess() {
  const filePath = "/tricity_inventory.csv";

  // Get CSV data from FTP
  const csvData = await getCSVFromFTP(filePath);

  if (!csvData) {
    console.error("Failed to retrieve CSV data");
    return;
  }

  // Parse CSV
  const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true,
  });

  console.log("Fetched and processed CSV data:", records);

  // Here you can save the records to a database or log the output
}

// Schedule the task to run every day at 3 AM
cron.schedule("0 3 * * *", () => {
  console.log("Running Cron Job to fetch CSV at 3 AM");
  fetchCSVAndProcess();
});
