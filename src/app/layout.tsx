import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/global/navbar";
import Footer from "../components/global/footer";
import Alert from "@/components/global/alert";
import { InventoryProvider } from "../context/InventoryContext";

export const metadata: Metadata = {
  title: "Tricity Auto Finance - Waterloo, ON Used Car Dealership",
  description:
    "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
};

// if (typeof window === "undefined") {
//   inventoryCron();
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <InventoryProvider>
          <Alert />
          <Navbar />
          {children}
          <Footer />
        </InventoryProvider>
      </body>
    </html>
  );
}
